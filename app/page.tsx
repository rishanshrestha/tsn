"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Timeline } from "@/components/sections/Timeline";
import { Upcoming } from "@/components/sections/Upcoming";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Advisors } from "@/components/sections/Advisors";
import { CTA } from "@/components/sections/CTA";
import { LenisProvider } from "@/components/layout/LenisProvider";

// Dynamic imports for client-only components
const CustomCursor = dynamic(
  () => import("@/components/layout/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

export default function HomePage() {
  return (
    <LenisProvider>
      <main className="relative bg-void min-h-screen">
        {/* Custom cursor - hidden on touch devices */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Page sections */}
        <Hero />
        <About />
        <Programs />
        <Timeline />
        <Upcoming />
        <Testimonials />
        <Team />
        <Advisors />
        <CTA />

        {/* Footer */}
        <Footer />
      </main>
    </LenisProvider>
  );
}
