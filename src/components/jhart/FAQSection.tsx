"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { FAQAccordion } from "./FAQAccordion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  heading?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({
  heading = "Frequently Asked Questions",
  items,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} className="mb-10" />
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
