"use client";

import {
  Phone, Users, Shield, DollarSign, Clock,
  Droplets, Beaker, Filter, Zap, Settings,
  Wrench, Award, CheckCircle2, AlertTriangle,
  ThumbsUp, Gauge, ArrowRight, Sun,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { HomeownerGuide } from "@/components/jhart/HomeownerGuide";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { CTABanner } from "@/components/jhart/CTABanner";
import { DarkCTASection } from "@/components/jhart/DarkCTASection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge, StarRating } from "@/components/jhart/Badges";
import { GuideH4, GuideBullets, GuideCard } from "@/components/jhart/GuideHelpers";
import { TestimonialSpotlight } from "@/components/jhart/TestimonialSpotlight";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { MaintenanceGrid } from "@/components/jhart/MaintenanceGrid";
import { CommercialSection } from "@/components/jhart/CommercialSection";
import { CompactServiceCard } from "@/components/jhart/Cards";
import { cn } from "@/lib/utils";
import { WaterHardnessScale } from "@/components/jhart/WaterHardnessScale";

const plumbingHeroBg = "/images/plumbing-hero-bg.webp";
const waterTreatmentSystem = "/images/water-treatment-system.jpg";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={plumbingHeroBg}
        heading={<>Water Filtration &amp; Treatment Services in Sonora, CA</>}
        tagline="Clean, soft water throughout your home or business."
        subtitle={<><span className="whitespace-nowrap">J. Hart</span> tests your water, explains what's causing the problem, and installs the right filtration or treatment system for hard water, iron staining, sediment, bacteria, and bad taste.</>}
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request Water Test & Estimate", href: "#cta-form" }}
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
          { label: "Water Treatment" },
        ]}
      />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Fix Hard Water, Iron Stains, and Bad Taste—For Good"
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing installs and services water treatment systems throughout Sonora and surrounding areas. We test your water, explain what the results mean, recommend the right equipment, and install systems that solve your specific water quality problems.</>,
        ]}
        image={{ src: waterTreatmentSystem, alt: "Water treatment system with HTP boiler, water softener, and copper piping installed by J. Hart Plumbing" }}
        className="bg-background"
      />

      {/* ═══ OUR SERVICES ═══ */}
      <ServiceCardGrid
        className="bg-off-white"
        heading="Our Water Treatment Services"
        cards={[
          {
            icon: Droplets,
            title: "Water Softener Installation",
            services: [
              "Whole-house water softening systems",
              "Salt-based and salt-free options",
              "High-efficiency softeners",
              "Properly sized for your household",
              "Commercial softener systems",
            ],
            description: "Hard water causes scale buildup, shortens appliance life, and makes cleaning difficult. We install softeners that actually solve the problem.",
          },
          {
            icon: Filter,
            title: "Reverse Osmosis (RO) Systems",
            popular: true,
            services: [
              "Under-sink drinking water systems",
              "Point-of-use installations",
              "Multi-stage filtration",
              "Remineralization options",
              "Commercial RO systems",
            ],
            description: "Clean, great-tasting drinking water at your kitchen sink. RO removes most dissolved solids and many contaminants for better taste and peace of mind.",
          },
          {
            icon: Beaker,
            title: "Iron & Sediment Filtration",
            services: [
              "Iron removal systems (rust staining)",
              "Sediment filters for well water",
              "Whole-house filtration",
              "Automatic backwashing filters",
              "Multi-media filtration",
            ],
            description: "Orange stains on fixtures? Sediment in your water? We install systems designed for your specific water chemistry.",
          },
          {
            icon: Zap,
            title: "UV Disinfection Systems",
            services: [
              "Ultraviolet water sterilization",
              "Well water bacteria treatment",
              "Point-of-entry protection",
              "Commercial UV systems",
              "Annual lamp replacement",
            ],
            description: "Kill bacteria, viruses, and microorganisms without chemicals. Essential for well water or areas with water quality concerns.",
          },
          {
            icon: Settings,
            title: "Whole-House Filtration",
            services: [
              "Carbon filtration for chlorine/taste/odor",
              "Multi-stage whole-house systems",
              "Combination softener + filtration",
              "Customized treatment trains",
              "Commercial building filtration",
            ],
            description: "Comprehensive water treatment addressing multiple issues—hardness, chlorine, sediment, taste, and odor.",
          },
          {
            icon: Wrench,
            title: "Service & Maintenance",
            services: [
              "Annual system maintenance",
              "Salt delivery (we can arrange)",
              "Filter replacements",
              "UV lamp changes",
              "System troubleshooting and repairs",
            ],
            description: "Water treatment systems need regular maintenance to work properly. We keep your system performing efficiently.",
          },
        ]}
      />

      {/* ═══ SYMPTOM MATCHER ═══ */}
      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="What Are You Noticing?" description="Not sure what you need? Pick the symptom—then we'll confirm with testing and recommend the right solution." className="mb-14" />
          <div className="space-y-4">
            {[
              { symptom: "Hard water (scale, spots, dry skin)", solution: "Whole-house water softener" },
              { symptom: "Iron/rust staining (orange stains, metallic taste)", solution: "Iron filtration (often with sediment filtration)" },
              { symptom: "Sediment (grit, cloudy water, clogged screens)", solution: "Sediment filtration and whole-house filtration" },
              { symptom: "Bad taste/odor (chlorine taste, sulfur smell)", solution: "Carbon filtration and/or RO at the kitchen sink" },
              { symptom: "Bacteria concerns (well water, positive tests)", solution: "UV disinfection (after filtration when needed)" },
            ].map((item) => (
              <div key={item.symptom} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl bg-white border border-border p-5 shadow-card">
                <div className="flex items-center gap-3 flex-1">
                  <AlertTriangle className="w-5 h-5 text-cta flex-shrink-0" />
                  <span className="text-sm font-bold text-navy">{item.symptom}</span>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto">
                  <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-primary font-semibold">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TYPICAL SOLUTIONS ═══ */}
      <section className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="What Most Projects Include" description="Every system depends on your water test and your usage, but most installations fall into one of these categories." className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompactServiceCard icon={Droplets} title="Water softeners" description="Whole-house softening sized to your hardness and household use." />
            <CompactServiceCard icon={Droplets} title="RO drinking water systems" description="Under-sink filtration for clean, great-tasting water at one faucet." />
            <CompactServiceCard icon={Droplets} title="Iron & well-water filtration" description="Backwashing filters and media sized to iron level, flow rate, and sediment load." />
            <CompactServiceCard icon={Droplets} title="UV disinfection" description="Point-of-entry UV for well-water bacteria protection (with pre-filtration when required)." />
            <CompactServiceCard icon={Droplets} title="Whole-house combinations" description="Multi-stage setups like sediment → carbon, or iron → softener → carbon, sometimes with UV." />
          </div>
        </div>
      </section>

      {/* ═══ FREE TESTING CTA ═══ */}
      <DarkCTASection
        heading="Free Water Analysis & Consultation"
        description="We test your water for hardness, pH, and iron at no cost—and explain exactly what the results mean. Before starting any project, we recommend a comprehensive lab test to establish a clear baseline, including bacteria, lead and other heavy metals, nitrates, pH, hardness, iron, manganese, and total dissolved solids."
        secondaryCTA={{ label: "Request Water Test & Estimate", href: "#cta-form" }}
      />

      {/* ═══ TESTIMONIAL SPOTLIGHT ═══ */}
      <TestimonialSpotlight
        quote="Showed up earlier than expected, courteous, knowledgeable, explained tankless water heater flushing process. Took a look at my iron filter and spotted a problem with the backflush timer setting, which he adjusted, no charge!"
        author="David Jigour"
        service="Tankless Water Heater Flush · 2025"
      />

      <HomeownerGuide
        className="bg-background"
        heading="Common Water Quality Problems in Our Area"
        description="If you live in Sonora or Tuolumne County, you're likely dealing with at least one water quality issue. Select your problem to learn the solution."
        tabs={[
          {
            id: "hard-water",
            label: "Hard Water",
            subtitle: "Hard Water (The Most Common Problem)",
            content: (
              <>
                <p>High mineral content—primarily calcium and magnesium. Measured in grains per gallon (gpg) or parts per million (ppm).</p>

                <GuideH4>Warning Signs</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "White scale buildup on faucets, showerheads, and fixtures",
                  "Spots on dishes and glassware",
                  "Soap doesn't lather well",
                  "Soap scum in tubs and showers",
                  "Dry, itchy skin and hair after showering",
                  "Dingy, stiff laundry (even after washing)",
                  "Water heaters fail prematurely (scale buildup inside tank)",
                  "Reduced water pressure from mineral buildup in pipes",
                ]} />

                <GuideH4>What It Costs You</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Shortened appliance life (water heaters, dishwashers, washing machines)",
                  "Higher energy bills (scale-coated water heater elements work harder)",
                  "More soap and detergent needed",
                  "Constant cleaning of fixtures and glass",
                  "Plumbing repairs from scale buildup",
                ]} />

                <GuideH4>The Solution</GuideH4>
                <p>A water softener removes calcium and magnesium, giving you soft water throughout your home.</p>

                <WaterHardnessScale className="mt-2" />
              </>
            ),
          },
          {
            id: "iron-rust",
            label: "Iron / Rust",
            subtitle: "Iron & Rust Staining",
            content: (
              <>
                <p>Dissolved iron in well water oxidizes when exposed to air, leaving rust-colored stains on everything it touches.</p>
                <GuideH4>Warning Signs</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Orange or rust stains on fixtures, toilets, and sinks",
                  "Metallic taste in water",
                  "Stained laundry",
                  "Buildup in water heaters and pipes",
                ]} />
                <GuideH4>The Solution</GuideH4>
                <p>Iron filtration systems oxidize dissolved iron and filter it out. Often combined with sediment filtration for well water.</p>
              </>
            ),
          },
          {
            id: "sediment",
            label: "Sediment",
            subtitle: "Sediment & Particulate",
            content: (
              <>
                <p>Sand, silt, and other particles in well water can clog fixtures and damage appliances.</p>
                <GuideH4>Warning Signs</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Grit or particles in water",
                  "Cloudy or murky water",
                  "Clogged aerators and screens",
                  "Sediment collecting in toilet tanks",
                ]} />
                <GuideH4>The Solution</GuideH4>
                <p>Sediment filters and whole-house filtration systems remove particles before they reach your fixtures and appliances.</p>
              </>
            ),
          },
          {
            id: "taste-odor",
            label: "Bad Taste / Odor",
            subtitle: "Taste & Odor Problems",
            content: (
              <>
                <p>Chlorine, sulfur, and other compounds can make water taste or smell unpleasant.</p>
                <GuideH4>Warning Signs</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Chlorine taste in municipal water",
                  "Sulfur or rotten egg smell",
                  "Musty or earthy taste",
                  "Chemical taste",
                ]} />
                <GuideH4>The Solution</GuideH4>
                <p>Carbon filtration removes chlorine, taste, and odor. For drinking water, a reverse osmosis system provides the cleanest, best-tasting result.</p>
              </>
            ),
          },
          {
            id: "bacteria",
            label: "Bacteria",
            subtitle: "Bacteria & Microbiological Concerns",
            content: (
              <>
                <p>Well water can contain bacteria, viruses, and other microorganisms that pose health risks.</p>
                <GuideH4>Warning Signs</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Positive coliform test results",
                  "Well water without treatment",
                  "Health department advisories",
                  "Gastrointestinal issues from water",
                ]} />
                <GuideH4>The Solution</GuideH4>
                <p>UV disinfection kills 99.99% of bacteria and viruses without chemicals. Pre-filtration is required when sediment or iron is present.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ HOW IT WORKS GUIDE ═══ */}
      <HomeownerGuide
        className="bg-off-white"
        heading="Water Treatment Solutions Explained"
        description="Here's what each system does and when you need it."
        tabs={[
          {
            id: "softeners",
            label: "Water Softeners",
            subtitle: "Water Softeners: Solving Hard Water",
            content: (
              <>
                <GuideH4>How they work</GuideH4>
                <p>Ion exchange process. Water flows through resin beads that attract and capture calcium/magnesium ions, exchanging them for sodium ions. The result is soft water throughout your home.</p>

                <GuideH4>Salt-based vs. salt-free</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Salt-based softeners (our recommendation)">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-white">Recommended</span>
                    </div>
                    <GuideBullets icon={CheckCircle2} variant="action" items={[
                      "Actually remove hardness minerals",
                      "Proven, reliable technology",
                      "Require salt for regeneration",
                      "Need periodic maintenance",
                      "Completely solve hard water problems",
                    ]} />
                  </GuideCard>
                  <GuideCard title={'Salt-free "conditioners"'}>
                    <GuideBullets icon={AlertTriangle} variant="warning" items={[
                      "Don't remove minerals—claim to reduce scale formation",
                      "No scientific consensus on effectiveness",
                      "No maintenance or salt required",
                      "Don't provide the same results as true softening",
                      "May help with mild hardness but won't solve serious hard water",
                    ]} />
                  </GuideCard>
                </div>

                <GuideH4>Sizing</GuideH4>
                <p>Based on your water hardness and daily usage. Example: Family of 4 using 300 gallons/day with 10 gpg hardness needs 30,000+ grain capacity.</p>
              </>
            ),
          },
          {
            id: "ro",
            label: "Reverse Osmosis",
            subtitle: "Reverse Osmosis (RO): Premium Drinking Water",
            content: (
              <>
                <GuideH4>How it works</GuideH4>
                <p>Multi-stage filtration pushes water through a semi-permeable membrane that removes 95–99% of dissolved solids, minerals, and many contaminants.</p>

                <GuideH4>Typical RO system stages</GuideH4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { step: "1", label: "Sediment pre-filter" },
                    { step: "2", label: "Carbon pre-filter" },
                    { step: "3", label: "RO membrane" },
                    { step: "4", label: "Carbon post-filter" },
                    { step: "5", label: "Storage tank" },
                  ].map((s) => (
                    <GuideCard key={s.step} title={`Stage ${s.step}`}>
                      <p>{s.label}</p>
                    </GuideCard>
                  ))}
                </div>

                <GuideH4>What RO removes</GuideH4>
                <GuideBullets icon={CheckCircle2} variant="action" items={[
                  "Dissolved minerals (calcium, magnesium, sodium)",
                  "Heavy metals (lead, arsenic, mercury)",
                  "Nitrates and nitrites",
                  "Fluoride",
                  "Total dissolved solids (TDS)",
                  "Many organic compounds and contaminants",
                  "Bad taste and odor",
                ]} />

                <GuideH4>What RO doesn't remove</GuideH4>
                <GuideBullets icon={AlertTriangle} variant="warning" items={[
                  "Some volatile organic compounds (VOCs)",
                  "Some pesticides (additional carbon filtration helps)",
                  "Bacteria/viruses (need UV or other disinfection)",
                ]} />

                <p className="mt-4"><span className="font-semibold text-navy">Installation:</span> Under-sink units with dedicated faucet.</p>
                <p><span className="font-semibold text-navy">Maintenance:</span> Filters annually, membrane every 2–3 years.</p>
              </>
            ),
          },
          {
            id: "iron-filtration",
            label: "Iron Filtration",
            subtitle: "Iron Filtration: Eliminating Rust Stains",
            content: (
              <>
                <GuideH4>How it works</GuideH4>
                <p>Oxidizes dissolved iron (converts clear-water iron to particles) then filters it out. Automatic backwashing cleans the filter media regularly.</p>

                <GuideH4>Types of iron filters</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Air injection systems">
                    <p>Introduce oxygen to oxidize iron. Works for ferrous (clear water) iron.</p>
                  </GuideCard>
                  <GuideCard title="Chemical oxidation systems">
                    <p>Use oxidizing agents to convert iron. Handles higher levels and manganese.</p>
                  </GuideCard>
                  <GuideCard title="Media filters (Iron Breaker 3)">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded-full bg-cta px-2 py-0.5 text-xs font-bold text-white">Popular</span>
                    </div>
                    <p>Special media catalyzes oxidation without chemicals. Common for moderate levels.</p>
                  </GuideCard>
                </div>

                <GuideH4>Sizing</GuideH4>
                <p>Based on iron concentration, flow rate, and daily usage. We test your water first—guessing doesn't work with iron treatment.</p>
                <p className="font-semibold text-navy mt-2">Residential systems: starting at $4,500 installed</p>
              </>
            ),
          },
          {
            id: "uv",
            label: "UV Disinfection",
            subtitle: "UV Disinfection: Chemical-Free Water Safety",
            content: (
              <>
                <p>Ultraviolet light (254 nm) damages bacteria and virus DNA, rendering them unable to reproduce. Water flows through a chamber, is exposed to UV light, and exits disinfected.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Effectiveness">
                    <GuideBullets icon={CheckCircle2} variant="action" items={[
                      "Kills 99.99% of bacteria, viruses",
                      "No chemicals or taste change",
                      "Instant treatment",
                      "No harmful byproducts",
                    ]} />
                  </GuideCard>
                  <GuideCard title="When needed">
                    <GuideBullets icon={AlertTriangle} variant="warning" items={[
                      "Well water with bacteria",
                      "After positive coliform tests",
                      "Health department required",
                      "Peace of mind for well users",
                    ]} />
                  </GuideCard>
                </div>

                <p className="mt-4"><span className="font-semibold text-navy">Maintenance:</span> Annual lamp ($80–$150).</p>
                <p><span className="font-semibold text-navy">Cost:</span> $600–$1,200 residential, $1,200–$3,000+ commercial.</p>
                <p className="mt-2 font-semibold text-navy">Important: UV requires clear water. Install filtration before UV if you have sediment or iron.</p>
              </>
            ),
          },
          {
            id: "whole-house",
            label: "Whole-House",
            subtitle: "Whole-House Filtration Systems",
            content: (
              <>
                <p>For multiple water quality issues, whole-house filtration provides point-of-entry treatment for all water entering your home.</p>

                <GuideH4>Common configurations</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Sediment + Carbon">
                    <p className="font-semibold text-navy">$1,500–$2,500</p>
                    <p>Removes particles, chlorine, taste, odor.</p>
                  </GuideCard>
                  <GuideCard title="Softener + Carbon">
                    <p className="font-semibold text-navy">$2,000–$3,500</p>
                    <p>Addresses hardness plus chlorine/taste.</p>
                  </GuideCard>
                  <GuideCard title="Softener + Iron + Carbon">
                    <p className="font-semibold text-navy">$3,500–$6,000+</p>
                    <p>Complete well water treatment.</p>
                  </GuideCard>
                </div>

                <p className="mt-4 font-semibold text-navy">For complex water chemistry, we design multi-stage systems addressing all issues in proper sequence.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ SIZING & SELECTION GUIDE ═══ */}
      <HomeownerGuide
        className="bg-background"
        heading="Sizing & Selecting Water Treatment Systems"
        description="One size doesn't fit all. Here's what actually matters."
        tabs={[
          {
            id: "testing",
            label: "Water Testing",
            subtitle: "Start With Water Testing",
            content: (
              <>
                <GuideH4>Municipal water</GuideH4>
                <p>Request a water quality report from your water district. Shows hardness, chlorine, minerals, and contaminants.</p>

                <GuideH4>Well water</GuideH4>
                <p>Professional lab testing required.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Basic test ($50–$100)">
                    <p>Covers hardness, iron, pH, TDS.</p>
                  </GuideCard>
                  <GuideCard title="Comprehensive test ($150–$300)">
                    <p>Includes bacteria and more parameters.</p>
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">We can arrange testing or work with your existing results to recommend proper treatment.</p>
              </>
            ),
          },
          {
            id: "usage",
            label: "Water Usage",
            subtitle: "Consider Your Water Usage",
            content: (
              <>
                <p>Daily water consumption affects system sizing.</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <GuideCard title="1–2 people">
                    <p className="font-semibold text-navy">~100–150 gal/day</p>
                  </GuideCard>
                  <GuideCard title="3–4 people">
                    <p className="font-semibold text-navy">~200–300 gal/day</p>
                  </GuideCard>
                  <GuideCard title="5+ people">
                    <p className="font-semibold text-navy">~300–400+ gal/day</p>
                  </GuideCard>
                </div>
                <p className="mt-4">Peak flow rate matters too: Multiple showers, laundry, dishwasher running simultaneously? The system must keep up without a pressure drop.</p>
              </>
            ),
          },
          {
            id: "match",
            label: "Match Treatment",
            subtitle: "Match Treatment to Problems",
            content: (
              <>
                <p className="mb-4">Don't over-treat or under-treat.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Example: Mild hardness + chlorine taste">
                    <p className="text-sm">5 gpg hardness + chlorine taste</p>
                    <p className="font-semibold text-navy mt-2">→ Compact softener + under-sink RO for drinking water works.</p>
                  </GuideCard>
                  <GuideCard title="Example: Hard water + high iron + bacteria">
                    <p className="text-sm">15 gpg hardness + 5 ppm iron + bacteria</p>
                    <p className="font-semibold text-navy mt-2">→ Sediment → iron filter → softener → carbon → UV</p>
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">We match equipment to actual problems, not sell you the most expensive system or the cheapest option that won't work.</p>
              </>
            ),
          },
          {
            id: "installation",
            label: "Installation",
            subtitle: "Installation & What to Expect",
            content: (
              <>
                <GuideH4>Where systems install</GuideH4>
                <p>Whole-house systems install at point-of-entry (where the main water line enters the building), typically in a garage, basement, utility area, or well house. Point-of-use systems (RO) install under the kitchen sink.</p>

                <GuideH4>Space requirements</GuideH4>
                <GuideBullets icon={CheckCircle2} variant="action" items={[
                  "Softener: ~4 ft x 2 ft floor space + clearance",
                  "Filters: Wall-mounted or floor-standing depending on type",
                  "RO: Under-sink cabinet space",
                ]} />

                <GuideH4>Installation timeline</GuideH4>
                <GuideBullets icon={Clock} variant="info" items={[
                  "2–4 hours: Simple systems (RO, single filter)",
                  "Half day: Softener",
                  "Full day to 2 days: Multi-stage whole-house",
                ]} />

                <GuideH4>Plumbing modifications</GuideH4>
                <p>We install bypass valves, drain connections, and necessary plumbing. Some jobs require minor electrical work (UV systems, automatic controls).</p>

                <GuideH4>Testing &amp; startup</GuideH4>
                <p>We verify flow rates, check for leaks, test water quality where applicable, program controls, and explain operation and maintenance before we leave.</p>
              </>
            ),
          },
        ]}
      />

      <MaintenanceGrid
        heading="Water Treatment Maintenance"
        variant="off-white"
        columns={3}
        cards={[
          {
            title: "Water softeners",
            items: [
              "Add salt periodically (every 1–2 months depending on usage)",
              "Annual brine tank cleaning",
              "Check settings and salt level",
              "Occasional resin cleaning (iron buildup)",
            ],
          },
          {
            title: "Reverse osmosis",
            items: [
              "Replace sediment/carbon filters annually",
              "Replace membrane every 2–3 years",
              "Sanitize system during filter changes",
            ],
          },
          {
            title: "Iron filters",
            items: [
              "Media backwashes automatically (no action needed)",
              "Replace media every 5–7 years",
              "Check timer settings periodically",
            ],
          },
          {
            title: "UV systems",
            items: [
              "Replace UV lamp annually",
              "Clean quartz sleeve 1–2 times per year",
              "Check power supply",
            ],
          },
          {
            title: "Carbon filters",
            items: [
              "Replace cartridges every 6–12 months depending on usage and chlorine levels",
            ],
          },
        ]}
        footnote="We provide maintenance service or can train you to handle simple filter changes yourself. Annual service visits catch problems early."
      />

      <CommercialSection
        heading="Commercial Water Treatment"
        description="We design and install water treatment systems for commercial spaces—so your water stays consistent, your fixtures stay cleaner, and your operation runs smoother."
        phoneText="Call to discuss: (209) 533-1978"
        columns={[
          {
            items: [
              "Office buildings (restrooms, break rooms, common areas)",
              "Restaurants (better-tasting water for food & beverages, less scale on equipment)",
              "Retail spaces (restrooms and back-of-house use)",
              "Small manufacturing (more reliable process water)",
              "Medical & dental offices (clean, consistent water where it matters)",
              "Salons (softer water for washing and services)",
            ],
          },
        ]}
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        className="bg-off-white"
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> for Water Treatment?</>}
        subtitle="We don't sell the same system to everyone. We solve your specific water quality problems with properly engineered solutions."
        features={[
          { icon: Gauge, title: "Properly sized systems", desc: "Based on your water chemistry and usage." },
          { icon: ThumbsUp, title: "Honest recommendations", desc: "We solve your problems, not oversell." },
          { icon: Award, title: "Quality equipment", desc: "Reliable brands built to last." },
          { icon: Shield, title: "Professional installation", desc: "Tested and verified before we leave." },
          { icon: Wrench, title: "Service & maintenance", desc: "We support what we install." },
        ]}
        columns={3}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="Trusted by Your Neighbors"
        testimonials={[
          {
            quote: "Brad and Adam were so conscientious and so knowledgeable. They took the time to explain how best to deal with our softener system. They were very patient and kind. I really appreciated them and their expertise.",
            author: "Jody Kellerman",
            initials: "JK",
            location: "Water Softener · 2025",
          },
          {
            quote: "Brian installed and has been servicing my water heater for almost 20 years! Brian is always prompt and puts his best effort to address and fix any issues. Thank you for your trusted service!",
            author: "Boclaire Vaughn",
            initials: "BV",
            location: "Water Heater Maintenance · 2025",
          },
          {
            quote: "Showed up earlier than expected, courteous, knowledgeable, explained tankless water heater flushing process. Took a look at my iron filter and spotted a problem with the backflush timer setting, which he adjusted, no charge!",
            author: "David Jigour",
            initials: "DJ",
            location: "Tankless Water Heater Flush · 2025",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        heading="Frequently Asked Questions"
        items={[
          { question: "How hard is our water in Sonora?", answer: "Most of our service area has hard to very hard water, typically 8–15+ grains per gallon. A water softener is recommended for most homes. We test your water hardness for free." },
          { question: "Do I really need a water softener?", answer: "If you're seeing scale buildup, spots on dishes, dry skin, or shortened appliance life, yes. A softener prevents damage and saves money long-term. We'll test your water and show you the numbers." },
          { question: "How much salt does a softener use?", answer: "Typically 40–80 lbs per month (about 1–2 bags), depending on water hardness and household usage. High-efficiency softeners use less." },
          { question: "Will a water softener make my water taste salty?", answer: "No. Softened water doesn't taste salty. The amount of sodium added is minimal. If taste is a concern, an RO system at the kitchen sink gives you mineral-free drinking water." },
          { question: "Can I drink softened water?", answer: "Yes, softened water is safe to drink. The sodium content is low. For those on sodium-restricted diets, an under-sink RO system removes the added sodium." },
          { question: "How long do water treatment systems last?", answer: "Water softeners: 15–20 years. RO systems: 10–15 years. Iron filters: 10–15 years. UV systems: 10–15 years." },
          { question: "What maintenance is required?", answer: "Softeners need salt and occasional cleaning. RO systems need annual filter changes. Iron filters backwash automatically. UV lamps are replaced yearly. We offer maintenance service or teach you to handle the basics." },
          { question: "Do these systems waste water?", answer: "RO systems use 2–4 gallons of water per gallon of filtered water produced. Modern systems are more efficient. Softeners use water during regeneration. Overall water usage increase is modest." },
          { question: "Will a softener remove iron staining?", answer: "Softeners can handle very low iron levels (under 1 ppm). For higher iron, you need a dedicated iron filter installed before the softener. We test and recommend the right combination." },
          { question: "Can I install a water treatment system myself?", answer: "Basic under-sink RO systems can be DIY if you're comfortable with shutoff valves, fittings, and leak-checking. Whole-house systems (softeners, iron filters, UV, etc.) are best professionally installed—sizing, sequencing, and installation mistakes can cause poor performance, leaks, or warranty issues." },
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
