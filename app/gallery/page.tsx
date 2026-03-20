"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CATEGORIES = ["All", "Summit 2024", "Summit 2023", "Workshops", "Community"];

const GALLERY_ITEMS = [
    { id: 1, category: "Summit 2024", title: "Opening Keynote", description: "500+ attendees gathered for the second annual summit", aspect: "video" },
    { id: 2, category: "Summit 2024", title: "Startup Pitching Contest", description: "Taximandu wins Best Startup of the Year", aspect: "square" },
    { id: 3, category: "Summit 2024", title: "Networking Session", description: "Entrepreneurs connecting with investors and mentors", aspect: "portrait" },
    { id: 4, category: "Summit 2023", title: "Inaugural Summit", description: "350+ attendees at Nepal's first startup summit", aspect: "landscape" },
    { id: 5, category: "Summit 2023", title: "Panel Discussion", description: "Industry leaders sharing insights on Nepal's tech future", aspect: "square" },
    { id: 6, category: "Summit 2023", title: "Intern Nepal Award", description: "Winner of the inaugural pitching contest", aspect: "video" },
    { id: 7, category: "Workshops", title: "Tech Entrepreneurship Workshop", description: "Hands-on sessions with industry experts", aspect: "landscape" },
    { id: 8, category: "Workshops", title: "Mentor Meetups", description: "1-on-1 mentorship sessions with global advisors", aspect: "portrait" },
    { id: 9, category: "Community", title: "Founder Circle Meetup", description: "Monthly community gathering in Kathmandu", aspect: "square" },
    { id: 10, category: "Community", title: "TSN Anniversary", description: "Celebrating 3 years of building Nepal's startup dream", aspect: "landscape" },
    { id: 11, category: "Summit 2024", title: "Speaker Panel", description: "35 speakers from across Asia sharing expertise", aspect: "portrait" },
    { id: 12, category: "Community", title: "Partner Showcase", description: "Our partners supporting Nepal's startup ecosystem", aspect: "video" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <LenisProvider>
            <main className="bg-void min-h-screen">
                <Navbar />

                {/* Header */}
                <section className="pt-36 pb-16 border-b border-rule-inv">
                    <div className="content-max">
                        <AnimatedSection>
                            <span className="font-label text-electric text-[11px] tracking-[6px] uppercase mb-6 block">
                                — Gallery
                            </span>
                            <h1 className="hero-title text-white mb-6">
                                Moments That <br /> <span className="italic font-normal">Matter.</span>
                            </h1>
                            <p className="body-text text-white/55 max-w-2xl">
                                A visual archive of the milestones, connections, and breakthroughs
                                that define Nepal&apos;s startup ecosystem.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Category Filters */}
                <section className="bg-void border-b border-rule-inv">
                    <div className="content-max py-6">
                        <div className="flex flex-wrap gap-3">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`font-label text-[10px] tracking-[3px] uppercase px-5 py-2.5 border transition-all duration-300 ${activeCategory === cat
                                            ? "bg-electric text-white border-electric"
                                            : "border-rule-inv text-white/40 hover:text-white hover:border-white/30"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Masonry Grid */}
                <section className="section-py bg-void">
                    <div className="content-max">
                        <motion.div
                            layout
                            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
                        >
                            <AnimatePresence mode="popLayout">
                                {filtered.map((item) => {
                                    const heightClass =
                                        item.aspect === "portrait" ? "h-[420px]" :
                                            item.aspect === "landscape" ? "h-[260px]" :
                                                item.aspect === "video" ? "h-[320px]" :
                                                    "h-[340px]";

                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className={`break-inside-avoid ${heightClass} bg-surface2/5 border border-rule-inv relative overflow-hidden group cursor-pointer`}
                                        >
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="font-label text-[8vw] md:text-[4vw] text-white/[0.03] uppercase select-none leading-none">
                                                    {item.category.split(" ")[0]}
                                                </span>
                                            </div>

                                            {/* Play Button for Videos */}
                                            {item.aspect === "video" && (
                                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                                    <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-electric group-hover:bg-electric/20 transition-all duration-500">
                                                        <span className="text-white text-lg ml-1">▶</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="font-label text-[9px] tracking-[3px] uppercase text-electric mb-2 block">
                                                    {item.category}
                                                </span>
                                                <h3 className="font-display text-lg font-semibold text-white mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="font-body text-[12px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    {item.description}
                                                </p>
                                            </div>

                                            {/* Corner Accent */}
                                            <div className="absolute top-4 right-4 z-20">
                                                <div className="w-2 h-2 bg-electric/50 group-hover:bg-electric transition-colors duration-300" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>

                        {/* Stats Bar */}
                        <div className="mt-16 pt-8 border-t border-rule-inv grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="space-y-1">
                                <span className="font-label text-[32px] text-white leading-none">50+</span>
                                <p className="font-body text-[10px] tracking-[2px] uppercase text-white/30">Photos</p>
                            </div>
                            <div className="space-y-1">
                                <span className="font-label text-[32px] text-white leading-none">12</span>
                                <p className="font-body text-[10px] tracking-[2px] uppercase text-white/30">Videos</p>
                            </div>
                            <div className="space-y-1">
                                <span className="font-label text-[32px] text-white leading-none">3</span>
                                <p className="font-body text-[10px] tracking-[2px] uppercase text-white/30">Events Covered</p>
                            </div>
                            <div className="space-y-1">
                                <span className="font-label text-[32px] text-white leading-none">1000+</span>
                                <p className="font-body text-[10px] tracking-[2px] uppercase text-white/30">Moments Captured</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </LenisProvider>
    );
}
