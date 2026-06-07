"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";

interface LeaveReviewCardProps {
  className?: string;
}

export function LeaveReviewCard({ className }: LeaveReviewCardProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading="Leave Us a Review" className="mb-4" />
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
          Had a good experience with <span className="whitespace-nowrap">J. Hart</span> Plumbing?
        </p>
        <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto mb-10">
          We appreciate your feedback and would love to hear about your experience. Your review helps other homeowners and businesses make informed decisions.
        </p>
        <div className="flex justify-center">
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJqcnVz27FkIARogF0SzR7pQo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-lg bg-white border border-border px-10 py-5 shadow-card hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
            </span>
            <span className="text-base font-bold text-navy">Leave a Review</span>
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
