"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SPEAKERS = [
  { name: "AI Industry Leaders", role: "Keynote Speakers", id: "AI" },
  { name: "Deepak Rauniar", role: "CEO, Ryan Electric", id: "DR" },
  { name: "Varun Sridhar", role: "Former CEO, PayTM Services", id: "VS" },
  { name: "Anukool Bhatnagar", role: "Managing Partner, Sustain Edge LLC", id: "AB" },
];

const SCHEDULE = [
  { day: "Day 1", title: "AI & Innovation", subtitle: "Keynotes & Panels", items: ["Opening Keynote", "AI in Nepal", "Panel: Future of Tech", "Networking"] },
  { day: "Day 2", title: "Hands-On Workshops", subtitle: "Practical Sessions", items: ["AI Tools Workshop", "Startup Pitches", "Investor Meetups", "Awards"] },
];

const TICKET_TIERS = [
  { name: "Early Bird Pass", price: "NPR 2,500", desc: "Full 2-day access", highlight: true },
  { name: "Standard Pass", price: "NPR 3,500", desc: "Full 2-day access" },
  { name: "VIP Pass", price: "Contact", desc: "Premium seating + networking dinner" },
];

export default function AISummit2026Page() {
  return (
    <LenisProvider>
      <main className="bg-void min-h-screen">
        <Navbar />

        {/* Hero Banner */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 border-b border-rule-inv relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="font-label text-[14vw] sm:text-[12vw] text-white/[0.03] uppercase leading-none select-none">
              2026
            </span>
          </div>
          <div className="content-max relative z-10">
            <AnimatedSection className="space-y-6 sm:space-y-8">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 px-3 py-1 border border-rule-inv rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_rgba(0,71,225,1)]" />
                  <span className="font-label text-[10px] tracking-[3px] uppercase text-white/60">Upcoming</span>
                </div>
                <div className="bg-electric/15 border border-electric/35 px-3 sm:px-4 py-1">
                  <span className="font-label text-[9px] sm:text-[10px] tracking-[3px] uppercase text-electric">Registration Open</span>
                </div>
              </div>
              <h1 className="hero-title text-white">
                AI Summit <br /> <span className="italic font-normal">2026</span>
              </h1>
              <h2 className="section-h3 text-electric font-medium">Kathmandu · Nepal</h2>
              <p className="body-text text-white/55 max-w-2xl">
                Join Nepal&apos;s premier AI and innovation summit. Connect with industry leaders,
                explore cutting-edge AI applications, and be part of the future of tech in South Asia.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <MagneticButton>
                  <a href="#ticketing" className="bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-electric hover:text-white transition-all duration-500 inline-block">
                    Get Tickets →
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/join" className="border border-white/20 text-white font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-white hover:text-void transition-all duration-500 inline-block">
                    Join as Partner →
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-surface2 section-py border-b border-rule/20">
          <div className="content-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16">
              {[
                { label: "Date", value: "Coming Soon" },
                { label: "Venue", value: "Kathmandu" },
                { label: "Format", value: "Summit + Workshops" },
                { label: "Expected", value: "500+ Attendees" },
              ].map((detail, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="space-y-2">
                  <span className="font-label text-[9px] tracking-[3px] uppercase text-lead/60">{detail.label}</span>
                  <p className="font-body text-[14px] sm:text-[16px] font-medium text-void">{detail.value}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ticketing Section */}
        <section id="ticketing" className="bg-void section-py border-b border-rule-inv">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <h2 className="section-h2 text-white">Get Your Tickets.</h2>
              <p className="body-text text-white/55 max-w-xl mt-4">
                Secure your spot at AI Summit 2026. Early bird pricing available for a limited time.
              </p>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {TICKET_TIERS.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`p-6 sm:p-8 md:p-10 border ${tier.highlight ? "border-electric bg-electric/5" : "border-rule-inv"} space-y-6`}
                >
                  {tier.highlight && (
                    <span className="font-label text-[9px] tracking-[3px] uppercase text-electric">Early Bird</span>
                  )}
                  <div className="space-y-2">
                    <h3 className="section-h3 text-white not-italic font-semibold">{tier.name}</h3>
                    <p className="font-label text-2xl sm:text-3xl text-electric">{tier.price}</p>
                    <p className="font-body text-[13px] text-white/50">{tier.desc}</p>
                  </div>
                  <MagneticButton>
                    <a
                      href="mailto:events@thestartupnetworknepal.com?subject=AI%20Summit%202026%20Ticket%20Inquiry"
                      className="w-full block text-center bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase py-4 sm:py-5 hover:bg-electric hover:text-white transition-all duration-500"
                    >
                      {tier.price === "Contact" ? "Inquire" : "Reserve Seat"}
                    </a>
                  </MagneticButton>
                </motion.div>
              ))}
            </motion.div>
            <AnimatedSection className="mt-12 text-center">
              <p className="font-body text-[13px] text-white/40 mb-6">
                Group rates available for 5+ attendees. Contact us for corporate packages.
              </p>
              <a
                href="mailto:events@thestartupnetworknepal.com?subject=AI%20Summit%202026%20Registration"
                className="font-label text-[11px] tracking-[4px] uppercase text-electric hover:text-white transition-colors inline-block"
              >
                Contact for Registration →
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-surface section-py border-b border-rule/20">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <h2 className="section-h2 text-void">Schedule.</h2>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-rule/20"
            >
              {SCHEDULE.map((day, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-rule/20 space-y-6 sm:space-y-8"
                >
                  <div className="space-y-2">
                    <span className="font-label text-electric text-[11px] tracking-[4px] uppercase">{day.day}</span>
                    <h3 className="section-h3 text-void not-italic font-semibold">{day.title}</h3>
                    <span className="font-body text-[13px] text-lead">{day.subtitle}</span>
                  </div>
                  <ul className="space-y-3">
                    {day.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-electric flex-shrink-0" />
                        <span className="font-body text-[13px] text-lead">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Speakers */}
        <section className="bg-surface2 section-py border-b border-rule/20">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <h2 className="section-h2 text-void">Featured Speakers.</h2>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 lg:grid-cols-4 border-l border-rule/20"
            >
              {SPEAKERS.map((speaker, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="group border-r border-b border-rule/20 p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 hover:bg-void transition-colors duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface flex items-center justify-center group-hover:bg-electric transition-colors">
                    <span className="font-label text-base sm:text-lg tracking-[3px] text-void group-hover:text-white pt-0.5">{speaker.id}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-base sm:text-lg font-semibold text-void group-hover:text-white transition-colors">{speaker.name}</h4>
                    <p className="font-body text-[10px] sm:text-[11px] tracking-[1px] uppercase text-lead group-hover:text-white/40 transition-colors">{speaker.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-void section-py">
          <div className="content-max text-center space-y-6 sm:space-y-8">
            <AnimatedSection>
              <h2 className="section-h2 text-white">Don&apos;t Miss Out.</h2>
              <p className="body-text text-white/55 max-w-lg mx-auto mt-4">
                Join Nepal&apos;s premier AI summit. Reserve your seat today.
              </p>
              <div className="pt-6 sm:pt-8">
                <MagneticButton>
                  <a href="#ticketing" className="bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-10 sm:px-12 py-5 sm:py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl inline-block">
                    Get Your Tickets →
                  </a>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
