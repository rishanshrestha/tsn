"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Logo, LogoMark } from "@/components/logo"
import { MagneticButton } from "@/components/magnetic-button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Community", href: "#community" },
  { label: "Events", href: "#events" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    
    handleScroll() // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
          hasScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            hasScrolled ? 'bg-background/80 backdrop-blur-xl border border-border/50' : ''
          }`}
        >
          {/* Logo */}
          <a href="#" className="relative z-10">
            {hasScrolled ? (
              <LogoMark />
            ) : (
              <Logo size="small" />
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton 
              variant="primary"
              className="px-6 py-2.5 text-xs tracking-widest uppercase rounded-full"
            >
              Join Us
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 bg-background"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                y: isOpen ? 0 : 20 
              }}
              transition={{ delay: isOpen ? 0.1 * i : 0 }}
              className="font-serif text-3xl hover:text-muted-foreground transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20 
            }}
            transition={{ delay: isOpen ? 0.4 : 0 }}
          >
            <MagneticButton 
              variant="primary"
              className="px-8 py-4 text-sm tracking-widest uppercase rounded-full mt-4"
            >
              Join Us
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
