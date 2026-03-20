"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const PILLARS = [
  {
    id: "01",
    name: "Strategic Programs",
    description: "Empowering founders to build impactful ventures through incubation and structured guidance.",
  },
  {
    id: "02",
    name: "Mentorship & Growth",
    description: "Bridging the gap between ideas and opportunities with access to global industry experts.",
  },
  {
    id: "03",
    name: "Asia-Wide Network",
    description: "Connecting startups across Asia to create a robust ecosystem of innovators and investors.",
  },
  {
    id: "04",
    name: "Sustainable Scaling",
    description: "Establishing Nepal as a regional hub for innovation and sustainable business growth.",
  },
];

export function About() {
  return (
    <div id="about" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left (Black) */}
      <div className="flex-1 bg-void section-py flex flex-col justify-center relative overflow-hidden">
        <div className="content-max w-full">
          <AnimatedSection className="max-w-xl space-y-8">
            <span className="font-label text-electric text-[11px] tracking-[6px] uppercase">— Our Mission</span>
            <h2 className="section-h2 text-white">The Engine of Nepal's Innovation.</h2>
            <p className="body-text text-white/55">
              TSN is a catalyst for the next generation of Nepali entrepreneurs. We believe that 
              world-class companies can be built in Kathmandu, powered by local talent and 
              global perspectives. Our platform provides the infrastructure, mentorship, and 
              capital required to transform bold ideas into scalable realities.
            </p>
            <div className="pt-12">
              <span className="font-label text-[9px] tracking-[5px] text-white/20 uppercase">
                Founded Kathmandu, 2022
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Decorative Sphere */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="w-[400px] h-[400px] rounded-full border border-electric/10 relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border border-electric/5 rounded-full rotate-45" />
            <div className="absolute inset-0 border border-electric/5 rounded-full -rotate-45" />
          </motion.div>
        </div>
      </div>

      {/* Right (Cream) */}
      <div className="flex-1 bg-surface2 section-py flex flex-col justify-center">
        <div className="content-max w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-0"
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={staggerItem}
                whileHover={{ x: 10 }}
                className="group border-b border-rule/30 py-10 flex gap-12 cursor-default"
              >
                <span className="font-display italic text-[56px] leading-none text-rule/40 transition-colors group-hover:text-void/60">
                  {pillar.id}
                </span>
                <div className="space-y-3 pt-2">
                  <h3 className="section-h3 text-void group-hover:text-electric transition-colors not-italic font-semibold">
                    {pillar.name}
                  </h3>
                  <p className="font-body text-[13px] text-lead leading-relaxed max-w-sm">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
