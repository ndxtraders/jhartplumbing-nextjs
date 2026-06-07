"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface RecentWorkImage {
  src: string;
  alt: string;
}

interface RecentWorkProps {
  heading?: string;
  description?: string;
  items: string[];
  images?: RecentWorkImage[];
  className?: string;
}

export function RecentWork({
  heading = "Recent Work",
  description,
  items,
  images,
  className,
}: RecentWorkProps) {
  return (
    <section className={cn("mx-auto max-w-5xl px-8 py-20", className)}>
      <SectionHeader heading={heading} description={description} className="mb-10" />
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {images.map((img) => (
            <div key={img.alt} className="rounded-xl overflow-hidden shadow-card aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
            </div>
          ))}
        </div>
      )}
      <div className="space-y-3 max-w-2xl mx-auto">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4">
            <Check className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-navy">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
