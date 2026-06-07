"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { type LucideIcon } from "lucide-react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StorySnippetProps {
  badge?: { icon?: LucideIcon; label: string } | null;
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
  cta?: { label: React.ReactNode; href: string };
  image?: { src: string; alt: string };
  bannerImage?: { src: string; alt: string; caption?: React.ReactNode };
  logo?: string;
  className?: string;
}

export function StorySnippet({
  badge = { icon: BookOpen, label: "Our Story" },
  heading,
  paragraphs,
  cta,
  image,
  bannerImage,
  logo,
  className,
}: StorySnippetProps) {
  return (
    <section className={cn("bg-background px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        {logo && (
          <img src={logo} alt="J. Hart Plumbing" className="h-20 mx-auto mb-8" loading="lazy" />
        )}
        <SectionHeader badge={badge ?? undefined} heading={heading} align={image ? "left" : "center"} className="mb-10" />
        <div className={cn("text-base leading-relaxed text-muted-foreground", !image && "max-w-3xl mx-auto space-y-4 text-center")}>
          {image && (
            <img
              src={image.src}
              alt={image.alt}
              className="float-right ml-8 mb-6 rounded-2xl shadow-elevated w-full sm:w-[45%] aspect-[4/3] object-cover"
              loading="lazy"
              width={600}
              height={450}
            />
          )}
          <div className={cn(image ? "space-y-4" : "space-y-4")}>
            {paragraphs.map((p, i) => (
              <React.Fragment key={i}>{p}</React.Fragment>
            ))}
            {bannerImage && (
              <figure className="pt-6">
                <img
                  src={bannerImage.src}
                  alt={bannerImage.alt}
                  className="w-full h-auto aspect-[16/9] object-cover rounded-2xl shadow-elevated"
                  loading="lazy"
                  width={1920}
                  height={1080}
                />
                {bannerImage.caption && (
                  <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                    {bannerImage.caption}
                  </figcaption>
                )}
              </figure>
            )}
            {cta && (
              <div className="pt-4 text-center">
                <Button variant="secondary" asChild>
                  <a href={cta.href}>
                    {cta.label} <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
