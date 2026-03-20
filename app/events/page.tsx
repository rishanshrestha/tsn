"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import Image from "next/image";

const EVENT_SLUGS: Record<string, string> = {
  "2025": "summit-2025",
  "2024": "summit-2024",
  "2023": "summit-2023",
};

export default function EventsGallery() {
  return (
    <LenisProvider>
      <main className="bg-void min-h-screen">
        <Navbar />

        {/* Header Section */}
        <section className="pt-40 pb-20 border-b border-rule-inv">
          <div className="content-max">
            <AnimatedSection>
              <span className="font-label text-electric text-[11px] tracking-[6px] uppercase mb-8 block">
                — Our Journey
              </span>
              <h1 className="hero-title text-white mb-8">
                The Archive of <br /> <span className="italic font-normal">Impact.</span>
              </h1>
              <p className="body-text text-white/55 max-w-2xl">
                Relive the most pivotal moments of Nepal's startup history. From our
                inaugural summit in 2023 to the upcoming 5-day innovation festival in 2025.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-py bg-void">
          <div className="content-max space-y-20">
            {TIMELINE.map((event, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
              >
                {/* Media Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2 aspect-video bg-surface2 relative overflow-hidden group border border-rule-inv"
                >
                  {/* Faux Media Overlay */}
                  <div className="absolute inset-0 bg-void/40 group-hover:bg-void/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="font-label text-[10vw] lg:text-[5vw] text-white/5 uppercase select-none">
                      {event.year}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 z-20 flex gap-4">
                    <span className="px-3 py-1 border border-white/20 font-label text-[9px] tracking-widest text-white uppercase backdrop-blur-md">
                      {event.season}
                    </span>
                    <span className="px-3 py-1 bg-electric font-label text-[9px] tracking-widest text-white uppercase">
                      {event.subtitle}
                    </span>
                  </div>
                  {/* Placeholder Text - visible by default for accessibility */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-label text-[10px] tracking-[4px] text-white/60">MEDIA ARCHIVE · {event.year}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <span className="font-label text-electric text-[11px] tracking-[4px] uppercase">
                      {event.year} / {event.season}
                    </span>
                    <h2 className="section-h2 text-white leading-tight">
                      {event.title}
                    </h2>
                    <p className="body-text text-white/55">
                      {event.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 border-t border-rule-inv pt-8">
                    {event.stats.split(' / ').map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <span className="font-label text-[9px] tracking-[2px] uppercase text-white/20">Metric {idx + 1}</span>
                        <p className="font-body text-[13px] text-white/80">{stat}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Link href={`/events/${EVENT_SLUGS[event.year] || ""}`} className="font-label text-[11px] tracking-[4px] uppercase text-white hover:text-electric transition-colors flex items-center gap-4 group">
                      View Event Details
                      <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Highlights Grid */}
        <section className="section-py bg-surface2 border-y border-rule/20">
          <div className="content-max">
            <AnimatedSection className="mb-20">
              <h2 className="section-h2 text-void">Media Highlights.</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square bg-white border border-rule/20 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-void opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-label text-[8px] tracking-[3px] text-lead/30 uppercase">ARCHIVE_IMG_{idx}.JPG</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </LenisProvider>
  );
}
