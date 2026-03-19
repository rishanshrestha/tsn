"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16"
        >
          <Logo size="large" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed"
        >
          Empowering Nepal's next generation of founders to build, connect, and scale
        </motion.p>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-12 text-balance"
        >
          Where ideas become
          <br />
          <span className="italic">movements</span>
        </motion.h1>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton 
            variant="primary" 
            className="px-8 py-4 text-sm tracking-widest uppercase rounded-full"
          >
            Join the Network
          </MagneticButton>
          <MagneticButton 
            variant="outline" 
            className="px-8 py-4 text-sm tracking-widest uppercase rounded-full"
          >
            Explore Startups
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  )
}
