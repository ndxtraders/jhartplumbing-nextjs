"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <div className={cn("mx-auto max-w-5xl px-8 pt-8", className)}>
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {item.href ? (
              <a href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-navy">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
