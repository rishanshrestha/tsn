"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SPEAKERS = [
    { name: "Deepak Rauniar", role: "CEO, Ryan Electric", id: "DR" },
    { name: "Varun Sridhar", role: "Former CEO, PayTM Services", id: "VS" },
    { name: "Anukool Bhatnagar", role: "Managing Partner, Sustain Edge LLC", id: "AB" },
    { name: "Atul K Thakur", role: "Secretary PHDCCI", id: "AT" },
    { name: "Charu Chadha", role: "Editor-In-Chief, Media 9", id: "CC" },
    { name: "Abdullah Tuncer Kececi", role: "GM, Turkish Airlines", id: "AK" },
];

const SCHEDULE = [
    { day: "Day 1-3", title: "Hackathon", subtitle: "Oct 13-15", items: ["Team Formation", "Build Sprint", "Mentor Sessions", "Demo Day"] },
    { day: "Day 4", title: "Summit Day 1", subtitle: "Oct 16", items: ["Opening Keynote", "Panel Discussions", "Startup Pitches", "Networking Dinner"] },
    { day: "Day 5", title: "Summit Day 2", subtitle: "Oct 17", items: ["Workshops", "Investor Meetups", "Awards Ceremony", "Closing Keynote"] },
];

export default function Summit2025Page() {
    return (
        <LenisProvider>
            <main className="bg-void min-h-screen">
                <Navbar />

                {/* Hero Banner */}
                <section className="pt-36 pb-16 border-b border-rule-inv relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <span className="font-label text-[18vw] text-white/[0.03] uppercase leading-none select-none">
                            2025
                        </span>
                    </div>
                    <div className="content-max relative z-10">
                        <AnimatedSection className="space-y-8">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-2 px-3 py-1 border border-rule-inv rounded-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse shadow-[0_0_8px_rgba(0,71,225,1)]" />
                                    <span className="font-label text-[10px] tracking-[3px] uppercase text-white/60">Upcoming</span>
                                </div>
                                <div className="bg-electric/15 border border-electric/35 px-4 py-1">
                                    <span className="font-label text-[10px] tracking-[3px] uppercase text-electric">Registration Open</span>
                                </div>
                            </div>
                            <h1 className="hero-title text-white">
                                Startup Summit <br /> <span className="italic font-normal">Nepal 2025</span>
                            </h1>
                            <h2 className="section-h3 text-electric font-medium">Kathmandu Rising</h2>
                            <p className="body-text text-white/55 max-w-2xl">
                                Our most ambitious event yet — a 5-day innovation festival combining hackathon,
                                summit, workshops, and networking events. Join 1000+ entrepreneurs, investors,
                                and innovators shaping Nepal&apos;s future.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <MagneticButton>
                                    <a href="https://summit2025.thestartupnetworknepal.com/register-summit" target="_blank" rel="noopener noreferrer" className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-electric hover:text-white transition-all duration-500 inline-block">
                                        Register for Summit →
                                    </a>
                                </MagneticButton>
                                <MagneticButton>
                                    <a href="https://summit2025.thestartupnetworknepal.com/register-hackathon" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white font-body text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-white hover:text-void transition-all duration-500 inline-block">
                                        Join Hackathon →
                                    </a>
                                </MagneticButton>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Event Details */}
                <section className="bg-surface2 section-py border-b border-rule/20">
                    <div className="content-max">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                            {[
                                { label: "Date", value: "October 13–17, 2025" },
                                { label: "Venue", value: "Hyatt Regency Kathmandu" },
                                { label: "Format", value: "Hackathon + Summit" },
                                { label: "Expected", value: "1000+ Attendees" },
                            ].map((detail, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} className="space-y-2">
                                    <span className="font-label text-[9px] tracking-[3px] uppercase text-lead/60">{detail.label}</span>
                                    <p className="font-body text-[16px] font-medium text-void">{detail.value}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Schedule */}
                <section className="bg-void section-py border-b border-rule-inv">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-white">Schedule.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-rule-inv"
                        >
                            {SCHEDULE.map((day, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-rule-inv space-y-8"
                                >
                                    <div className="space-y-2">
                                        <span className="font-label text-electric text-[11px] tracking-[4px] uppercase">{day.day}</span>
                                        <h3 className="section-h3 text-white not-italic font-semibold">{day.title}</h3>
                                        <span className="font-body text-[13px] text-white/40">{day.subtitle}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {day.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3">
                                                <div className="w-1 h-1 bg-electric flex-shrink-0" />
                                                <span className="font-body text-[13px] text-white/60">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Speakers */}
                <section className="bg-surface section-py border-b border-rule/20">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-void">Featured Speakers.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-2 lg:grid-cols-3 border-l border-rule/20"
                        >
                            {SPEAKERS.map((speaker, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="group border-r border-b border-rule/20 p-8 md:p-10 space-y-6 hover:bg-void transition-colors duration-500"
                                >
                                    <div className="w-14 h-14 rounded-full bg-surface2 flex items-center justify-center group-hover:bg-electric transition-colors">
                                        <span className="font-label text-lg tracking-[3px] text-void group-hover:text-white pt-0.5">{speaker.id}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-display text-lg font-semibold text-void group-hover:text-white transition-colors">{speaker.name}</h4>
                                        <p className="font-body text-[11px] tracking-[1px] uppercase text-lead group-hover:text-white/40 transition-colors">{speaker.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-void section-py">
                    <div className="content-max text-center space-y-8">
                        <AnimatedSection>
                            <h2 className="section-h2 text-white">Don&apos;t Miss Out.</h2>
                            <p className="body-text text-white/55 max-w-lg mx-auto mt-4">
                                Join Nepal&apos;s largest startup gathering. Reserve your seat before they&apos;re gone.
                            </p>
                            <div className="pt-8">
                                <MagneticButton>
                                    <a href="https://summit2025.thestartupnetworknepal.com/" target="_blank" rel="noopener noreferrer" className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-12 py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl inline-block">
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
