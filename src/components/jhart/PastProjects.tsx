"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface PastProjectCardProps {
  title: string;
  location: string;
  image?: string;
  gradientFrom?: string;
  className?: string;
  onClick?: () => void;
}

export function PastProjectCard({
  title,
  location,
  image,
  gradientFrom = "from-navy/60",
  className,
  onClick,
}: PastProjectCardProps) {
  const isClickable = !!image && !!onClick;
  const Tag: React.ElementType = isClickable ? "button" : "div";
  return (
    <Tag
      type={isClickable ? "button" : undefined}
      onClick={isClickable ? onClick : undefined}
      aria-label={isClickable ? `View photo: ${title}` : undefined}
      className={cn(
        "group relative aspect-[4/3] rounded-xl overflow-hidden text-left w-full",
        isClickable && "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cta",
        className
      )}
    >
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
    </Tag>
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
  const [selected, setSelected] = useState<PastProjectItem | null>(null);

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
          <PastProjectCard
            key={i}
            title={p.title}
            location={p.location}
            image={p.image}
            gradientFrom={p.from}
            onClick={p.image ? () => setSelected(p) : undefined}
          />
        ))}
      </div>
      {footnote && (
        <p className="text-center text-xs text-white/40 mt-6">
          {typeof footnote === 'string' ? footnote : footnote}
        </p>
      )}

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl bg-navy border-navy-deep p-0 overflow-hidden [&>button]:text-white [&>button]:opacity-90 [&>button:hover]:opacity-100">
          <DialogTitle className="sr-only">{selected?.title ?? "Project photo"}</DialogTitle>
          <DialogDescription className="sr-only">{selected?.location ?? ""}</DialogDescription>
          {selected?.image && (
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-auto max-h-[80vh] object-contain bg-navy-deep"
            />
          )}
          {selected && (
            <div className="px-6 py-4">
              <h3 className="text-white font-extrabold text-lg">{selected.title}</h3>
              <span className="text-white/70 text-sm">{selected.location}</span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
