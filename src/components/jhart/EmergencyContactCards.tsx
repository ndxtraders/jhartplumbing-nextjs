"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Phone, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";

interface EmergencyContactCardsProps {
  heading?: string;
  className?: string;
}

export function EmergencyContactCards({
  heading = "Emergency & Scheduled Service",
  className,
}: EmergencyContactCardsProps) {
  return (
    <section className={cn("bg-navy-deep px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} variant="dark" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Emergency card */}
          <div className="rounded-2xl bg-white/[0.07] border border-white/10 p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-cta" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">Emergency Plumbing</h3>
            <p className="text-sm text-white/60 mb-6">
              Call 24/7 for urgent issues affecting operations:
            </p>
            <Button variant="cta" size="lg" asChild>
              <a href="tel:+12095331978" className="gap-2">
                <Phone className="w-5 h-5" />
                (209) 533-1978
              </a>
            </Button>
          </div>

          {/* Scheduled card */}
          <div className="rounded-2xl bg-white/[0.07] border border-white/10 p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">Scheduled Work & Estimates</h3>
            <p className="text-sm text-white/60 mb-6">
              Call Monday–Friday, 7:30 AM – 4:00 PM
            </p>
            <Button variant="ghost" size="lg" asChild>
              <a href="tel:+12095331978" className="gap-2 text-white border border-white/20 hover:bg-white/10">
                <Phone className="w-5 h-5" />
                (209) 533-1978
              </a>
            </Button>
            <p className="text-sm text-white/40 mt-4">
              or request a callback below
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
