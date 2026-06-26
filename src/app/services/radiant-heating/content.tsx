"use client";

import {
  Phone, Users, Shield, DollarSign,
  Flame, Thermometer, Wind, Droplets,
  Wrench, Award, CheckCircle2, AlertTriangle,
  Snowflake, Gauge, Settings, Home,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { DarkCTASection } from "@/components/jhart/DarkCTASection";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { HomeownerGuide } from "@/components/jhart/HomeownerGuide";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { GuideH4, GuideBullets, GuideCard } from "@/components/jhart/GuideHelpers";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { ProsCons } from "@/components/jhart/ProsCons";
import { cn } from "@/lib/utils";

const plumbingHeroBg = "/images/plumbing-hero-bg.webp";
const radiantHeroBg = "/images/radiant-hero-bg.jpg";
const radiantFloorTubing = "/images/radiant-floor-tubing.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={radiantHeroBg}
        heading={<>Radiant Floor Heating Systems</>}
        tagline="The Most Comfortable Heat You'll Ever Feel"
        subtitle="Professional radiant heating design and installation for new homes, remodels, garages, and commercial spaces. Warm floors. Even temperatures. Quiet comfort. No vents. No cold drafts."
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
          { icon: Flame, label: "Radiant Specialists", breakpoint: "sm" as const },
          { icon: DollarSign, label: "Transparent Pricing", breakpoint: "md" as const },
        ]}
      />

      {/* ═══ BREADCRUMB ═══ */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Radiant Heating" },
        ]}
      />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Radiant Heating Specialists Since the Early 2000s"
        image={{ src: radiantFloorTubing, alt: "PEX radiant floor tubing installed on subfloor before concrete pour" }}
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing has been designing and installing radiant floor heating systems in Sonora and Tuolumne County since the early 2000s. We build systems that operate efficiently for decades and deliver a level of comfort forced-air systems simply can't replicate.</>,
        ]}
        className="bg-background"
      />

      {/* ═══ SERVICES ═══ */}
      <ServiceCardGrid
        className="bg-off-white"
        heading="Our Radiant Heating Services"
        cards={[
          {
            icon: Settings,
            title: "Design & Installation",
            services: [
              "Complete radiant system design",
              "New construction installations",
              "Remodel and addition projects",
              "Retrofit installations (when feasible)",
              "Multi-zone control systems",
              "Hydronic snow melt systems",
            ],
            description: "Every system begins with a full heat-loss calculation. We size boilers and tubing correctly based on real data — not rules of thumb.",
          },
          {
            icon: Flame,
            title: "Boiler Installation & Service",
            services: [
              "High-efficiency condensing boiler installations",
              "Boiler repair and troubleshooting",
              "System upgrades and replacements",
              "Annual maintenance and inspections",
              "Expansion tank and pressure management",
            ],
            description: "Your boiler is the heart of the system. It must be sized correctly to operate efficiently and last.",
          },
          {
            icon: Wrench,
            title: "System Maintenance & Repairs",
            services: [
              "Annual inspections",
              "Circulation pump repairs",
              "Zone valve and control troubleshooting",
              "Leak detection",
              "Flow and pressure diagnostics",
            ],
            description: "Radiant systems require minimal maintenance, but annual boiler service protects efficiency and longevity.",
          },
          {
            icon: Snowflake,
            title: "Snow Melt Systems",
            services: [
              "Driveways and walkways",
              "Commercial entrances",
              "Stairs and ramps",
              "Automated snow-sensing controls",
            ],
            description: "Eliminate shoveling. Reduce liability from ice. Protect concrete from freeze-thaw damage.",
          },
        ]}
      />

      {/* ═══ WHY RADIANT ═══ */}
      <FeatureGrid
        className="bg-background"
        heading="Why Choose Radiant Floor Heating?"
        features={[
          { icon: Thermometer, title: "Even, Consistent Warmth", desc: "Radiant heating warms surfaces and people directly. Floors stay comfortably warm and temperatures remain consistent from floor to ceiling." },
          { icon: Wind, title: "Silent Operation", desc: "No blower cycling. No air movement. Just steady warmth." },
          { icon: Droplets, title: "Better Indoor Air Quality", desc: "Radiant heating doesn't circulate dust or allergens." },
          { icon: Gauge, title: "Efficient by Design", desc: "No duct losses, lower thermostat settings feel comfortable, high-efficiency condensing boilers (90–96%), and effective zoning." },
        ]}
        columns={2}
      />

      {/* ═══ IDEAL / NOT IDEAL ═══ */}
      <ProsCons
        className="bg-off-white"
        heading="Is Radiant Heating Right for You?"
        columns={[
          {
            icon: CheckCircle2,
            title: "Radiant Heating Is Ideal If",
            variant: "pro",
            items: [
              "You're building new",
              "You're doing a major remodel",
              "Comfort is a priority",
              "You want a long-term heating solution",
              "You're finishing a garage or workshop",
            ],
          },
          {
            icon: AlertTriangle,
            title: "Radiant May Not Be Ideal If",
            variant: "con",
            items: [
              "Lowest upfront cost is the only goal",
              "Your existing ducted system is already efficient",
              "Retrofit access is severely limited",
            ],
            footnote: "We'll tell you honestly which category you fall into.",
          },
        ]}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="What Our Radiant Heating Customers Say"
        testimonials={[
          {
            quote: "Brian and Carlos removed the old water heater and installed a Navien tankless efficiently. Their attention to detail makes the appearance look great. They are respectful, polite, willing to answer questions with patience, and hardworking. Last year they also replaced our radiant floor boiler with a Navien boiler—it has worked flawlessly. We wholeheartedly recommend J Hart Plumbing.",
            author: "Jeff Kemper",
            initials: "JK",
            location: "Tankless Water Heater & Boiler · 2025",
          },
          {
            quote: "J. Hart replaced our radiant boiler and rebalanced the zones. The difference was immediate — steady heat, no more cold areas, and noticeably lower cycling. They explained the system clearly and sized everything correctly. The installation was clean and professional.",
            author: "Raul Vaughn",
            initials: "RV",
            location: "Radiant Boiler Replacement · 2024",
          },
          {
            quote: "These guys are great! They do everything from new construction plumbing to all sorts of repairs on existing. They've repaired our old house plumbing and did the plumbing on a new building for us. They are honest and always do a great job!",
            author: "Trevor Thorn",
            initials: "TT",
            location: "New Construction & Repairs · 2025",
          },
        ]}
      />

      {/* ═══ FREE ESTIMATE CTA ═══ */}
      <DarkCTASection
        heading="Free Estimates on Radiant Heating Projects"
        description="Whether you're building new, remodeling, or adding radiant to an existing space—we'll evaluate your project and provide an honest estimate at no cost."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978" }}
        secondaryCTA={{ label: "Request Estimate", href: "#cta-form" }}
      />

      {/* ═══ EDUCATIONAL GUIDE ═══ */}
      <HomeownerGuide
        className="bg-background"
        heading="How Radiant Floor Heating Works"
        description="Radiant heating is a hydronic system that circulates warm water through PEX tubing installed in your floor. The floor becomes a large, gentle heat emitter."
        tabs={[
          {
            id: "components",
            label: "Core Components",
            subtitle: "What Makes a Radiant System Work",
            content: (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Boiler">
                    <p>Heats water efficiently — the heart of the system.</p>
                  </GuideCard>
                  <GuideCard title="PEX Tubing">
                    <p>Embedded in your floor to distribute warm water evenly.</p>
                  </GuideCard>
                  <GuideCard title="Manifold">
                    <p>Distribution hub that routes water to individual zones.</p>
                  </GuideCard>
                  <GuideCard title="Circulation Pumps">
                    <p>Move water through the system at controlled flow rates.</p>
                  </GuideCard>
                  <GuideCard title="Zone Controls">
                    <p>Independent room-by-room temperature control.</p>
                  </GuideCard>
                  <GuideCard title="Thermal Mass">
                    <p>Concrete or subfloor stores and radiates heat steadily.</p>
                  </GuideCard>
                </div>
                <p className="mt-4">Water temperatures are typically 95–120°F. Floor surface temperatures average 75–85°F — warm, not hot.</p>
                <p className="font-semibold text-navy">Result: Even temperatures and stable comfort.</p>
              </>
            ),
          },
          {
            id: "installation",
            label: "Installation Methods",
            subtitle: "How Radiant Systems Are Installed",
            content: (
              <>
                <GuideH4>New Construction &amp; Major Remodels</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Slab Installation">
                    <p>Tubing embedded in concrete over insulation. Most efficient method.</p>
                  </GuideCard>
                  <GuideCard title="Above-Floor Installation">
                    <p>Tubing installed over subfloor with radiant panels or gypcrete.</p>
                  </GuideCard>
                  <GuideCard title="Below-Floor Installation">
                    <p>Tubing installed between joists using heat transfer plates.</p>
                  </GuideCard>
                </div>

                <GuideH4>Retrofit Installations</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-navy mb-2">Possible when:</p>
                    <GuideBullets icon={CheckCircle2} variant="action" items={[
                      "Crawlspace or basement access exists",
                      "Proper insulation can be installed",
                      "Flooring is compatible",
                    ]} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-2">Not recommended when:</p>
                    <GuideBullets icon={AlertTriangle} variant="warning" items={[
                      "Slab foundation without access",
                      "Extremely tight crawlspace",
                      "Budget doesn't justify complexity",
                    ]} />
                  </div>
                </div>
                <p className="mt-4 font-semibold text-navy">If retrofit doesn't make sense, we'll say so.</p>
              </>
            ),
          },
          {
            id: "cost",
            label: "Cost & Value",
            subtitle: "Radiant Heating Cost: What to Expect",
            content: (
              <>
                <p>Typical range: <span className="font-semibold text-navy">$6–$12 per sq ft installed</span></p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <GuideCard title="1,500 sq ft">
                    <p className="font-semibold text-navy">$9,000–$18,000</p>
                  </GuideCard>
                  <GuideCard title="2,000 sq ft">
                    <p className="font-semibold text-navy">$12,000–$24,000</p>
                  </GuideCard>
                  <GuideCard title="2,500 sq ft">
                    <p className="font-semibold text-navy">$15,000–$30,000</p>
                  </GuideCard>
                  <GuideCard title="3,500 sq ft">
                    <p className="font-semibold text-navy">$21,000–$42,000</p>
                  </GuideCard>
                </div>
                <p className="mt-4 text-sm">Cost depends on layout, zoning, boiler size, controls, and installation method.</p>

                <GuideH4>What's Included</GuideH4>
                <GuideBullets icon={CheckCircle2} variant="action" items={[
                  "Full heat-loss calculation",
                  "System design",
                  "High-efficiency boiler",
                  "PEX tubing and manifolds",
                  "Pumps and controls",
                  "Permits and inspections",
                  "Startup and testing",
                ]} />

                <GuideH4>Operating Costs</GuideH4>
                <p>Radiant systems typically operate 15–30% more efficiently than forced air due to lower thermostat settings and no duct losses.</p>
                <p>If forced air costs $2,000/year, radiant may cost $1,400–$1,700.</p>
                <p className="font-semibold text-navy">Over time, savings help offset higher installation cost.</p>
              </>
            ),
          },
          {
            id: "boiler",
            label: "Boiler Selection",
            subtitle: "Choosing the Right Boiler",
            content: (
              <>
                <p>We size boilers based on:</p>
                <GuideBullets icon={Gauge} variant="info" items={[
                  "Square footage",
                  "Insulation levels",
                  "Window performance",
                  "Air infiltration",
                  "Elevation and design temperatures",
                ]} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <GuideCard title="Oversized Boilers">
                    <p>Waste energy through short-cycling and reduced efficiency.</p>
                  </GuideCard>
                  <GuideCard title="Undersized Boilers">
                    <p>Struggle to keep up in cold weather, running constantly.</p>
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">We calculate precisely for each home.</p>
                <p>Most installations in our area use high-efficiency propane condensing boilers.</p>
              </>
            ),
          },
          {
            id: "flooring",
            label: "Flooring & Maintenance",
            subtitle: "Flooring Compatibility & System Care",
            content: (
              <>
                <GuideH4>Flooring Compatibility</GuideH4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <GuideCard title="Excellent">
                    <ul className="space-y-1 text-sm">
                      <li>Tile and stone</li>
                      <li>Polished concrete</li>
                      <li>Engineered hardwood (radiant-approved)</li>
                    </ul>
                  </GuideCard>
                  <GuideCard title="Good">
                    <ul className="space-y-1 text-sm">
                      <li>Laminate</li>
                      <li>LVP (verify rating)</li>
                    </ul>
                  </GuideCard>
                  <GuideCard title="Acceptable">
                    <ul className="space-y-1 text-sm">
                      <li>Solid hardwood (with proper installation)</li>
                      <li>Thin carpet</li>
                    </ul>
                  </GuideCard>
                  <GuideCard title="Avoid">
                    <ul className="space-y-1 text-sm">
                      <li>Thick carpet with heavy padding</li>
                    </ul>
                  </GuideCard>
                </div>

                <GuideH4>Maintenance</GuideH4>
                <p>Annual boiler service includes inspection, cleaning, safety checks, pump testing, and pressure verification.</p>
                <p className="font-semibold text-navy">PEX tubing requires no maintenance and is designed to last decades.</p>

                <GuideH4>Applications</GuideH4>
                <GuideBullets icon={Home} variant="action" items={[
                  "Whole-house heating",
                  "Bathrooms & select areas",
                  "Garages & workshops",
                  "Commercial spaces",
                  "Snow melt systems",
                ]} />
                <p className="mt-2 font-semibold text-navy">Radiant works best when designed intentionally from the start.</p>
              </>
            ),
          },
        ]}
      />


      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        className="bg-off-white"
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> for Radiant Heating?</>}
        subtitle="Radiant heating is permanent infrastructure in your home. It must be designed correctly."
        features={[
          { icon: Flame, title: "Radiant specialists since the early 2000s", desc: "Deep experience with hydronic system design and installation." },
          { icon: Gauge, title: "Full heat-loss calculations on every system", desc: "We size everything based on real data, not guesswork." },
          { icon: Shield, title: "Honest retrofit assessments", desc: "We'll tell you if radiant makes sense for your situation." },
          { icon: Wrench, title: "Complete design, installation, and service", desc: "One company handles your entire system lifecycle." },
          { icon: Award, title: "Local climate expertise", desc: "We know Sonora's elevation and weather patterns." },
          { icon: Users, title: "Licensed & insured", desc: "CA Lic #459194 | NV Lic #77957" },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        heading="Frequently Asked Questions"
        items={[
          { question: "How long does radiant floor heating last?", answer: "PEX tubing comes with a 25-year warranty. Boilers typically last 10+ years with proper maintenance." },
          { question: "Can radiant heating be installed in an existing home?", answer: "It depends on access. If you have a crawlspace or basement, retrofit is often feasible. Slab foundations without access make it much more difficult. We'll evaluate your home honestly and tell you whether it makes sense." },
          
          { question: "What flooring works best with radiant heat?", answer: "Tile, stone, and polished concrete are ideal. Engineered hardwood approved for radiant use works well. Laminate and LVP are generally compatible. Thick carpet with heavy padding should be avoided as it insulates against the heat." },
          { question: "Do you service radiant systems you didn't install?", answer: "Yes. We can diagnose, repair, and maintain radiant systems regardless of who installed them. We also handle boiler replacements and zone rebalancing on existing systems." },
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
