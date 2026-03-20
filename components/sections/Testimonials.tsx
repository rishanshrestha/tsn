"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="bg-surface section-py border-t border-rule/20 overflow-hidden">
      <div className="content-max">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <AnimatedSection>
            <h2 className="section-h2 text-void">Founder Voices.</h2>
          </AnimatedSection>
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-rule/30 flex items-center justify-center hover:bg-void hover:text-white transition-all duration-500 group touch-manipulation"
              aria-label="Previous testimonial"
            >
              <span className="text-lg sm:text-xl group-hover:-translate-x-1 transition-transform">←</span>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 border border-rule/30 flex items-center justify-center hover:bg-void hover:text-white transition-all duration-500 group touch-manipulation"
              aria-label="Next testimonial"
            >
              <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex"
          >
            {TESTIMONIALS.map((item, i) => (
              <div key={i} className="min-w-full lg:min-w-[33.33%] px-4">
                <div className="bg-surface2 p-10 md:p-12 border border-rule/20 h-full space-y-8 flex flex-col justify-between group hover:bg-void transition-colors duration-700">
                  <div className="space-y-6">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-xl font-semibold text-void group-hover:text-white transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-body text-[10px] tracking-[2px] uppercase text-lead group-hover:text-white/40 transition-colors">
                        {item.role}
                      </span>
                    </div>
                    <div className="border-l-2 border-electric pl-6 py-1">
                      <p className="font-body italic text-[14px] font-light leading-relaxed text-lead group-hover:text-white/80 transition-colors">
                        "{item.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <span className="font-label text-[42px] leading-none text-rule group-hover:text-white/10 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative h-0.5 transition-all duration-500 bg-rule/30"
              style={{ width: activeIndex === i ? 48 : 24 }}
            >
              {activeIndex === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-electric"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
