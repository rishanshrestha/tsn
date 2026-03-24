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
        className="rounded-lg border border-ai-tech/30 bg-ai-tech/5 p-8 sm:p-12 text-center"
      >
        <CheckCircle2 className="mx-auto h-14 w-14 text-ai-tech mb-6" />
        <h3 className="font-ai-title text-2xl text-white font-semibold mb-4">Registration Received</h3>
        <p className="font-ai-body text-[14px] text-ai-grey-400 max-w-md mx-auto mb-4">
          Thank you for registering! Check your email for your ticket confirmation.
          {ticketId && (
            <span className="block mt-2 font-mono text-ai-tech">Ticket ID: {ticketId}</span>
          )}
        </p>
        <p className="font-ai-body text-[12px] text-ai-grey-500 mb-8">
          Professional confirmation will be sent shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="border-ai-white/30 text-ai-white hover:bg-ai-white/10 font-ai-title uppercase tracking-widest text-[10px]"
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
        <h2 className="font-ai-title text-3xl sm:text-4xl text-ai-white font-bold">Reserve Your Seat</h2>
        <p className="font-ai-body text-ai-grey-400 max-w-xl mt-2">
          Clear, informative registration for Nepal&apos;s premier AI event.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Full Name *
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              placeholder="Your full name"
              className={cn(
                "bg-ai-white/5 border-ai-white/10 text-ai-white placeholder:text-ai-white/40 h-12 font-ai-body",
                errors.fullName && "border-red-500"
              )}
            />
            {errors.fullName && (
              <p className="font-ai-body text-[12px] text-red-400">{errors.fullName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="you@gmail.com"
              className={cn(
                "bg-ai-white/5 border-ai-white/10 text-ai-white placeholder:text-ai-white/40 h-12 font-ai-body",
                errors.email && "border-red-500"
              )}
            />
            {errors.email && (
              <p className="font-ai-body text-[12px] text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="+977 98XXXXXXXX"
              className={cn(
                "bg-ai-white/5 border-ai-white/10 text-ai-white placeholder:text-ai-white/40 h-12 font-ai-body",
                errors.phone && "border-red-500"
              )}
            />
            {errors.phone && (
              <p className="font-ai-body text-[12px] text-red-400">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Ticket Category *
            </Label>
            <Select
              value={category}
              onValueChange={(v) => setValue("category", v as FormData["category"])}
            >
              <SelectTrigger
                className={cn(
                  "bg-ai-white/5 border-ai-white/10 text-ai-white h-12 w-full font-ai-body",
                  errors.category && "border-red-500"
                )}
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-black border-ai-white/10">
                {TICKET_CATEGORIES.map((tier) => (
                  <SelectItem
                    key={tier.value}
                    value={tier.value}
                    className="text-ai-white focus:bg-ai-tech/20 focus:text-ai-white font-ai-body"
                  >
                    {tier.label} — {tier.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="font-ai-body text-[12px] text-red-400">{errors.category.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="organization" className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Organization (optional)
            </Label>
            <Input
              id="organization"
              {...register("organization")}
              placeholder="Company / Institution"
              className="bg-ai-white/5 border-ai-white/10 text-ai-white placeholder:text-ai-white/40 h-12 font-ai-body"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="designation" className="text-ai-white/80 font-ai-title text-[10px] tracking-[3px] uppercase">
              Designation (optional)
            </Label>
            <Input
              id="designation"
              {...register("designation")}
              placeholder="Your role / title"
              className="bg-ai-white/5 border-ai-white/10 text-ai-white placeholder:text-ai-white/40 h-12 font-ai-body"
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
