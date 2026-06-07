"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { NumberedStep } from "./Cards";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
   heading?: React.ReactNode;
   description?: React.ReactNode;
  steps: Step[];
  className?: string;
}

export function ProcessSteps({
  heading = "How It Works",
  description,
  steps,
  className,
}: ProcessStepsProps) {
  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <NumberedStep key={i} step={i + 1} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
