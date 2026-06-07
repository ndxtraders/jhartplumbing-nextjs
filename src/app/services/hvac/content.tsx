"use client";

import { Button } from "@/components/ui/button";
import {
  Phone, Users, Shield, DollarSign, Clock,
  Flame, Snowflake, Wrench, Award, CheckCircle2,
  AlertTriangle, ThermometerSun, Wind, Settings,
  Gauge, Fan, Zap,
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
import { DarkCTASection } from "@/components/jhart/DarkCTASection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { GuideH4, GuideBullets, GuideCard } from "@/components/jhart/GuideHelpers";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { TestimonialSpotlight } from "@/components/jhart/TestimonialSpotlight";
import { EmergencyBanner } from "@/components/jhart/EmergencyBanner";
import { CheckItem } from "@/components/jhart/CheckItem";
import { MaintenanceGrid } from "@/components/jhart/MaintenanceGrid";
import { CommercialSection } from "@/components/jhart/CommercialSection";
import { ActionGrid } from "@/components/jhart/ActionGrid";
import { cn } from "@/lib/utils";

const bryantUnitImg = "/images/bryant-unit.jpg";
const bryantDuctlessProImg = "/images/bryant-ductless-pro.png";
const hvacHeroBg = "/images/hvac-hero-bg.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={hvacHeroBg}
        heading={<>Heating &amp; Cooling Services<br className="hidden md:block" />For Homes &amp; Commercial Properties</>}
        tagline="Reliable HVAC service when your furnace won't heat or your AC won't cool."
        subtitle="Repairs, maintenance, and installations for residential and commercial properties throughout Sonora and Tuolumne County."
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
          { label: "Heating & Cooling" },
        ]}
      />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Reliable Heating & Cooling Without the Runaround"
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing provides heating and cooling services throughout Sonora and Tuolumne County. We diagnose problems accurately, explain your options clearly, and get your system working without unnecessary delays or upselling.</>,
        ]}
        image={{ src: bryantUnitImg, alt: "Bryant air conditioning unit installed by J. Hart Plumbing" }}
        floatImage={false}
        className="bg-background"
      />

      {/* ═══ SERVICES ═══ */}
      <ServiceCardGrid
        className="bg-off-white"
        heading="What We Do"
        cards={[
          {
            icon: Flame,
            title: "Furnace & Heating Repair",
            services: [
              "Gas furnace troubleshooting and repair",
              "No heat / won't ignite issues",
              "Thermostat problems",
              "Airflow and blower issues",
              "Safety inspections",
              "Emergency heating repairs",
            ],
            description: "When your heat goes out, we respond quickly to diagnose the problem and get you warm again.",
          },
          {
            icon: Snowflake,
            title: "Air Conditioning Repair",
            popular: true,
            services: [
              "AC won't cool or won't turn on",
              "Refrigerant leaks and recharging",
              "Compressor and condenser issues",
              "Fan motor problems",
              "Frozen coils",
              "Emergency cooling repairs",
            ],
            description: "We fix what's broken and explain what failed so you understand what happened.",
          },
          {
            icon: Settings,
            title: "HVAC Installation & Replacement",
            services: [
              "New furnace installation",
              "Air conditioner replacement",
              "Heat pump systems",
              "Complete system upgrades",
              "Ductwork modifications",
              "Thermostat upgrades (programmable, smart)",
            ],
            description: "Replacing old equipment or installing new? We size systems correctly for your home and explain your options honestly.",
          },
          {
            icon: Wrench,
            title: "Preventive Maintenance",
            services: [
              "Annual furnace inspections and tune-ups",
              "AC system maintenance",
              "Filter changes and cleaning",
              "Safety checks and efficiency testing",
              "Seasonal system preparation",
            ],
            description: "Regular maintenance catches problems early and extends equipment life. Most breakdowns happen because systems weren't maintained.",
          },
          {
            icon: Wind,
            title: "Ductwork & Air Quality",
            services: [
              "Duct repairs and sealing",
              "Airflow balancing",
              "Vent and register service",
              "Basic air quality improvements",
            ],
            description: "Poor airflow or uneven heating/cooling often comes from duct issues, not equipment failure.",
          },
          {
            icon: Fan,
            title: "Ductless Heating & Cooling (Mini-Splits)",
            services: [
              "Bryant ductless system installation (single-zone & multi-zone)",
              "Replacements and upgrades",
              "Repairs and troubleshooting",
              "Maintenance and performance checks",
              "New additions, garages, bonus rooms, and older homes without ducts",
            ],
            description: "Ductless systems are a high-efficiency way to heat and cool specific rooms without running new ductwork.",
          },
        ]}
      />

      {/* ═══ WHAT DO YOU NEED ═══ */}
      <ActionGrid
        className="bg-background"
        items={[
          { icon: Flame, title: "No heat", action: "Call now for same-day service:", href: "tel:+12095331978", linkLabel: "(209) 533-1978", urgent: true },
          { icon: Snowflake, title: "No AC", action: "Call now for same-day service:", href: "tel:+12095331978", linkLabel: "(209) 533-1978", urgent: true },
          { icon: Settings, title: "Thinking about replacement", action: "Request an estimate and we'll size it correctly.", href: "#cta-form", linkLabel: "Request Service" },
          { icon: Wrench, title: "Need maintenance", action: "Request seasonal service to prevent breakdowns.", href: "#cta-form", linkLabel: "Schedule Service" },
        ]}
      />

      {/* ═══ SAME-DAY CTA ═══ */}
      <DarkCTASection
        heading="Same-Day Service for No Heat & No AC"
        description="When your heating or cooling system fails, we respond quickly. Call now for same-day diagnosis and repair."
      />

      {/* ═══ TESTIMONIAL SPOTLIGHT ═══ */}
      <TestimonialSpotlight
        quote="New to Sonora and so thankful for the referral. J Hart is the best in town, not only for plumbing but also HVAC. Brian and JD were thorough, explained everything about both my furnace and water heater; they were professional and showed excellence in customer care."
        author="Wendy Crowley"
        service="HVAC &amp; Water Heater · 2025"
      />

      {/* ═══ HOMEOWNER GUIDE: COMMON PROBLEMS ═══ */}
      <HomeownerGuide
        className="bg-background"
        heading="Common Heating & Cooling Problems We Fix"
        description="If you're dealing with HVAC issues, here's what we see most often in Sonora-area homes and what you need to know."
        tabs={[
          {
            id: "furnace",
            label: "Furnace Won't Heat",
            subtitle: "Furnace Won't Heat or Won't Turn On",
            content: (
              <>
                <GuideH4>Most common causes</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Thermostat issues">
                    <p>Wrong setting, dead batteries, or faulty thermostat. We check this first.</p>
                  </GuideCard>
                  <GuideCard title="Pilot light or ignition problems">
                    <p>Pilot won't stay lit or electronic ignition fails.</p>
                  </GuideCard>
                  <GuideCard title="Dirty flame sensor">
                    <p>Buildup can shut the furnace down as a safety measure. Simple cleaning often fixes it.</p>
                  </GuideCard>
                  <GuideCard title="Clogged filter">
                    <p>Restricted airflow can trigger safety shutoffs. Always check your filter first.</p>
                  </GuideCard>
                  <GuideCard title="Blower motor failure">
                    <p>Heat at the furnace but not throughout the house.</p>
                  </GuideCard>
                  <GuideCard title="Gas valve or control board">
                    <p>More serious failures that require parts replacement.</p>
                  </GuideCard>
                </div>

                <GuideH4>What we do</GuideH4>
                <p>We diagnose systematically—starting with the common causes before moving to complex ones. We test components, identify the actual problem, and explain what needs to be fixed.</p>

                <GuideH4>Repair vs. replacement</GuideH4>
                <p>Simple repairs (thermostat, flame sensor, filters) are often $250–$500. Major component failures (blower motor, control boards, heat exchanger issues) can run $500+.</p>
                <p className="font-semibold text-navy">If your furnace is 15+ years old and needs an expensive repair, replacement often makes more financial sense. We'll give you honest guidance.</p>
              </>
            ),
          },
          {
            id: "ac",
            label: "AC Won't Cool",
            subtitle: "Air Conditioner Won't Cool or Won't Run",
            content: (
              <>
                <GuideH4>Most common AC problems</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Thermostat set incorrectly">
                    <p>It happens. We always check.</p>
                  </GuideCard>
                  <GuideCard title="Dirty filter or blocked airflow">
                    <p>Restricted airflow is a top cause of AC trouble.</p>
                  </GuideCard>
                  <GuideCard title="Refrigerant leaks">
                    <p>We find the leak, repair it, and recharge properly.</p>
                  </GuideCard>
                  <GuideCard title="Frozen evaporator coils">
                    <p>Usually airflow or low refrigerant.</p>
                  </GuideCard>
                  <GuideCard title="Failed capacitor">
                    <p>Common and relatively inexpensive.</p>
                  </GuideCard>
                  <GuideCard title="Bad compressor or condenser fan">
                    <p>Major components; on older systems, replacement may make more sense.</p>
                  </GuideCard>
                </div>

                <GuideH4>How much does AC repair cost?</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Simple repairs">
                    <p>Capacitors, contactors, cleaning</p>
                    <p className="font-semibold text-navy">$200–$500</p>
                  </GuideCard>
                  <GuideCard title="Moderate repairs">
                    <p>Fan motors, minor refrigerant work</p>
                    <p className="font-semibold text-navy">$500–$1,000</p>
                  </GuideCard>
                  <GuideCard title="Major repairs">
                    <p>Compressor, extensive refrigerant leaks</p>
                    <p className="font-semibold text-navy">$1,000+</p>
                  </GuideCard>
                </div>

                <GuideH4>Age matters</GuideH4>
                <p className="font-semibold text-navy">AC units typically last 10–15 years. If yours is past that and needs a major repair, we'll explain whether fixing it makes sense or if you're better off replacing.</p>
              </>
            ),
          },
          {
            id: "repair-replace",
            label: "Repair vs. Replace",
            subtitle: "When to Repair vs. Replace Your HVAC System",
            content: (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="Repair if">
                    <GuideBullets icon={CheckCircle2} variant="action" items={[
                      "System is less than 10 years old",
                      "Repair cost is less than 30% of replacement cost",
                      "The rest of the system is in good shape",
                      "It's a minor issue (thermostat, capacitor, filter, sensor)",
                    ]} />
                  </GuideCard>
                  <GuideCard title="Consider replacement if">
                    <GuideBullets icon={AlertTriangle} variant="warning" items={[
                      "System is 15+ years old",
                      "Repair cost exceeds 50% of replacement cost",
                      "Frequent breakdowns",
                      "Energy bills keep increasing",
                      "Major component failure (compressor, heat exchanger)",
                      "R-22 refrigerant system (being phased out, expensive to service)",
                    ]} />
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">We'll tell you straight: If a repair makes sense, we'll do it. If you're throwing money at a dying system, we'll tell you that too.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        className="bg-off-white"
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> for HVAC Service?</>}
        features={[
          { icon: Gauge, title: "Honest diagnostics", desc: "We identify the actual problem, not just sell the most expensive solution." },
          { icon: DollarSign, title: "Clear pricing", desc: "You know what it costs before we start work." },
          { icon: ThermometerSun, title: "Proper sizing", desc: "We calculate your actual heating/cooling needs, not guess." },
          { icon: Award, title: "Quality installations", desc: "Done right the first time, tested thoroughly." },
          { icon: Shield, title: "Licensed & insured", desc: "CA Lic #459194 | NV Lic #77957" },
        ]}
        columns={3}
      />

      {/* ═══ DUCTLESS / MINI-SPLITS ═══ */}
      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="Mini-Split Systems" className="mb-4" />
          <p className="text-center text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
            Ductless systems—often called mini-splits—are a high-efficiency way to heat and cool specific rooms without running new ductwork. They use an outdoor unit connected to one or more indoor air handlers through a small conduit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
            {[
              "Room-by-room control",
              "Energy savings (no duct losses, heat/cool only the rooms you use)",
              "Quiet operation (compressor is outside)",
              "Clean install (often just a small wall penetration—no major ductwork)",
            ].map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </div>
    <div className="rounded-xl border border-border bg-off-white p-6 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-4">
              <img
                src={bryantDuctlessProImg}
                alt="Bryant Certified Ductless Pro badge"
                className="w-36 h-auto flex-shrink-0"
                loading="lazy"
                width={144}
                height={144}
              />
              <div>
                <h3 className="font-bold text-navy">Bryant Certified Ductless Pros</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  For new ductless installs, we prefer Bryant. We're a factory-authorized Bryant dealer and Bryant Certified Ductless Pros, so we can recommend the right setup and install it to manufacturer specs for long-term reliability.
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Many ductless systems are heat pumps, so they can provide efficient heating in colder months too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EQUIPMENT GUIDE ═══ */}
      <HomeownerGuide
        className="bg-off-white"
        heading="Choosing a New HVAC System: What Matters"
        description="Replacing your furnace or air conditioner? Here's what actually matters."
        tabs={[
          {
            id: "sizing",
            label: "Sizing",
            subtitle: "Sizing Your HVAC System Correctly",
            content: (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <GuideCard title="Too small">
                    <p className="text-cta font-semibold">Runs constantly and can't keep up.</p>
                  </GuideCard>
                  <GuideCard title="Too large">
                    <p className="text-cta font-semibold">Short cycling, poor humidity control, less comfort.</p>
                  </GuideCard>
                </div>

                <GuideH4>How we size systems</GuideH4>
                <p>We calculate your home's heating and cooling load based on square footage, insulation, windows, ceilings, Sonora's climate/elevation, and ductwork capacity. We don't just match the old system's size.</p>

                <GuideH4>Typical sizing for Sonora area homes</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="1,200–1,500 sq ft">
                    <p>2–2.5 ton AC</p>
                    <p>60,000–80,000 BTU furnace</p>
                  </GuideCard>
                  <GuideCard title="1,500–2,000 sq ft">
                    <p>2.5–3.5 ton AC</p>
                    <p>80,000–100,000 BTU furnace</p>
                  </GuideCard>
                  <GuideCard title="2,000–3,000 sq ft">
                    <p>3.5–5 ton AC</p>
                    <p>100,000–120,000 BTU furnace</p>
                  </GuideCard>
                </div>
                <p className="mt-4 text-sm font-semibold text-navy">Your actual needs depend on your specific home.</p>
              </>
            ),
          },
          {
            id: "efficiency",
            label: "Efficiency Ratings",
            subtitle: "Efficiency Ratings: What They Mean",
            content: (
              <>
                <GuideH4>SEER for AC</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="13–14 SEER">
                    <p>Minimum efficiency</p>
                  </GuideCard>
                  <GuideCard title="15–16 SEER">
                    <p className="font-semibold text-navy">Best value for most homeowners here</p>
                  </GuideCard>
                  <GuideCard title="17–20+ SEER">
                    <p>Higher upfront cost, lower operating cost</p>
                  </GuideCard>
                </div>

                <GuideH4>AFUE for furnaces</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="80% AFUE">
                    <p>Standard efficiency</p>
                  </GuideCard>
                  <GuideCard title="90–96% AFUE">
                    <p className="font-semibold text-navy">High-efficiency</p>
                  </GuideCard>
                </div>

                <GuideH4>Single-Stage vs. Two-Stage vs. Variable Speed</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Single-stage">
                    <p>Simple, reliable, lowest cost</p>
                  </GuideCard>
                  <GuideCard title="Two-stage">
                    <p className="font-semibold text-navy">Better comfort and efficiency for most homes</p>
                  </GuideCard>
                  <GuideCard title="Variable-speed">
                    <p>Maximum comfort/efficiency, highest upfront cost</p>
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">Our recommendation for most homes: two-stage offers the best balance.</p>
              </>
            ),
          },
          {
            id: "cost",
            label: "Replacement Cost",
            subtitle: "How Much Does HVAC Replacement Cost?",
            content: (
              <>
                <GuideH4>Furnace replacement</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="80% AFUE">
                    <p className="font-semibold text-navy">$3,500–$5,500 installed</p>
                  </GuideCard>
                  <GuideCard title="95% AFUE">
                    <p className="font-semibold text-navy">$5,000–$7,500 installed</p>
                  </GuideCard>
                </div>

                <GuideH4>Air conditioner replacement</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="14 SEER">
                    <p className="font-semibold text-navy">$4,000–$6,000 installed</p>
                  </GuideCard>
                  <GuideCard title="16 SEER">
                    <p className="font-semibold text-navy">$5,000–$7,500 installed</p>
                  </GuideCard>
                  <GuideCard title="18+ SEER">
                    <p className="font-semibold text-navy">$6,500–$9,000+ installed</p>
                  </GuideCard>
                </div>

                <GuideH4>Complete system replacement (furnace + AC)</GuideH4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Standard">
                    <p className="font-semibold text-navy">$7,500–$10,000</p>
                  </GuideCard>
                  <GuideCard title="Mid-efficiency">
                    <p className="font-semibold text-navy">$9,000–$13,000</p>
                  </GuideCard>
                  <GuideCard title="High-efficiency">
                    <p className="font-semibold text-navy">$12,000–$16,000+</p>
                  </GuideCard>
                </div>
                <p className="mt-4 font-semibold text-navy">We provide detailed written estimates based on your actual home and needs.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ FREE ESTIMATES CTA ═══ */}
      <DarkCTASection
        heading="Free Estimates on HVAC Installation & Replacement"
        description="Whether you need a new furnace, AC, or complete system—we'll evaluate your home and provide an honest estimate at no cost."
      />

      <MaintenanceGrid
        heading="Preventive Maintenance: Why It Matters"
        description="Most HVAC breakdowns are preventable. Regular maintenance catches problems before they leave you without heat or AC."
        cards={[
          {
            title: "Furnace Maintenance (Fall)",
            icon: Flame,
            iconClassName: "bg-cta/10",
            content: (
              <GuideBullets icon={CheckCircle2} variant="action" items={[
                "Inspect heat exchanger",
                "Test ignition and safety controls",
                "Clean/replace filters",
                "Check burners",
                "Inspect venting",
                "Check blower and performance",
              ]} />
            ),
          },
          {
            title: "AC Maintenance (Spring)",
            icon: Snowflake,
            content: (
              <GuideBullets icon={CheckCircle2} variant="action" items={[
                "Clean condenser coils",
                "Check refrigerant levels",
                "Test capacitors/contactors",
                "Inspect fan motors",
                "Check drains",
                "Measure airflow and temperatures",
              ]} />
            ),
          },
        ]}
        footnote={
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p><span className="font-bold text-navy">Cost:</span> Annual maintenance starts at $200 per system.</p>
            <p><span className="font-bold text-navy">When to schedule:</span> Furnace in fall, AC in spring.</p>
          </div>
        }
      />

      <CommercialSection
        heading="Commercial HVAC Services"
        description="We handle heating and cooling for offices, retail spaces, and commercial buildings."
        variant="off-white"
        phoneText="Call to discuss your HVAC needs: (209) 533-1978"
        columns={[
          {
            heading: "What we work on",
            items: [
              "Rooftop units (RTUs)",
              "Split systems (including ductless/mini-splits)",
              "Package units",
              "Tenant space HVAC",
            ],
          },
          {
            heading: "Services",
            icon: Wrench,
            items: [
              "Emergency repairs",
              "Routine maintenance agreements",
              "System replacements",
              "Tenant improvement HVAC",
            ],
          },
        ]}
      />

      {/* ═══ EMERGENCY ═══ */}
      <EmergencyBanner
        heading="Emergency Heating &amp; Cooling Service"
        description="Call us if you're dealing with:"
        items={["No heat", "No AC", "Complete system breakdown", "Safety concerns (gas smell, strange noises)"]}
        className="bg-navy"
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="More Reviews From Local Homeowners"
        testimonials={[
          {
            quote: "This was the easiest, fastest, friendliest, and most professional contract job I've ever done! They helped me limp along on my old heater, then installed a new one. They sealed the area around it, took care of details, and made the necessary changes immediately.",
            author: "Mona Gaskill",
            initials: "MG",
            location: "Heater Installation · 2025",
          },
          {
            quote: "I work out of state most of the time and have tenants in my home in California. The water heater went out and the weather's been bad. J Hart was really quick and professional. Got the job done even in the snow.",
            author: "LaFonda Quiggins",
            initials: "LQ",
            location: "Water Heater Replacement · 2025",
          },
          {
            quote: "New to Sonora and so thankful for the referral. J Hart is the best in town, not only for plumbing but also HVAC. Brian and JD were thorough, explained everything about both my furnace and water heater; they were professional and showed excellence in customer care.",
            author: "Wendy Crowley",
            initials: "WC",
            location: "HVAC & Water Heater · 2025",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        className="bg-background"
        heading="Frequently Asked Questions"
        items={[
          { question: "How often should I replace my HVAC filter?", answer: "Every 1–3 months depending on the filter type, whether you have pets, and how much you run the system. A clean filter is the single easiest thing you can do to prevent problems." },
          { question: "Why is my AC freezing up?", answer: "Usually low airflow (dirty filter, blocked vents) or low refrigerant. Turn the system off, let it thaw, and check your filter. If it freezes again, call us—you likely have a refrigerant leak or airflow issue that needs professional diagnosis." },
          { question: "How long do HVAC systems last?", answer: "Furnaces typically last 15–20 years. Air conditioners last 10–15 years. Heat pumps last 10–15 years. Regular maintenance extends lifespan significantly." },
          { question: "Should I repair or replace my old system?", answer: "If it's under 10 years old and the repair is minor, repair makes sense. If it's 15+ years old, needs frequent repairs, or requires a major component, replacement is usually the better investment. We'll give you an honest recommendation." },
          { question: "Do you offer financing?", answer: "We can discuss payment arrangements for larger projects. Contact us to talk about your specific situation." },
          { question: "What size AC do I need?", answer: "It depends on your home's square footage, insulation, windows, and layout. We perform a proper load calculation rather than guessing. Oversized systems are just as problematic as undersized ones." },
          { question: "Can you work on heat pumps?", answer: "Yes. We service, repair, and install heat pump systems including ductless mini-splits." },
          { question: "Do you service all brands?", answer: "We service most major brands. For new installations, we recommend and install Bryant equipment as a factory-authorized dealer." },
          { question: "How much does an HVAC service call cost?", answer: "$185 flat fee (includes the diagnostic and the first half-hour of work). We'll explain pricing before any additional work begins." },
          { question: "Do you install ductless (mini-split) systems?", answer: "Yes. We're Bryant Certified Ductless Pros. We install single-zone and multi-zone ductless systems for additions, garages, bonus rooms, and homes without existing ductwork." },
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
