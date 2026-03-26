"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AISummitLogo } from "@/components/AISummitLogo";
import { cn } from "@/lib/utils";

const SUMMIT_NAV_LINKS = [
  { name: "Overview", href: "#overview" },
  { name: "Themes", href: "#themes" },
  { name: "Speakers", href: "#speakers" },
  { name: "Moderators", href: "#moderators" },
  { name: "Itinerary", href: "#itinerary" },
  { name: "Tickets", href: "#ticketing" },
] as const;

export function AISummitNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-[120] border-b transition-all duration-500",
        isScrolled
          ? "bg-[#FFFCF5]/92 backdrop-blur-xl border-[#DCCFAD]"
          : "bg-[#FFFCF5]/75 backdrop-blur-md border-transparent"
      )}
    >
      <div className="content-max h-16 sm:h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Link href="/events/ai-summit-2026" className="shrink-0" aria-label="AI Summit home">
            <AISummitLogo size="nav" className="drop-shadow-[0_0_20px_rgba(15,76,92,0.16)]" />
          </Link>
          <span className="hidden sm:block font-ai-title text-[10px] tracking-[3px] uppercase text-[#496A6E]">
            AI Summit Nepal 2026
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {SUMMIT_NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-ai-title text-[10px] tracking-[3px] uppercase text-[#3A5D62] hover:text-[#0F4C5C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/"
            className="border border-[#D8CCAF] px-5 py-2.5 font-ai-title text-[10px] tracking-[2.5px] uppercase text-[#1D363B] hover:bg-[#1D363B] hover:text-[#FFF9ED] transition-colors"
          >
            Main Website
          </Link>
          <a
            href="#registration-form"
            className="bg-[#0F4C5C] text-[#FFF9ED] px-5 py-2.5 font-ai-title text-[10px] tracking-[2.5px] uppercase hover:bg-[#166272] transition-colors"
          >
            Apply Now
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle summit menu"
        >
          <span className="block w-6 h-0.5 bg-[#1D363B] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[#1D363B] mb-1.5" />
          <span className="block w-6 h-0.5 bg-[#1D363B]" />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="lg:hidden border-t border-[#DCCFAD] bg-[#FFFCF5] px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {SUMMIT_NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-ai-title text-[11px] tracking-[3px] uppercase text-[#3A5D62]"
                >
                  {link.name}
                </a>
              ))}
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 border border-[#D8CCAF] px-4 py-3 text-center font-ai-title text-[10px] tracking-[2.5px] uppercase text-[#1D363B]"
              >
                Main Website
              </Link>
              <a
                href="#registration-form"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#0F4C5C] text-[#FFF9ED] px-4 py-3 text-center font-ai-title text-[10px] tracking-[2.5px] uppercase"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
