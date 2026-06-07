"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  heading: React.ReactNode;
  subtitle?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  className?: string;
}

export function FeatureGrid({
  heading,
  subtitle,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} className={subtitle ? "mb-4" : "mb-14"} />
        {subtitle && (
          <p className="text-center text-lg font-semibold text-navy mb-12">{subtitle}</p>
        )}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-6",
            columns === 3 && "lg:grid-cols-3",
          )}
        >
          {features.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
