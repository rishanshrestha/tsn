"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AISummitRegistrationForm } from "@/components/sections/AISummitRegistrationForm";
import { AISummitLogo } from "@/components/AISummitLogo";
import { EVENT_DATE, VENUE, EXPECTED_ATTENDEES, TICKET_TIERS, ITINERARY } from "@/lib/ai-summit-2026";

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
            <div className="flex flex-col gap-8">
              <AnimatedSection className="flex-1 space-y-6 sm:space-y-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 border border-rule-inv rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_rgba(0,71,225,1)]" />
                    <span className="font-label text-[10px] tracking-[3px] uppercase text-white/60">{EVENT_DATE}</span>
                  </div>
                  <div className="bg-electric/15 border border-electric/35 px-3 sm:px-4 py-1">
                    <span className="font-label text-[9px] sm:text-[10px] tracking-[3px] uppercase text-electric">Registration Open</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                  <AISummitLogo size="hero" className="drop-shadow-[0_0_30px_rgba(0,71,225,0.2)]" />
                </div>
                <h2 className="section-h3 text-electric font-medium">Plaza Hotel, Lalitpur · Nepal</h2>
                <p className="body-text text-white/55 max-w-2xl">
                  Nepal&apos;s premier AI summit. Keynote sessions and panel discussions with industry leaders.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                  <MagneticButton>
                    <a href="#ticketing" className="bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-electric hover:text-white transition-colors duration-500 inline-block">
                      Reserve Seat →
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link href="https://ai-summit-2026.domain.com/join" className="border border-white/20 text-white font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-white hover:text-void transition-all duration-500 inline-block">
                      Join as Partner →
                    </Link>
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-surface2 section-py border-b border-rule/20">
          <div className="content-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16">
              {[
                { label: "Date", value: EVENT_DATE },
                { label: "Venue", value: VENUE },
                { label: "Format", value: "Keynotes & Panel Discussions" },
                { label: "Expected", value: `${EXPECTED_ATTENDEES} Attendees` },
              ].map((detail, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="space-y-2">
                  <span className="font-label text-[9px] tracking-[3px] uppercase text-lead/60">{detail.label}</span>
                  <p className="font-body text-[14px] sm:text-[16px] font-medium text-void">{detail.value}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="ticketing" className="bg-void section-py border-b border-rule-inv">
          <div className="content-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-1">
                <AnimatedSection className="space-y-6 lg:sticky lg:top-32">
                  <div className="flex items-center gap-3">
                    <AISummitLogo size="section" />
                  </div>
                  <h2 className="section-h2 text-white">Ticket Options</h2>
                  <p className="body-text text-white/55">
                    Student or General pass. Reserve below—confirmation sent to your email.
                  </p>
                  <div className="space-y-4 pt-4">
                    {TICKET_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        className={`p-4 border ${"highlight" in tier && tier.highlight ? "border-electric bg-electric/5" : "border-rule-inv"}`}
                      >
                        <p className="font-display font-semibold text-white">{tier.name}</p>
                        <p className="font-label text-electric text-lg">{tier.price}</p>
                        <p className="font-body text-[12px] text-white/50">{tier.desc}</p>
                        <a
                          href="#registration-form"
                          className="mt-3 inline-block font-label text-[10px] tracking-[2px] uppercase text-electric hover:text-white transition-colors"
                        >
                          Reserve Seat →
                        </a>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
              <div id="registration-form" className="lg:col-span-2 scroll-mt-24">
                <AISummitRegistrationForm />
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="bg-surface section-py border-b border-rule/20">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <div className="flex items-center gap-4 mb-4">
                <AISummitLogo size="inline" />
                <h2 className="section-h2 text-void">Itinerary</h2>
              </div>
              <p className="body-text text-lead">April 5, 2026 · Plaza Hotel, Lalitpur</p>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-0 border border-rule/20"
            >
              {ITINERARY.map((item, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="border-b border-rule/20 last:border-b-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
                >
                  <span className="font-label text-electric text-[11px] tracking-[4px] uppercase shrink-0 sm:w-32">
                    {item.time}
                  </span>
                  <div className="flex-1">
                    <h3 className="section-h3 text-void not-italic font-semibold">{item.title}</h3>
                    {item.details && (
                      <ul className="mt-4 space-y-2">
                        {item.details.map((d, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-1 h-1 bg-electric flex-shrink-0 mt-2" />
                            <span className="font-body text-[13px] text-lead">{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
              <div className="flex justify-center mb-6">
                <AISummitLogo size="section" />
              </div>
              <h2 className="section-h2 text-white">Reserve Your Seat</h2>
              <p className="body-text text-white/55 max-w-lg mx-auto mt-4">
                Student NPR 2,500 · General NPR 5,000
              </p>
              <div className="pt-6 sm:pt-8">
                <MagneticButton>
                  <a href="#ticketing" className="bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[4px] uppercase px-10 sm:px-12 py-5 sm:py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl inline-block">
                    Reserve Seat →
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
