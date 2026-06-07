"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { TestimonialCard } from "./TestimonialCard";
import { GoogleBadge } from "./Badges";

interface Review {
  quote: string;
  author: string;
  initials: string;
  service: string;
  year: string;
  category: string[];
}

interface Tab {
  key: string;
  label: string;
}

interface ReviewGridProps {
  reviews: Review[];
  tabs: Tab[];
  heading?: string;
  className?: string;
}

export function ReviewGrid({
  reviews,
  tabs,
  heading = "Recent Customer Reviews",
  className,
}: ReviewGridProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? reviews
    : reviews.filter((r) => r.category.includes(activeTab));

  return (
    <section className={cn("bg-light-blue px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <div className="flex justify-center mb-4">
          <GoogleBadge />
        </div>
        <SectionHeader heading={heading} className="mb-10" />

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                activeTab === tab.key
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-muted-foreground border border-border hover:border-primary/30 hover:text-navy"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <TestimonialCard
              key={r.author}
              quote={r.quote}
              author={r.author}
              initials={r.initials}
              location={`${r.service} · ${r.year}`}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No reviews in this category yet.</p>
        )}
      </div>
    </section>
  );
}
