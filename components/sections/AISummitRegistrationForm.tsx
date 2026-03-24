"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2 } from "lucide-react";

const TICKET_CATEGORIES = [
  { value: "student", label: "Student Pass", price: "NPR 2,500", desc: "Valid student ID required" },
  { value: "general", label: "General Pass", price: "NPR 5,000", desc: "Full access" },
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
  category: z.enum(["student", "general"]),
  organization: z.string().optional(),
  designation: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function AISummitRegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      category: "student",
      organization: "",
      designation: "",
      message: "",
    },
  });

  const category = watch("category");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/ai-summit-2026/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setTicketId(json.id || null);
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Connection error. Please try again or contact us directly.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-electric/30 bg-electric/5 p-8 sm:p-12 text-center"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-electric mb-6" />
        <h3 className="section-h3 text-white not-italic font-semibold mb-4">Registration Received</h3>
        <p className="font-body text-[14px] text-white/70 max-w-md mx-auto mb-4">
          Thank you for registering! Check your email for your ticket confirmation.
          {ticketId && (
            <span className="block mt-2 font-mono text-electric">Ticket ID: {ticketId}</span>
          )}
        </p>
        <p className="font-body text-[12px] text-white/50 mb-8">
          We will contact you for payment confirmation.
        </p>
        <Button
          type="button"
          variant="outline"
          className="border-white/30 text-white hover:bg-white/10"
          onClick={() => { setStatus("idle"); setTicketId(null); }}
        >
          Register Another
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatedSection className="space-y-8">
      <div>
        <h2 className="section-h2 text-white">Reserve Your Seat</h2>
        <p className="body-text text-white/55 max-w-xl mt-1">
          Student (NPR 2,500) or General (NPR 5,000). Ticket confirmation will be sent to your email.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Full Name *
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Your full name"
              className={cn(
                "bg-white/5 border-rule-inv text-white placeholder:text-white/40 h-12",
                errors.fullName && "border-red-500"
              )}
            />
            {errors.fullName && (
              <p className="font-body text-[12px] text-red-400">{errors.fullName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="you@gmail.com"
              className={cn(
                "bg-white/5 border-rule-inv text-white placeholder:text-white/40 h-12",
                errors.email && "border-red-500"
              )}
            />
            {errors.email && (
              <p className="font-body text-[12px] text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+977 98XXXXXXXX"
              className={cn(
                "bg-white/5 border-rule-inv text-white placeholder:text-white/40 h-12",
                errors.phone && "border-red-500"
              )}
            />
            {errors.phone && (
              <p className="font-body text-[12px] text-red-400">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Ticket Category *
            </Label>
            <Select
              value={category}
              onValueChange={(v) => setValue("category", v as FormData["category"])}
            >
              <SelectTrigger
                className={cn(
                  "bg-white/5 border-rule-inv text-white h-12 w-full",
                  errors.category && "border-red-500"
                )}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-void border-rule-inv">
                {TICKET_CATEGORIES.map((tier) => (
                  <SelectItem
                    key={tier.value}
                    value={tier.value}
                    className="text-white focus:bg-electric/20 focus:text-white"
                  >
                    {tier.label} — {tier.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="font-body text-[12px] text-red-400">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Organization (optional)
            </Label>
            <Input
              id="organization"
              {...register("organization")}
              placeholder="Company / Institution"
              className="bg-white/5 border-rule-inv text-white placeholder:text-white/40 h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
              Designation (optional)
            </Label>
            <Input
              id="designation"
              {...register("designation")}
              placeholder="Your role / title"
              className="bg-white/5 border-rule-inv text-white placeholder:text-white/40 h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white/80 font-label text-[10px] tracking-[3px] uppercase">
            Message (optional)
          </Label>
          <textarea
            id="message"
            {...register("message")}
            placeholder="Any questions or special requirements?"
            rows={3}
            className="w-full rounded-md border bg-white/5 border-rule-inv text-white placeholder:text-white/40 px-3 py-2 font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-electric"
          />
        </div>

        {errorMessage && (
          <p className="font-body text-[13px] text-red-400">{errorMessage}</p>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto bg-surface text-void font-body text-[11px] tracking-[3px] uppercase h-14 px-12 hover:bg-electric hover:text-white transition-colors"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Reserve Seat"
          )}
        </Button>
      </form>
    </AnimatedSection>
  );
}
