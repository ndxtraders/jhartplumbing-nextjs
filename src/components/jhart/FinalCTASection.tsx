"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  heading?: React.ReactNode;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  footerLines?: string[];
  footerLinks?: { label: string; href: string }[];
  logo?: string;
  className?: string;
}

export function FinalCTASection({
  heading = "Ready to Get Started?",
  description,
  primaryCTA = { label: "Call Now: (209) 533-1978", href: "tel:+12095331978" },
  secondaryCTA = { label: "Request Service", href: "/contact#cta-form" },
  footerLines,
  footerLinks,
  logo,
  className,
}: FinalCTASectionProps) {
  return (
    <section className={cn("bg-navy-deep px-8 py-16", className)}>
      <div className="mx-auto max-w-4xl text-center">
        {logo && (
          <img src={logo} alt="" className="h-12 mx-auto mb-6 brightness-0 invert opacity-90" />
        )}
        <h2 className="text-2xl font-extrabold text-white md:text-3xl mb-4">
          {heading}
        </h2>
        {description && (
          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button variant="cta" size="lg" asChild>
            <a href={primaryCTA.href} className="gap-3">
              <Phone className="w-5 h-5" />
              {primaryCTA.label}
            </a>
          </Button>
          {secondaryCTA && (
            <Button variant="ghost" asChild>
              <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
            </Button>
          )}
        </div>
        {footerLines && footerLines.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/50 mt-4">
            {footerLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        )}
        {footerLinks && footerLinks.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && <span className="text-white/20">|</span>}
                <a href={link.href} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
