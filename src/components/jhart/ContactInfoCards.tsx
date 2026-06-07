"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export function ContactInfoCards() {
  return (
    <section className="bg-background px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Call Us */}
          <div className="rounded-2xl bg-white border border-border p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-extrabold text-navy mb-2">Call Us</h3>
            <a href="tel:+12095331978" className="text-xl font-bold text-primary hover:underline block mb-3">
              (209) 533-1978
            </a>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Monday–Friday: 7:30 AM – 4:00 PM</p>
              <p>Saturday–Sunday: Closed</p>
            </div>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-wide text-cta mb-1">Emergency Service:</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For plumbing emergencies (burst pipes, flooding, sewer backups, no water), call the main number. We'll get someone to you as quickly as possible—typically within 1–3 hours.
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="rounded-2xl bg-white border border-border p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-extrabold text-navy mb-2">Email Us</h3>
            <a href="mailto:info@jhartplumbing.com" className="text-base font-bold text-primary hover:underline block mb-3">
              info@jhartplumbing.com
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For general inquiries, questions about services, or project quotes. We typically respond within 4 business hours.
            </p>
          </div>

          {/* Visit Our Office */}
          <div className="rounded-2xl bg-white border border-border p-8 shadow-card">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-extrabold text-navy mb-2">Visit Our Office</h3>
            <p className="text-sm font-bold text-navy mb-1"><span className="whitespace-nowrap">J. Hart</span> Plumbing & HVAC</p>
            <p className="text-sm text-muted-foreground mb-1">18887 Plum Industrial Ct.</p>
            <p className="text-sm text-muted-foreground mb-3">Sonora, CA 95370</p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              <strong className="text-navy">Directions:</strong> We're located off Tuolumne Road in the Plum Industrial Court area.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              Note: Our office is primarily for scheduling and administrative purposes. If you need immediate service, calling is faster than visiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
