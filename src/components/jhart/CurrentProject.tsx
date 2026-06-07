"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CurrentProjectProps {
  title: string;
  type: string;
  scope: string;
  milestones: { label: string; status: "done" | "in-progress" | "upcoming" }[];
  progress: number;
  gcName: string;
  estCompletion: string;
  className?: string;
}

export function CurrentProject({
  title,
  type,
  scope,
  milestones,
  progress,
  gcName,
  estCompletion,
  className,
}: CurrentProjectProps) {
  return (
    <div className={cn("bg-card rounded-2xl overflow-hidden shadow-elevated border border-border", className)}>
      <div className="grid lg:grid-cols-2">
        {/* Left: details */}
        <div className="p-8 md:p-10 flex flex-col">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 self-start mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-primary text-sm font-semibold">Active Project</span>
          </div>

          <h3 className="text-2xl font-extrabold text-navy mb-2">{title}</h3>
          <div className="w-10 h-1 rounded-full bg-cta mb-4" />

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Type</span>
              <p className="text-sm font-semibold text-navy mt-1">{type}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Scope</span>
              <p className="text-sm font-semibold text-navy mt-1">{scope}</p>
            </div>
          </div>

          {/* Milestones */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">
              Milestones
            </span>
            <ul className="space-y-2.5">
              {milestones.map((m, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  {m.status === "done" ? (
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  ) : m.status === "in-progress" ? (
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-muted-foreground/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                  <span
                    className={cn(
                      "text-sm",
                      m.status === "upcoming" ? "text-muted-foreground/50" : "text-muted-foreground",
                    )}
                  >
                    {m.label}
                    {m.status === "in-progress" && " — in progress"}
                    {m.status === "upcoming" && " — upcoming"}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Progress bar */}
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Project Progress
              </span>
              <span className="text-sm font-extrabold text-navy">{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-border overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              GC: {gcName} · Est. completion: {estCompletion}
            </p>
          </div>
        </div>

        {/* Right: photo grid placeholder */}
        <div className="grid grid-cols-2 gap-0">
          {[
            { label: "Slab rough-in", from: "from-steel/40" },
            { label: "Wall rough-in", from: "from-navy/50" },
          ].map((photo, i) => (
            <div key={i} className="relative aspect-square bg-steel/20 overflow-hidden group">
              <div className={cn("absolute inset-0 bg-gradient-to-br to-navy-deep/60 group-hover:scale-105 transition-transform duration-500", photo.from)} />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-white/25" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="m3 9 4-4 4 4 4-4 4 4" />
                  <circle cx="8.5" cy="14.5" r="1.5" />
                </svg>
              </div>
              <div className="absolute bottom-2 left-3">
                <span className="text-xs font-semibold text-white/70">{photo.label}</span>
              </div>
            </div>
          ))}
          <div className="relative aspect-square bg-primary/20 overflow-hidden group col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-navy/60 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white/25" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="m3 9 4-4 4 4 4-4 4 4" />
                <circle cx="8.5" cy="14.5" r="1.5" />
              </svg>
            </div>
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/80">Radiant layout — in progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}