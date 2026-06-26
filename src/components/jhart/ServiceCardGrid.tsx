"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export interface ServiceCardItem {
  icon: React.ElementType;
  title: string;
  services: string[];
  description: string;
  href?: string;
}

function ServiceCardInner({
  icon: Icon,
  title,
  services,
  description,
}: ServiceCardItem) {
  return (
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="w-1 h-8 rounded-full bg-cta flex-shrink-0" />
        <h3 className="text-lg font-extrabold text-navy leading-tight">{title}</h3>
      </div>
      <ul className="space-y-2 mb-4 flex-1">
        {services.map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground border-t border-border pt-4">{description}</p>
    </div>
  );
}

function ServiceCard(card: ServiceCardItem) {
  const base =
    "relative rounded-2xl bg-white border border-border shadow-card h-full flex flex-col";
  if (card.href) {
    return (
      <Link
        href={card.href}
        className={cn(
          base,
          "transition-transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
        )}
      >
        <ServiceCardInner {...card} />
      </Link>
    );
  }
  return (
    <div className={base}>
      <ServiceCardInner {...card} />
    </div>
  );
}

interface ServiceCardGridProps {
  heading: string;
  description?: string;
  cards: ServiceCardItem[];
  className?: string;
}

export function ServiceCardGrid({ heading, description, cards, className }: ServiceCardGridProps) {
  return (
    <section className={cn("bg-light-blue px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <ServiceCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
