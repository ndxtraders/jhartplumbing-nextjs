"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";
const jhartLogo = "/images/jhart-logo.webp";
const bbbBadge = "/images/bbb-badge.webp";
const nateBadge = "/images/nate-badge.webp";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative bg-navy-deep", className)}>
      {/* Accent top border */}
      <div className="h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary opacity-60" />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 justify-items-center md:justify-items-start">
          {/* Col 1: Brand + contact */}
          <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="h-16 flex items-center">
              <img src={jhartLogo} alt="J. Hart Plumbing" className="h-24 w-auto brightness-0 invert" width={144} height={96} loading="lazy" />
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="text-sm text-white/60 leading-snug">
                  <div className="text-white/80 font-semibold">18887 Plum Industrial Ct.</div>
                  <div>Sonora, CA 95370</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href="tel:+12095331978" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
                  (209) 533-1978
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <a href="mailto:info@jhartplumbing.com" className="text-sm text-white/60 hover:text-white transition-colors">
                  info@jhartplumbing.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="text-sm text-white/60">
                  Mon–Fri <span className="text-white/80 font-medium">7:30 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Link columns */}
          <div className="md:col-span-4 w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-xs mx-auto md:mx-0 md:max-w-none">
              <div className="text-right md:text-left">
                <div className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Services</div>
                <ul className="space-y-3">
                  {[
                    { label: "Plumbing", href: "/services/plumbing" },
                    { label: "HVAC", href: "/services/hvac" },
                    { label: "Radiant Heating", href: "/services/radiant-heating" },
                    { label: "Water Treatment", href: "/services/water-treatment" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Company</div>
                <ul className="space-y-3">
                  {[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                    { label: "Reviews", href: "/reviews" },
                    { label: "Contact", href: "/contact" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Col 3: Certifications + heritage */}
          <div className="md:col-span-4 flex flex-col gap-8 items-center md:items-start">
            <div className="text-center md:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">
                Certified & Accredited
              </div>
              <div className="flex items-center gap-5">
                <img src={bbbBadge} alt="BBB Accredited Business" className="h-14 w-auto rounded" width={53} height={56} loading="lazy" />
                <img src={nateBadge} alt="NATE Certified" className="h-14 w-auto brightness-0 invert" width={56} height={56} loading="lazy" />
              </div>
            </div>
            <div className="border-t border-white/10 pt-7">
              <div className="flex items-end gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/35 mb-1">Family-Owned</div>
                  <div className="text-4xl font-extrabold text-white leading-none">Since</div>
                  <div className="text-5xl font-extrabold text-white leading-none">1984</div>
                </div>
                <div className="mb-1 w-px self-stretch bg-white/10" />
                <div className="text-xs text-white/40 leading-relaxed max-w-[120px]">
                  40+ years serving Sonora & the Motherlode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="flex justify-center py-4 border-t border-white/10">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/40 hover:text-white/70 transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          Back to Top
        </a>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-navy-deep border-t border-white/10">
        <div className="mx-auto max-w-6xl flex flex-col gap-2 px-6 py-5 text-xs text-white/35 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>© 2026 <span className="whitespace-nowrap">J. Hart</span> Plumbing & HVAC. All rights reserved. Website by <a href="https://sonorawebsite.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60 transition-colors">Sonora Website Co.</a></div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span>CA Lic #459194</span>
            <span className="w-px h-3 bg-white/20" />
            <span>NV Lic #77957</span>
          </div>
        </div>
      </div>
    </footer>
  );
}