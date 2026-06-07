"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

interface GuideTab {
  id: string;
  label: string;
  subtitle: string;
  content: React.ReactNode;
}

interface HomeownerGuideProps {
  heading?: string;
  description?: string;
  tabs: GuideTab[];
  className?: string;
}

export function HomeownerGuide({
  heading = "Common Residential Plumbing Issues — And What to Do About Them",
  description,
  tabs,
  className,
}: HomeownerGuideProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  return (
    <section className={cn("bg-off-white px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} description={description} className="mb-14" />

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 border",
                activeTab === tab.id
                  ? "bg-primary text-white border-primary shadow-md"
                  : "bg-white text-navy border-border hover:border-primary/30 hover:bg-light-blue",
              )}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id} className="rounded-2xl bg-white border border-border p-8 md:p-10 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">
                    {String(tabs.findIndex((t) => t.id === tab.id) + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{tab.label}</p>
                  <h3 className="text-xl font-extrabold text-navy">{tab.subtitle}</h3>
                </div>
              </div>
              <div className="prose-sm max-w-none text-muted-foreground leading-relaxed space-y-6">
                {tab.content}
              </div>
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
