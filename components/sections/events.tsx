"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Calendar, MapPin } from "lucide-react"

const events = [
  {
    date: "APR 15",
    title: "Startup Weekend Kathmandu",
    location: "Durbarmarg, Kathmandu",
    type: "Hackathon",
  },
  {
    date: "APR 28",
    title: "Founder Fireside Chat",
    location: "Virtual Event",
    type: "Networking",
  },
  {
    date: "MAY 10",
    title: "Pitch Night Vol. 12",
    location: "Patan Museum",
    type: "Pitch",
  },
  {
    date: "MAY 25",
    title: "Nepal Tech Summit 2026",
    location: "Hotel Yak & Yeti",
    type: "Conference",
  },
]

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" className="relative py-32 md:py-48 px-6 bg-card">
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
              Upcoming
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-balance">
              Events & gatherings
            </h2>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase hover:text-muted-foreground transition-colors group"
          >
            View Calendar
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Events list */}
        <div className="space-y-4">
          {events.map((event, i) => (
            <motion.a
              key={event.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group block"
            >
              <div className="relative bg-background border border-border/50 rounded-lg p-6 md:p-8 hover:border-foreground/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Date */}
                  <div className="flex-shrink-0 w-20">
                    <div className="font-serif text-2xl font-medium">{event.date}</div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-border" />

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                      <span className="px-2 py-0.5 border border-border rounded-full text-xs tracking-wider uppercase">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
