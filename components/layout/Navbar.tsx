"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Programs", href: "/#programs" },
  { name: "Events", href: "/events" },
  { name: "AI Summit", href: "/events/ai-summit-2026" },
  { name: "Gallery", href: "/gallery" },
  { name: "Team", href: "/#team" },
  { name: "Community", href: "/#community" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Switch nav text color based on scroll progress (if sections are white/black)
  // This is a simplified version - in a real app, you'd use Intersection Observer per section
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ["#fff", "#fff", "#050505", "#050505", "#050505", "#050505", "#050505", "#050505", "#050505", "#050505", "#fff"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-transparent",
        isScrolled && "bg-void/88 backdrop-blur-xl border-rule-inv"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="content-max h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
          <Link href="/" className="group flex-shrink-0 min-w-0">
          <Logo size="small" showText={true} className="text-surface" />
        </Link>

        {/* Desktop Links - hide on smaller screens to avoid overflow */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-body text-[10px] tracking-[3px] uppercase text-surface/60 hover:text-surface transition-colors relative group overflow-hidden"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-electric -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo" />
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden lg:block flex-shrink-0">
          <Link href="/join" className="bg-surface text-void font-body text-[10px] tracking-[2.5px] uppercase px-8 py-3.5 hover:bg-electric hover:text-white transition-colors duration-500 inline-block">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-surface block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-surface block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-surface block"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 bg-void z-[110] flex flex-col items-center justify-center p-6 sm:p-8 lg:hidden overflow-y-auto"
          >
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 sm:p-4 text-surface font-label text-[11px] sm:text-base tracking-[3px] uppercase hover:text-electric transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
            <div className="flex flex-col gap-6 sm:gap-8 text-center pt-16 sm:pt-0">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-surface hover:text-electric transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 sm:mt-8 bg-surface text-void font-body text-[10px] sm:text-[11px] tracking-[3px] uppercase px-10 sm:px-12 py-3.5 sm:py-4 inline-block hover:bg-electric hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
