"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { type LucideIcon } from "lucide-react";

interface ProsConsColumn {
  icon: LucideIcon;
  title: string;
  items: string[];
  footnote?: string;
  variant: "pro" | "con";
}

interface ProsConsProps {
  heading?: string;
  columns: [ProsConsColumn, ProsConsColumn];
  className?: string;
}

export function ProsCons({ heading, columns, className }: ProsConsProps) {
  return (
    <section className={cn("bg-background px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        {heading && <SectionHeader heading={heading} className="mb-14" />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {columns.map((col) => {
            const isPro = col.variant === "pro";
            return (
              <div key={col.title} className="rounded-2xl bg-white border border-border p-8 shadow-card">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center mb-4",
                  isPro ? "bg-primary/10" : "bg-cta/10"
                )}>
                  <col.icon className={cn("w-5 h-5", isPro ? "text-primary" : "text-cta")} />
                </div>
                <h3 className="text-lg font-extrabold text-navy mb-4">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <col.icon className={cn("w-4 h-4 flex-shrink-0", isPro ? "text-primary" : "text-cta")} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {col.footnote && (
                  <p className="mt-6 text-sm font-semibold text-navy">{col.footnote}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
