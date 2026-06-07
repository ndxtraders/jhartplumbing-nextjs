"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { CompactServiceCard } from "./Cards";
import { type LucideIcon } from "lucide-react";

interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProblemGridProps {
  heading?: string;
  problems: Problem[];
  columns?: 2 | 3;
  className?: string;
}

export function ProblemGrid({
  heading = "Common Problems We Fix",
  problems,
  columns = 3,
  className,
}: ProblemGridProps) {
  return (
    <section className={cn("px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
      <SectionHeader heading={heading} className="mb-14" />
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-6",
          columns === 3 && "lg:grid-cols-3",
        )}
      >
        {problems.map((p) => (
          <CompactServiceCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
        ))}
      </div>
      </div>
    </section>
  );
}
