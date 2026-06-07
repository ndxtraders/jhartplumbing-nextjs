"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon, Users, Shield, Clock, DollarSign, Star } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  label: string;
  breakpoint?: "always" | "sm" | "md" | "lg";
}

const defaultItems: TrustItem[] = [
  { icon: Users, label: "Family-Owned Since 1984", breakpoint: "always" },
  { icon: Shield, label: "Licensed & Insured", breakpoint: "always" },
  { icon: Clock, label: "Same-Day Service", breakpoint: "sm" },
  { icon: DollarSign, label: "Fair Pricing", breakpoint: "md" },
  { icon: Star, label: "100+ 5-Star Reviews", breakpoint: "lg" },
];

interface TrustBarProps {
  items?: TrustItem[];
  className?: string;
}

export function TrustBar({ items = defaultItems, className }: TrustBarProps) {
  const visibilityClass = (bp?: string) => {
    if (!bp || bp === "always") return "flex";
    return `hidden ${bp}:flex`;
  };

  return (
    <div className={cn("relative bg-gradient-to-r from-navy-deep via-navy to-navy-deep py-4", className)}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-steel/20 to-transparent" />
      <div className="flex items-center justify-start md:justify-center gap-0 px-4 overflow-x-auto scrollbar-hide">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <span
                className={cn("w-px h-5 bg-steel/20 flex-shrink-0", i >= 2 && visibilityClass(item.breakpoint).replace("flex", "block"))}
                aria-hidden="true"
              />
            )}
            <div className={cn("items-center gap-2.5 px-4", visibilityClass(item.breakpoint))}>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-steel/15 ring-1 ring-steel/20 flex-shrink-0">
                <item.icon className="w-4 h-4 text-cta" />
              </div>
              <span className="text-sm font-medium text-white/90 whitespace-nowrap">{item.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}