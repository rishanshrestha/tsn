"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewportAmount?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  viewportAmount = 0.1,
}: AnimatedSectionProps) {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: ease,
        delay: delay,
      }}
      viewport={{ once: true, amount: viewportAmount }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
