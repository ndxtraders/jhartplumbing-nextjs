"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: { icon?: LucideIcon; label: string };
  heading: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  variant?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  badge,
  heading,
  description,
  align = "center",
  variant = "light",
  className,
}: SectionHeaderProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4",
            isDark ? "bg-primary/25" : "bg-primary/10",
          )}
        >
          {badge.icon && (
            <badge.icon
              className={cn("h-4 w-4", isDark ? "text-[hsl(207,79%,72%)]" : "text-primary")}
            />
          )}
          <span
            className={cn(
              "text-sm font-semibold",
              isDark ? "text-[hsl(207,79%,72%)]" : "text-primary",
            )}
          >
            {badge.label}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold tracking-tight md:text-4xl mb-2",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {heading}
      </h2>
      <div
        className={cn(
          "w-16 h-1 rounded-full bg-cta",
          align === "center" && "mx-auto",
          description ? "mb-4" : "",
        )}
      />
      {description && (
        <p
          className={cn(
            "text-lg max-w-xl",
            isDark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}