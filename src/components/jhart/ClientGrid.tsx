"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

interface ClientGridProps {
  heading?: string;
  description?: string;
  clients: string[];
  className?: string;
}

export function ClientGrid({
  heading = "Trusted by Local Businesses & Organizations",
  description,
  clients,
  className,
}: ClientGridProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-14" />
        <div className="flex flex-wrap justify-center gap-3">
          {clients.map((name) => (
            <div
              key={name}
              className="rounded-full bg-muted/50 border border-border px-6 py-3 text-center hover:shadow-sm transition-shadow"
            >
              <span className="text-sm font-semibold text-navy whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
