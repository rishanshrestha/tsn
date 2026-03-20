"use client";

import { motion, Variants } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

export function Timeline() {
  return (
    <section id="events" className="bg-surface2 section-py relative overflow-hidden border-t border-rule/20">
      {/* History Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <span className="font-label text-[25vw] text-void/5 uppercase leading-none select-none">
          HISTORY
        </span>
      </div>

      <div className="content-max relative z-10">
        {/* Header */}
        <div className="mb-16">
          <AnimatedSection>
            <h2 className="section-h2 text-void mb-4">
              Our Journey <span className="italic font-normal">Since Launch</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-0"
        >
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ paddingLeft: 18 }}
              className="group border-b border-rule/30 py-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 transition-all duration-500 relative cursor-default"
            >
              {/* Year Column */}
              <div className="w-32 flex flex-col">
                <span className="font-label text-[56px] leading-none text-void/80 group-hover:text-electric transition-colors">
                  {item.year}
                </span>
                <span className="font-label text-[11px] tracking-[4px] uppercase text-lead mt-2">
                  {item.season}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="section-h3 not-italic font-semibold text-void group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>
                  <div className="px-3 py-1 border border-rule group-hover:border-void/40 transition-colors">
                    <span className="font-body text-[9px] tracking-[2px] uppercase text-lead">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <p className="font-body text-[14px] text-lead max-w-2xl leading-relaxed">
                  {item.description}
                </p>
                <p className="font-body text-[11px] tracking-[1px] text-lead/60 group-hover:text-lead transition-colors">
                  {item.stats}
                </p>
              </div>

              {/* Ghost Number */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
                <span className="font-label text-[120px] text-void opacity-[0.04] group-hover:opacity-[0.3] transition-opacity duration-700 leading-none select-none">
                  {String(TIMELINE.length - i).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
