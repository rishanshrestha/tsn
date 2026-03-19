"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const testimonials = [
  {
    quote: "The Startup Network gave me more than funding - they gave me a community that believes in Nepal's potential.",
    author: "Aashma Karki",
    role: "Founder, MeroHealth",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "From ideation to our first 1000 users, the mentorship here was invaluable. This is where dreams get built.",
    author: "Rajesh Shrestha", 
    role: "Co-founder, PayNepal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Being part of the Founder Circle connected me with investors who understood our vision for Nepal.",
    author: "Priya Tamang",
    role: "CEO, EduSathi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
]

export function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground mb-4 block">
            Community
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 text-balance">
            Voices from the network
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Hear from founders who have transformed their ideas into thriving businesses with our support.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-lg p-8 h-full flex flex-col hover:border-foreground/20 transition-colors">
                {/* Quote */}
                <blockquote className="flex-1 mb-8">
                  <p className="text-lg leading-relaxed text-pretty">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <MagneticButton 
            variant="outline"
            className="px-8 py-4 text-sm tracking-widest uppercase rounded-full"
          >
            Meet Our Founders
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
