"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "./Badges";
import { Button } from "@/components/ui/button";
import { type LucideIcon } from "lucide-react";

interface HeroProps {
  badge?: { icon?: LucideIcon; label: string };
  heading: React.ReactNode;
  tagline?: string;
  subtitle?: React.ReactNode;
  primaryCTA?: { label: string; href: string; icon?: LucideIcon };
  secondaryCTA?: { label: string; href: string };
  backgroundImage?: string;
  imageClassName?: string;
  children?: React.ReactNode;
  className?: string;
  rightContent?: React.ReactNode;
}

export function Hero({
  badge,
  heading,
  tagline,
  subtitle,
  primaryCTA = { label: "Request Service", href: "/contact#cta-form" },
  secondaryCTA = { label: "Learn More", href: "#services" },
  backgroundImage,
  imageClassName,
  children,
  className,
  rightContent,
}: HeroProps) {
  return (
    <header className={cn("relative overflow-hidden bg-navy-deep", className)}>
      {backgroundImage && (
        <>
           <img
            src={backgroundImage}
            alt=""
            className={cn("absolute inset-0 h-full w-full object-cover", imageClassName)}
            fetchPriority="high"
            width={2000}
            height={1120}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-deep))] via-[hsl(var(--navy-deep)/0.85)] to-[hsl(var(--navy-deep)/0.4)]" />
        </>
      )}
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0,0%,100%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className={cn("relative mx-auto max-w-5xl px-8 py-20 md:py-28", rightContent && "md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-12")}>
        <div>
          {badge && <SectionBadge icon={badge.icon} label={badge.label} variant="dark" className="mb-6" />}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {tagline && (
            <p className="mt-4 text-xl font-semibold text-white/90">{tagline}</p>
          )}
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
          )}
          {children && <div className="mt-6">{children}</div>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="cta" asChild>
              <a href={primaryCTA.href} className="gap-2">
                {primaryCTA.icon && <primaryCTA.icon className="w-4 h-4" />}
                {primaryCTA.label}
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
            </Button>
          </div>
        </div>
        {rightContent && (
          <div className="hidden md:flex items-center justify-center">
            {rightContent}
          </div>
        )}
      </div>
    </header>
  );
}