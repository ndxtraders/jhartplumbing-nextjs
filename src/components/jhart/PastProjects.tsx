"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PastProjectCardProps {
  title: string;
  location: string;
  image?: string;
  gradientFrom?: string;
  className?: string;
}

export function PastProjectCard({
  title,
  location,
  image,
  gradientFrom = "from-navy/60",
  className,
}: PastProjectCardProps) {
  return (
    <div className={cn("group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer", className)}>
      {image ? (
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={600} height={450} />
      ) : (
        <div className={cn("absolute inset-0 bg-gradient-to-br to-navy-deep/80", gradientFrom)} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-extrabold text-sm md:text-base">{title}</h3>
        <span className="text-white/70 text-xs">{location}</span>
      </div>
    </div>
  );
}

interface PastProjectItem {
  title: string;
  location: string;
  image?: string;
  from?: string;
}

interface PastProjectsProps {
  heading?: string;
  description?: string;
  projects?: PastProjectItem[];
  footnote?: React.ReactNode;
  className?: string;
}

export function PastProjects({
  heading = "Projects We've Worked On",
  description = "Commercial plumbing for new construction, tenant improvements, and facility upgrades throughout Tuolumne County.",
  projects = [],
  footnote,
  className,
}: PastProjectsProps) {
  return (
    <section className={cn("bg-navy py-16 px-8", className)}>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{heading}</h2>
        <div className="w-16 h-1 rounded-full bg-cta mx-auto mb-6" />
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <PastProjectCard key={i} title={p.title} location={p.location} image={p.image} gradientFrom={p.from} />
        ))}
      </div>
      {footnote && (
        <p className="text-center text-xs text-white/40 mt-6">
          {typeof footnote === 'string' ? footnote : footnote}
        </p>
      )}
    </section>
  );
}
