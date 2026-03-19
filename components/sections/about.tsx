"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: "500+", label: "Founders" },
    { value: "120+", label: "Startups" },
    { value: "50M+", label: "Raised (NPR)" },
    { value: "25+", label: "Events" },
  ]

  return (
    <section id="about" className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl text-balance">
            Building Nepal's most ambitious startup community
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a collective of dreamers, builders, and disruptors who believe that great ideas can emerge from anywhere. Our mission is to provide the resources, mentorship, and community that Nepal's entrepreneurs need to succeed.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From early-stage ideation to scaling globally, we support founders at every step of their journey. Because when one of us wins, we all win.
            </p>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="font-serif text-4xl md:text-5xl font-medium mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
