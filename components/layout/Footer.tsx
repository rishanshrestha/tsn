"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FOOTER_LINKS = [
  {
    title: "Programs",
    links: [
      { name: "Incubator", href: "/cohort" },
      { name: "Accelerator", href: "/cohort" },
      { name: "AI Summit 2026", href: "/events/ai-summit-2026" },
      { name: "Summit 2025", href: "/events/summit-2025" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Join Network", href: "/join" },
      { name: "Become a Mentor", href: "https://www.thestartupnetworknepal.com/get-involved" },
      { name: "Attend Events", href: "/events" },
      { name: "Contact Us", href: "https://www.thestartupnetworknepal.com/contact" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Team", href: "/#team" },
      { name: "Advisors", href: "/#advisors" },
      { name: "Partners", href: "https://www.thestartupnetworknepal.com/" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "LI", href: "https://www.linkedin.com/company/the-startup-network-nepal/" },
  { label: "FB", href: "https://www.facebook.com/thestartupnetworknepal" },
  { label: "IG", href: "https://www.instagram.com/thestartupnetworknepal/" },
  { label: "TW", href: "https://x.com/tsnnepal" },
];

export function Footer() {
  return (
    <footer className="bg-void text-surface pt-20 pb-12 border-t border-rule-inv">
      <div className="content-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <span className="font-label text-2xl tracking-[6px] uppercase">
                TSN NEPAL
              </span>
              <p className="font-body text-[15px] font-light text-lead leading-relaxed max-w-sm">
                Where Nepal&apos;s boldest ideas become world-class businesses.
                Nepal&apos;s most credible startup ecosystem.
              </p>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-rule-inv flex items-center justify-center font-label text-[10px] tracking-widest hover:bg-surface hover:text-void transition-all duration-500"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title} className="space-y-8">
              <h4 className="font-label text-[10px] tracking-[5px] uppercase text-surface/25">
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-[13px] text-surface/45 hover:text-surface transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="font-body text-[13px] text-surface/45 hover:text-surface transition-colors duration-300"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-rule-inv flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-body text-surface/30 tracking-widest uppercase">
          <p>© 2026 THE STARTUP NETWORK NEPAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="https://www.thestartupnetworknepal.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-surface transition-colors">Privacy Policy</a>
            <a href="https://www.thestartupnetworknepal.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-surface transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
