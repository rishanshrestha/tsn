"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * Detect if user is on a touch device. Lenis smooth scroll can interfere with
 * the fixed navbar and touch scrolling on mobile - we use native scroll there.
 */
function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (isTouchDevice()) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
