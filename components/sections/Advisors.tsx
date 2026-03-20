"use client";

import { motion, Variants } from "framer-motion";
import { ADVISORS } from "@/lib/constants";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";

export function Advisors() {
  return (
    <section id="advisors" className="bg-surface2 section-py border-t border-rule/20">
      <div className="content-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <AnimatedSection>
            <h2 className="section-h2 text-void">Board of <br /> Advisors.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="font-body text-[15px] text-lead leading-relaxed max-w-sm text-right">
              Strategic guidance from global industry experts,
              investors, and thought leaders.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-3 border-l border-rule/20"
        >
          {ADVISORS.map((advisor, i) => (
            <TiltCard key={i} className="group border-r border-b border-rule/20 bg-surface2">
              <motion.div
                variants={staggerItem}
                className="p-10 md:p-12 h-full flex flex-col justify-between space-y-12 transition-colors duration-700 group-hover:bg-void group-hover:text-white"
              >
                <div className="space-y-8">
                  <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center transition-colors group-hover:bg-electric">
                    <span className="font-label text-xl tracking-[4px] text-void group-hover:text-white pt-1">
                      {advisor.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display text-xl font-semibold text-void group-hover:text-white transition-colors">
                      {advisor.name}
                    </h4>
                    <p className="font-body text-[10px] tracking-[2px] uppercase text-lead group-hover:text-white/40 transition-colors">
                      {advisor.role}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-12">
                  <span className="font-label text-[42px] leading-none text-rule group-hover:text-white/10 transition-colors select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
