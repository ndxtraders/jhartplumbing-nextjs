"use client";

import {
  Phone, Users, Shield, Clock, DollarSign,
  HardHat, Building2, Home, Flame, Award,
  Wrench, CheckCircle2, AlertTriangle,
  ClipboardCheck, Search, CalendarCheck,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceDetailCard } from "@/components/jhart/ServiceDetailCard";
import { IconFeatureCard } from "@/components/jhart/Cards";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { CTABanner } from "@/components/jhart/CTABanner";
import { CurrentProject } from "@/components/jhart/CurrentProject";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { ChecklistSection } from "@/components/jhart/ChecklistSection";
import { cn } from "@/lib/utils";

const newConstructionHeroBg = "/images/new-construction-hero-bg.webp";
const slabRoughIn = "/images/slab-rough-in.webp";
const commercialIntroImg = "/images/commercial-plumbing-intro.webp";
const newConstructionIntro = "/images/new-construction-intro.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={newConstructionHeroBg}
        heading={<>New Construction Plumbing for<br />Homes &amp; Commercial Projects</>}
        tagline="Complete plumbing installations for custom homes and commercial projects—including medical facilities, schools, retail, office buildings, and casinos. We work with your timeline and get it done right from the start."
        subtitle={<>Whether you're building new, adding square footage, or replacing major systems, <span className="whitespace-nowrap">J. Hart</span> Plumbing handles the full scope—from plan review to final inspection and startup.</>}
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request Estimate", href: "#cta-form" }}
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
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Plumbing", href: "/services/plumbing" },
          { label: "New Construction" },
        ]}
      />


      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Complete New Construction Plumbing That Passes Inspection the First Time"
        paragraphs={[
          <>From custom homes to commercial projects, <span className="whitespace-nowrap">J. Hart</span> Plumbing handles complete new construction installations and major upgrades throughout Sonora, Tuolumne County, and Calaveras County. We coordinate with your builder or GC, hit deadlines, and deliver code-compliant work that passes inspection.</>,
        ]}
        image={{ src: newConstructionIntro, alt: "J. Hart crew installing underground plumbing on a commercial job site" }}
        className="bg-background"
      />

      {/* ═══ RESIDENTIAL NEW CONSTRUCTION ═══ */}
      <section id="residential" className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="What We Install" className="mb-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceDetailCard
              icon={Home}
              title="Residential New Construction & Major Remodels"
              subtitle="Custom homes, additions, and full replumbs"
              description="From rough-in to final fixtures, we handle residential installs that pass inspection the first time."
              servicesLabel="What We Install"
              services={[
                "Underground / below-slab plumbing (as required)",
                "Water service from meter to house + main shutoff",
                "Full DWV rough-in (drain, waste & vent)",
                "Rough-ins for kitchens, baths, laundry, and hose bibs",
                "Water heater installation (tank or tankless), correctly sized",
                "Trim-out: set fixtures, connect appliances, test & final",
              ]}
            />
            <div id="commercial">
            <ServiceDetailCard
              icon={Building2}
              title="Commercial New Construction & Tenant Improvements"
              subtitle="Offices, retail, medical, schools, and more"
              description="We coordinate with your GC, meet deadlines, and deliver code-compliant installs that keep the project moving."
              servicesLabel="What We Install"
              services={[
                "Domestic water + DWV + storm drainage",
                "ADA restroom rough-ins and final set",
                "Backflow prevention (install + testing coordination)",
                "Grease traps / kitchen plumbing (where required)",
                "Commercial water heaters + recirculation loops",
                "Mechanical room piping & startup (circulation, PRVs, recirc loops)",
              ]}
            />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPECIALTY SYSTEMS ═══ */}
      <section id="specialty" className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="Specialty Systems" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <IconFeatureCard
              icon={Flame}
              title="Radiant Floor Heating"
              description="Hydronic radiant heating design and installation for new construction and major remodels—boilers, zones, manifolds, and controls."
              link={{ label: "Learn more about Radiant Heating", href: "/services/radiant-heating" }}
            />
            <IconFeatureCard
              icon={Shield}
              title="Fire Sprinkler Systems"
              description="Residential and commercial fire sprinkler installations—designed to meet code and pass inspection (NFPA 13D / NFPA 13 as applicable)."
              link={{ label: "Need sprinklers for your project? Call for a free estimate", href: "tel:+12095331978" }}
            />
          </div>
        </div>
      </section>

      {/* ═══ FREE ESTIMATES CTA ═══ */}
      <CTABanner heading="Free Estimates on New Construction Projects" />

      {/* ═══ PROJECT GUIDE ═══ */}
      <ProcessSteps
        className="bg-background"
        heading="New Construction Plumbing: What to Expect"
        description="If you're building a new home or commercial building, here's the plumbing process and what to plan for."
        steps={[
          { title: "Plan Review & Estimating", description: "We review your plans, confirm scope, identify potential issues early, and provide an accurate estimate—before delays and change orders pile up." },
          { title: "Rough-In Phase", description: "After framing and before insulation/drywall. We install supply lines, drain/vent piping, and backing for fixtures. Rough-in must pass inspection before walls get closed up." },
          { title: "Inspection", description: "Inspectors verify rough-in meets code. We schedule inspections and handle any corrections needed." },
          { title: "Trim-Out Phase", description: "After walls and flooring are finished, we set fixtures, connect appliances, install water heaters, and complete final connections." },
          { title: "Final Inspection & Startup", description: "We test everything, start up systems, and make sure you have reliable hot water and fully functioning plumbing before we're done." },
        ]}
      />

      {/* ═══ WORKING WITH BUILDERS ═══ */}
      <ChecklistSection
        heading="Working With Builders and General Contractors"
        description="We coordinate with your builder or GC throughout the project:"
        items={[
          "Schedule coordination — We show up when scheduled and don't hold up other trades.",
          "Clear communication — We keep everyone informed about progress and any issues.",
          "Problem-solving — If plans don't work in the field, we propose solutions and get approval before proceeding.",
          "Clean job sites — We respect the site and clean up our work areas.",
        ]}
        columns={2}
        footnote="Much of our work comes from repeat GCs who rely on us for custom homes and commercial builds because we're reliable and easy to work with."
      />


      {/* ═══ OWNER-BUILDERS ═══ */}
      <ChecklistSection
        heading="Owner-Builder Projects"
        description="Building your own home? We work directly with owner-builders regularly."
        items={[
          "We explain what needs to happen and when",
          "We help you understand inspection requirements",
          "We coordinate with your other contractors or subcontractors",
          "We guide you through the process so nothing gets missed",
        ]}
        columns={2}
        footnote="Owner-builders appreciate straightforward communication. We deliver that."
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        className="bg-off-white"
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> for Your New Construction Project</>}
        subtitle="We don't overbook. We don't cut corners. We do installations right."
        features={[
          { icon: Award, title: "40 years installing plumbing systems", desc: "We've seen every scenario and know what passes inspection." },
          { icon: Clock, title: "On-time performance", desc: "We don't delay your project." },
          { icon: ClipboardCheck, title: "Code-compliant installations", desc: "Residential and commercial work done to spec." },
          { icon: Users, title: "Clear communication", desc: "You know what's happening and when." },
          { icon: Shield, title: "Licensed & insured", desc: "CA Lic #459194 | NV Lic #77957" },
        ]}
        columns={3}
      />


      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="Trusted by Builders & Owners"
        testimonials={[
          {
            quote: "These guys are great! They do everything from new construction plumbing to all sorts of repairs on existing. They've repaired our old house plumbing and did the plumbing on a new building for us. They are honest and always do a great job plus they are on time!",
            author: "Trevor Thorn",
            initials: "TT",
            location: "New Construction & Repairs · 2025",
          },
          {
            quote: "J Hart Plumbing was a pleasure doing business with from start to finish. They had an online customer portal with the estimate, photos and information. Cody and Ruben showed up on time and were very professional. The finished product surpassed all my expectations!",
            author: "Joshua Campbell",
            initials: "JC",
            location: "Plumbing Installation · 2025",
          },
          {
            quote: "We own a local business with two locations and the team at J. Hart has consistently exceeded expectations, whether it's a new install or urgent repair. Fair pricing, prompt communication, and excellent service!",
            author: "Daniel Rowe",
            initials: "DR",
            location: "Commercial Plumbing · 2024",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        heading="Frequently Asked Questions"
        items={[
          { question: "How far in advance should I schedule new construction plumbing?", answer: "As early as possible. Ideally, contact us during the planning phase so we can review plans and coordinate timing with your builder or GC. This avoids delays and ensures we can schedule around other trades." },
          { question: "Can you work with my architect or designer on the plumbing layout?", answer: "Absolutely. We regularly work with architects and designers to plan efficient plumbing layouts that meet code requirements and fit the design intent." },
          { question: "What if there's a problem during rough-in inspection?", answer: "We handle it. If an inspector requires corrections, we address them promptly and reschedule the inspection. Issues are rare because we build to code from the start." },
          { question: "Can you install fixtures I purchase separately?", answer: "Sometimes. We can install customer-supplied fixtures, but we recommend checking with us before you buy to confirm compatibility and avoid delays. When we supply the fixtures, you get full product + labor warranty coverage. With customer-supplied fixtures, our warranty typically covers labor only." },
          { question: "How long do new water heaters last?", answer: "Tank water heaters typically last 8–12 years. Tankless units can last 15–20 years with proper maintenance. We size and install them correctly to maximize lifespan." },
          { question: "Do you offer financing for larger projects?", answer: "We can discuss payment arrangements for larger projects. Contact us to talk about your specific situation." },
          { question: "Do you install fire sprinkler systems for new builds?", answer: "Yes. We install residential and commercial fire sprinkler systems designed to meet NFPA 13D and NFPA 13 requirements as applicable." },
          { question: "Do fire sprinklers lower insurance rates?", answer: "In many cases, yes. Fire sprinkler systems can qualify you for insurance discounts. Check with your insurance provider for specific savings." },
          { question: "Can you retrofit fire sprinklers into an older home?", answer: "It depends on the home's layout and access. We can evaluate your property and let you know if retrofit is feasible and cost-effective." },
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
