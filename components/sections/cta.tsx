"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import { LogoMark } from "@/components/logo"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-12"
        >
          <LogoMark />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 text-balance"
        >
          Ready to build the
          <br />
          <span className="italic">future?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Join Nepal's most ambitious founders and turn your vision into reality. Your journey starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton 
            variant="primary" 
            className="px-10 py-5 text-sm tracking-widest uppercase rounded-full"
          >
            Apply Now
          </MagneticButton>
          <MagneticButton 
            variant="ghost" 
            className="px-8 py-4 text-sm tracking-widest uppercase"
          >
            Contact Us
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
