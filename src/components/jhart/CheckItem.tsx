"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface CheckItemProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function CheckItem({ icon: Icon = CheckCircle2, children, className }: CheckItemProps) {
  return (
    <div className={cn("flex items-start gap-3 rounded-lg bg-white border border-border px-5 py-4 shadow-card", className)}>
      <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <span className="text-sm font-medium text-navy">{children}</span>
    </div>
  );
}
