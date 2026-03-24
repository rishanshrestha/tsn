import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const DATA_DIR = path.join(process.cwd(), "data");
const FALLBACK_FILE = path.join(DATA_DIR, "ai-summit-2026-registrations.json");

export const TICKET_CATEGORIES = ["student", "general"] as const;

export type RegistrationPayload = {
  fullName: string;
  email: string;
  phone: string;
  category: (typeof TICKET_CATEGORIES)[number];
  organization?: string;
  designation?: string;
  message?: string;
};

function generateTicketId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "AI26-";
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function validatePayload(body: unknown): body is RegistrationPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.fullName === "string" &&
    b.fullName.trim().length >= 2 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.phone === "string" &&
    b.phone.trim().length >= 7 &&
    typeof b.category === "string" &&
    TICKET_CATEGORIES.includes(b.category as (typeof TICKET_CATEGORIES)[number]) &&
    (b.organization === undefined || typeof b.organization === "string") &&
    (b.designation === undefined || typeof b.designation === "string") &&
    (b.message === undefined || typeof b.message === "string")
  );
}

async function sendConfirmationEmail(
  to: string,
  fullName: string,
  ticketId: string,
  category: string,
  date: string
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL || "AI Summit <onboarding@resend.dev>";

  const categoryLabel = category === "student" ? "Student (NPR 2,500)" : "General (NPR 5,000)";

  const { error } = await resend.emails.send({
    from,
    to,
    subject: `AI Summit Nepal 2026 – Your Ticket Confirmation (${ticketId})`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0047E1;">AI Summit Nepal 2026</h1>
        <p>Dear ${fullName},</p>
        <p>Thank you for registering for <strong>AI Summit Nepal 2026</strong>!</p>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 0 0 8px 0;"><strong>Ticket ID:</strong> ${ticketId}</p>
          <p style="margin: 0 0 8px 0;"><strong>Category:</strong> ${categoryLabel}</p>
          <p style="margin: 0 0 8px 0;"><strong>Date:</strong> April 5, 2026</p>
          <p style="margin: 0;"><strong>Venue:</strong> Plaza Hotel, Lalitpur</p>
        </div>
        <p>We will contact you shortly for payment confirmation. Please keep this email as your registration reference.</p>
        <p>See you at the summit!</p>
        <p style="color: #666; font-size: 12px; margin-top: 32px;">The Startup Network Nepal</p>
      </div>
    `,
  });

  if (error) {
    console.error("[ai-summit-2026] email error:", error);
    return false;
  }
  return true;
}

async function notifyWhatsApp(payload: {
  fullName: string;
  email: string;
  phone: string;
  category: string;
  ticketId: string;
}) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "ai_summit_2026_registration",
        ticketId: payload.ticketId,
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        category: payload.category,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("[ai-summit-2026] whatsapp webhook error:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        { error: "Invalid submission. Please provide valid name, email, phone, and ticket category." },
        { status: 400 }
      );
    }

    const ticketId = generateTicketId();
    const record = {
      ticket_id: ticketId,
      full_name: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      category: body.category,
      organization: body.organization?.trim() || null,
      designation: body.designation?.trim() || null,
      message: body.message?.trim() || null,
    };

    if (supabase) {
      const { error } = await supabase.from("ai_summit_2026_registrations").insert(record);
      if (error) {
        console.error("[ai-summit-2026] supabase error:", error);
        return NextResponse.json(
          { error: "Registration could not be saved. Please try again." },
          { status: 500 }
        );
      }
    } else {
      try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        let existing: unknown[] = [];
        try {
          const data = await fs.readFile(FALLBACK_FILE, "utf-8");
          existing = JSON.parse(data);
        } catch {
          /* ignore */
        }
        existing.push({ ...record, createdAt: new Date().toISOString() });
        await fs.writeFile(FALLBACK_FILE, JSON.stringify(existing, null, 2), "utf-8");
      } catch (err) {
        console.error("[ai-summit-2026] fallback save error:", err);
        return NextResponse.json(
          { error: "Registration service is not configured. Please contact us directly." },
          { status: 503 }
        );
      }
    }

    if (process.env.RESEND_API_KEY) {
      await sendConfirmationEmail(
        body.email,
        body.fullName,
        ticketId,
        body.category,
        "April 5, 2026"
      );
    }

    await notifyWhatsApp({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      category: body.category,
      ticketId,
    });

    return NextResponse.json({
      success: true,
      message: "Registration received. Check your email for ticket confirmation.",
      id: ticketId,
    });
  } catch (err) {
    console.error("[ai-summit-2026] registration error:", err);
    return NextResponse.json(
      { error: "Registration could not be saved. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
