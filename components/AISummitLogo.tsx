"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type AISummitLogoSize = "hero" | "section" | "inline" | "small" | "nav";

const sizeMap: Record<AISummitLogoSize, { className: string; sizes: string }> = {
  hero: { className: "h-[clamp(80px,12vw,140px)] w-auto", sizes: "140px" },
  section: { className: "h-[clamp(60px,8vw,100px)] w-auto", sizes: "100px" },
  inline: { className: "h-[clamp(32px,4vw,48px)] w-auto", sizes: "48px" },
  small: { className: "h-6 w-auto sm:h-8", sizes: "32px" },
  nav: { className: "h-8 w-auto lg:h-10", sizes: "40px" },
};

interface AISummitLogoProps {
  size?: AISummitLogoSize;
  className?: string;
}

export function AISummitLogo({ size = "inline", className }: AISummitLogoProps) {
  const { className: sizeClass, sizes } = sizeMap[size];
  return (
    <Image
      src="/events/ai-summit-2026/images/ai-summit-logo-transparent.png"
      alt="AI Summit 2026"
      width={140}
      height={140}
      sizes={sizes}
      className={cn("object-contain object-left", sizeClass, className)}
      priority={size === "hero"}
    />
  );
}
