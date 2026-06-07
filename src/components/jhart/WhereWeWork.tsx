"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LocationPill } from "./Badges";
import { SectionHeader } from "./SectionHeader";
import { MapPin } from "lucide-react";

interface WhereWeWorkProps {
  primaryCities?: string[];
  secondaryCities?: string[];
  className?: string;
}

const defaultPrimary = [
  "Sonora", "Twain Harte", "Columbia", "Jamestown", "Tuolumne",
  "Mi-Wuk Village", "Pinecrest", "Groveland", "Chinese Camp", "Don Pedro", "Angels Camp",
];

const defaultSecondary = ["Arnold", "Copperopolis", "Murphys", "Avery", "San Andreas", "Vallecito"];

export function WhereWeWork({
  primaryCities = defaultPrimary,
  secondaryCities = defaultSecondary,
  className,
}: WhereWeWorkProps) {
  return (
    <section className={cn("bg-off-white px-4 py-20", className)}>
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader
          heading="Serving Sonora, Tuolumne County & Calaveras County"
        />
        <p className="text-lg text-muted-foreground mb-2 mt-4">
          We're based in Sonora and serve homes and businesses across Tuolumne and Calaveras County.
        </p>
        <div className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary mb-4">
          Primary service areas:
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {primaryCities.map((city) => (
            <LocationPill key={city} city={city} />
          ))}
        </div>
        <div className="text-sm text-muted-foreground mb-6">
          <span className="font-semibold text-navy">Also serving:</span>{" "}
          {secondaryCities.join(" · ")}
        </div>
        <p className="text-base text-muted-foreground mb-2">
          We know the area's homes, building types, water conditions, and climate challenges — and what works at our elevation.
        </p>
        <p className="text-base font-semibold text-navy">
          Not sure if we serve your area? Give us a call:{" "}
          <a href="tel:+12095331978" className="text-primary hover:underline">(209) 533-1978</a>
        </p>
      </div>
    </section>
  );
}