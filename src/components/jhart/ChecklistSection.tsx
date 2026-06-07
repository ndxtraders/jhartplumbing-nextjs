"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { CheckItem } from "./CheckItem";

interface ChecklistSectionProps {
  heading: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: string;
  items: string[];
  columns?: 1 | 2;
  footnote?: string;
  variant?: "light" | "off-white";
  className?: string;
}

export function ChecklistSection({
  heading,
  subtitle,
  description,
  items,
  columns = 1,
  footnote,
  variant = "light",
  className,
}: ChecklistSectionProps) {
  return (
    <section className={cn(variant === "off-white" ? "bg-off-white" : "bg-background", "px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} className="mb-4" />
        {subtitle && (
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-4 text-center">{subtitle}</h3>
        )}
        {description && (
          <p className="text-center text-base text-muted-foreground max-w-3xl mx-auto mb-10">
            {description}
          </p>
        )}
        <div className={cn("max-w-2xl mx-auto", columns === 2 && "max-w-3xl")}>
          <div className={cn(
            "grid gap-3",
            columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
          )}>
            {items.map((item) => (
              <CheckItem key={item} className="bg-off-white">{item}</CheckItem>
            ))}
          </div>
        </div>
        {footnote && (
          <p className="text-center text-base text-muted-foreground mt-8">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
