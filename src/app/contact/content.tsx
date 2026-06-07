"use client";

import { Phone } from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { EmergencyBanner } from "@/components/jhart/EmergencyBanner";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { CredentialsSection } from "@/components/jhart/CredentialsSection";
import { FAQSection } from "@/components/jhart/FAQSection";
import { FinalCTASection } from "@/components/jhart/FinalCTASection";
import { Footer } from "@/components/jhart/Footer";
import { ContactInfoCards } from "@/components/jhart/ContactInfoCards";
import { CallbackForm } from "@/components/jhart/CallbackForm";
import { MapSection } from "@/components/jhart/MapSection";

const jhartLogo = "/images/jhart-logo.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        heading={<>Contact <span className="whitespace-nowrap">J. Hart</span>{" "}<br className="hidden md:block" />Plumbing Inc.</>}
        tagline="Ready to Schedule Service or Get an Estimate?"
        subtitle="Call, email, or request a callback. We respond quickly and show up when we say we will."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request a Callback", href: "#callback" }}
        rightContent={
          <img src={jhartLogo} alt="J. Hart Plumbing & HVAC" className="w-full max-w-xs md:max-w-sm lg:max-w-md brightness-0 invert opacity-20" />
        }
      />
      <TrustBar />

      {/* ═══ CONTACT INFO CARDS ═══ */}
      <ContactInfoCards />

      {/* ═══ CALLBACK FORM ═══ */}
      <div id="cta-form">
        <CallbackForm />
      </div>

      {/* ═══ OUR PROCESS ═══ */}
      <ProcessSteps
        heading="What to Expect When You Call"
        steps={[
          { title: "We Answer Our Phone", description: "During business hours, you'll talk to someone on our team—not a call center, not a voicemail tree." },
          { title: "Clear Scheduling", description: "We'll ask about your issue, answer questions, and schedule a service call. We give you a time window and stick to it." },
          { title: "Service Call Details", description: "Service call fee: $185 (applies to diagnostic and first half-hour of work). If we need to order parts, we'll let you know timeline and costs before proceeding. For larger jobs, we'll schedule an estimate visit." },
          { title: "Written Estimates", description: "For installations, replacements, or major repairs, you get a written estimate before work starts. No surprise charges without your approval." },
          { title: "Same-Day Service", description: "Available for many repairs and emergencies, depending on schedule. Call early for best availability." },
        ]}
      />

      {/* ═══ EMERGENCY SERVICE ═══ */}
      <EmergencyBanner
        heading="Emergency Service"
        description="Plumbing emergencies don't wait for convenient times. If you're dealing with:"
        items={[
          "Burst pipes or major leaks",
          "Flooding from plumbing failures",
          "Sewer backups",
          "No water throughout the house",
          "Water heater failures (no hot water)",
        ]}
        footnote="We'll walk you through emergency shut-off procedures over the phone if needed and dispatch a technician. Typical emergency response: 1–3 hours."
      />

      {/* ═══ CREDENTIALS ═══ */}
      <CredentialsSection
        licenses={[
          { label: "California License", number: "#459194" },
          { label: "Nevada License", number: "#77957" },
        ]}
        description="Fully licensed and insured for residential and commercial plumbing, HVAC, radiant heating, fire sprinklers, and water treatment."
      />

      {/* ═══ WHERE WE WORK ═══ */}
      <WhereWeWork
        className="bg-off-white"
        primaryCities={["Sonora", "Twain Harte", "Columbia", "Jamestown", "Tuolumne", "Mi-Wuk Village", "Pinecrest", "Groveland", "Chinese Camp", "Don Pedro", "Sierra Village", "Angels Camp"]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        items={[
          { question: "Do you offer free estimates?", answer: "For installations, replacements, and larger projects—yes, we provide free on-site estimates. For service calls and diagnostics, our $185 service call fee applies (covers diagnostic and the first half-hour of work)." },
          { question: "How quickly can you get here for an emergency?", answer: "For plumbing emergencies, we typically respond within 1–3 hours. Call (209) 533-1978 and we'll dispatch a technician as quickly as possible." },
          { question: "Do you work weekends?", answer: "Our regular hours are Monday–Friday, 7:30 AM – 4:00 PM. For true plumbing emergencies, call our main number and we'll do our best to help." },
          { question: "What forms of payment do you accept?", answer: "We accept cash, checks, and major credit cards. For larger projects, we can discuss payment arrangements." },
          { question: "Do you provide written estimates?", answer: "Yes. For installations, replacements, and major repairs, you get a detailed written estimate before work starts. No surprise charges without your approval." },
          { question: "What areas do you serve?", answer: "We serve Sonora, Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Pinecrest, Groveland, Chinese Camp, Don Pedro, Sierra Village, Angels Camp, and surrounding communities in Tuolumne and Calaveras Counties." },
        ]}
      />

      {/* ═══ FINAL CTA ═══ */}
      <FinalCTASection
        heading="Ready to Get Started?"
        secondaryCTA={{ label: "Request a Callback", href: "#callback" }}
        footerLines={["We'll reach out within 1 business hour during regular business hours."]}
        footerLinks={[
          { label: "View Our Services", href: "/services/plumbing" },
          { label: "Service Areas", href: "/about#service-area" },
          { label: "Read Reviews", href: "/reviews" },
          { label: "Contact Us", href: "/contact#cta-form" },
        ]}
      />

      <Footer />
    </div>
  );
};
