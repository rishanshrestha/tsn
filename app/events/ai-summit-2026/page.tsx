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
      <main className="bg-black min-h-screen font-ai-body text-ai-grey-300">
        <Navbar />

        {/* Hero Banner */}
        <section className="pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 border-b border-ai-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="font-ai-title text-[14vw] sm:text-[12vw] text-ai-white/[0.03] uppercase leading-none select-none font-bold">
              2026
            </span>
          </div>
          <div className="content-max relative z-10">
            <div className="flex flex-col gap-8">
              <AnimatedSection className="flex-1 space-y-6 sm:space-y-8">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 px-3 py-1 border border-ai-white/10 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-ai-tech animate-pulse shadow-[0_0_8px_var(--ai-tech)]" />
                    <span className="font-ai-title text-[10px] tracking-[3px] uppercase text-ai-white/60">{EVENT_DATE}</span>
                  </div>
                  <div className="bg-ai-tech/15 border border-ai-tech/35 px-3 sm:px-4 py-1">
                    <span className="font-ai-title text-[9px] sm:text-[10px] tracking-[3px] uppercase text-ai-tech">Registration Open</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
                  <AISummitLogo size="hero" className="drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]" />
                </div>
                <h2 className="font-ai-title text-2xl sm:text-3xl text-ai-tech font-medium">Plaza Hotel, Lalitpur · Nepal</h2>
                <p className="text-lg text-ai-grey-500 max-w-2xl leading-relaxed">
                  Nepal&apos;s premier AI summit. Professional, clear, and informative keynote sessions and panel discussions with industry leaders focused on impact-driven innovation.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                  <MagneticButton>
                    <a href="#ticketing" className="bg-ai-white text-ai-black font-ai-title text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-ai-tech hover:text-ai-white transition-colors duration-500 inline-block">
                      Reserve Seat →
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link href="https://ai-summit-2026.domain.com/join" className="border border-ai-white/20 text-ai-white font-ai-title text-[10px] sm:text-[11px] tracking-[4px] uppercase px-8 sm:px-10 py-4 sm:py-5 hover:bg-ai-white hover:text-ai-black transition-all duration-500 inline-block">
                      Join as Partner →
                    </Link>
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-ai-grey-900 section-py border-b border-ai-white/10">
          <div className="content-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-16">
              {[
                { label: "Date", value: EVENT_DATE },
                { label: "Venue", value: VENUE },
                { label: "Format", value: "Keynotes & Panel" },
                { label: "Expected", value: `${EXPECTED_ATTENDEES} Attendees` },
              ].map((detail, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="space-y-2">
                  <span className="font-ai-title text-[9px] tracking-[3px] uppercase text-ai-grey-500">{detail.label}</span>
                  <p className="font-ai-body text-[14px] sm:text-[16px] font-medium text-ai-white">{detail.value}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="ticketing" className="bg-black section-py border-b border-ai-white/10">
          <div className="content-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-1">
                <AnimatedSection className="space-y-6 lg:sticky lg:top-32">
                  <div className="flex items-center gap-3">
                    <AISummitLogo size="section" />
                  </div>
                  <h2 className="font-ai-title text-3xl sm:text-4xl text-ai-white font-bold">Ticket Options</h2>
                  <p className="font-ai-body text-ai-grey-500">
                    Professional registration for industry leaders and students.
                  </p>
                  <div className="space-y-4 pt-4">
                    {TICKET_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        className={`p-4 border ${"highlight" in tier && tier.highlight ? "border-ai-tech bg-ai-tech/5" : "border-ai-white/10"}`}
                      >
                        <p className="font-ai-title font-semibold text-ai-white">{tier.name}</p>
                        <p className="font-ai-title text-ai-tech text-xl">{tier.price}</p>
                        <p className="font-ai-body text-[12px] text-ai-grey-500">{tier.desc}</p>
                        <a
                          href="#registration-form"
                          className="mt-3 inline-block font-ai-title text-[10px] tracking-[2px] uppercase text-ai-tech hover:text-ai-white transition-colors"
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

        {/* Focus Areas */}
        <section className="bg-black section-py border-b border-ai-white/10">
          <div className="content-max">
            <AnimatedSection className="mb-12">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-ai-white font-bold mb-4">Focus Areas</h2>
              <p className="font-ai-body text-ai-grey-500">Driving impact through technology and sustainable development.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection className="p-8 rounded-lg border border-ai-tech/30 bg-ai-tech/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 grad-tech opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
                <h3 className="font-ai-title text-2xl text-ai-tech font-bold mb-4">Technology</h3>
                <p className="font-ai-body text-ai-grey-500 leading-relaxed"> 
                  Exploring the latest in artificial intelligence, machine learning, and innovative tech solutions. Clear and informative insights for the digital era.
                </p>
              </AnimatedSection>
              <AnimatedSection className="p-8 rounded-lg border border-ai-dev/30 bg-ai-dev/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 grad-dev opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
                <h3 className="font-ai-title text-2xl text-ai-dev font-bold mb-4">Development</h3>
                <p className="font-ai-body text-ai-grey-300 leading-relaxed">
                  Supportive and impact-driven approaches to building a sustainable ecosystem. Professional guidance for future-ready development.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="bg-ai-grey-900 section-py border-b border-ai-white/10">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <div className="flex items-center gap-4 mb-4">
                <AISummitLogo size="inline" />
                <h2 className="font-ai-title text-3xl sm:text-4xl text-ai-white font-bold">Itinerary</h2>
              </div>
              <p className="font-ai-body text-ai-grey-500">April 5, 2026 · Plaza Hotel, Lalitpur</p>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-0 border border-ai-white/10"
            >
              {ITINERARY.map((item, i) => {
                // Theme mapping based on content
                const isTech = item.title.toLowerCase().includes("ai") || item.title.toLowerCase().includes("tech");
                const isDev = item.title.toLowerCase().includes("build") || item.title.toLowerCase().includes("development");
                const accentColor = isTech ? "text-ai-tech" : isDev ? "text-ai-dev" : "text-ai-policy";
                const dotColor = isTech ? "bg-ai-tech" : isDev ? "bg-ai-dev" : "bg-ai-policy";

                return (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="border-b border-ai-white/10 last:border-b-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 bg-black/20"
                  >
                    <span className={`font-ai-title ${accentColor} text-[11px] tracking-[4px] uppercase shrink-0 sm:w-32`}>
                      {item.time}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-ai-title text-xl text-ai-white font-semibold">{item.title}</h3>
                      {item.details && (
                        <ul className="mt-4 space-y-2">
                          {item.details.map((d, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div className={`w-1 h-1 ${dotColor} flex-shrink-0 mt-2`} />
                              <span className="font-ai-body text-[13px] text-ai-grey-500">{d}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black section-py">
          <div className="content-max text-center space-y-6 sm:space-y-8">
            <AnimatedSection>
              <div className="flex justify-center mb-6">
                <AISummitLogo size="section" />
              </div>
              <h2 className="font-ai-title text-4xl sm:text-5xl text-ai-white font-bold">Reserve Your Seat</h2>
              <p className="font-ai-body text-ai-grey-500 max-w-lg mx-auto mt-4">
                Supportive and impact-driven community of industry leaders.
              </p>
              <div className="pt-6 sm:pt-8">
                <MagneticButton>
                  <a href="#ticketing" className="bg-ai-white text-ai-black font-ai-title text-[10px] sm:text-[11px] tracking-[4px] uppercase px-10 sm:px-12 py-5 sm:py-6 hover:bg-ai-tech hover:text-ai-white transition-all duration-500 shadow-xl inline-block">
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
