"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

/* ── Service Card (Light & Dark) ── */
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
  variant?: "light" | "dark";
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  variant = "light",
  className,
}: ServiceCardProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "rounded-2xl p-8 transition-all duration-300",
        isDark
          ? "bg-navy border border-white/10"
          : "bg-white shadow-card border border-border hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
    >
      <div
        className={cn(
          "inline-flex h-12 w-12 items-center justify-center rounded-xl",
          isDark ? "bg-primary/20 text-steel" : "bg-primary/10 text-primary",
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3
        className={cn(
          "mt-4 text-xl font-extrabold",
          isDark ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h3>
      {!isDark && <div className="w-10 h-1 rounded-full bg-cta mt-2" />}
      <p className={cn("mt-3 text-base leading-relaxed", isDark ? "text-white/70" : "text-muted-foreground")}>
        {description}
      </p>
      {link && (
        <a
          href={link.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          {link.label} →
        </a>
      )}
    </div>
  );
}

/* ── Icon Feature Card ── */
interface IconFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
  className?: string;
}

export function IconFeatureCard({ icon: Icon, title, description, link, className }: IconFeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        className,
      )}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-navy">{title}</h3>
      <div className="w-10 h-1 rounded-full bg-cta mt-2 mb-3" />
      <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      {link && (
        <a
          href={link.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          {link.label} →
        </a>
      )}
    </div>
  );
}

/* ── Compact Service Card ── */
interface CompactServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function CompactServiceCard({ icon: Icon, title, description, className }: CompactServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-off-white rounded-xl p-6 border border-border hover:shadow-card transition-shadow",
        className,
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-bold text-navy">{title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

/* ── Glass Card ── */
interface GlassCardProps {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ icon: Icon, label, children, className }: GlassCardProps) {
  return (
    <div className={cn("bg-navy-deep rounded-2xl p-6", className)}>
      <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cta/15 ring-1 ring-cta/30 mb-3">
          <Icon className="w-5 h-5 text-cta" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</span>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}

/* ── Feature Check Card ── */
interface FeatureCheckCardProps {
  title: string;
  description: string;
  className?: string;
}

export function FeatureCheckCard({ title, description, className }: FeatureCheckCardProps) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-border/60 bg-white p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
          <Check className="h-4 w-4" />
        </span>
        <h4 className="text-base font-bold text-navy">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

/* ── Image Service Card ── */
interface ImageServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  footerNote?: string;
  gradientFrom?: string;
  className?: string;
}

export function ImageServiceCard({
  icon: Icon,
  title,
  items,
  footerNote,
  gradientFrom = "from-navy/40",
  className,
}: ImageServiceCardProps) {
  return (
    <div className={cn("relative group", className)}>
      <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated h-full flex flex-col">
        <div className="relative h-44 overflow-hidden bg-steel/20">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br to-navy-deep/70 group-hover:scale-105 transition-transform duration-500",
              gradientFrom,
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <Icon className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        <div className="px-6 pt-5 pb-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-navy">{title}</h3>
          <div className="w-10 h-1 rounded-full bg-cta mt-2 mb-3" />
          <ul className="space-y-2 mb-4 flex-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                <svg
                  className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {footerNote && (
            <p className="text-muted-foreground text-sm border-t border-border pt-4">{footerNote}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Numbered Step ── */
interface NumberedStepProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function NumberedStep({ step, title, description, className }: NumberedStepProps) {
  return (
    <div className={cn("", className)}>
      <div className="flex items-start gap-4">
        <span className="text-6xl md:text-7xl font-black text-primary/15 leading-none select-none">
          {String(step).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-2xl font-extrabold text-navy leading-tight">{title}</h3>
          <div className="mt-1 h-1 w-12 rounded-full bg-cta" />
        </div>
      </div>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}