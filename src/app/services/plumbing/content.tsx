"use client";

import {
  Wrench, Home, Building2, HardHat, Award, Phone, Clock,
  AlertTriangle, Flame, Droplets, Gauge, Settings,
  Shield, Users, DollarSign,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceChecklist } from "@/components/jhart/ServiceChecklist";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { ServiceDetailCard } from "@/components/jhart/ServiceDetailCard";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { ProblemGrid } from "@/components/jhart/ProblemGrid";
import { EmergencyBanner } from "@/components/jhart/EmergencyBanner";
import { RecentWork } from "@/components/jhart/RecentWork";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";

const tanklessRadiantSystem = "/images/tankless-radiant-system.webp";
const plumbingHeroBg = "/images/plumbing-hero-bg.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={plumbingHeroBg}
        heading={<>Plumbing Services in Sonora<br />& Tuolumne County</>}
        tagline="Residential & Commercial Plumbing Since 1984"
        subtitle="From emergency repairs to complete installations, we handle all your plumbing needs. Straightforward service, honest pricing, no runaround."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request Service", href: "#cta-form" }}
      >
        <GoogleBadge />
      </Hero>

      {/* ═══ TRUST BAR ═══ */}
      <TrustBar
        items={[
          { icon: Users, label: "Family-Owned Since 1984", breakpoint: "always" as const },
          { icon: Shield, label: "Licensed & Insured", breakpoint: "always" as const },
          { icon: Clock, label: "Same-Day Service Available", breakpoint: "sm" as const },
          { icon: DollarSign, label: "Fair Pricing", breakpoint: "md" as const },
        ]}
      />

      {/* ═══ BREADCRUMB ═══ */}
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plumbing" }]} />

      {/* ═══ INTRO SECTION ═══ */}
      <IntroSection
        heading="Full-Service Plumbing for Homes & Businesses"
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing has been solving plumbing problems throughout Sonora and Tuolumne County since 1984. Whether you need an emergency repair, routine maintenance, or a complete system installation, we show up ready, explain your options clearly, and get the job done without dragging it out.</>,
          "We work on everything from leaky faucets to commercial tenant improvements. If it involves pipes, drains, fixtures, water heaters, or water systems—we handle it.",
          <p key="bold" className="font-semibold text-navy">
            What sets us apart: We don't overbook, we don't cut corners, and we don't give you the runaround. You get straight answers, clean work, and a fix that holds up.
          </p>,
        ]}
        callout={{
          icon: Shield,
          title: "Workmanship You Can Count On",
          description: "If we do the work, we stand behind it. You'll get a clear explanation of what was done and what to expect going forward.",
        }}
        image={{
          src: tanklessRadiantSystem,
          alt: "Tankless water heater and radiant heating system installation by J. Hart Plumbing",
        }}
      />

      {/* ═══ SERVICE CHECKLIST ═══ */}
      <ServiceChecklist
        heading="Our Plumbing Services"
        description="Not sure what you need? Start here. These are the most common services we handle every week."
        services={[
          "Water Heaters (tank & tankless)",
          "Leaks & Pipe Repairs",
          "Drains & Clogs",
          "Sewer Lines & Camera Inspections",
          "Faucets, Toilets & Fixtures",
          "Garbage Disposals",
          "Water Pressure Issues",
          "Repipes & Plumbing Upgrades",
          "Water Treatment & Filtration",
          "Gas Lines (if applicable)",
          "Backflow Testing & Prevention",
          "Preventive Maintenance",
        ]}
      />

      {/* ═══ THREE DETAILED SERVICE CARDS ═══ */}
      <section className="mx-auto max-w-5xl px-8 py-20">
        <SectionHeader heading="Plumbing for Homes & Businesses" className="mb-14" />

        <ServiceDetailCard
          icon={Home}
          title="Residential Plumbing"
          subtitle="For Homeowners Throughout Tuolumne County"
          description="We handle all the plumbing issues that come with owning a home—from fixing a running toilet to replacing your entire water heater."
          servicesLabel="Common residential services:"
          services={[
            "Water heater repair and replacement",
            "Leak detection and pipe repairs",
            "Drain cleaning and clog removal",
            "Faucet, toilet, and fixture repairs",
            "Slab leak detection",
            "Garbage disposal service",
            "Emergency plumbing repairs",
            "Bathroom and kitchen plumbing",
          ]}
          paragraphs={[
            "Whether it's an urgent issue that needs same-day attention or a planned upgrade, you'll get reliable service without unnecessary upselling. If you need a $200 repair, we won't pitch you a $5,000 replacement.",
          ]}
          link={{ label: "See Complete Residential Plumbing Services", href: "/services/plumbing/residential" }}
          className="mb-12"
        />

        <ServiceDetailCard
          icon={Building2}
          title="Commercial Plumbing"
          subtitle="For Business Owners & Property Managers"
          description="We keep commercial properties running with fast response times and minimal disruption to your operations."
          servicesLabel="Commercial plumbing services:"
          services={[
            "Tenant and property maintenance",
            "Emergency repairs and service calls",
            "Restroom repairs and renovations",
            "Drain and sewer line service",
            "Water heater service and replacement",
            "Backflow prevention and testing",
            "Grease trap service (restaurants)",
            "Preventive maintenance programs",
          ]}
          paragraphs={[
            "We understand that downtime costs you money. When you call with an emergency, we respond quickly and work efficiently. We also handle scheduled maintenance, tenant improvements, and routine repairs that keep your property functioning smoothly.",
            <><span className="font-semibold text-navy">Property managers appreciate our:</span> Clear communication, written estimates, documented service records, and coordination with tenants and contractors. COIs and documentation available upon request.</>,
          ]}
          link={{ label: "See Complete Commercial Plumbing Services", href: "/services/plumbing/commercial" }}
          className="mb-12"
        />

        <ServiceDetailCard
          icon={HardHat}
          title="New Installation & Construction Plumbing"
          subtitle="For New Builds, Remodels & System Replacements"
          description="Planning new construction, a major remodel, or replacing a major system? We handle the full scope from design review to final inspection."
          servicesLabel="Installation services:"
          services={[
            "New construction plumbing (residential and commercial)",
            "Water heater installations (tank and tankless)",
            "Whole-house repiping",
            "Radiant floor heating systems",
            "Fire sprinkler systems",
            "Water treatment and filtration",
            "Bathroom and kitchen remodels",
            "Tenant improvement plumbing",
          ]}
          paragraphs={[
            "We work with builders, general contractors, and owner-builders. We review plans early, provide accurate estimates, meet deadlines, and pass inspections the first time.",
          ]}
          link={{ label: "See Complete Installation & Construction Services", href: "/services/plumbing/new-construction" }}
        />
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <ProcessSteps
        description={<>Here's what to expect when you call <span className="whitespace-nowrap">J. Hart</span>.</>}
        steps={[
          { title: "Tell us what's going on", description: "Call or request service. We'll ask a few quick questions and schedule the soonest available time." },
          { title: "We diagnose and explain your options", description: "We find the cause, explain what we see in plain language, and give you clear repair or replacement options." },
          { title: "You approve the work before we begin", description: "No surprises. You'll know what it costs and what's included before we start." },
          { title: "We fix it right, clean up, and walk you through it", description: "We test our work, clean up the area, and tell you what to watch for and how to maintain it." },
        ]}
      />

      {/* ═══ COMMON PROBLEMS ═══ */}
      <ProblemGrid
        className="bg-off-white"
        heading="Common Plumbing Problems We Fix"
        problems={[
          { icon: Flame, title: "No Hot Water", description: "Water heater failures are one of the most common calls we get. We diagnose the problem quickly and give you clear options—repair or replace—with honest pricing for both." },
          { icon: Droplets, title: "Leaks & Drips", description: "Even small leaks waste water and cause damage over time. We find the source and fix it right, whether it's a dripping faucet, leaking pipe, or a hidden slab leak." },
          { icon: AlertTriangle, title: "Clogged Drains", description: "Slow drains turn into complete clogs if ignored. We clear drains properly using snaking, hydro-jetting, or camera inspection for stubborn issues—no harsh chemicals that damage pipes." },
          { icon: Gauge, title: "Low Water Pressure", description: "Could be a simple aerator issue or a sign of bigger problems like corroded pipes. We diagnose the cause and explain your options." },
          { icon: Settings, title: "Running Toilets", description: "A running toilet wastes hundreds of gallons per day and drives up your water bill. Usually a simple fix if caught early." },
          { icon: AlertTriangle, title: "Sewer Backups", description: "Main sewer line problems affect your entire home or building. We use camera inspection to see exactly what's wrong—tree roots, collapsed pipes, or buildup—and fix it right." },
          { icon: Droplets, title: "Pipe Bursts & Flooding", description: "Emergencies happen. When they do, we respond fast to minimize water damage and get your plumbing back in working order." },
        ]}
      />

      {/* ═══ EMERGENCY SERVICE ═══ */}
      <EmergencyBanner
        heading="Emergency Plumbing Service"
        description="Plumbing emergencies don't wait for convenient times. We offer same-day service for urgent issues and emergency response when you're dealing with:"
        items={[
          "Burst pipes or major leaks",
          "Sewage backups",
          "No water throughout the house",
          "Water heater failures (no hot water)",
          "Flooding from plumbing failures",
        ]}
        footnote="We'll walk you through emergency shut-off procedures over the phone if needed and get someone to you as quickly as possible."
      />

      {/* ═══ RECENT WORK ═══ */}
      <RecentWork
        className="bg-off-white"
        heading="Recent Plumbing Work"
        description="A few examples of the kinds of jobs we handle in Sonora and throughout Tuolumne County."
        items={[
          "Water heater replacement (fast swap + clean install)",
          "Sewer line snake + camera inspection (stoppage located and cleared)",
          "Fixture replacement (toilet/faucet upgrades)",
          "Leak repair (under-sink, wall, or yard line)",
          "Commercial restroom repair (minimal downtime)",
        ]}
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> Plumbing?</>}
        subtitle="We don't overbook. We don't cut corners. We do it right."
        features={[
          { icon: Users, title: "40 Years of Local Service", desc: "We've been serving Sonora and surrounding areas since 1984. We're not a franchise, not a call center—just a local family business." },
          { icon: DollarSign, title: "Straightforward Pricing", desc: "We explain what's wrong, what it'll cost to fix, and give you options. No confusing jargon, no hidden fees." },
          { icon: Wrench, title: "Experienced Technicians", desc: "Our team has decades of combined experience. We've seen every plumbing problem you can imagine." },
          { icon: Shield, title: "Work That Holds Up", desc: "We fix problems properly so you're not calling us back for the same issue next month." },
          { icon: Home, title: "Clean, Respectful Service", desc: "We treat your property like our own. Protective covers, cleanup included." },
          { icon: Award, title: "Licensed & Insured", desc: "CA Lic #459194 | NV Lic #77957 — Fully licensed and insured for residential and commercial plumbing work." },
        ]}
      />

      {/* ═══ WHERE WE WORK ═══ */}
      <WhereWeWork
        className="bg-off-white"
        primaryCities={[
          "Sonora", "Twain Harte", "Columbia", "Jamestown", "Tuolumne",
          "Mi-Wuk Village", "Pinecrest", "Groveland", "Chinese Camp",
          "Don Pedro", "Sierra Village", "Angels Camp",
        ]}
        secondaryCities={["Arnold", "Copperopolis", "Murphys", "Avery", "San Andreas", "Vallecito"]}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        testimonials={[
          {
            quote: "My hot water heater was leaking. Kathleen was very courteous and helpful. Within an hour I received an estimate. Jason and Ted showed up on time and installed the new water heater in record time and cleaned up everything. I am very happy with their professionalism.",
            author: "John Young",
            initials: "JY",
            location: "Water Heater Replacement · 2025",
          },
          {
            quote: "J Hart Plumbing has always been my go to with my plumbing issues. They are prompt and know what they are doing. Their communication is awesome. Thanks J Hart for always doing a great job!",
            author: "Tammy Hammond",
            initials: "TH",
            location: "Plumbing Service · 2024",
          },
          {
            quote: "I called J Hart yesterday morning and got an appointment for the afternoon. Sal & JT came to snake my sewer line. They are always professional & friendly, make me confident in their ability. I recommend this company to anyone who needs a plumber.",
            author: "Tina Wildmon",
            initials: "TW",
            location: "Sewer Line Service · 2024",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        items={[
          { question: "What types of plumbing do you do?", answer: "We handle all residential and commercial plumbing—repairs, maintenance, installations, remodels, new construction, and emergency service. From fixing a leaky faucet to installing complete plumbing systems in new buildings." },
          { question: "Do you offer emergency plumbing service?", answer: "Yes. We offer same-day service for urgent issues during business hours and emergency response for serious problems like burst pipes, flooding, or sewage backups." },
          { question: "How much does a plumber cost?", answer: "Our service call fee is a $185 flat fee (applies to the diagnostic and first half-hour of work). Repair costs vary depending on the issue, and we provide clear pricing before starting work." },
          { question: "Are you licensed and insured?", answer: "Yes. We're fully licensed (CA #459194, NV #77957) and insured for residential and commercial plumbing work." },
          { question: "Do you work on both homes and businesses?", answer: "Yes. We serve residential customers, commercial properties, property management companies, and general contractors." },
          { question: "How quickly can you get here?", answer: "For emergencies, we respond as quickly as possible—typically within 1–3 hours depending on time of day and current workload. For scheduled service, we often have same-day or next-day availability." },
          { question: "What areas do you serve?", answer: "We're based in Sonora and serve all of Tuolumne County, including Twain Harte, Columbia, Jamestown, Groveland, Angels Camp, and surrounding communities." },
          { question: "Do you provide estimates?", answer: "Yes. For larger projects like water heater replacements, repiping, or remodels, we provide written estimates. For smaller repairs, we quote the work after diagnosing the problem." },
        ]}
      />

      {/* ═══ CTA + FORM ═══ */}
      <div id="cta-form">
        <CTAFormSection />
      </div>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};
