"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon?: LucideIcon;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionBadge({ icon: Icon, label, variant = "light", className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2",
        variant === "light"
          ? "bg-primary/10 text-primary"
          : "bg-primary/25 text-[hsl(207,79%,72%)]",
        className,
      )}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

interface LocationPillProps {
  city: string;
  className?: string;
}

export function LocationPill({ city, className }: LocationPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy shadow-sm",
        className,
      )}
    >
      <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      {city}
    </span>
  );
}

export function GoogleBadge({ rating = 4.9, reviewCount = "100+" }: { rating?: number; reviewCount?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm border border-border">
      <span className="text-sm font-extrabold tracking-tight">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#DB4437]">o</span>
        <span className="text-[#F4B400]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#0F9D58]">l</span>
        <span className="text-[#DB4437]">e</span>
      </span>
      <span className="text-cta">★★★★★</span>
      <span className="text-sm font-semibold text-navy">{rating}</span>
      {reviewCount && (
        <>
          <span className="w-px h-3 bg-border" />
          <span className="text-sm text-muted-foreground">{reviewCount} reviews</span>
        </>
      )}
    </div>
  );
}

export function StarRating({
  rating = 5,
  variant = "light",
}: {
  rating?: number;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 rounded-full px-6 py-3",
        variant === "dark" ? "bg-navy text-white/90" : "bg-white border border-border",
      )}
    >
      <div className="flex items-center gap-1 text-cta">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        ))}
      </div>
      <div className="text-2xl font-extrabold">4.9</div>
      <div className={cn("text-sm", variant === "dark" ? "text-white/70" : "text-muted-foreground")}>
        from 100+ reviews
      </div>
    </div>
  );
}

export function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        ✓
      </span>
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}