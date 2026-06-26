"use client";

import {
  Home, Building2, HardHat, Wind, Flame, Droplets,
  Phone, Users, Shield, Clock, DollarSign, Award,
} from "lucide-react";

import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { JHartDifference } from "@/components/jhart/JHartDifference";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { EmergencyBanner } from "@/components/jhart/EmergencyBanner";
import { PastProjects } from "@/components/jhart/PastProjects";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";

const plumbingHeroBg = "/images/plumbing-hero-bg.webp";
const jhartTeam2025 = "/images/jhart-team-2025.webp";
const bryantUnit = "/images/bryant-unit.jpg";
const commercialHvac = "/images/commercial-hvac-ductwork.webp";
const radiantFloor = "/images/radiant-floor-tubing.webp";
const chickenRanch = "/images/chicken-ranch-fire-station.webp";
const tanklessInstall = "/images/tankless-install.webp";
const sonoraAquatics = "/images/sonora-aquatics-center.webp";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={plumbingHeroBg}
        heading={<>Plumbing, Heating, Cooling &amp; Water Treatment<br className="hidden md:block" /> in Sonora &amp; Tuolumne County</>}
        tagline="One local team. Four generations. Since 1984."
        subtitle={<>From emergency plumbing repairs to high-efficiency heating, radiant floors, and clean water systems — <span className="whitespace-nowrap">J. Hart</span> handles it all under one roof, with honest pricing and no runaround.</>}
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
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Every Service You Need — From One Local Team"
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing has served Sonora, Tuolumne County, and Calaveras County since 1984. Over four decades, we've grown from a plumbing shop into a full-service home and commercial services company — plumbing, HVAC, radiant heating, and water treatment — all run by the same local family.</>,
          "That means one call, one company, and one team that knows your home or building. No call centers, no rotating subcontractors, no finger-pointing when something needs follow-up.",
          <p key="bold" className="font-semibold text-navy">
            Straight answers, clean work, and a fix that holds up — whatever trade it takes.
          </p>,
        ]}
        callout={{
          icon: Award,
          title: "Licensed & Insured Across Every Trade",
          description: "CA Lic #459194 | NV Lic #77957 — Fully licensed for plumbing, HVAC, radiant heating, and water treatment work, residential and commercial.",
        }}
        image={{
          src: jhartTeam2025,
          alt: "The J. Hart Plumbing team at the Sonora shop",
        }}
      />

      {/* ═══ ALL SIX SERVICE PILLARS ═══ */}
      <ServiceCardGrid
        heading="Browse Our Services"
        cards={[
          {
            icon: Home,
            title: "Residential Plumbing",
            href: "/services/plumbing/residential",
            services: [
              "Water heaters (tank & tankless)",
              "Leak detection & pipe repairs",
              "Drain cleaning & clogs",
              "Faucets, toilets & fixtures",
              "Repipes & remodels",
              "Emergency plumbing service",
            ],
            description: "Everything your home's plumbing needs — from a leaky faucet to a full repipe.",
          },
          {
            icon: Building2,
            title: "Commercial Plumbing",
            href: "/services/plumbing/commercial",
            services: [
              "Property & tenant maintenance",
              "Emergency repairs",
              "Restroom repairs & renovations",
              "Backflow testing & prevention",
              "Grease traps (restaurants)",
              "Scheduled maintenance programs",
            ],
            description: "Fast response and minimal downtime for offices, retail, restaurants, and multi-tenant properties.",
          },
          {
            icon: HardHat,
            title: "New Construction",
            href: "/services/plumbing/new-construction",
            services: [
              "Residential & commercial new builds",
              "Whole-house repipes",
              "Bathroom & kitchen remodels",
              "Tenant improvements",
              "Fire sprinkler systems",
              "Plan review & estimating",
            ],
            description: "We work with builders, GCs, and owner-builders — plans reviewed early, inspections passed the first time.",
          },
          {
            icon: Wind,
            title: "HVAC — Heating & Cooling",
            href: "/services/hvac",
            services: [
              "Furnace repair & replacement",
              "AC repair & replacement",
              "Heat pumps & mini-splits",
              "Ductwork & airflow",
              "Seasonal maintenance",
              "Bryant Factory Authorized Dealer",
            ],
            description: "Same-day no-heat and no-AC service plus proper-sized installs for the Motherlode climate.",
          },
          {
            icon: Flame,
            title: "Radiant Heating",
            href: "/services/radiant-heating",
            services: [
              "Radiant floor design & install",
              "Tankless boiler systems",
              "Troubleshooting & repair",
              "Snowmelt systems",
              "Zone control & thermostats",
              "Retrofit & new construction",
            ],
            description: "Comfortable, efficient heat from the floor up — designed for our elevation and built to last.",
          },
          {
            icon: Droplets,
            title: "Water Treatment",
            href: "/services/water-treatment",
            services: [
              "Water testing",
              "Whole-house filtration",
              "Water softeners",
              "Reverse osmosis (drinking water)",
              "UV disinfection",
              "Well water solutions",
            ],
            description: "Cleaner, better-tasting water — systems sized for local water conditions in Sonora and the foothills.",
          },
        ]}
      />

      {/* ═══ THE J. HART DIFFERENCE ═══ */}
      <JHartDifference />

      {/* ═══ HOW IT WORKS ═══ */}
      <ProcessSteps
        description={<>The same straightforward process for every trade we handle at <span className="whitespace-nowrap">J. Hart</span>.</>}
        steps={[
          { title: "Tell us what's going on", description: "Call or request service. We'll ask a few quick questions and route you to the right technician — plumbing, HVAC, radiant, or water." },
          { title: "We diagnose and explain your options", description: "We find the cause, explain what we see in plain language, and give you clear repair or replacement options with honest pricing." },
          { title: "You approve the work before we begin", description: "No surprises. You'll know what it costs and what's included before we start." },
          { title: "We fix it right, clean up, and walk you through it", description: "We test our work, clean up the area, and tell you what to watch for and how to maintain it." },
        ]}
      />

      {/* ═══ EMERGENCY ═══ */}
      <EmergencyBanner
        heading="Same-Day & Emergency Service"
        description="Burst pipes, no heat in January, no AC in August, sewage backups — emergencies don't wait. Neither do we."
        items={[
          "Burst pipes & major leaks",
          "No heat / no AC",
          "Sewage backups",
          "Water heater failures",
          "Flooding from plumbing failures",
        ]}
        footnote="Call and we'll walk you through emergency shut-off over the phone if needed, then get someone to you as quickly as possible."
      />

      {/* ═══ PAST PROJECTS ═══ */}
      <PastProjects
        heading="Quality Work Across Every Trade"
        description="A few recent jobs from across Tuolumne and Calaveras County — plumbing, HVAC, radiant, and commercial."
        projects={[
          { title: "HVAC Installation", location: "Sonora, CA", image: bryantUnit },
          { title: "Commercial HVAC", location: "Tuolumne County", image: commercialHvac },
          { title: "Radiant Floor Heating", location: "Twain Harte, CA", image: radiantFloor },
          { title: "New Construction", location: "Sonora, CA", image: chickenRanch },
          { title: "Tankless Water Heater", location: "Columbia, CA", image: tanklessInstall },
          { title: "Aquatics Center", location: "Sonora, CA", image: sonoraAquatics },
        ]}
      />

      {/* ═══ WHERE WE WORK ═══ */}
      <WhereWeWork />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="Trusted Across Every Service We Offer"
        testimonials={[
          {
            quote: "My hot water heater was leaking. Kathleen was very courteous and helpful. Within an hour I received an estimate. Jason and Ted showed up on time and installed the new water heater in record time and cleaned up everything. I am very happy with their professionalism.",
            author: "John Young",
            initials: "JY",
            location: "Water Heater Replacement · 2025",
          },
          {
            quote: "New to Sonora and so thankful for the referral. J Hart is the best in town, not only for plumbing but also HVAC. Brian and JD were thorough, explained everything about both my furnace and water heater; they were professional and showed excellence in customer care.",
            author: "Wendy Crowley",
            initials: "WC",
            location: "HVAC & Water Heater · 2025",
          },
          {
            quote: "I can not say enough about this company. From initial call through repair and completion, J Hart's entire staff are prompt, caring, and professional. I have used J Hart several times now for various projects and emergency repairs.",
            author: "George Wright",
            initials: "GW",
            location: "Various Repairs · 2024",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        items={[
          { question: "Do you really do plumbing, HVAC, radiant, and water treatment all in-house?", answer: "Yes. We're one local family-owned company with technicians cross-trained across all four trades. No subcontractors, no separate dispatchers — one call covers it." },
          { question: "Not sure which service I need — who do I call?", answer: "Call us at (209) 533-1978 and describe what's going on. We'll ask a few quick questions and route you to the right technician. If it turns out to be a different trade than you thought, we still cover it." },
          { question: "Do you serve both homes and businesses?", answer: "Yes. We serve residential customers, commercial properties, property managers, and general contractors throughout Tuolumne and Calaveras County." },
          { question: "What areas do you serve?", answer: "We're based in Sonora and serve Tuolumne County (Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Pinecrest, Groveland, Chinese Camp, Don Pedro, Sierra Village) and Calaveras County (Angels Camp, Arnold, Copperopolis, Murphys, Avery, San Andreas, Vallecito)." },
          { question: "Do you offer same-day or emergency service?", answer: "Yes. We offer same-day service for urgent issues during business hours and emergency response for serious problems like burst pipes, sewage backups, no heat, or no AC." },
          { question: "Are you licensed and insured?", answer: "Yes. CA Lic #459194 and NV Lic #77957 — fully licensed and insured for residential and commercial work across plumbing, HVAC, radiant heating, and water treatment." },
          { question: "Do you provide estimates?", answer: "Yes. For larger projects like water heater replacements, system installs, repipes, or remodels, we provide written estimates. For smaller repairs, we quote the work after diagnosing the problem. Our service call fee is a $185 flat fee (covers the diagnostic and first half-hour of work)." },
          { question: "How long has J. Hart been in business?", answer: "Since 1984 — four generations of the Hart family have run the shop out of Sonora. The services have expanded over the decades, but the approach hasn't changed: honest pricing, quality work, and a team that stands behind every job." },
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
}
