"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    DAYS: 0,
    HRS: 0,
    MINS: 0,
    SECS: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        return;
      }

      setTimeLeft({
        DAYS: Math.floor(distance / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        MINS: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        SECS: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const interval = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 gap-0 border-l border-t border-rule-inv">
      {Object.entries(timeLeft).map(([label, value], i) => (
        <div 
          key={label} 
          className={cn(
            "p-8 flex flex-col items-center justify-center border-r border-b border-rule-inv",
          )}
        >
          <motion.span 
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-label text-[64px] leading-none text-white"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
          <span className="font-body text-[8px] tracking-[3px] uppercase text-white/40 mt-4">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

import { cn } from "@/lib/utils";
