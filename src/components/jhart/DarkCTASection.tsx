"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DarkCTASectionProps {
  heading: React.ReactNode;
  description: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  logo?: string;
  className?: string;
}

export function DarkCTASection({
  heading,
  description,
  primaryCTA = { label: "Call Now: (209) 533-1978", href: "tel:+12095331978" },
  secondaryCTA,
  logo,
  className,
}: DarkCTASectionProps) {
  return (
    <section className={cn("bg-navy-deep px-8 py-16", className)}>
      <div className="mx-auto max-w-4xl text-center">
        {logo && (
          <img src={logo} alt="" className="h-12 mx-auto mb-6 brightness-0 invert opacity-90" />
        )}
        <h2 className="text-2xl font-extrabold text-white md:text-3xl mb-4">
          {heading}
        </h2>
        <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button variant="cta" asChild>
            <a href={primaryCTA.href} className="gap-2">
              <Phone className="w-4 h-4" />
              {primaryCTA.label}
            </a>
          </Button>
          {secondaryCTA && (
            <Button variant="ghost" asChild>
              <a href={secondaryCTA.href}>
                {secondaryCTA.label}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
