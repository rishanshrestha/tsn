"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection, staggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const SPEAKERS = [
  {
    name: "Dr. Arati Sharma",
    role: "AI Ethics Researcher",
    company: "Global Tech Institute",
    image: "/images/speakers/speaker1.jpg", // Placeholder
    category: "Policy",
  },
  {
    name: "Sandeep Gupta",
    role: "Lead Machine Learning Engineer",
    company: "Neural Systems",
    image: "/images/speakers/speaker2.jpg", // Placeholder
    category: "Technology",
  },
  {
    name: "Priya Rai",
    role: "Sustainable Dev Lead",
    company: "Future Cities Lab",
    image: "/images/speakers/speaker3.jpg", // Placeholder
    category: "Development",
  },
  {
    name: "Rajesh Hamal",
    role: "Keynote Speaker",
    company: "Innovation Hub",
    image: "/images/speakers/speaker4.jpg", // Placeholder
    category: "Technology",
  },
];

export function SpeakersSection() {
  return (
    <section className="bg-black section-py border-b border-ai-white/10">
      <div className="content-max">
        <AnimatedSection className="mb-16">
          <h2 className="font-ai-title text-4xl sm:text-5xl text-ai-white font-bold mb-6">
            Meet the Speakers
          </h2>
          <p className="font-ai-body text-ai-grey-400 max-w-2xl leading-relaxed">
            Leading minds in AI, policy, and development sharing their insights 
            to shape Nepal's technological future.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SPEAKERS.map((speaker, i) => {
            const accentColor = 
              speaker.category === "Policy" ? "text-ai-policy" : 
              speaker.category === "Technology" ? "text-ai-tech" : 
              "text-ai-dev";
            
            const borderColor = 
              speaker.category === "Policy" ? "border-ai-policy/30" : 
              speaker.category === "Technology" ? "border-ai-tech/30" : 
              "border-ai-dev/30";

            return (
              <motion.div
                key={i}
                variants={staggerItem}
                className={cn(
                  "group relative overflow-hidden rounded-lg border bg-ai-grey-900/50 transition-all duration-500 hover:scale-[1.02]",
                  borderColor
                )}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  {/* Placeholder for image - using a colored div if image is missing */}
                  <div className="absolute inset-0 bg-ai-grey-800 flex items-center justify-center text-ai-grey-600 font-ai-title text-sm italic">
                    [Image Placeholder]
                  </div>
                  {/* <Image 
                    src={speaker.image} 
                    alt={speaker.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  /> */}
                  
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className={cn("font-ai-title text-[10px] tracking-[2px] uppercase mb-2 block", accentColor)}>
                      {speaker.category}
                    </span>
                    <h3 className="font-ai-title text-xl text-ai-white font-bold leading-tight">
                      {speaker.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-2">
                  <p className="font-ai-body text-sm text-ai-grey-300 font-medium">
                    {speaker.role}
                  </p>
                  <p className="font-ai-body text-xs text-ai-grey-500">
                    {speaker.company}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
