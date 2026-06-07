"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { type LucideIcon } from "lucide-react";
import { Phone } from "lucide-react";

interface ActionItem {
  icon: LucideIcon;
  title: string;
  action: string;
  href: string;
  linkLabel: string;
  urgent?: boolean;
}

interface ActionGridProps {
  heading?: string;
  items: ActionItem[];
  className?: string;
}

export function ActionGrid({
  heading = "What Do You Need Help With?",
  items,
  className,
}: ActionGridProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} className="mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl bg-white border border-border p-6 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  item.urgent ? "bg-cta/10" : "bg-primary/10"
                )}>
                  <item.icon className={cn("w-5 h-5", item.urgent ? "text-cta" : "text-primary")} />
                </div>
                <h3 className="text-lg font-extrabold text-navy">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{item.action}</p>
              <a
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-bold hover:underline text-primary"
                )}
              >
                {item.urgent && <Phone className="w-4 h-4" />}
                {item.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
