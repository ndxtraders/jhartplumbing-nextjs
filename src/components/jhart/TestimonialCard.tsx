"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  initials: string;
  location: string;
  rating?: number;
  className?: string;
}

const CHAR_LIMIT = 150;

export function TestimonialCard({
  quote,
  author,
  initials,
  location,
  rating = 5,
  className,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = quote.length > CHAR_LIMIT;
  const displayText = needsTruncation && !expanded
    ? quote.slice(0, CHAR_LIMIT).trimEnd() + "…"
    : quote;

  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-8 shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col h-full",
        className,
      )}
    >
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="h-5 w-5 fill-current text-cta" viewBox="0 0 24 24">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
      </div>
      <div className="select-none text-5xl font-extrabold leading-none text-border mb-3">"</div>
      <p className="text-sm leading-relaxed text-muted-foreground flex-1">
        {displayText}
        {needsTruncation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 inline text-sm font-semibold text-primary hover:underline focus:outline-none"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
      <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
          {initials}
        </div>
        <div>
          <div className="text-sm font-bold text-navy">{author}</div>
          <div className="text-xs text-muted-foreground">{location}</div>
        </div>
      </div>
    </div>
  );
}