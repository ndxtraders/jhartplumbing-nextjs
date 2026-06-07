"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check, type LucideIcon } from "lucide-react";

interface ServiceDetailCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  servicesLabel: string;
  services: string[];
  paragraphs?: React.ReactNode[];
  link?: { label: string; href: string };
  className?: string;
}

export function ServiceDetailCard({
  icon: Icon,
  title,
  subtitle,
  description,
  servicesLabel,
  services,
  paragraphs,
  link,
  className,
}: ServiceDetailCardProps) {
  return (
    <div className={cn("rounded-2xl bg-white border border-border shadow-card overflow-hidden", className)}>
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="border-l-4 border-cta pl-4">
            <h3 className="text-2xl font-extrabold text-navy">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed mb-6">{description}</p>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">{servicesLabel}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {services.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {paragraphs?.map((p, i) => (
          <div key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
            {p}
          </div>
        ))}
        {link && (
          <a
            href={link.href}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            {link.label} →
          </a>
        )}
      </div>
    </div>
  );
}
