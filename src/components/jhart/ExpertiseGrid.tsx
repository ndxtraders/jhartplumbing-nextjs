"use client";

import React from "react";
import { Home, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Home,
    title: "Residential Services",
    description:
      "Most of our work is residential—single-family homes, multi-family properties, manufactured homes, and additions. We understand homeowners' needs and treat your property with care and respect.",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description:
      "We serve commercial properties throughout Tuolumne County—offices, retail spaces, restaurants, multi-tenant buildings, and small commercial properties. We handle property maintenance, tenant improvements, emergency repairs, and new installations.",
  },
];

interface ExpertiseGridProps {
  className?: string;
}

export function ExpertiseGrid({ className }: ExpertiseGridProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading="Commercial & Residential Expertise" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white border border-border p-8 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
