"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";

const WAYS_TO_JOIN = [
    {
        label: "FOUNDERS",
        title: "Join the Network",
        description: "Connect with like-minded entrepreneurs, access resources, mentorship, and grow your startup within Nepal's most credible ecosystem.",
        cta: "Join Now",
        href: "https://www.thestartupnetworknepal.com/join",
    },
    {
        label: "MENTORS",
        title: "Become a Mentor",
        description: "Share your expertise with ambitious founders. Guide startups through challenges and help build the next generation of Nepali companies.",
        cta: "Get Involved",
        href: "https://www.thestartupnetworknepal.com/get-involved",
    },
    {
        label: "PARTNERS",
        title: "Partner With Us",
        description: "Support Nepal's startup ecosystem and showcase your brand to entrepreneurs, investors, and innovators across South Asia.",
        cta: "Become a Partner",
        href: "https://www.thestartupnetworknepal.com/get-involved",
    },
    {
        label: "VOLUNTEERS",
        title: "Join the TSN Team",
        description: "Be part of the team that makes it happen. Help organize events, workshops, and community initiatives. Apply below — no payment required.",
        cta: "Apply Below",
        formId: "team-apply",
    },
];

const COMMUNITY_STATS = [
    { value: "1000+", label: "Community Members" },
    { value: "100+", label: "Startups Supported" },
    { value: "50+", label: "Mentors & Advisors" },
    { value: "20+", label: "Partners" },
];

export default function JoinPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [teamForm, setTeamForm] = useState({ name: "", email: "", role: "Volunteer", message: "" });
    const [teamSubmitted, setTeamSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail("");
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    const handleTeamApply = (e: React.FormEvent) => {
        e.preventDefault();
        if (teamForm.name.trim() && teamForm.email.trim()) {
            const mailto = `mailto:team@thestartupnetworknepal.com?subject=TSN%20Team%20Application%20-%20${encodeURIComponent(teamForm.role)}&body=${encodeURIComponent(
                `Name: ${teamForm.name}\nEmail: ${teamForm.email}\nRole: ${teamForm.role}\nMessage:\n${teamForm.message}`
            )}`;
            window.location.href = mailto;
            setTeamSubmitted(true);
            setTeamForm({ name: "", email: "", role: "Volunteer", message: "" });
            setTimeout(() => setTeamSubmitted(false), 5000);
        }
    };

    return (
        <LenisProvider>
            <main className="bg-void min-h-screen">
                <Navbar />

                {/* Hero */}
                <section className="pt-36 pb-16 border-b border-rule-inv relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <span className="font-label text-[14vw] text-white/[0.03] uppercase leading-none select-none">JOIN</span>
                    </div>
                    <div className="content-max relative z-10">
                        <AnimatedSection className="space-y-8">
                            <span className="font-label text-electric text-[11px] tracking-[6px] uppercase block">— Get Involved</span>
                            <h1 className="hero-title text-white">
                                Join the <br /> <span className="italic font-normal">Movement.</span>
                            </h1>
                            <p className="body-text text-white/55 max-w-2xl">
                                Whether you&apos;re a founder, investor, mentor, or just passionate about Nepal&apos;s
                                startup ecosystem — there&apos;s a place for you at TSN. Find your role and start
                                making an impact today.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Community Stats */}
                <section className="bg-surface2 section-py border-b border-rule/20">
                    <div className="content-max">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-rule/30">
                            {COMMUNITY_STATS.map((stat, i) => (
                                <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center justify-center gap-2 px-4">
                                    <span className="font-label text-[48px] leading-none text-void">{stat.value}</span>
                                    <span className="font-body text-[10px] tracking-[3px] uppercase text-lead">{stat.label}</span>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ways to Join */}
                <section className="bg-surface section-py border-b border-rule/20">
                    <div className="content-max">
                        <AnimatedSection className="mb-16">
                            <h2 className="section-h2 text-void">Ways to Contribute.</h2>
                        </AnimatedSection>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-2 border-l border-rule/20"
                        >
                            {WAYS_TO_JOIN.map((way, i) => (
                                <motion.div
                                    key={i}
                                    variants={staggerItem}
                                    {...("formId" in way && way.formId ? { id: way.formId } : {})}
                                    className="group border-r border-b border-rule/20 p-8 md:p-12 space-y-6 hover:bg-void transition-colors duration-500"
                                >
                                    <span className="font-label text-electric text-[11px] tracking-[4px] uppercase group-hover:text-white transition-colors">{way.label}</span>
                                    <h3 className="section-h3 not-italic font-semibold text-void group-hover:text-white transition-colors">{way.title}</h3>
                                    <p className="font-body text-[14px] text-lead group-hover:text-white/60 transition-colors leading-relaxed">{way.description}</p>
                                    {"formId" in way ? (
                                        <a
                                            href={`#${way.formId}`}
                                            className="font-label text-[11px] tracking-[4px] uppercase text-electric group-hover:text-white hover:translate-x-2 transition-all inline-block"
                                        >
                                            {way.cta} →
                                        </a>
                                    ) : (
                                        <a
                                            href={way.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-label text-[11px] tracking-[4px] uppercase text-electric group-hover:text-white hover:translate-x-2 transition-all inline-block"
                                        >
                                            {way.cta} →
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Join TSN Team - Application Form (No Payment) */}
                <section id="team-apply" className="bg-void section-py border-b border-rule-inv">
                    <div className="content-max">
                        <AnimatedSection className="max-w-2xl">
                            <span className="font-label text-electric text-[11px] tracking-[6px] uppercase block mb-4">— Apply Now</span>
                            <h2 className="section-h2 text-white mb-4">Join the TSN Team.</h2>
                            <p className="body-text text-white/55 mb-12">
                                Apply to be part of the Startup Network team. No payment required — we&apos;re looking for passionate individuals to help drive Nepal&apos;s startup ecosystem forward.
                            </p>
                            <form onSubmit={handleTeamApply} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="team-name" className="font-label text-[10px] tracking-[3px] uppercase text-white/60 block">
                                            Full Name
                                        </label>
                                        <input
                                            id="team-name"
                                            type="text"
                                            required
                                            value={teamForm.name}
                                            onChange={(e) => setTeamForm((f) => ({ ...f, name: e.target.value }))}
                                            placeholder="Your name"
                                            className="w-full bg-white/5 border border-rule-inv px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-electric transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="team-email" className="font-label text-[10px] tracking-[3px] uppercase text-white/60 block">
                                            Email
                                        </label>
                                        <input
                                            id="team-email"
                                            type="email"
                                            required
                                            value={teamForm.email}
                                            onChange={(e) => setTeamForm((f) => ({ ...f, email: e.target.value }))}
                                            placeholder="you@example.com"
                                            className="w-full bg-white/5 border border-rule-inv px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-electric transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="team-role" className="font-label text-[10px] tracking-[3px] uppercase text-white/60 block">
                                        Role You&apos;re Applying For
                                    </label>
                                    <select
                                        id="team-role"
                                        value={teamForm.role}
                                        onChange={(e) => setTeamForm((f) => ({ ...f, role: e.target.value }))}
                                        className="w-full bg-white/5 border border-rule-inv px-4 py-3 pr-10 font-body text-[14px] text-white focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer bg-no-repeat bg-[length:12px] bg-[right_1rem_center]"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 8L1 3h10z'/%3E%3C/svg%3E")` }}
                                    >
                                        <option value="Volunteer">Volunteer</option>
                                        <option value="Intern">Intern</option>
                                        <option value="Event Coordinator">Event Coordinator</option>
                                        <option value="Community Manager">Community Manager</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="team-message" className="font-label text-[10px] tracking-[3px] uppercase text-white/60 block">
                                        Tell us about yourself
                                    </label>
                                    <textarea
                                        id="team-message"
                                        rows={4}
                                        value={teamForm.message}
                                        onChange={(e) => setTeamForm((f) => ({ ...f, message: e.target.value }))}
                                        placeholder="Why do you want to join? What skills or experience can you bring?"
                                        className="w-full bg-white/5 border border-rule-inv px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-electric transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-surface text-void font-body text-[11px] tracking-[4px] uppercase px-10 py-4 hover:bg-electric hover:text-white transition-all duration-500"
                                >
                                    Submit Application
                                </button>
                                {teamSubmitted && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="font-body text-[12px] text-electric font-medium"
                                    >
                                        ✓ Your email client will open to send the application. Thank you!
                                    </motion.p>
                                )}
                            </form>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Newsletter + Quick Links */}
                <section className="bg-void section-py">
                    <div className="content-max">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Newsletter */}
                            <AnimatedSection className="space-y-8">
                                <h2 className="section-h2 text-white">Stay Updated.</h2>
                                <p className="body-text text-white/55">
                                    Get the latest news about events, opportunities, and startup ecosystem updates
                                    delivered to your inbox.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-2">
                                        <span className="font-body text-[12px] text-white/30">What you&apos;ll get:</span>
                                        {["Weekly startup news", "Event notifications", "Funding opportunities", "Networking events"].map((item, i) => (
                                            <span key={i} className="font-body text-[13px] text-white/50 flex items-center gap-2">
                                                <span className="text-electric">✓</span> {item}
                                            </span>
                                        ))}
                                    </div>
                                    <form onSubmit={handleSubmit} className="relative border-b border-rule-inv py-4 group focus-within:border-electric transition-colors mt-4">
                                        <input
                                            type="email"
                                            placeholder="YOUR EMAIL ADDRESS"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-transparent font-label text-[14px] tracking-[3px] text-white placeholder:text-white/20 focus:outline-none uppercase"
                                            required
                                        />
                                        <button type="submit" className="absolute right-0 bottom-4 font-label text-[11px] tracking-[4px] uppercase text-electric hover:translate-x-2 transition-transform">
                                            Subscribe
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
                                </div>
                            </AnimatedSection>

                            {/* Quick Actions */}
                            <AnimatedSection delay={0.1} className="space-y-8">
                                <h2 className="section-h2 text-white">Quick Actions.</h2>
                                <div className="space-y-0">
                                    {[
                                        { label: "Apply for Incubator", href: "/cohort" },
                                        { label: "AI Summit 2026", href: "/events/ai-summit-2026" },
                                    { label: "Attend Summit 2025", href: "/events/summit-2025" },
                                        { label: "View Gallery", href: "/gallery" },
                                        { label: "Contact Us", href: "https://www.thestartupnetworknepal.com/contact" },
                                    ].map((action, i) => {
                                        const isExternal = action.href.startsWith("http");
                                        const Component = isExternal ? "a" : Link;
                                        const extraProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
                                        return (
                                            <Component
                                                key={i}
                                                href={action.href}
                                                {...extraProps}
                                                className="group flex items-center justify-between py-6 border-b border-rule-inv hover:pl-4 transition-all duration-300"
                                            >
                                                <span className="font-display text-xl font-semibold text-white group-hover:text-electric transition-colors">{action.label}</span>
                                                <span className="text-white/20 group-hover:text-electric group-hover:translate-x-2 transition-all duration-300 text-xl">→</span>
                                            </Component>
                                        );
                                    })}
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
