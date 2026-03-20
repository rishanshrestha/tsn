"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const HIGHLIGHTS = [
    { stat: "350+", label: "Attendees" },
    { stat: "27", label: "Speakers" },
    { stat: "5", label: "Startups Pitched" },
    { stat: "11", label: "Partners" },
];

const MOMENTS = [
    { title: "Inaugural Summit", desc: "Nepal's first-ever startup summit bringing the community together" },
    { title: "Pitching Contest", desc: "5 startups competed in the first startup pitching competition" },
    { title: "Winner: Intern Nepal", desc: "Bridging the gap between ideas and the global community" },
    { title: "Expert Panels", desc: "27 speakers sharing insights on Nepal's tech ecosystem" },
    { title: "Networking Sessions", desc: "Fostering collaboration between founders, investors, and mentors" },
];

export default function Summit2023Page() {
    return (
        <LenisProvider>
            <main className="bg-void min-h-screen">
                <Navbar />

                {/* Hero */}
                <section className="pt-36 pb-16 border-b border-rule-inv relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <span className="font-label text-[18vw] text-white/[0.03] uppercase leading-none select-none">2023</span>
                    </div>
                    <div className="content-max relative z-10">
                        <AnimatedSection className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="px-3 py-1 border border-white/20">
                                    <span className="font-label text-[10px] tracking-[3px] uppercase text-white/60">Inaugural</span>
                                </div>
                            </div>
                            <h1 className="hero-title text-white">
                                Startup Summit <br /> <span className="italic font-normal">Nepal 2023</span>
                            </h1>
                            <p className="body-text text-white/55 max-w-2xl">
                                The inaugural Startup Summit Nepal brought together entrepreneurs, investors,
                                and innovators to foster collaboration and growth in Nepal&apos;s startup ecosystem.
                                Where the movement began.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-surface2 section-py border-b border-rule/20">
                    <div className="content-max">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-rule/30">
                            {HIGHLIGHTS.map((h, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center justify-center gap-2 px-4">
                                    <span className="font-label text-[48px] leading-none text-void">{h.stat}</span>
                                    <span className="font-body text-[10px] tracking-[3px] uppercase text-lead">{h.label}</span>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Moments */}
                <section className="bg-void section-py border-b border-rule-inv">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-white">Where It All Began.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-0"
                        >
                            {MOMENTS.map((moment, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="group border-b border-rule-inv py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 cursor-default hover:pl-4 transition-all duration-300"
                                >
                                    <span className="font-label text-[42px] leading-none text-white/10 group-hover:text-electric/30 transition-colors w-16 flex-shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="space-y-2">
                                        <h3 className="section-h3 not-italic font-semibold text-white group-hover:text-electric transition-colors">{moment.title}</h3>
                                        <p className="font-body text-[14px] text-white/50">{moment.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Winner Spotlight */}
                <section className="bg-surface section-py border-b border-rule/20">
                    <div className="content-max">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <AnimatedSection className="space-y-8">
                                <span className="font-label text-electric text-[11px] tracking-[6px] uppercase">— Winner 2023</span>
                                <h2 className="section-h2 text-void">Intern Nepal</h2>
                                <p className="body-text text-lead">
                                    The inaugural pitching contest was the bridge they needed to connect with the
                                    global community. Intern Nepal&apos;s platform for connecting students with internship
                                    opportunities won the hearts of judges at Nepal&apos;s first startup summit.
                                </p>
                            </AnimatedSection>
                            <div className="aspect-video bg-surface2 border border-rule/20 flex items-center justify-center relative overflow-hidden">
                                <span className="font-label text-[6vw] lg:text-[3vw] text-void/5 uppercase select-none">WINNER</span>
                                <div className="absolute bottom-6 left-6">
                                    <span className="px-3 py-1 bg-electric font-label text-[9px] tracking-widest text-white uppercase">Best Startup 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-void section-py">
                    <div className="content-max text-center space-y-6">
                        <AnimatedSection>
                            <p className="font-body text-[15px] text-white/40">See how we grew from here.</p>
                            <div className="flex flex-wrap justify-center gap-4 pt-4">
                                <Link href="/events/summit-2024" className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-electric hover:text-white transition-all duration-500 inline-block">
                                    View Summit 2024 →
                                </Link>
                                <Link href="/events/summit-2025" className="border border-white/20 text-white font-body text-[11px] tracking-[4px] uppercase px-10 py-5 hover:bg-white hover:text-void transition-all duration-500 inline-block">
                                    View Summit 2025 →
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                <Footer />
            </main>
        </LenisProvider>
    );
}
