"use client";

import React from "react";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { cn } from "@/lib/utils";
const jhartOffice = "/images/jhart-office.webp";

interface StorySectionProps {
  className?: string;
}

export function StorySection({ className }: StorySectionProps) {
  return (
    <section className={cn("mx-auto max-w-5xl px-8 py-20", className)}>
      <SectionHeader heading={<>About <span className="whitespace-nowrap">J. Hart</span> Plumbing</>} align="left" className="mb-8" />
      <div className="text-base leading-relaxed text-muted-foreground">
        <img
          src={jhartOffice}
          alt="J. Hart Plumbing office in Sonora with rainbow"
          className="float-right ml-8 mb-6 rounded-2xl shadow-elevated w-full sm:w-[45%] aspect-[4/3] object-cover"
          loading="lazy"
          width={600}
          height={450}
        />
        <div className="space-y-4">
          <p>When Bud "Jay" Hart started <span className="whitespace-nowrap">J. Hart</span> Plumbing with his dad and brother in 1984, he built the company on three things: craftsmanship, integrity, and family. Forty years later, that foundation still guides every job.</p>
          <p>Today, Bud works alongside his sons Jay and John, his brother Jason, his grandson Jay T., and a team of certified professionals who carry that same standard into homes and businesses across the Motherlode. Over the years, the company has grown beyond plumbing. When Brian Magwood joined the team, his expertise helped expand <span className="whitespace-nowrap">J. Hart</span> into radiant floor heating. Since then, the company has added water treatment and HVAC, earning the same trust in those services that it built in plumbing.</p>
          <p><span className="whitespace-nowrap">J. Hart</span> is now one of the Motherlode's most trusted full-service plumbing and HVAC companies, serving Sonora and surrounding foothill communities. The company is a Certified Bryant distributor, a Navien Service Specialist, and employs NATE-certified technicians. It has also earned the Union Democrat's Readers' Choice Award for "Best Plumber" multiple years in a row.</p>
          <p>The credentials matter. But so does the fact that when you call <span className="whitespace-nowrap">J. Hart</span>, you're calling a family that's been doing this work in this community for four decades.</p>
          <p>Ready to get started? Call <a href="tel:+12095331978" className="font-semibold text-primary hover:underline">(209) 533-1978</a> or <a href="/contact#cta-form" className="font-semibold text-primary hover:underline">contact us online</a> to schedule service.</p>
        </div>
      </div>
    </section>
  );
}
