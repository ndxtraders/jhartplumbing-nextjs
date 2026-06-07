"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { type LucideIcon } from "lucide-react";

interface Callout {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface IntroSectionProps {
  heading: string;
  paragraphs: React.ReactNode[];
  callout?: Callout;
  image?: { src: string; alt: string; imageClassName?: string };
  floatImage?: boolean;
  className?: string;
}

export function IntroSection({ heading, paragraphs, callout, image, floatImage = true, className }: IntroSectionProps) {
  const imageEl = image && (
    <img
      src={image.src}
      alt={image.alt}
      className={cn(
        "rounded-2xl shadow-elevated aspect-[4/3] object-cover",
        floatImage
          ? "w-full sm:w-[45%] float-right ml-8 mb-6"
          : "w-full sm:w-[45%] flex-shrink-0",
        image.imageClassName
      )}
      loading="lazy"
      width={920}
      height={690}
    />
  );

  const calloutEl = callout && (
    <div className={cn("mt-8 rounded-xl border border-border bg-off-white p-6", floatImage && "clear-both")}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <callout.icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-navy">{callout.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {callout.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={cn("mx-auto max-w-5xl px-8 py-20", className)}>
      <SectionHeader heading={heading} align="left" className="mb-8" />
      {floatImage ? (
        <div className="text-base leading-relaxed text-muted-foreground">
          {imageEl}
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <React.Fragment key={i}>{typeof p === "string" ? <p>{p}</p> : p}</React.Fragment>
            ))}
          </div>
          {calloutEl}
          {image && !callout && <div className="clear-both" />}
        </div>
      ) : (
        <div className="text-base leading-relaxed text-muted-foreground">
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="space-y-4 flex-1">
              {paragraphs.map((p, i) => (
                <React.Fragment key={i}>{typeof p === "string" ? <p>{p}</p> : p}</React.Fragment>
              ))}
            </div>
            {imageEl}
          </div>
          {calloutEl}
        </div>
      )}
    </section>
  );
}
