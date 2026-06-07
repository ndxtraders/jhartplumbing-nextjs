"use client";

import React from "react";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { cn } from "@/lib/utils";

interface MapSectionProps {
  className?: string;
}

export function MapSection({ className }: MapSectionProps) {
  return (
    <section className={cn("bg-background px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading="Find Us" className="mb-10" />
        <div className="rounded-2xl overflow-hidden shadow-elevated border border-border aspect-[16/9] max-w-3xl mx-auto">
          <iframe
            title="J. Hart Plumbing location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.5!2d-120.3817!3d37.9837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzAxLjMiTiAxMjDCsDIyJzU0LjEiVw!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Office Hours: Monday–Friday, 7:30 AM – 4:00 PM
        </p>
      </div>
    </section>
  );
}
