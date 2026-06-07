"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { GoogleBadge } from "./Badges";
import { ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  initials: string;
  location: string;
}

interface TestimonialsSectionProps {
  heading?: string;
  testimonials: Testimonial[];
  showGoogleBadge?: boolean;
  columns?: 2 | 3;
  ctaLink?: { label: string; href: string } | false;
  className?: string;
}

export function TestimonialsSection({
  heading = "What Our Customers Say",
  testimonials,
  showGoogleBadge = true,
  columns = 3,
  ctaLink = { label: "Read All Reviews", href: "/reviews" },
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("bg-light-blue px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        {showGoogleBadge && (
          <div className="flex justify-center mb-4">
            <GoogleBadge />
          </div>
        )}
        <SectionHeader heading={heading} className="mb-14" />
        <div className={cn(
          "grid grid-cols-1 gap-6",
          columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2",
        )}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
        {ctaLink && (
          <div className="mt-10 flex justify-center">
            <a href={ctaLink.href} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              {ctaLink.label} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
