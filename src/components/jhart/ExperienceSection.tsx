"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/jhart/SectionHeader";

const experienceItems = [
  "Accurate diagnosis (we recognize patterns others miss)",
  "Efficient work (we know what works and what doesn't)",
  "Better problem-solving (we've handled every scenario)",
  "Realistic expectations (we tell you what to actually expect)",
  "Proven methods (our installations perform for decades)",
];

export function ExperienceSection() {
  return (
    <section className="bg-navy-deep px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading="Why Experience Matters" variant="dark" className="mb-4" />
        <p className="text-center text-sm font-bold uppercase tracking-wide text-cta mb-10">40 Years Strong</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">40 years means we've seen it all:</h3>
            <p className="text-base text-white/70 leading-relaxed">
              We've diagnosed thousands of plumbing problems, installed hundreds of HVAC systems, and designed countless radiant heating installations. We've worked on historic homes and brand-new construction. We've solved problems that stumped other contractors and figured out solutions for challenging installations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Experience means:</h3>
            <div className="space-y-3">
              {experienceItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center text-base text-white/60 mt-10 max-w-3xl mx-auto">
          When you're dealing with your home's critical systems—plumbing, heating & cooling, radiant, water quality—experience isn't just nice to have. It's essential.
        </p>
      </div>
    </section>
  );
}
