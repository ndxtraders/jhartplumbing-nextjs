"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, Phone } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

interface EmergencyBannerProps {
  heading?: string;
  description?: string;
  items: string[];
  phoneNumber?: string;
  phoneLabel?: string;
  footnote?: string;
  className?: string;
}

export function EmergencyBanner({
  heading = "Emergency Plumbing Service",
  description,
  items,
  phoneNumber = "tel:+12095331978",
  phoneLabel = "Call immediately: (209) 533-1978",
  footnote,
  className,
}: EmergencyBannerProps) {
  return (
    <section className={cn("bg-navy-deep px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeader heading={heading} variant="dark" className="mb-6" />
        {description && (
          <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            {description}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {items.map((item) => (
            <div
              key={item}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-cta" />
              {item}
            </div>
          ))}
        </div>
        <Button variant="cta" size="lg" asChild>
          <a href={phoneNumber} className="gap-2">
            <Phone className="w-5 h-5" />
            {phoneLabel}
          </a>
        </Button>
        {footnote && (
          <p className="mt-4 text-sm text-white/50">{footnote}</p>
        )}
      </div>
    </section>
  );
}
