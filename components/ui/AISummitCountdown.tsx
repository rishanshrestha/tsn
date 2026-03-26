"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountdownProps {
  targetDate: string;
  className?: string;
  mode?: "full" | "days";
}

export function AISummitCountdown({ targetDate, className, mode = "full" }: CountdownProps) {
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

  if (mode === "days") {
    return (
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [1, 0.75, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className={cn("border border-[#D8CCAF] bg-[#FFF9ED] px-8 py-10 text-center", className)}
      >
        <motion.p
          key={timeLeft.DAYS}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-ai-title text-6xl sm:text-7xl tracking-tight text-[#1D363B]"
        >
          {timeLeft.DAYS}
        </motion.p>
        <p className="font-ai-title text-[11px] tracking-[4px] uppercase text-[#B38A2A] mt-4">
          Days Left
        </p>
      </motion.div>
    );
  }

  return (
    <div className={cn("grid grid-cols-2 gap-0 border-l border-t border-ai-white/10", className)}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div 
          key={label} 
          className="p-6 sm:p-8 flex flex-col items-center justify-center border-r border-b border-ai-white/10 bg-black/20"
        >
          <motion.span 
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-ai-title text-5xl sm:text-6xl font-bold leading-none text-ai-white tracking-tighter"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
          <span className="font-ai-title text-[9px] tracking-[4px] uppercase text-ai-tech mt-4 font-medium">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
