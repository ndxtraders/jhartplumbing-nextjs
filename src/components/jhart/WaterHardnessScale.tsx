"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const levels = [
  { label: "Soft", range: "0–3 gpg", color: "bg-[hsl(152,69%,45%)]", dot: "bg-[hsl(152,69%,45%)]" },
  { label: "Moderate", range: "3–7 gpg", color: "bg-[hsl(82,62%,48%)]", dot: "bg-[hsl(82,62%,48%)]" },
  { label: "Hard", range: "7–10 gpg", color: "bg-[hsl(43,96%,56%)]", dot: "bg-[hsl(43,96%,56%)]" },
  { label: "Very Hard", range: "10–15 gpg", color: "bg-[hsl(28,92%,55%)]", dot: "bg-[hsl(28,92%,55%)]" },
  { label: "Extremely Hard", range: "15+ gpg", color: "bg-[hsl(355,73%,55%)]", dot: "bg-[hsl(355,73%,55%)]" },
];

interface WaterHardnessScaleProps {
  className?: string;
}

export function WaterHardnessScale({ className }: WaterHardnessScaleProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Gradient bar */}
      <div className="flex rounded-full overflow-hidden h-10 shadow-sm">
        {levels.map((level) => (
          <div
            key={level.label}
            className={cn("flex-1 flex items-center justify-center", level.color)}
          >
            <span className="text-xs font-bold text-white drop-shadow-sm tracking-wide">
              {level.label}
            </span>
          </div>
        ))}
      </div>

      {/* Legend dots */}
      <div className="flex flex-wrap justify-between gap-y-3 px-1">
        {levels.map((level) => (
          <div key={level.label} className="flex items-center gap-2">
            <span className={cn("w-3 h-3 rounded-full flex-shrink-0", level.dot)} />
            <div>
              <p className="text-sm font-bold text-navy leading-tight">{level.label}</p>
              <p className="text-xs text-muted-foreground">{level.range}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Local callout */}
      <div className="flex items-start gap-3 rounded-xl bg-cta/5 border border-cta/15 p-5">
        <MapPin className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-bold text-navy">Sonora &amp; Tuolumne County:</span>{" "}
          Typically 8–15+ grains per gallon — hard to very hard. A water softener is recommended for most homes in our area.
        </p>
      </div>
    </div>
  );
}
