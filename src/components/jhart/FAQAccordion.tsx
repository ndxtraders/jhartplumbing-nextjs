"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3 max-w-3xl mx-auto", className)}>
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-border bg-white px-6 shadow-sm">
          <h4 className="flex">
            <button
              type="button"
              className="flex flex-1 items-center justify-between text-left text-base font-bold text-navy py-5 gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  openIndex === i && "rotate-180",
                )}
              />
            </button>
          </h4>
          <div
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === i ? "max-h-96 pb-5" : "max-h-0",
            )}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}