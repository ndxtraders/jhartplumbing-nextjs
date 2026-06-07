"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/jhart/SectionHeader";

const steps = [
  {
    step: 1,
    title: "No Runaround",
    subtitle: "You shouldn't have to chase a contractor, wonder what you're being charged for, or worry the fix will fail next month.",
    points: [
      { bold: "Straight answers and clear options", text: "We explain what's wrong in plain language and give you real options with clear pricing." },
      { bold: "No unnecessary upselling", text: "If you need a repair, we won't push a replacement. We recommend what makes sense for your situation and budget." },
    ],
  },
  {
    step: 2,
    title: "Quality Work That Lasts",
    subtitle: "We've been in business for 40 years because we do work that holds up—not quick patches that fail in six months.",
    points: [
      { bold: "Proper diagnosis", text: "We test and verify the actual problem before we recommend any fix." },
      { bold: "Done right the first time", text: "Quality parts, clean installation, and thorough testing before we leave." },
    ],
  },
  {
    step: 3,
    title: "Local & Accountable",
    subtitle: "We live and work here. Our reputation matters because we're not disappearing after the job is done.",
    points: [
      { bold: "You know who you're getting", text: "Experienced technicians, stable team, and a company you can reach—not a call center." },
      { bold: "We stand behind our work", text: "If something isn't right, we make it right. That's how you build 40 years of repeat customers and referrals." },
    ],
  },
];

export function HowWeWork() {
  return (
    <section className="bg-off-white px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading="How We Work" className="mb-14" />
        <div className="space-y-16">
          {steps.map((col) => (
            <div key={col.title} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <div className="flex items-start gap-4">
                  <span className="text-6xl md:text-7xl font-black text-primary/15 leading-none select-none">
                    {String(col.step).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-navy leading-tight">{col.title}</h3>
                    <div className="mt-1 h-1 w-12 rounded-full bg-cta" />
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{col.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {col.points.map((pt) => (
                  <div key={pt.bold} className="group rounded-xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <h4 className="text-base font-bold text-navy">{pt.bold}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{pt.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
