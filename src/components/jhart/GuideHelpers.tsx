"use client";

import React from "react";

export function GuideH4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-bold text-navy mb-2">{children}</h4>;
}

export type BulletVariant = "warning" | "action" | "info";

const variantStyles: Record<BulletVariant, { border: string; iconBg: string; iconColor: string }> = {
  warning: { border: "border-l-amber-400", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  action: { border: "border-l-primary", iconBg: "bg-primary/10", iconColor: "text-primary" },
  info: { border: "border-l-steel", iconBg: "bg-muted", iconColor: "text-muted-foreground" },
};

export function GuideBullets({
  items,
  icon: Icon,
  variant = "info",
}: {
  items: string[];
  icon?: React.ElementType;
  variant?: BulletVariant;
}) {
  const styles = variantStyles[variant];
  return (
    <ul className="space-y-1.5 ml-1">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-3 text-sm rounded-md border-l-2 ${styles.border} py-1.5 pl-2 pr-2 hover:bg-muted/40 transition-colors`}
        >
          {Icon ? (
            <span className={`flex-shrink-0 w-6 h-6 rounded-full ${styles.iconBg} flex items-center justify-center`}>
              <Icon className={`w-3.5 h-3.5 ${styles.iconColor}`} />
            </span>
          ) : (
            <span className={`${styles.iconColor}`}>•</span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function GuideComparison({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-off-white p-4">
      <h5 className="font-bold text-navy text-sm mb-1">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export function GuideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-off-white p-5 h-full">
      <h5 className="font-bold text-navy text-sm mb-2">{title}</h5>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
