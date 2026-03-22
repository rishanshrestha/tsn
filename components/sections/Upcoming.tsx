"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Upcoming() {
  return (
    <section id="upcoming" className="bg-void min-h-screen relative flex items-center overflow-hidden border-t border-rule-inv">
      {/* Ghost Text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <span className="font-label text-[14vw] sm:text-[12vw] lg:text-[16vw] text-white/5 uppercase leading-none select-none">
          AI SUMMIT 2026
        </span>
      </div>

      <div className="content-max relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-rule-inv">
          {/* Left Column */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-rule-inv flex flex-col justify-between space-y-12 sm:space-y-16 lg:space-y-24">
            <div className="space-y-8 sm:space-y-12">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 px-3 py-1 border border-rule-inv rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_rgba(0,71,225,1)]" />
                  <span className="font-label text-[10px] tracking-[3px] uppercase text-white/60">Next Event</span>
                </div>
                <div className="bg-electric/15 border border-electric/35 px-3 sm:px-4 py-1">
                  <span className="font-label text-[9px] sm:text-[10px] tracking-[3px] uppercase text-electric">Registration Open</span>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h2 className="section-h2 text-white leading-tight">
                  AI Summit <br /> <span className="italic font-normal">2026</span>
                </h2>
                <h3 className="section-h3 text-electric font-medium">
                  Kathmandu · Nepal
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 border-t border-rule-inv pt-8 sm:pt-12">
              <div className="space-y-2">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Date</span>
                <p className="font-body text-[13px] sm:text-[14px] text-white/60">Coming Soon</p>
              </div>
              <div className="space-y-2">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Venue</span>
                <p className="font-body text-[13px] sm:text-[14px] text-white/60">Kathmandu</p>
              </div>
              <div className="space-y-2">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Format</span>
                <p className="font-body text-[13px] sm:text-[14px] text-white/60">Summit + Workshops + Pitches</p>
              </div>
              <div className="space-y-2">
                <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Expected</span>
                <p className="font-body text-[13px] sm:text-[14px] text-white/60">500+ Attendees</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <CountdownTimer targetDate="2026-06-01T09:00:00" />

            <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20 bg-void/40 backdrop-blur-sm flex flex-col justify-center space-y-8 sm:space-y-12 border-l border-rule-inv">
              <div className="space-y-2">
                <span className="font-label text-[40px] sm:text-[48px] lg:text-[54px] text-white leading-none">NPR 2,500</span>
                <p className="font-body text-[13px] sm:text-[14px] text-white/40 tracking-wider">Early Bird 2-Day General Pass</p>
              </div>

              <MagneticButton className="w-full">
                <Link href="/events/ai-summit-2026#ticketing" className="w-full bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase py-5 sm:py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl group block text-center">
                  Get Tickets
                  <span className="ml-2 inline-block translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </MagneticButton>

              <div className="flex flex-wrap gap-8 sm:gap-12 pt-6 sm:pt-8 border-t border-rule-inv">
                <div className="space-y-1">
                  <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Corporate</span>
                  <p className="font-body text-[11px] text-white/40">VIP & Investor passes</p>
                </div>
                <div className="space-y-1">
                  <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">Groups</span>
                  <p className="font-body text-[11px] text-white/40">Group rates 5+ available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
