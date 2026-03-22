"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { HeroScene } from "./HeroScene";
import { STATS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Logo } from "@/components/logo";

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Parallax mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * 20);
  };

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Phases of the scroll animation
  const logoZ = useTransform(scrollYProgress, [0, 0.35], [0, -100]);
  const logoScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0.1, 0.45], [1, 0]);

  // Phase 5 [0.78, 1.00]: Black curtain slices
  const curtainScaleX = useTransform(scrollYProgress, [0.78, 1], [0, 1]);

  const statsY = useTransform(scrollYProgress, [0.35, 0.55], ["100%", "0%"]);

  return (
    <div
      ref={targetRef}
      className="relative h-[280vh] sm:h-[320vh] md:h-[360vh] lg:h-[400vh] bg-void"
      onMouseMove={handleMouseMove}
    >
      {/* Three.js Background */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden relative">
        <HeroScene />

        {/* Hero Content */}
        <motion.div
          ref={containerRef}
          className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8"
          style={{
            scale: logoScale,
            translateZ: logoZ,
            opacity: heroOpacity,
            x: springX,
            y: springY
          }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-label text-[10px] sm:text-[11px] tracking-[4px] sm:tracking-[6px] uppercase text-white/25 mb-6 sm:mb-8 md:mb-12"
          >
            Est. 2022 · Kathmandu, Nepal
          </motion.p>

          {/* Official Logo Replace Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <Logo size="large" className="text-white scale-[1.2] sm:scale-[1.6] md:scale-[2] lg:scale-[2.5]" />
          </motion.div>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="font-body text-xs sm:text-sm font-light text-white/40 max-w-md mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed px-2"
          >
            Where Nepal's boldest ideas become world-class businesses.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <MagneticButton>
              <Link href="/#programs" className="bg-surface text-void font-body text-[10px] tracking-[2.5px] uppercase px-6 sm:px-10 py-3 sm:py-4 hover:bg-electric hover:text-white transition-colors duration-500 inline-block text-center">
                Explore Programs
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.thestartupnetworknepal.com/" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white font-body text-[10px] tracking-[2.5px] uppercase px-6 sm:px-10 py-3 sm:py-4 hover:bg-white hover:text-void transition-all duration-500 inline-block text-center">
                Watch Our Story →
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-void border-t border-rule-inv z-20"
          style={{ y: statsY }}
        >
          <div className="content-max grid grid-cols-2 md:grid-cols-4 divide-x divide-rule-inv py-6 sm:py-8 md:py-10">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-1 sm:gap-2 px-4 sm:px-6 md:px-8">
                <span className="font-label text-[28px] sm:text-[34px] md:text-[42px] leading-none text-white">{stat.value}</span>
                <span className="font-body text-[8px] sm:text-[9px] tracking-[2px] sm:tracking-[3px] uppercase text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 sm:bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 z-20"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-label text-[10px] tracking-[3px] text-white/40">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-electric to-transparent" />
        </motion.div>

        {/* Curtain Slices (Phase 5) */}
        <div className="absolute inset-0 z-50 pointer-events-none flex flex-col">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-void"
              style={{
                scaleX: curtainScaleX,
                originX: i % 2 === 0 ? 0 : 1,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
