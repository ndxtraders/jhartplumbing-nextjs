"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

interface ServiceChecklistProps {
  heading?: string;
  description?: string;
  services: string[];
  columns?: 2 | 3;
  className?: string;
}

export function ServiceChecklist({
  heading = "Our Services",
  description,
  services,
  columns = 3,
  className,
}: ServiceChecklistProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          heading={heading}
          description={description}
          align="left"
          className="mb-10"
        />
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 gap-3",
            columns === 3 && "lg:grid-cols-3",
          )}
        >
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 rounded-lg bg-white border border-border px-4 py-3"
            >
              <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                ✓
              </span>
              <span className="text-sm font-medium text-navy">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
