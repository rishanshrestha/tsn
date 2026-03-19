"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/tilt-card"
import { ArrowUpRight, Lightbulb, Users, Rocket, Zap } from "lucide-react"

const programs = [
  {
    icon: Lightbulb,
    title: "Incubation",
    description: "12-week intensive program for early-stage startups. Get mentorship, workspace, and seed funding support.",
    tag: "Early Stage",
  },
  {
    icon: Rocket,
    title: "Acceleration",
    description: "Scale your startup with strategic partnerships, investor access, and market expansion guidance.",
    tag: "Growth",
  },
  {
    icon: Users,
    title: "Founder Circle",
    description: "Exclusive peer network for founders. Monthly masterminds, retreats, and lifetime community access.",
    tag: "Network",
  },
  {
    icon: Zap,
    title: "Startup Weekend",
    description: "54-hour hackathon to validate your idea. Build, pitch, and launch in one weekend.",
    tag: "Events",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="programs" className="relative py-32 md:py-48 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              Programs designed
              <br />
              for <span className="italic">impact</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Whether you're just starting out or ready to scale, we have a program that fits your journey.
          </p>
        </motion.div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full">
                <div className="group relative h-full bg-background border border-border/50 rounded-lg p-8 md:p-10 hover:border-foreground/20 transition-colors">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                    <program.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium">
                      {program.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Tag */}
                  <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase border border-border rounded-full">
                    {program.tag}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
