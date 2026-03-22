"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "small" | "default" | "large";
  showText?: boolean;
}

export function Logo({ className = "", size = "default", showText = true }: LogoProps) {
  const dimensions = {
    small: { width: 32, height: 32 },
    default: { width: 48, height: 48 },
    large: { width: 120, height: 120 },
  };

  const { width, height } = dimensions[size];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-center"
      >
        <Image
          src="/apple-icon-trasnparent.png"
          alt="TSN Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </motion.div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-bold leading-none tracking-tight",
              size === "small" ? "text-lg" : size === "large" ? "text-5xl" : "text-2xl"
            )}
          >
            The Startup
          </span>
          <span
            className={cn(
              "font-display italic font-normal leading-none tracking-wide",
              size === "small" ? "text-sm" : size === "large" ? "text-2xl" : "text-lg"
            )}
          >
            Network
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoMark({ className = "", size = "default" }: Omit<LogoProps, "showText">) {
  return <Logo className={className} size={size} showText={false} />;
}
