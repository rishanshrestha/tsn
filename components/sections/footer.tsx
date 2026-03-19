"use client"

import { Logo } from "@/components/logo"
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const links = {
  programs: [
    { label: "Incubation", href: "#" },
    { label: "Acceleration", href: "#" },
    { label: "Founder Circle", href: "#" },
    { label: "Startup Weekend", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Startup Directory", href: "#" },
    { label: "Investor Network", href: "#" },
    { label: "Job Board", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Team", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Careers", href: "#" },
  ],
}

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative py-20 md:py-28 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Logo size="small" className="mb-6" />
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Empowering Nepal's next generation of founders to build, connect, and scale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Programs</h4>
            <ul className="space-y-3">
              {links.programs.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nepal Startup Network. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
