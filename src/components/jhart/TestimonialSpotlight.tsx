"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GoogleBadge } from "./Badges";

interface TestimonialSpotlightProps {
  quote: string;
  author: string;
  service: string;
  className?: string;
}

export function TestimonialSpotlight({
  quote,
  author,
  service,
  className,
}: TestimonialSpotlightProps) {
  return (
    <section className={cn("bg-light-blue px-8 py-16", className)}>
      <div className="mx-auto max-w-3xl">
        <blockquote className="rounded-2xl bg-white border border-border p-8 shadow-card text-center">
          <p className="text-base text-muted-foreground leading-relaxed italic mb-6">
            "{quote}"
          </p>
          <div>
            <p className="font-bold text-navy">{author}</p>
            <p className="text-xs text-muted-foreground">{service}</p>
          </div>
        </blockquote>
        <div className="mt-4 flex justify-center">
          <GoogleBadge />
        </div>
      </div>
    </section>
  );
}
