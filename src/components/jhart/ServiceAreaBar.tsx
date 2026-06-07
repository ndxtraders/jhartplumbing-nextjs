"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ServiceAreaBarProps {
  className?: string;
}

export function ServiceAreaBar({ className }: ServiceAreaBarProps) {
  return (
    <section className={cn("bg-navy px-8 py-8", className)}>
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-white/50 leading-relaxed">
          <strong className="text-white/70">Service Area:</strong> Sonora, Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Pinecrest, Groveland, Chinese Camp, Don Pedro, Sierra Village, Angels Camp
        </p>
        <p className="text-xs text-white/40 mt-2">
          Also serving: Arnold · Copperopolis · Murphys · Avery · San Andreas · Vallecito
        </p>
      </div>
    </section>
  );
}
