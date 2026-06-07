"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { CheckItem } from "./CheckItem";

interface CommercialColumn {
  heading?: string;
  icon?: LucideIcon;
  items: string[];
}

interface CommercialSectionProps {
  heading: React.ReactNode;
  description?: string;
  phoneText?: string;
  columns: CommercialColumn[];
  variant?: "light" | "off-white";
  className?: string;
}

export function CommercialSection({
  heading,
  description,
  phoneText,
  columns,
  variant = "light",
  className,
}: CommercialSectionProps) {
  const isSingleColumn = columns.length === 1;

  return (
    <section className={cn(variant === "off-white" ? "bg-off-white" : "bg-background", "px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-10" />

        {phoneText && (
          <div className="flex justify-center mb-8">
            <a
              href="tel:+12095331978"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              <Phone className="w-4 h-4" />
              {phoneText}
            </a>
          </div>
        )}

        {isSingleColumn ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns[0].items.map((item) => (
              <CheckItem key={item} icon={columns[0].icon}>{item}</CheckItem>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.heading || col.items[0]}>
                {col.heading && (
                  <h3 className="text-base font-bold text-navy mb-4">{col.heading}</h3>
                )}
                <div className="space-y-3">
                  {col.items.map((item) => (
                    <CheckItem key={item} icon={col.icon} className="py-3">{item}</CheckItem>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
