"use client";

import {
  Phone, Users, Shield, Clock, DollarSign,
  AlertTriangle, Award, Wrench, Building2, Droplets,
  ClipboardCheck, PenTool, HardHat, CalendarCheck,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { CTABanner } from "@/components/jhart/CTABanner";
import { ClientGrid } from "@/components/jhart/ClientGrid";
import { PastProjects } from "@/components/jhart/PastProjects";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { EmergencyContactCards } from "@/components/jhart/EmergencyContactCards";
import { HomeownerGuide } from "@/components/jhart/HomeownerGuide";
import { ProblemGrid } from "@/components/jhart/ProblemGrid";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { GuideH4, GuideBullets } from "@/components/jhart/GuideHelpers";

const plumbingHeroBg = "/images/plumbing-hero-bg.webp";
const commercialIntroImg = "/images/commercial-plumbing-intro.webp";
const chickenRanchFireStation = "/images/chicken-ranch-fire-station.webp";
const sonoraAquaticsCenter = "/images/sonora-aquatics-center.webp";
const bourbonBarrel = "/images/bourbon-barrel.webp";
const crcAdminBuilding = "/images/crc-admin-building.webp";
const firefallRanch = "/images/firefall-ranch.jpg";
const tractorSupply = "/images/tractor-supply-sonora.jpg";
const indianRockCenter = "/images/indian-rock-center.jpg";
const veteransAffairs = "/images/veterans-affairs-sonora.jpg";
const adventistHealth = "/images/adventist-health-sonora.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={plumbingHeroBg}
        heading={<>Commercial Plumbing Services<br />For Businesses &amp; Property Owners in Sonora &amp; Tuolumne County</>}
        tagline="Reliable plumbing service for offices, retail spaces, restaurants, rentals, and commercial buildings."
        subtitle="We keep your property running so you can focus on your business. Serving Sonora and Tuolumne County (and surrounding areas)."
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
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Plumbing", href: "/services/plumbing" },
          { label: "Commercial" },
        ]}
      />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Commercial Plumbing That Minimizes Downtime"
        paragraphs={[
          "We provide complete plumbing support for offices, retail stores, restaurants, lodging, medical facilities, schools, and multi-tenant commercial buildings.",
          "From emergency repairs to preventive maintenance programs and tenant improvements, we handle commercial plumbing with clear communication and accountability.",
        ]}
        image={{ src: commercialIntroImg, alt: "Commercial plumbing rough-in for new construction foundation in Tuolumne County" }}
        className="bg-background"
      />

      {/* ═══ COMMERCIAL SERVICES ═══ */}
      <ServiceCardGrid
        className="bg-off-white"
        heading="Our Commercial Plumbing Services"
        cards={[
          {
            icon: AlertTriangle,
            title: "Emergency Repairs & Service Calls",
            services: [
              "Burst pipes and flooding",
              "Sewer backups and drain emergencies",
              "Water heater failures",
              "Fixture failures and leaks",
              "After-hours emergency response",
            ],
            description: "When something breaks, we respond fast. We know downtime costs you money.",
          },
          {
            icon: Building2,
            title: "Tenant & Property Maintenance",
            popular: true,
            services: [
              "Restroom repairs and maintenance",
              "Fixture replacements",
              "Leak repairs throughout buildings",
              "Drain cleaning and preventive maintenance",
              "Water heater service",
              "Routine plumbing inspections",
            ],
            description: "We handle the day-to-day plumbing issues that come with managing commercial properties.",
          },
          {
            icon: Wrench,
            title: "Repairs, Replacements & Installations",
            services: [
              "Toilet, urinal, and sink installations",
              "Commercial-grade fixtures",
              "Water line repairs and replacements",
              "Backflow prevention devices",
              "Grease trap service (restaurants)",
              "Complete restroom renovations",
            ],
            description: "From single fixture swaps to full restroom upgrades, we handle it professionally and to code.",
          },
          {
            icon: Droplets,
            title: "Drain & Sewer Line Service",
            services: [
              "Main sewer line cleaning",
              "Grease trap pumping and maintenance",
              "Camera inspection for line issues",
              "Root removal and preventive treatment",
              "Floor drain service",
            ],
            description: "Clogged drains shut businesses down. We clear them and help prevent future problems.",
          },
          {
            icon: HardHat,
            title: "Tenant Improvements & Build-Outs",
            services: [
              "New tenant plumbing installations",
              "Layout modifications for space changes",
              "Adding restrooms or breakrooms",
              "ADA compliance upgrades",
              "Code-compliant new construction plumbing",
            ],
            description: "We work with your timeline to get tenants moved in on schedule.",
          },
          {
            icon: CalendarCheck,
            title: "Preventive Maintenance Programs",
            services: [
              "Scheduled inspections",
              "Drain maintenance",
              "Water heater flushing",
              "Fixture checks and minor repairs",
              "Documented service records",
            ],
            description: "Regular maintenance prevents expensive emergency calls and extends equipment life.",
          },
        ]}
      />

      {/* ═══ HOW IT WORKS ═══ */}
      <ProcessSteps
        className="bg-off-white"
        heading="How It Works For Commercial Clients"
        steps={[
          { title: "Initial call or request", description: "We gather details about your property, urgency, access, and stakeholders involved." },
          { title: "On-site assessment", description: "We evaluate the issue, review code considerations if applicable, and provide a written estimate." },
          { title: "Approval & scheduling", description: "We coordinate with owners, managers, tenants, or contractors and schedule work to minimize disruption." },
          { title: "Professional completion & documentation", description: "We complete the work efficiently, test systems, and provide clear documentation for your records." },
        ]}
      />

      {/* ═══ CLIENT GRID ═══ */}
      <ClientGrid
        className="bg-background"
        heading="Trusted by Local Businesses & Organizations"
        description="We're proud to serve commercial clients throughout Tuolumne County."
        clients={[
          "Chicken Ranch Casino",
          "Black Oak Casino",
          "Tractor Supply",
          "Avalon",
          "Adventist Health",
          "Dept. of Veterans Services",
          "Safari Smiles",
          "Front Porch",
          "Indian Rock",
          "Boyer Construction",
          "Firefall Ranch",
          "Rush Creek Lodge",
          "Tuolumne County Schools",
        ]}
      />

      {/* ═══ PAST PROJECTS ═══ */}
      <PastProjects
        heading="Commercial Projects"
        description="Commercial plumbing for new construction, tenant improvements, and facility upgrades throughout Tuolumne County."
        projects={[
          { title: "Chicken Ranch Fire Station", location: "Jamestown", image: chickenRanchFireStation },
          { title: "Sonora Aquatics Center", location: "Sonora", image: sonoraAquaticsCenter },
          { title: "The Armory & Bourbon Barrel", location: "Sonora", image: bourbonBarrel },
          { title: "Chicken Ranch Casino Admin Building", location: "Jamestown", image: crcAdminBuilding },
          { title: "Firefall Ranch", location: "Groveland", image: firefallRanch },
          { title: "Tractor Supply", location: "Sonora", image: tractorSupply },
          { title: "Indian Rock Center", location: "Sonora", image: indianRockCenter },
          { title: "Dept. of Veterans Affairs", location: "Sonora", image: veteransAffairs },
          { title: "Adventist Health Outpatient Clinic", location: "Sonora", image: adventistHealth },
        ]}
        footnote={
          <>
            Photos courtesy of{" "}
            <a href="https://boyerbuild.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              Boyer Construction
            </a>{" "}
            and{" "}
            <a href="https://calgolddevelopment.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              California Gold Development Corporation
            </a>
          </>
        }
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        className="bg-background"
        heading={<>Why Commercial Clients Choose <span className="whitespace-nowrap">J. Hart</span></>}
        subtitle="We're not the biggest commercial plumbing company, but we are reliable, responsive, and accountable."
        features={[
          { icon: Clock, title: "Fast response when it matters", desc: "We understand downtime costs you money." },
          { icon: Users, title: "Clear communication", desc: "We keep owners, managers, tenants, and contractors informed." },
          { icon: Wrench, title: "Efficient work", desc: "We minimize disruption to your operations." },
          { icon: DollarSign, title: "Honest pricing", desc: "Written estimates, no hidden fees." },
          { icon: Award, title: "40 years serving local businesses", desc: "We understand Sonora's commercial properties and infrastructure." },
          { icon: Shield, title: "Licensed & insured", desc: "Full coverage for commercial plumbing work." },
        ]}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="What Local Businesses Say"
        testimonials={[
          {
            quote: "We LOVE J Hart Plumbing! I'm the owner of Hotel Charlotte, a 103-year-old historic landmark hotel. They are our go-to plumber. They do extraordinary work! Professional, punctual, fast and courteous. They exceed expectations!",
            author: "Finn Horsley",
            initials: "FH",
            location: "Commercial Plumbing · 2025",
          },
          {
            quote: "We own a local business with two locations and the team at J. Hart has consistently exceeded expectations, whether it's a new install or urgent repair. Fair pricing, prompt communication, and excellent service!",
            author: "Daniel Rowe",
            initials: "DR",
            location: "Commercial Plumbing · 2024",
          },
          {
            quote: "These guys are great! They do everything from new construction plumbing to all sorts of repairs on existing. They've repaired our old house plumbing and did the plumbing on a new building for us. They are honest and always do a great job!",
            author: "Trevor Thorn",
            initials: "TT",
            location: "New Construction & Repairs · 2025",
          },
        ]}
      />

      {/* ═══ EMERGENCY / SCHEDULED CONTACT ═══ */}
      <EmergencyContactCards />

      {/* ═══ COMMERCIAL GUIDE ═══ */}
      <HomeownerGuide
        className="bg-off-white"
        heading="What Commercial Property Owners Need to Know"
        description="Running a business or managing commercial property means dealing with plumbing issues differently than at home."
        tabs={[
          {
            id: "why-different",
            label: "Why It's Different",
            subtitle: "Why Commercial Plumbing Is Different",
            content: (
              <>
                <GuideH4>Higher usage, more wear</GuideH4>
                <p>Commercial fixtures get used dozens or hundreds of times per day versus a few times in residential settings. Toilets, faucets, and drains wear out faster and need commercial-grade components to hold up.</p>

                <GuideH4>Code requirements are stricter</GuideH4>
                <p>Commercial buildings have different plumbing codes than residential. Fixture counts based on occupancy, ADA compliance, backflow prevention, grease interceptors for food service—the requirements add up and must be met for inspections and certificates of occupancy.</p>

                <GuideH4>Downtime costs money</GuideH4>
                <p>A broken toilet at home is inconvenient. A broken restroom at your restaurant, retail store, or office building can shut you down or drive customers away. Fast, reliable service isn't optional—it's essential.</p>

                <GuideH4>Multiple stakeholders</GuideH4>
                <p>Commercial plumbing often involves coordinating with property owners, tenants, managers, general contractors, and inspectors. Clear communication and documentation matter.</p>
              </>
            ),
          },
          {
            id: "common-problems",
            label: "Common Problems",
            subtitle: "Common Commercial Plumbing Problems",
            content: (
              <>
                <GuideH4>Frequent toilet &amp; fixture issues</GuideH4>
                <p>High-traffic restrooms mean constant wear on flush valves, fill valves, and fixture components. We stock commercial-grade parts and can repair or replace fixtures quickly to minimize downtime.</p>

                <GuideH4>Chronic drain clogs</GuideH4>
                <p>Restaurants deal with grease buildup. Offices deal with paper products and misuse. Regular drain maintenance prevents emergency backups during business hours.</p>

                <GuideH4>Water heater capacity problems</GuideH4>
                <p>Undersized or failing water heaters cause complaints from tenants and customers. We assess your actual hot water demand and recommend appropriately sized equipment.</p>

                <GuideH4>Sewer line backups</GuideH4>
                <p>Tree roots, grease accumulation, collapsed pipes, or inadequate slope can cause recurring backups. We use camera inspection to diagnose the actual problem.</p>

                <GuideH4>Old galvanized piping</GuideH4>
                <p>Many older commercial buildings still have original galvanized pipes corroding from the inside. Low pressure, rusty water, and frequent leaks signal it's time to repipe.</p>

                <GuideH4>Backflow prevention compliance</GuideH4>
                <p>Commercial properties require backflow prevention devices tested annually. We install, test, and certify backflow preventers to keep you compliant.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        heading="Frequently Asked Questions"
        items={[
          { question: "Do you work on large commercial buildings?", answer: "We specialize in small to mid-size commercial properties — offices, retail, restaurants, medical buildings, schools, and multi-tenant spaces. For very large commercial or industrial facilities, we can assess the scope and let you know if it's a good fit." },
          { question: "Can you work around our business hours?", answer: "Absolutely. We understand your business needs to stay open. We'll schedule work during off-hours, early mornings, or weekends when needed to minimize disruption to your operations." },
          { question: "Do you provide maintenance contracts?", answer: "Yes. We offer scheduled preventive maintenance programs tailored to your property." },
          { question: "How quickly can you respond to emergencies?", answer: "We offer same-day service for urgent issues during business hours and 24/7 emergency response for critical situations like burst pipes, sewer backups, or flooding. Call us directly at (209) 533-1978." },
          { question: "Do you work with property management companies?", answer: "Yes. We work regularly with property managers and can provide documentation, coordinate with tenants, and handle ongoing maintenance needs for managed properties." },
          { question: "Are you licensed for commercial work?", answer: "Yes. We hold California Contractor License #459194 and Nevada License #77957. We're fully licensed and insured for commercial plumbing work." },
        ]}
      />

      {/* ═══ CTA + FORM ═══ */}
      <div id="cta-form">
        <CTAFormSection showBusinessName />
      </div>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};
