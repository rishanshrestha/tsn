"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="community" className="min-h-screen flex flex-col lg:flex-row border-t border-rule-inv overflow-hidden">
      {/* Left (Black) */}
      <div className="flex-1 bg-void section-py flex flex-col justify-center relative">
        <div className="content-max w-full">
          <AnimatedSection className="max-w-xl space-y-12">
            <span className="font-label text-electric text-[11px] tracking-[6px] uppercase">— Get Involved</span>
            <h2 className="section-h2 text-white">Join the Movement.</h2>
            <p className="body-text text-white/55">
              Whether you&apos;re building the next unicorn, investing in Nepal&apos;s future,
              or want to mentor the next generation of founders, there&apos;s a place
              for you at TSN. Let&apos;s build something world-class together.
            </p>
            <div className="pt-8">
              <MagneticButton>
                <Link href="/cohort" className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-12 py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl group inline-block">
                  Apply to Cohort 5
                  <span className="ml-4 inline-block translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Right (Cream) */}
      <div className="flex-1 bg-surface2 section-py flex flex-col justify-center relative">
        <div className="content-max w-full space-y-16">
          {/* Newsletter */}
          <AnimatedSection delay={0.1} className="space-y-8">
            <h3 className="section-h3 not-italic font-semibold text-void">Stay Updated.</h3>
            <form onSubmit={handleSubmit} className="relative border-b border-rule/50 py-4 group focus-within:border-electric transition-colors">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent font-label text-[14px] tracking-[3px] text-void placeholder:text-lead/30 focus:outline-none uppercase"
                required
              />
              <button type="submit" className="absolute right-0 bottom-4 font-label text-[11px] tracking-[4px] uppercase text-electric hover:translate-x-2 transition-transform">
                Submit
              </button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-body text-[12px] text-electric font-medium"
              >
                ✓ Thank you! You&apos;ve been subscribed.
              </motion.p>
            )}
            <p className="font-body text-[11px] text-lead/60 max-w-sm">
              Get bi-weekly insights, event invites, and ecosystem news delivered
              directly to your inbox. No spam, just value.
            </p>
          </AnimatedSection>

          {/* Secondary CTAs */}
          <AnimatedSection delay={0.2} className="pt-12 border-t border-rule/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Link href="/events/ai-summit-2026" className="space-y-4 group cursor-pointer block">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-lead/60 group-hover:text-electric transition-colors">Attend</span>
                <div className="relative h-10 w-28 group-hover:translate-x-2 transition-transform duration-500">
                  <Image
                    src="/events/ai-summit-2026/images/ai-summit-logo-transparent.png"
                    alt="AI Summit 2026"
                    fill
                    sizes="112px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <a href="https://www.thestartupnetworknepal.com/get-involved" target="_blank" rel="noopener noreferrer" className="space-y-4 group cursor-pointer block">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-lead/60 group-hover:text-electric transition-colors">Collaborate</span>
                <h4 className="font-display text-xl font-semibold text-void group-hover:translate-x-2 transition-transform duration-500">Become a Mentor →</h4>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
