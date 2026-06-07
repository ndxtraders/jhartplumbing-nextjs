"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Shield, Award, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface License {
  label: string;
  number: string;
  classifications?: string;
}

interface CredentialItem {
  icon?: React.ElementType;
  title: string;
  description?: string;
}

interface CredentialsSectionProps {
  heading?: string;
  licenses?: License[];
  description?: string;
  certifications?: string[];
  credentials?: CredentialItem[];
  className?: string;
}

export function CredentialsSection({
  heading = "Licensed & Insured",
  licenses = [
    { label: "California Contractor License", number: "#459194", classifications: "(C16, C20, C36)" },
    { label: "Nevada Contractor License", number: "#77957", classifications: "(C-1d)" },
  ],
  description = "Fully licensed and insured for all plumbing, HVAC, fire sprinkler, and water treatment work. We carry comprehensive liability insurance and workers' compensation coverage.",
  certifications = [
    "Bryant Factory Authorized Dealer",
    "Navien Service Specialists",
    "NATE-Certified Technicians",
    "BBB Accredited Business",
  ],
  credentials,
  className,
}: CredentialsSectionProps) {
  return (
    <section className={cn("bg-background px-8 py-20", className)}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader heading={heading} className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {licenses.map((lic) => (
            <div key={lic.number} className="rounded-2xl bg-white border border-border p-8 shadow-card text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">{lic.label}</h3>
              <p className="text-3xl font-extrabold text-navy">{lic.number}</p>
              {lic.classifications && (
                <p className="text-sm text-muted-foreground mt-1">{lic.classifications}</p>
              )}
            </div>
          ))}
        </div>
        {description && (
          <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto mb-10">
            {description}
          </p>
        )}
        {credentials && credentials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            {credentials.map((cred) => (
              <div key={cred.title} className="rounded-xl bg-off-white border border-border p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-navy text-sm">{cred.title}</h4>
                    {cred.description && (
                      <p className="text-sm text-muted-foreground mt-1">{cred.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {certifications.length > 0 && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm font-bold uppercase tracking-wide text-primary text-center mb-6">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 rounded-lg bg-white border border-border px-5 py-4 shadow-card">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-navy">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
