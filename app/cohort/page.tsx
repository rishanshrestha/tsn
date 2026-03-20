"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";

const BENEFITS = [
    { title: "6-Month Acceleration", desc: "Structured guidance from ideation to scaling" },
    { title: "Expert Mentorship", desc: "1-on-1 sessions with global industry leaders" },
    { title: "Funding Up to $50K", desc: "Access to angel investors and VC networks" },
    { title: "Office Space", desc: "Co-working space in Kathmandu" },
    { title: "Legal & Business Support", desc: "Company setup, IP, and compliance guidance" },
    { title: "Network Access", desc: "Connect with 1000+ entrepreneurs and investors" },
];

const TIMELINE_STEPS = [
    { step: "01", title: "Apply", desc: "Submit your application with your startup idea or early-stage venture", date: "Applications Open: March 2025" },
    { step: "02", title: "Selection", desc: "Shortlisted teams go through an interview and pitch round", date: "Selection: April 2025" },
    { step: "03", title: "Bootcamp", desc: "Intensive 2-week onboarding with workshops and mentor matching", date: "Bootcamp: May 2025" },
    { step: "04", title: "Build", desc: "6 months of structured incubation with milestones and check-ins", date: "Program: May–Nov 2025" },
    { step: "05", title: "Demo Day", desc: "Pitch to investors at the Startup Summit Nepal 2025", date: "Demo Day: Oct 2025" },
];

export default function CohortPage() {
    return (
        <LenisProvider>
            <main className="bg-void min-h-screen">
                <Navbar />

                {/* Hero */}
                <section className="pt-36 pb-16 border-b border-rule-inv relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <span className="font-label text-[16vw] text-white/[0.03] uppercase leading-none select-none">COHORT 5</span>
                    </div>
                    <div className="content-max relative z-10">
                        <AnimatedSection className="space-y-8">
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="bg-electric/15 border border-electric/35 px-4 py-1">
                                    <span className="font-label text-[10px] tracking-[3px] uppercase text-electric">Applications Open</span>
                                </div>
                            </div>
                            <h1 className="hero-title text-white">
                                TSN Incubator <br /> <span className="italic font-normal">Cohort 5</span>
                            </h1>
                            <p className="body-text text-white/55 max-w-2xl">
                                Join Nepal&apos;s premier startup incubation program. Get 6 months of mentorship,
                                funding opportunities up to $50K, office space, and direct access to our
                                network of investors and industry experts.
                            </p>
                            <div className="pt-4">
                                <MagneticButton>
                                    <a href="https://www.thestartupnetworknepal.com/incubator" target="_blank" rel="noopener noreferrer" className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-12 py-6 hover:bg-electric hover:text-white transition-all duration-500 shadow-xl inline-block">
                                        Apply Now →
                                    </a>
                                </MagneticButton>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="bg-surface section-py border-b border-rule/20">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-void">Program Benefits.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-rule/20"
                        >
                            {BENEFITS.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="group border-r border-b border-rule/20 p-8 md:p-10 space-y-4 hover:bg-void transition-colors duration-500"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="font-label text-electric text-[11px] tracking-[3px]">✓</span>
                                        <h3 className="section-h3 not-italic font-semibold text-void group-hover:text-white transition-colors">{benefit.title}</h3>
                                    </div>
                                    <p className="font-body text-[13px] text-lead group-hover:text-white/60 transition-colors leading-relaxed pl-8">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="bg-void section-py border-b border-rule-inv">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-white">How It Works.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="space-y-0"
                        >
                            {TIMELINE_STEPS.map((step, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    className="group border-b border-rule-inv py-8 md:py-10 flex flex-col md:flex-row gap-6 md:gap-16 hover:pl-4 transition-all duration-300"
                                >
                                    <span className="font-label text-[48px] leading-none text-electric/30 group-hover:text-electric transition-colors w-20 flex-shrink-0">
                                        {step.step}
                                    </span>
                                    <div className="flex-1 space-y-3">
                                        <h3 className="section-h3 not-italic font-semibold text-white group-hover:text-electric transition-colors">{step.title}</h3>
                                        <p className="font-body text-[14px] text-white/50">{step.desc}</p>
                                        <span className="font-label text-[9px] tracking-[3px] uppercase text-white/20">{step.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Who Should Apply */}
                <section className="bg-surface2 section-py border-b border-rule/20">
                    <div className="content-max">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <AnimatedSection className="space-y-8">
                                <h2 className="section-h2 text-void">Who Should Apply?</h2>
                                <ul className="space-y-4">
                                    {[
                                        "Early-stage startups with a validated idea or MVP",
                                        "Founders committed to building in Nepal/South Asia",
                                        "Teams of 1-4 members ready for intensive mentorship",
                                        "Startups across sectors: Tech, Health, Ed-Tech, FinTech, AgriTech",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-electric mt-1 flex-shrink-0">→</span>
                                            <span className="font-body text-[15px] text-lead leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedSection>
                            <AnimatedSection delay={0.1} className="flex flex-col justify-center space-y-8">
                                <div className="p-8 bg-surface border border-rule/20 space-y-6">
                                    <h3 className="section-h3 not-italic font-semibold text-void">Next Cohort</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center pb-3 border-b border-rule/20">
                                            <span className="font-body text-[13px] text-lead">Application Deadline</span>
                                            <span className="font-body text-[13px] font-medium text-void">April 15, 2025</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-rule/20">
                                            <span className="font-body text-[13px] text-lead">Program Start</span>
                                            <span className="font-body text-[13px] font-medium text-void">May 2025</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-body text-[13px] text-lead">Cohort Size</span>
                                            <span className="font-body text-[13px] font-medium text-void">10 Startups</span>
                                        </div>
                                    </div>
                                    <a href="https://www.thestartupnetworknepal.com/incubator" target="_blank" rel="noopener noreferrer" className="block w-full bg-void text-white font-body text-[11px] tracking-[4px] uppercase py-4 text-center hover:bg-electric transition-colors duration-500">
                                        Apply Now →
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </LenisProvider>
    );
}
