"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProgramsSection } from "@/components/sections/programs"
import { CommunitySection } from "@/components/sections/community"
import { EventsSection } from "@/components/sections/events"
import { CTASection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

// Dynamic imports for heavy client-only components
const CustomCursor = dynamic(
  () => import("@/components/custom-cursor").then(mod => mod.CustomCursor),
  { ssr: false }
)

const ParticleSystem = dynamic(
  () => import("@/components/particle-system").then(mod => mod.ParticleSystem),
  { ssr: false }
)

export default function HomePage() {
  return (
    <main className="relative">
      {/* Custom cursor - hidden on touch devices */}
      <div className="hidden lg:block">
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      </div>

      {/* Subtle particle system */}
      <Suspense fallback={null}>
        <ParticleSystem />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Page sections */}
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <CommunitySection />
      <EventsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
