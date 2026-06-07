"use client";

import React, { useState } from "react";
import { Phone, CheckCircle2, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
const jhartLogo = "/images/jhart-logo.webp";
import { toast } from "sonner";
const FORMSPREE_ID = "xzdqerow";

export function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Select a service…");
  const [bestTime, setBestTime] = useState("Anytime");
  const [message, setMessage] = useState("");
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
          ...(email.trim() ? { email: email.trim() } : {}),
          service,
          bestTime,
          message: message.trim(),
          page: "/contact",
        }),
      });
      if (!res.ok) throw new Error(`Formspree error ${res.status}`);
      toast.success("Request sent! We'll call you back soon.");
      setName(""); setPhone(""); setEmail(""); setService("Select a service…"); setBestTime("Anytime"); setMessage("");
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Something went wrong. Please call us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="callback" className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 items-center">
          {/* Left: copy */}
          <div>
            <img src={jhartLogo} alt="J. Hart Plumbing & HVAC" className="h-16 brightness-0 invert mb-8" />
            <h2 className="text-3xl font-extrabold text-white leading-tight md:text-4xl">
              Request a Callback
            </h2>
            <div className="w-12 h-1 rounded-full bg-cta mt-5 mb-7" />
            <p className="text-base leading-relaxed text-white/70">
              We'll call you back within 1 business hour during regular hours.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: CheckCircle2, text: "Same-day appointments available Mon–Fri" },
                { icon: CheckCircle2, text: "Upfront pricing — no surprises after the fact" },
                { icon: CheckCircle2, text: "CA Lic #459194 · NV Lic #77957" },
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
              <span className="text-sm text-white/40">
                <span className="hidden md:inline">or use the form →</span>
                <span className="md:hidden">or use the form ↓</span>
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-border p-8 shadow-elevated">
              <h3 className="text-lg font-bold text-navy mb-6">Request a Callback</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                      Name <span className="text-cta">*</span>
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
                    Email (optional)
                  </label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                    What do you need? <span className="text-cta">*</span>
                  </label>
                  <div className="relative">
                    <select value={service} onChange={(e) => setService(e.target.value)} className="w-full appearance-none px-4 py-3 rounded-lg text-sm text-navy bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-10">
                      <option>Select a service…</option>
                      <option>Emergency Repair</option>
                      <option>Plumbing Service</option>
                      <option>Heating & Cooling (HVAC)</option>
                      <option>Radiant Floor Heating</option>
                      <option>Water Treatment</option>
                      <option>New Construction</option>
                      <option>Estimate / Consultation</option>
                      <option>Other / Not Sure</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                    Best time to call
                  </label>
                  <div className="relative">
                    <select value={bestTime} onChange={(e) => setBestTime(e.target.value)} className="w-full appearance-none px-4 py-3 rounded-lg text-sm text-navy bg-off-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-10">
                      <option>Anytime</option>
                      <option>Morning (7:30–10 AM)</option>
                      <option>Midday (10 AM–1 PM)</option>
                      <option>Afternoon (1–4 PM)</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                    Brief description (optional)
                  </label>
                  <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us briefly about your issue or project..." className="w-full px-4 py-3 rounded-lg text-sm text-navy placeholder-border bg-off-white border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
                </div>
                <Button variant="cta" type="submit" disabled={loading} className="w-full">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? "Sending…" : "Request Callback"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
