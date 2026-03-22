"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { PROGRAMS } from "@/lib/constants";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";

export function Programs() {
  return (
    <section id="programs" className="bg-surface section-py border-t border-rule/20">
      <div className="content-max">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <AnimatedSection viewportAmount={0.5}>
            <h2 className="section-h2 text-void">Our Strategic Programs.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} viewportAmount={0.5} className="flex flex-col md:flex-row gap-8 items-start md:items-center pl-0 lg:pl-12 lg:border-l border-rule/20">
            <p className="font-body text-[15px] text-lead leading-relaxed max-w-sm">
              From ideation to exit, TSN provides the frameworks and networks
              required to build institutional-grade startups in the Himalayan region.
            </p>
            <Link href="/#programs" className="font-label text-[11px] tracking-[4px] uppercase text-electric hover:translate-x-2 transition-transform inline-block">
              View All Programs →
            </Link>
          </AnimatedSection>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-rule/20"
        >
          {PROGRAMS.map((program) => (
            <TiltCard key={program.id} className="group border-r border-b border-rule/20 bg-surface">
              <motion.div
                className="p-10 md:p-12 h-full flex flex-col justify-between transition-colors duration-500 group-hover:bg-void group-hover:text-white"
                variants={staggerItem}
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <span className="label-caps text-electric group-hover:text-white transition-colors">
                      {program.label}
                    </span>
                    <span className="font-display italic text-2xl text-rule group-hover:text-white/20 transition-colors">
                      {program.id}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="section-h3 not-italic font-semibold text-void group-hover:text-white transition-colors">
                      {program.title}
                    </h3>
                    <p className="font-body text-[13px] text-lead group-hover:text-white/60 transition-colors leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[9px] tracking-[3px] uppercase text-void/70 group-hover:text-white/40">Duration / Cohort</span>
                    <span className="font-body text-[12px] font-medium text-void group-hover:text-white transition-colors">
                      {program.duration} · {program.cohort}
                    </span>
                  </div>

                  <div className="relative h-[2px] w-9 bg-electric group-hover:bg-white transition-all duration-500 group-hover:w-20" />

                  <div className="flex justify-end overflow-hidden">
                    <motion.span
                      className="text-2xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-electric group-hover:text-white"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
