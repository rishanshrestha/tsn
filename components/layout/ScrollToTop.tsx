"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scrolls to top on route change. Ensures users see page content from the beginning
 * when navigating to a new page. For hash anchors (#section), scrolls to element
 * after a brief delay to allow hydration.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    
    if (hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      const id = hash.slice(1);
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      const t = setTimeout(scrollToElement, 100);
      return () => clearTimeout(t);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
