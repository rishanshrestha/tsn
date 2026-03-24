"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AISummitPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="w-full max-w-md space-y-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="font-ai-title text-4xl sm:text-5xl text-ai-white font-bold tracking-tighter">
                AI SUMMIT 2026
              </h2>
              <p className="font-ai-body text-ai-grey-500 uppercase tracking-[4px] text-[10px]">
                NEPAL'S FUTURE IS LOADING
              </p>
            </motion.div>

            <div className="relative h-[2px] w-full bg-ai-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-ai-tech shadow-[0_0_10px_var(--ai-tech)]"
              />
            </div>

            <div className="flex justify-between items-center font-ai-title text-[10px] text-ai-grey-600 tracking-[2px] uppercase">
              <span>Initializing Core</span>
              <span>{Math.round(progress)}%</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-left">
              {[
                "Neural Network Ready",
                "Policy Framework Loaded",
                "Tech Ecosystem Synced",
                "Development Goals Active",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: progress > (i + 1) * 20 ? 1 : 0, x: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-ai-dev rounded-full" />
                  <span className="font-ai-body text-[8px] text-ai-grey-500 uppercase tracking-widest leading-none">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-12 left-0 w-full flex justify-center">
            <p className="font-ai-body text-[8px] text-ai-grey-700 uppercase tracking-[5px]">
              Shaping the future of AI in Nepal
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
