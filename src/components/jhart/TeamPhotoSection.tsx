"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
const jhartTeam2025 = "/images/jhart-team-2025.webp";

interface TeamPhotoSectionProps {
  className?: string;
}

export function TeamPhotoSection({ className }: TeamPhotoSectionProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          heading="Meet the Team"
          description="The crew behind every job — Sonora-based, family-led, and four decades deep in plumbing, HVAC, radiant heating, and water treatment across Tuolumne County."
          className="mb-10"
        />
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={jhartTeam2025}
            alt="The J. Hart Plumbing team in front of the Sonora shop"
            className="w-full h-auto aspect-[16/9] object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          The <span className="whitespace-nowrap">J. Hart</span> team at our Sonora shop.
        </p>
      </div>
    </section>
  );
}
