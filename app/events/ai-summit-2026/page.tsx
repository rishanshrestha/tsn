"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { AISummitNavbar } from "@/components/layout/AISummitNavbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AISummitRegistrationForm } from "@/components/sections/AISummitRegistrationForm";
import { AISummitLogo } from "@/components/AISummitLogo";
import {
  EVENT_DATE,
  VENUE,
  EXPECTED_ATTENDEES,
  TICKET_TIERS,
  ITINERARY,
  SUMMIT_THEMES,
  SUMMIT_SPEAKERS,
  SUMMIT_MODERATORS,
} from "@/lib/ai-summit-2026";
import { AISummitCountdown } from "@/components/ui/AISummitCountdown";
import { AINetworkFlow } from "@/components/ui/AINetworkFlow";
import { AISummitPreloader } from "@/components/ui/AISummitPreloader";
import { Scene3D, FloatingPlane } from "@/components/scene-3d";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

const PARTNER_LOGOS = [
  "Government of Nepal",
  "Amazon Web Services",
  "CG Holdings",
  "AI Association Nepal",
  "PHDCCI",
  "The Startup Network Nepal",
  "Areta Public Relations",
  "Plaza Hotel Lalitpur",
] as const;

function getBadgeLabel(name: string) {
  return name
    .replace(/\b(of|the|and|for)\b/gi, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

export default function AISummit2026Page() {
  const pageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });

  const heroFloatY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);
  const heroGlowScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.18]);

  return (
    <LenisProvider>
      <AISummitPreloader />
      <main ref={pageRef} className="bg-[#FFFDF7] min-h-screen font-ai-body text-[#1E2F33] relative overflow-hidden">
        <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#0F4C5C] via-[#B38A2A] to-[#D5BC78] z-[140]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(15,76,92,0.14),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(179,138,42,0.10),transparent_35%),radial-gradient(circle_at_60%_75%,rgba(31,111,120,0.08),transparent_35%)]" />
        <AINetworkFlow color="#0F4C5C" opacity={0.1} count={48} />
        <AISummitNavbar />

        {/* Hero Banner */}
        <section id="overview" className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 border-b border-[#E2D8C2] relative">
          <motion.div style={{ y: heroFloatY, scale: heroGlowScale }} className="pointer-events-none absolute -top-24 right-[-10%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(15,76,92,0.22),transparent_65%)] blur-2xl" />
          <motion.div style={{ y: heroFloatY }} className="pointer-events-none absolute bottom-[-120px] left-[-8%] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(179,138,42,0.18),transparent_68%)] blur-2xl" />
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <span className="font-ai-title text-[20vw] text-[#0F4C5C]/[0.05] uppercase leading-none select-none font-bold tracking-tighter">
              NEPAL AI
            </span>
          </div>
          <div className="content-max relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">
              <AnimatedSection className="flex-1 space-y-8 sm:space-y-10">
                <div className="space-y-4">
                  <AISummitLogo size="hero" className="drop-shadow-[0_0_40px_rgba(0,71,225,0.25)]" />
                  <p className="font-ai-title text-[11px] tracking-[4px] uppercase text-[#56716F]">AI Summit Nepal 2026</p>
                  <h1 className="font-ai-title text-5xl sm:text-7xl lg:text-8xl text-[#1D363B] font-bold tracking-tighter leading-[0.9]">
                    AI Revolution in the <br /> <span className="text-[#0F4C5C]">Context of Nepal</span>
                  </h1>
                </div>

                <p className="text-xl text-[#546966] max-w-2xl leading-relaxed">
                  A premium, session-wise international conference experience that brings together policymakers, founders, enterprise leaders, students, and innovators to shape Nepal's AI future through insight, knowledge, and strategic networking.
                </p>

                <div className="flex flex-wrap gap-5 pt-4">
                  <MagneticButton>
                    <a href="#registration-form" className="bg-[#0F4C5C] text-[#FFF9ED] font-ai-title text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-[#166272] transition-all duration-500 shadow-2xl shadow-[#0F4C5C]/20 inline-block rounded-xl">
                      Apply Now →
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link href="/join" className="border border-[#D8CCAF] text-[#1D363B] font-ai-title text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-[#1D363B] hover:text-[#FFF9ED] transition-all duration-500 backdrop-blur-sm inline-block rounded-xl">
                      Join as Partner →
                    </Link>
                  </MagneticButton>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                  {[
                    { label: "Date", value: EVENT_DATE },
                    { label: "Venue", value: VENUE },
                    { label: "Audience", value: EXPECTED_ATTENDEES },
                    { label: "Format", value: "Session-wise Itinerary" },
                  ].map((item) => (
                    <motion.div key={item.label} whileHover={{ y: -4 }} className="border border-[#E2D8C2] bg-[#FFFDF7]/90 backdrop-blur-sm p-4 shadow-lg shadow-[#D5BC78]/15 rounded-xl">
                      <p className="font-ai-title text-[9px] tracking-[3px] uppercase text-[#71827D]">{item.label}</p>
                      <p className="font-ai-body text-[13px] text-[#1D363B] mt-1">{item.value}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="w-full lg:w-auto shrink-0">
                <Scene3D>
                  <FloatingPlane depth={30}>
                    <div className="border border-[#E2D8C2] bg-[#FFFDF7]/70 backdrop-blur-md relative overflow-hidden group shadow-2xl shadow-[#D5BC78]/20 rounded-2xl">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,253,247,0.72),rgba(246,237,214,0.46))]" />
                      <div className="relative">
                        <h3 className="font-ai-title text-[10px] tracking-[5px] uppercase text-[#6A7A74] mb-4 block p-6 pb-0">
                          Summit Calendar Countdown
                        </h3>
                        <div className="p-4 sm:p-6">
                          <AISummitCountdown targetDate="2026-04-05T09:00:00" mode="days" />
                        </div>
                      </div>
                    </div>
                  </FloatingPlane>
                </Scene3D>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Cinematic Partner Wall */}
        <section className="bg-[#F8F2E3] py-12 sm:py-14 border-b border-[#E2D8C2]">
          <div className="content-max">
            <AnimatedSection className="mb-7 text-center">
              <p className="font-ai-title text-[10px] tracking-[4px] uppercase text-[#7D7B6C]">Partner Ecosystem</p>
              <h2 className="font-ai-title text-2xl sm:text-3xl text-[#1D363B] mt-2">Supported By Institutions Driving AI Forward</h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {PARTNER_LOGOS.map((partner, i) => (
                <motion.article
                  key={partner}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-[#D9CDAF] bg-[#FFFDF7]/90 backdrop-blur-md p-4 sm:p-5 shadow-lg shadow-[#D5BC78]/20"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#E5D6B6] bg-[linear-gradient(135deg,#0F4C5C,#1F6F78)] text-[#F7E8C6] flex items-center justify-center font-ai-title text-sm sm:text-base tracking-[1px]">
                    {getBadgeLabel(partner)}
                  </div>
                  <p className="mt-3 font-ai-body text-[12px] sm:text-[13px] text-[#2D4A4D] leading-snug">{partner}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* About The Event */}
        <section className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2] relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(15,76,92,0.08),transparent_36%)]" />
          <div className="content-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              <AnimatedSection className="lg:col-span-2 border border-[#E2D8C2] bg-[#FFFDF7]/90 backdrop-blur-md p-8 sm:p-10 shadow-xl shadow-[#D5BC78]/15 rounded-2xl">
                <p className="font-ai-title text-[11px] tracking-[4px] uppercase text-[#5B7671] mb-4">What Is This Event?</p>
                <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold leading-tight mb-6">
                  Nepal's definitive AI conference for policy, practice, and progress
                </h2>
                <p className="font-ai-body text-[#4F6662] leading-relaxed mb-4">
                  AI Summit Nepal 2026 is a one-day, high-impact conference designed to connect strategic thinking with real-world execution. The summit explores how Nepal can leverage artificial intelligence responsibly across government, enterprise, infrastructure, society, and the new economy.
                </p>
                <p className="font-ai-body text-[#4F6662] leading-relaxed">
                  The event combines keynotes, panel discussions, moderated dialogue, and networking opportunities in a session-wise format so participants can gain both big-picture insights and practical pathways for adoption.
                </p>
              </AnimatedSection>

              <AnimatedSection className="border border-[#E2D8C2] bg-[#FFFDF7]/95 backdrop-blur-md p-8 shadow-xl shadow-[#D5BC78]/15 space-y-5 rounded-2xl">
                <p className="font-ai-title text-[11px] tracking-[4px] uppercase text-[#5B7671]">At a Glance</p>
                <div>
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#74867E]">When</p>
                  <p className="text-[#1D363B] font-semibold">{EVENT_DATE}</p>
                </div>
                <div>
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#74867E]">Where</p>
                  <p className="text-[#1D363B] font-semibold">{VENUE}</p>
                </div>
                <div>
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#74867E]">Who Should Join</p>
                  <p className="text-[#1D363B]">Students, professionals, founders, policymakers, and technology leaders.</p>
                </div>
                <div>
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#74867E]">Primary Benefit</p>
                  <p className="text-[#1D363B]">High-value networking plus strategic insights and actionable knowledge.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2]">
          <div className="content-max">
            <AnimatedSection className="mb-10 sm:mb-12">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold mb-3">Why You Should Join</h2>
              <p className="font-ai-body text-[#576B67] max-w-3xl">
                This summit is built for depth, relevance, and authentic value. No physical giveaways, only what matters most: insight, knowledge, and meaningful connections.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Who Should Join?",
                  desc: "Students, startups, corporate teams, policymakers, researchers, and ecosystem builders who want to lead the next AI wave in Nepal.",
                },
                {
                  title: "Why Join?",
                  desc: "Get high-value networking, deep insights from key leaders, and practical perspectives to move your AI journey forward.",
                },
                {
                  title: "What Is Here?",
                  desc: "Structured keynotes, panel discussions, moderator-led conversations, and strategic networking designed like an international conference.",
                },
              ].map((item) => (
                <AnimatedSection key={item.title} className="border border-[#E2D8C2] p-7 bg-[#FFFDF7] hover:bg-[#FFF9ED] hover:-translate-y-1 transition-all duration-500 rounded-2xl shadow-lg shadow-[#D5BC78]/12">
                  <h3 className="font-ai-title text-xl text-[#1D363B] mb-3">{item.title}</h3>
                  <p className="font-ai-body text-[#576B67] leading-relaxed">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Themes */}
        <section id="themes" className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2] relative">
          <div className="content-max">
            <AnimatedSection className="mb-12">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold mb-4 uppercase tracking-tighter">Summit Themes</h2>
              <p className="font-ai-body text-[#576B67]">The conference is designed around practical pillars driving the AI revolution in Nepal.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUMMIT_THEMES.map((theme, i) => (
                <AnimatedSection
                  key={theme}
                  delay={i * 0.05}
                  className="p-8 rounded-2xl border border-[#E2D8C2] bg-gradient-to-b from-[#FFF9ED] to-[#FFFDF7] relative overflow-hidden shadow-xl shadow-[#D5BC78]/15"
                >
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#B38A2A]/12 blur-2xl" />
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#74867E] mb-3">Core Theme</p>
                  <h3 className="font-ai-title text-2xl text-[#1D363B] font-bold">{theme}</h3>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section id="speakers" className="bg-[#F8F2E3] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2]">
          <div className="content-max">
            <AnimatedSection className="mb-12">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold mb-3">Meet the Speakers</h2>
              <p className="font-ai-body text-[#576B67] max-w-3xl">
                Thought leaders guiding Nepal's next AI chapter across technology, economy, social-policy, and development.
              </p>
            </AnimatedSection>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {SUMMIT_SPEAKERS.map((speaker) => (
                <motion.article
                  key={speaker.name}
                  variants={staggerItem}
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  className="border border-[#E2D8C2] bg-[#FFFDF7]/90 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-[#D5BC78]/15"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0F4C5C] to-[#1F6F78] text-[#F7E8C6] font-ai-title text-xl flex items-center justify-center mb-4">
                    {getInitials(speaker.name)}
                  </div>
                  <h3 className="font-ai-title text-xl text-[#1D363B] mb-1">{speaker.name}</h3>
                  <p className="font-ai-body text-[#4F6662] text-sm">{speaker.designation}</p>
                  <p className="font-ai-body text-[#6D7E79] text-sm mb-3">{speaker.organization}</p>
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#B38A2A]">{speaker.focus}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Moderators */}
        <section id="moderators" className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2]">
          <div className="content-max">
            <AnimatedSection className="mb-10">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold mb-3">Meet the Moderators</h2>
              <p className="font-ai-body text-[#576B67] max-w-3xl">
                Experienced facilitators driving sharp and meaningful conversations across all major sessions.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SUMMIT_MODERATORS.map((moderator, i) => (
                <AnimatedSection key={`${moderator.name}-${i}`} className="border border-[#E2D8C2] bg-[#FFF9ED]/90 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[#D5BC78]/12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D363B] to-[#0F4C5C] text-[#F7E8C6] font-ai-title text-lg flex items-center justify-center mb-4">
                    {getInitials(moderator.name)}
                  </div>
                  <h3 className="font-ai-title text-lg text-[#1D363B] mb-1">{moderator.name}</h3>
                  <p className="font-ai-body text-[#4F6662] text-sm">{moderator.designation}</p>
                  <p className="font-ai-body text-[#6D7E79] text-sm">{moderator.organization}</p>
                  <p className="font-ai-title text-[10px] tracking-[2.5px] uppercase text-[#B38A2A] mt-3">Session: {moderator.session}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section id="itinerary" className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2]">
          <div className="content-max">
            <AnimatedSection className="mb-12 sm:mb-16">
              <div className="flex items-center gap-4 mb-4">
                <AISummitLogo size="inline" />
                <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold">Session-wise Itinerary</h2>
              </div>
              <p className="font-ai-body text-[#576B67]">April 5, 2026 · Plaza Hotel, Lalitpur</p>
            </AnimatedSection>
            <div className="hidden md:block border border-[#E2D8C2] bg-[#FFFDF7]/95 backdrop-blur-md overflow-x-auto rounded-2xl shadow-2xl shadow-[#D5BC78]/18">
              <table className="w-full min-w-[920px]">
                <thead className="bg-[#F8F2E3] border-b border-[#E2D8C2]">
                  <tr>
                    <th className="text-left px-6 py-4 font-ai-title text-[10px] tracking-[3px] uppercase text-[#5F7873]">Time</th>
                    <th className="text-left px-6 py-4 font-ai-title text-[10px] tracking-[3px] uppercase text-[#5F7873]">Head</th>
                    <th className="text-left px-6 py-4 font-ai-title text-[10px] tracking-[3px] uppercase text-[#5F7873]">Topic</th>
                    <th className="text-left px-6 py-4 font-ai-title text-[10px] tracking-[3px] uppercase text-[#5F7873]">Speaker</th>
                    <th className="text-left px-6 py-4 font-ai-title text-[10px] tracking-[3px] uppercase text-[#5F7873]">Moderator</th>
                  </tr>
                </thead>
                <tbody>
                  {ITINERARY.map((item, i) => (
                    <tr key={item.time + i} className="border-b border-[#ECE2CC] last:border-b-0 align-top">
                      <td className="px-6 py-5 font-ai-title text-[11px] tracking-[2px] uppercase text-[#0F4C5C] whitespace-nowrap">{item.time}</td>
                      <td className="px-6 py-5 font-ai-title text-[#1D363B]">{item.head}</td>
                      <td className="px-6 py-5 font-ai-body text-[#4F6662]">
                        <p>{item.topic}</p>
                        {item.details && (
                          <ul className="mt-2 space-y-1">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="text-[13px] text-[#6D7E79]">• {detail}</li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td className="px-6 py-5 font-ai-body text-sm text-[#4F6662]">{item.speaker || "-"}</td>
                      <td className="px-6 py-5 font-ai-body text-sm text-[#4F6662]">{item.moderator || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-4">
              {ITINERARY.map((item, i) => (
                <AnimatedSection key={`${item.time}-${i}`} className="rounded-2xl border border-[#E2D8C2] bg-[#FFFDF7] p-5 shadow-lg shadow-[#D5BC78]/15">
                  <p className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#0F4C5C] mb-1">{item.time}</p>
                  <h3 className="font-ai-title text-lg text-[#1D363B]">{item.head}</h3>
                  <p className="font-ai-body text-sm text-[#4F6662] mt-1">{item.topic}</p>
                  {item.speaker && <p className="font-ai-body text-sm text-[#576B67] mt-3"><span className="font-semibold">Speaker:</span> {item.speaker}</p>}
                  {item.moderator && <p className="font-ai-body text-sm text-[#576B67] mt-1"><span className="font-semibold">Moderator:</span> {item.moderator}</p>}
                  {item.details && (
                    <ul className="mt-3 space-y-1">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-[13px] text-[#6D7E79]">• {detail}</li>
                      ))}
                    </ul>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Ticketing & Registration at End */}
        <section id="ticketing" className="bg-[#FFFDF7] py-14 sm:py-16 md:py-20 border-b border-[#E2D8C2] relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,rgba(15,76,92,0.08),transparent_35%)]" />
          <div className="content-max">
            <AnimatedSection className="mb-10">
              <h2 className="font-ai-title text-3xl sm:text-4xl text-[#1D363B] font-bold mb-3">Ticketing & Registration</h2>
              <p className="font-ai-body text-[#576B67] max-w-3xl">
                Choose your pass and apply now. The summit is designed for high-quality insights, meaningful knowledge exchange, and serious networking.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-1">
                <AnimatedSection className="space-y-6 lg:sticky lg:top-28">
                  <div className="flex items-center gap-3">
                    <AISummitLogo size="section" />
                  </div>
                  <h3 className="font-ai-title text-2xl text-[#1D363B] font-bold">Pass Categories</h3>
                  <div className="space-y-4 pt-2">
                    {TICKET_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        className={`p-5 rounded-2xl border shadow-lg ${"highlight" in tier && tier.highlight ? "border-[#B38A2A] bg-[#FFF3D6] shadow-[#D5BC78]/25" : "border-[#E2D8C2] bg-[#FFFDF7] shadow-[#D5BC78]/15"}`}
                      >
                        <p className="font-ai-title font-semibold text-[#1D363B]">{tier.name}</p>
                        <p className="font-ai-title text-[#0F4C5C] text-2xl mt-1">{tier.price}</p>
                        <p className="font-ai-body text-[12px] text-[#5E6E69] mt-1">{tier.desc}</p>
                        <a
                          href="#registration-form"
                          className="mt-3 inline-block font-ai-title text-[10px] tracking-[2px] uppercase text-[#0F4C5C] hover:text-[#1D363B] transition-colors"
                        >
                          Apply Now →
                        </a>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <div id="registration-form" className="lg:col-span-2 scroll-mt-28">
                <AISummitRegistrationForm variant="light" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F2E3] py-14 sm:py-16 md:py-20">
          <div className="content-max text-center space-y-6 sm:space-y-8">
            <AnimatedSection>
              <div className="flex justify-center mb-6">
                <AISummitLogo size="section" />
              </div>
              <h2 className="font-ai-title text-4xl sm:text-5xl text-[#1D363B] font-bold">Join The Summit Experience</h2>
              <p className="font-ai-body text-[#576B67] max-w-3xl mx-auto mt-4 leading-relaxed">
                If you want to understand where AI is headed in Nepal, build meaningful relationships, and learn from leaders shaping the ecosystem, this is your conference. Come for the ideas, stay for the network.
              </p>
              <div className="pt-6 sm:pt-8">
                <MagneticButton>
                  <a href="#registration-form" className="bg-[#0F4C5C] text-[#FFF9ED] font-ai-title text-[10px] sm:text-[11px] tracking-[4px] uppercase px-10 sm:px-12 py-5 sm:py-6 hover:bg-[#166272] transition-all duration-500 shadow-xl shadow-[#0F4C5C]/20 inline-block rounded-xl">
                    Apply Now →
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
