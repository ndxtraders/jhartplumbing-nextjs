"use client";

import Link from "next/link";

import {
  Phone, Award, ShieldCheck, Wrench, Snowflake, Thermometer,
  Users, Clock, DollarSign, Sliders, Sparkles, Gauge,
  AlertTriangle, Home, FileText, TrendingUp, ArrowRight, Cpu,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { ActionGrid } from "@/components/jhart/ActionGrid";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { TestimonialSpotlight } from "@/components/jhart/TestimonialSpotlight";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { JsonLd } from "@/components/jhart/JsonLd";
import { GoogleBadge } from "@/components/jhart/Badges";
import {
  localBusiness,
  buildService,
  buildFaqPage,
  buildBreadcrumbList,
} from "@/lib/structuredData";

const hvacHeroBg = "/images/bryant-air-conditioning-hero.webp";
const bryantUnitImg = "/images/bryant-ac-groveland-ca.jpg";


const PAGE_URL = "https://jhartplumbing.com/services/hvac/bryant-air-conditioners";

const faqItems = [
  {
    question: "What size AC do I need?",
    answer:
      "It depends on your actual home: square footage, insulation, window orientation, ceiling heights, and elevation. We perform a Manual J load calculation rather than guessing from the old system's size. An oversized AC short-cycles and won't dehumidify. An undersized one runs constantly and can't keep up.",
  },
  {
    question: "How much does a new AC cost to install in Sonora?",
    answer:
      "Single-stage standard efficiency (14.3+ SEER2) systems typically run $4,000–$6,000 installed. Two-stage / 16 SEER2 systems are $5,000–$7,500. Bryant Evolution variable-speed (18+ SEER2) ranges $6,500–$9,000+ depending on tonnage and install conditions. We provide written estimates after evaluating your specific home.",
  },
  {
    question: "Should I get a heat pump or an air conditioner?",
    answer:
      "If your current furnace is in good shape and you have low-cost natural gas, sticking with AC + furnace usually makes sense. If your furnace is also at end-of-life, or you're on propane/electric resistance heat, a heat pump often makes more economic and environmental sense. See our Bryant Heat Pumps page for the full comparison.",
  },
  {
    question: "Repair or replace my old AC?",
    answer:
      "If your system is under 10 years old and the repair is straightforward, repair. If it's 15+ years old, on R-22 refrigerant, or facing a major component failure (compressor, condenser), replacement is usually the better investment. We give you the honest math on your specific unit.",
  },
  {
    question: "What SEER2 / efficiency should I choose?",
    answer:
      "For most Sonora-area homes, 15–16 SEER2 (Bryant Preferred two-stage) is the best balance of comfort, efficiency, and upfront cost. 18+ SEER2 Bryant Evolution variable-speed makes sense for larger homes, heavy summer use, or where rebates close the upfront-cost gap.",
  },
  {
    question: "What AC rebates or tax credits can I get?",
    answer:
      "Available incentives change by year and by utility. Tax credits and local rebates change often — call us to see what current incentives apply for high-efficiency systems. We'll check what's current for your specific system at estimate time.",
  },
];

export default function Page() {
  const serviceSchema = buildService({
    name: "Bryant Air Conditioner Installation & Service",
    description:
      "Bryant air conditioner installation, replacement, and service in Sonora, Tuolumne County, and Calaveras County. Bryant Evolution variable-speed flagship plus Preferred and Legacy tiers. Manual J sized.",
    serviceType: "Air Conditioning Installation & Service",
    url: PAGE_URL,
    offerCatalog: [
      "Evolution Variable-Speed AC",
      "Preferred Two-Stage AC",
      "Legacy Single-Stage AC",
    ],
  });
  const faqSchema = buildFaqPage(faqItems);
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Home", url: "https://jhartplumbing.com/" },
    { name: "Services" },
    { name: "HVAC", url: "https://jhartplumbing.com/services/hvac" },
    { name: "Bryant Heating & Cooling", url: "https://jhartplumbing.com/services/hvac/bryant-heating-cooling" },
    { name: "Bryant Air Conditioners", url: PAGE_URL },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[localBusiness, serviceSchema, faqSchema, breadcrumbSchema]} />
      <Navbar />

      <Hero
        backgroundImage={hvacHeroBg}
        imageClassName="object-[70%_center] md:object-center"
        heading={
          <>
            Bryant Air Conditioners{" "}
            <br className="hidden md:block" />
            Sonora &amp; Tuolumne County
          </>
        }
        tagline="Reliable, efficient cooling — installed right."
        subtitle="Bryant Factory Authorized Dealer for the full Bryant residential AC lineup: Evolution™ variable-speed, Preferred™ two-stage, and Legacy™ single-stage. Sized correctly with Manual J load calculations."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request a Callback", href: "#cta-form" }}
      >
        <GoogleBadge />
      </Hero>

      <TrustBar
        items={[
          { icon: Award, label: "Bryant Factory Authorized", breakpoint: "always" as const },
          { icon: ShieldCheck, label: "Licensed & Insured", breakpoint: "always" as const },
          { icon: Users, label: "Family-Owned Since 1984", breakpoint: "sm" as const },
          { icon: Clock, label: "Same-Day Service Available", breakpoint: "md" as const },
        ]}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "HVAC", href: "/services/hvac" },
          { label: "Bryant Heating & Cooling", href: "/services/hvac/bryant-heating-cooling" },
          { label: "Bryant Air Conditioners" },
        ]}
      />

      <IntroSection
        heading="Reliable, Efficient Cooling, Installed Right"
        paragraphs={[
          <>
            We're Sonora's Bryant Factory Authorized Dealer — and we install the full Bryant residential AC lineup: <strong className="text-navy">Evolution™</strong> variable-speed at the top, <strong className="text-navy">Preferred™</strong> two-stage in the middle, and <strong className="text-navy">Legacy™</strong> single-stage for value-focused replacements. Bryant has been making residential cooling equipment since 1904; J. Hart has been installing it here since 1984.{" "}
          </>,
          <>
            We're a Bryant Factory Authorized Dealer for Sonora and the Motherlode. Our technicians are factory-trained on Bryant equipment and you get access to Bryant's enhanced warranties when systems are registered.{" "}
            <Link href="/services/hvac/bryant-heating-cooling" className="font-semibold text-primary hover:underline">
              See our full Bryant lineup →
            </Link>
          </>,
        ]}
        image={{ src: bryantUnitImg, alt: "Bryant air conditioning unit installed by J. Hart Plumbing" }}
        floatImage={false}
        className="bg-background"
      />

      <ServiceCardGrid
        className="bg-off-white"
        heading="What We Do — Bryant AC Services"
        cards={[
          {
            icon: Snowflake,
            title: "AC Installation & Replacement",
            services: [
              "Full Bryant residential AC lineup (Evolution, Preferred, Legacy)",
              "Existing system removal and disposal",
              "Refrigerant line-set replacement when needed",
              "Pad and pour or stand replacement",
              "Bryant warranty registration",
            ],
            description: "Factory-authorized installation, written estimate before work starts.",
          },
          {
            icon: Gauge,
            title: "System Sizing & Load Calculation (Manual J)",
            services: [
              "Per-home Manual J load calculation",
              "Window, insulation, and orientation analysis",
              "Elevation-corrected sizing for Sonora-area homes",
              "Right-sized tonnage, not a guess from the old nameplate",
            ],
            description: "Manual J is the industry-standard method for calculating residential heating and cooling loads room-by-room. Right-sizing is the single biggest determinant of long-term comfort and efficiency.",
          },
          {
            icon: Wrench,
            title: "AC Repair & Tune-Ups",
            services: [
              "Bryant warranty repairs and out-of-warranty service",
              "Refrigerant leak detection and recharging",
              "Capacitor, contactor, and fan motor replacement",
              "Annual spring tune-ups",
            ],
            description: "We service Bryant and most other major AC brands.",
          },
          {
            icon: Cpu,
            title: "Smart Controls & Zoning (Evolution™ Connex™)",
            services: [
              "Evolution Connex thermostat installation and commissioning",
              "Smart-home integration",
              "Zoned systems for multi-story or multi-wing homes",
            ],
            description: "Pairs with Bryant Evolution variable-speed systems for full smart-control of comfort, humidity, and air quality.",
          },
        ]}
      />

      <ActionGrid
        className="bg-background"
        heading="What Do You Need Help With?"
        items={[
          { icon: AlertTriangle, title: "Old or failing AC — repair or replace?", action: "We give honest repair-vs-replace math based on your unit, not pressure.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: TrendingUp, title: "High energy bills or weak cooling", action: "Often a sizing, refrigerant, or duct issue, not always a replacement.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Thermometer, title: "Uneven temps & humidity problems", action: "Often solved with two-stage or variable-speed equipment plus duct balancing.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Home, title: "New install (addition / no existing AC)", action: "Manual J load calc determines the right tonnage for your actual home.", href: "#cta-form", linkLabel: "Request a callback" },
        ]}
      />

      <section className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="The Bryant AC Lineup"
            description="Three tiers, the same factory-trained install. Featured: Bryant Evolution™ variable-speed flagship."
            className="mb-12"
          />
          <div className="rounded-2xl bg-white border-2 border-primary p-8 shadow-elevated mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary">Flagship</div>
                <h3 className="text-xl font-extrabold text-navy">Evolution™ System — Premium Variable-Speed</h3>
              </div>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Bryant's top residential AC tier. Variable-speed compressor for steady temperature control, very low operating noise, and the highest efficiency in the lineup. Pairs with Evolution™ Connex™ controls for full smart-home integration and Perfect Humidity® dehumidification.
            </p>
            <div className="rounded-lg bg-off-white p-4 border border-border">
              <p className="text-xs font-bold uppercase tracking-wide text-navy mb-2">Featured model: 191VAN (Evolution™ Extreme Variable Speed)</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Up to 21 SEER2 · variable-speed compressor · AeroQuiet™ low-dB operation · Perfect Humidity® · Evolution™ Connex™ compatible · 10-year parts and Red Shield™ available.
              </p>
              <p className="text-xs text-muted-foreground italic mt-2">Highlight only. Exact specs vary by tonnage. Confirm at estimate.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Preferred™ Series — Two-Stage / Single-Stage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most popular tier for typical replacements. Strong efficiency, broad model selection, two-stage operation on many models for better comfort than single-stage.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Legacy™ Line — Essential Single-Stage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Single-stage, reliable, lowest upfront cost. Best when budget is the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="Rebates, Tax Credits & Financing"
            description="High-efficiency Bryant systems often qualify for federal tax credits, utility rebates, or financing. We'll check what's current at estimate."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Tax credits &amp; rebates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tax credits and local rebates change often. Call us to see what current incentives apply for high-efficiency systems, and we'll tell you which Bryant models qualify at estimate.
              </p>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Local & utility rebates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PG&amp;E and other Tuolumne/Calaveras utility rebates change yearly. We check what's active before we quote, so the rebate is built into your decision, not discovered after.
              </p>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Financing options</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We can discuss financing on installations and replacements so you can weigh monthly cost against energy savings.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#cta-form" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              Ask us what qualifies for your system <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <FeatureGrid
        className="bg-off-white"
        heading={
          <>
            Why Choose <span className="whitespace-nowrap">J. Hart</span> for Bryant AC
          </>
        }
        features={[
          { icon: Award, title: "Bryant Factory Authorized Dealer", desc: "Factory-trained installation, access to Bryant's enhanced warranties." },
          { icon: Gauge, title: "Right-sized installs (Manual J), no guesswork", desc: "Per-home load calculation, not a nameplate match. Avoids the comfort and efficiency problems of over- or under-sized systems." },
          { icon: Users, title: "Four generations local", desc: "Family-owned since 1984. Same name on the truck, same accountability." },
          { icon: ShieldCheck, title: "Licensed & insured", desc: "CA Lic #459194 · NV Lic #77957." },
        ]}
        columns={2}
      />

      <WhereWeWork />

      <TestimonialSpotlight
        quote="This was the easiest, fastest, friendliest, and most professional contract job I've ever done! They took care of details and made the necessary changes immediately."
        author="Mona Gaskill"
        service="HVAC Installation · 2025"
      />

      <FAQSection className="bg-background" items={faqItems} />

      <div id="cta-form">
        <CTAFormSection />
      </div>

      <Footer />
    </div>
  );
};

