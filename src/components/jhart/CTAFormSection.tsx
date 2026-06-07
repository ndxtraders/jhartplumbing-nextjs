"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Phone, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trackLead } from "@/lib/analytics";

const FORMSPREE_ID = "xzdqerow";

interface CTAFormSectionProps {
  showBusinessName?: boolean;
  className?: string;
}

export function CTAFormSection({ showBusinessName = false, className }: CTAFormSectionProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Select a service…");
  const [message, setMessage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || service === "Select a service…") {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service,
          message: message.trim(),
          ...(businessName.trim() ? { businessName: businessName.trim() } : {}),
          page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error(`Formspree error ${res.status}`);
      toast.success("Request sent! We'll call you back soon.");
      trackLead(service, "cta_form", window.location.pathname + window.location.search);
      setName(""); setPhone(""); setService("Select a service…"); setMessage(""); setBusinessName("");
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Something went wrong. Please call us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={cn("relative bg-navy overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 items-center">
          {/* Left: copy + trust signals */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/35 px-4 py-2 mb-6">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Get a Same-Day Response</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight md:text-4xl">
              Ready to Schedule?<br />We'll Call You Back Fast.
            </h2>
            <div className="w-12 h-1 rounded-full bg-cta mt-5 mb-7" />
            <p className="text-base leading-relaxed text-white/70">
              Fill out the form and we'll reach out to confirm your appointment. No holding, no runaround — just a real person who knows your trade area.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: Check, text: "Same-day appointments available Mon–Fri" },
                { icon: Check, text: "Upfront pricing — no surprises after the fact" },
                { icon: Check, text: "CA Lic #459194 · NV Lic #77957" },
                { icon: Clock, text: "Hours: 7:30 AM – 4:00 PM, Mon–Fri" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-white/85">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-4">
              <Button variant="cta" asChild>
                <a href="tel:+12095331978" className="gap-2.5">
                  <Phone className="w-4 h-4" />
                  (209) 533-1978
                </a>
              </Button>
              <span className="text-sm text-white/40"><span className="hidden md:inline">or use the form →</span><span className="md:hidden">or use the form ↓</span></span>
            </div>
          </div>

          {/* Right: form card */}
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-border p-8 shadow-elevated">
              <h3 className="text-lg font-bold text-navy mb-6">Request a Callback</h3>
              <div className="space-y-4">
                {showBusinessName && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                      Business Name
                    </label>
                    <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Your Business (optional)" className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                      {showBusinessName ? "Contact Name" : "Name"} <span className="text-cta">*</span>
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                      Phone <span className="text-cta">*</span>
                    </label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(209) 555-0123" className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                    Service Needed <span className="text-cta">*</span>
                  </label>
                  <div className="relative">
                    <select value={service} onChange={(e) => setService(e.target.value)} className="w-full appearance-none px-4 py-3 rounded-lg text-sm text-navy bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-10">
                      <option>Select a service…</option>
                      <option>Emergency Repair</option>
                      <option>Routine Service</option>
                      <option>HVAC</option>
                      <option>Radiant Heating</option>
                      <option>Water Treatment</option>
                      <option>Other / Not Sure</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                    Briefly describe the issue
                  </label>
                  <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="e.g. Kitchen sink backing up since yesterday…" className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                </div>
                <Button variant="cta" type="submit" disabled={loading} className="w-full">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? "Sending…" : "Request Callback"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  We'll call you back within one business hour.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
