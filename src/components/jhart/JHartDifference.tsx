"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { ChecklistItem } from "./Badges";
import { Button } from "@/components/ui/button";
const bryantBadge = "/images/bryant-factory-authorized-dealer.png";
const navienBadge = "/images/navien-specialist.png";
const bbbBadge = "/images/bbb-badge.webp";

interface JHartDifferenceProps {
  className?: string;
}

export function JHartDifference({ className }: JHartDifferenceProps) {
  return (
    <section className={cn("bg-background px-6 py-20", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              The <span className="whitespace-nowrap">J. Hart</span> Difference
            </h2>
            <div className="w-12 h-1 rounded-full bg-cta mt-4 mb-6" />
            <ul className="space-y-4">
              <ChecklistItem>Straight answers and clear options — no hidden fees</ChecklistItem>
              <ChecklistItem>Experienced technicians who know what they're doing</ChecklistItem>
              <ChecklistItem>Work that holds up, not quick patches</ChecklistItem>
              <ChecklistItem>Clean, respectful service inside your home</ChecklistItem>
              <ChecklistItem>Accredited by the Better Business Bureau, A+ Rating</ChecklistItem>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="cta" asChild><a href="#cta-form">Request Service</a></Button>
              <Button variant="outline" asChild><a href="tel:+12095331978">(209) 533-1978</a></Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Trusted Credentials</div>
              <div className="flex flex-row items-center justify-center gap-6">
                <div className="flex items-center justify-center rounded-xl bg-light-blue p-6 h-40 w-52">
                  <img src={bryantBadge} alt="Bryant Factory Authorized Dealer" className="h-24 w-auto" width={96} height={96} loading="lazy" />
                </div>
                <div className="flex items-center justify-center rounded-xl bg-light-blue p-6 h-40 w-52">
                  <img src={navienBadge} alt="Navien Service Specialist" className="h-24 w-auto" width={96} height={96} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}