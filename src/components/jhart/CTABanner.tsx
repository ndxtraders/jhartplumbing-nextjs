"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  heading: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export function CTABanner({
  heading,
  buttonLabel = "Call Now (209) 533-1978",
  buttonHref = "tel:+12095331978",
  className,
}: CTABannerProps) {
  return (
    <div className={cn("bg-navy-deep", className)}>
      <div className="flex flex-col md:flex-row items-center gap-5 px-8 py-6 max-w-6xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <div className="text-xl font-extrabold tracking-tight text-white md:text-2xl">{heading}</div>
        </div>
        <Button variant="cta" size="lg" asChild>
          <a href={buttonHref} className="gap-3">
            <Phone className="w-5 h-5" />
            {buttonLabel}
          </a>
        </Button>
      </div>
    </div>
  );
}
