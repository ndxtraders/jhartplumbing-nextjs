"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Wrench } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface MaintenanceCardBase {
  title: string;
  icon?: LucideIcon;
  iconClassName?: string;
}

interface MaintenanceCardWithItems extends MaintenanceCardBase {
  items: string[];
  content?: never;
}

interface MaintenanceCardWithContent extends MaintenanceCardBase {
  items?: never;
  content: React.ReactNode;
}

type MaintenanceCard = MaintenanceCardWithItems | MaintenanceCardWithContent;

interface MaintenanceGridProps {
  heading: React.ReactNode;
  description?: string;
  cards: MaintenanceCard[];
  columns?: 2 | 3;
  footnote?: React.ReactNode;
  variant?: "light" | "off-white";
  className?: string;
}

export function MaintenanceGrid({
  heading,
  description,
  cards,
  columns = 2,
  footnote,
  variant = "light",
  className,
}: MaintenanceGridProps) {
  return (
    <section className={cn(variant === "off-white" ? "bg-off-white" : "bg-background", "px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-14" />
        <div className={cn(
          "grid grid-cols-1 gap-8",
          columns === 2 && "md:grid-cols-2",
          columns === 3 && "sm:grid-cols-2 lg:grid-cols-3 gap-6",
        )}>
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              {card.icon && (
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", card.iconClassName || "bg-primary/10")}>
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy">{card.title}</h3>
                </div>
              )}
              {!card.icon && <h3 className="font-bold text-navy mb-4">{card.title}</h3>}
              {card.content ? card.content : (
                <ul className="space-y-2">
                  {card.items!.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Wrench className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {footnote && (
          <div className="mt-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
            {footnote}
          </div>
        )}
      </div>
    </section>
  );
}
