"use client";

import Link from "next/link";

import {
  Phone, Award, ShieldCheck, Wrench, Thermometer, Snowflake, Flame,
  Users, Clock, DollarSign, Sliders, Sparkles, Gauge,
  Home, FileText, TrendingUp, Zap, ArrowRight, Wind, AlertTriangle,
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

const hvacHeroBg = "/images/bryant-heat-pump-hero.webp";
const bryantUnitImg = "/images/bryant-unit.jpg";


const PAGE_URL = "https://jhartplumbing.com/services/hvac/bryant-heat-pumps";

const faqItems = [
  {
    question: "What exactly does a heat pump do?",
    answer:
      "One unit that both heats and cools your home. In summer it works just like an air conditioner. In winter it runs in reverse, pulling heat from the outside air instead of burning fuel. One outdoor unit does the job of your AC and your furnace.",
  },
  {
    question: "Is a heat pump better than an AC?",
    answer:
      "For cooling, they're the same — a heat pump cools exactly like an AC. The difference is heating: it replaces your furnace too and runs on electricity. Whether it's the right call depends on your current furnace, your fuel costs, and what rebates you qualify for.",
  },
  {
    question: "Is a heat pump enough to heat a house in our climate?",
    answer:
      "For Sonora-area winters: yes, modern Bryant heat pumps handle our climate well. For higher-elevation properties that regularly see temperatures drop below freezing, we'll spec a cold-climate model or recommend a dual-fuel setup (heat pump + small gas/propane furnace as backup for the coldest days).",
  },
  {
    question: "What's the downside of a heat pump?",
    answer:
      "Higher upfront cost than AC alone (you're replacing both AC and furnace in one purchase). In very cold weather, performance drops without a cold-climate model. And if you have very cheap natural gas, the operating-cost advantage shrinks. Honest math at estimate beats brochure claims.",
  },
  {
    question: "How much does a heat pump cost to install in Sonora?",
    answer:
      "Whole-home central heat pumps typically run $9,000–$16,000+ installed, depending on size, Bryant tier, and whether you're replacing both the AC and furnace (most common) or just the AC. Contact us for the latest tax credits and rebates — they can close a good part of the gap vs. AC + furnace.",
  },
  {
    question: "Will a heat pump lower my energy bills?",
    answer:
      "Usually yes if you're replacing electric resistance, propane, or oil heat — the savings are substantial. If you're replacing low-cost natural gas, the savings are modest in heating but still real in cooling. We model your specific situation honestly at estimate.",
  },
];

export default function Page() {
  const serviceSchema = buildService({
    name: "Bryant Heat Pump Installation & Service",
    description:
      "Bryant central heat pump installation and service in Sonora, Tuolumne County, and Calaveras County. Whole-home, cold-climate, and dual-fuel configurations — Manual J sized with rebate and tax-credit analysis included.",
    serviceType: "Heat Pump Installation & Service",
    url: PAGE_URL,
    offerCatalog: [
      "Evolution Variable-Speed Heat Pump",
      "Preferred Heat Pump",
      "Legacy Heat Pump",
    ],
  });
  const faqSchema = buildFaqPage(faqItems);
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Home", url: "https://jhartplumbing.com/" },
    { name: "Services" },
    { name: "HVAC", url: "https://jhartplumbing.com/services/hvac" },
    { name: "Bryant Heating & Cooling", url: "https://jhartplumbing.com/services/hvac/bryant-heating-cooling" },
    { name: "Bryant Heat Pumps", url: PAGE_URL },
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
            Bryant Heat Pumps{" "}
            <br className="hidden md:block" />
            Sonora &amp; Tuolumne County
          </>
        }
        tagline="Year-round comfort from one system."
        subtitle="One Bryant system that heats and cools — replacing both your AC and furnace. Cold-climate and dual-fuel options for higher-elevation homes."
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
          { label: "Bryant Heat Pumps" },
        ]}
      />

      <IntroSection
        heading="Year-Round Comfort From One System"
        paragraphs={[
          <>
            A heat pump is a single piece of equipment that both heats and cools your home. In summer it works exactly like an air conditioner. In winter, it reverses and moves heat from outside into the house — without burning fuel. <strong className="text-navy">One outdoor unit replaces both your AC and your furnace.</strong>{" "}
          </>,
          <>
            We install Bryant central heat pumps for whole-home / ducted use across the Sonora area. For ductless zone applications, see our{" "}
            <Link href="/services/hvac/bryant-ductless-mini-split" className="font-semibold text-primary hover:underline">
              Bryant Ductless Mini-Split
            </Link>{" "}
            page.{" "}
            <Link href="/services/hvac/bryant-heating-cooling" className="font-semibold text-primary hover:underline">
              See our full Bryant lineup →
            </Link>
          </>,
        ]}
        image={{ src: bryantUnitImg, alt: "Bryant heat pump outdoor unit installed by J. Hart Plumbing" }}
        floatImage={false}
        className="bg-background"
      />

      <section className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="What Is a Heat Pump? How It Works"
            description="If you've only ever had an AC and a furnace, here's the quick version before you talk to anyone about a quote."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wind className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">It moves heat — doesn't burn fuel</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A heat pump pulls heat out of the outside air and moves it indoors — even in winter. No flame, no exhaust, no fuel deliveries. The same system that cools your house in summer just runs in reverse to heat it.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Thermometer className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">One system: heating AND cooling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The single outdoor unit handles both seasons. No furnace, no separate AC. Less equipment to maintain, less complexity, and a smaller footprint outside.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Snowflake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Will it work in our climate?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For most Sonora-area homes, yes — comfortably. For higher-elevation properties that regularly drop below freezing, we spec cold-climate Bryant models or a dual-fuel setup with a small furnace as backup for the coldest days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="Heat Pump vs. AC vs. Furnace — Which Is Right for You?"
            description="A straight answer on which one fits your home. Not every house should switch — but plenty should."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Snowflake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Heat pump vs. air conditioner</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Same cooling, but a heat pump also heats — replacing your furnace too. It's the better pick if your furnace is also near the end of its life, or you're getting off propane.
              </p>
              <Link href="/services/hvac/bryant-air-conditioners" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline">
                Compare to Bryant AC <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Heat pump vs. gas/propane furnace</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Heat pumps win big on propane and electric-resistance replacements. It's closer on cheap natural gas — it comes down to your rates.
              </p>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">When a heat pump makes the most sense</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Replacing your AC and furnace together, going all-electric, or getting off propane. We'll run the numbers for your home at the estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCardGrid
        className="bg-off-white"
        heading="What We Do — Bryant Heat Pump Services"
        cards={[
          {
            icon: Thermometer,
            title: "Heat Pump Installation & Replacement",
            services: [
              "Full Bryant residential heat pump lineup",
              "Existing AC + furnace removal",
              "Refrigerant lines, electrical, and air-handler matching",
              "Bryant warranty registration",
              "Rebate and tax-credit paperwork handled",
            ],
            description: "Factory-authorized installation, written estimate with rebate and credit analysis before work starts.",
          },
          {
            icon: Gauge,
            title: "Sizing & Load Calculation (Manual J)",
            services: [
              "Per-home Manual J load calculation",
              "Elevation- and climate-corrected for our area",
              "Heating-load vs. cooling-load balance check",
              "Cold-climate vs. dual-fuel decision",
            ],
            description: "Heat pumps are even more sizing-sensitive than AC. Right-sized = comfort and efficiency.",
          },
          {
            icon: Sliders,
            title: "Dual-Fuel / Hybrid Setup",
            services: [
              "Heat pump + small gas/propane furnace backup",
              "Smart switchover based on outdoor temperature and fuel cost",
              "Right for higher-elevation properties or backup-heat preference",
            ],
            description: "Efficient electric heat most of the year, with a furnace that kicks in for the coldest days.",
          },
          {
            icon: Wrench,
            title: "Heat Pump Repair & Maintenance",
            services: [
              "Bryant warranty and out-of-warranty service",
              "Reversing valve, defrost-cycle, and refrigerant diagnostics",
              "Annual maintenance for both heating and cooling modes",
            ],
            description: "We service Bryant and most other major heat pump brands.",
          },
        ]}
      />

      <ActionGrid
        className="bg-background"
        heading="What Do You Need Help With?"
        items={[
          { icon: AlertTriangle, title: "Replacing an old AC and/or furnace", action: "If both are at end-of-life, a heat pump often replaces both in one purchase.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: TrendingUp, title: "High heating bills (propane / oil / electric resistance)", action: "Heat pumps can reduce heating costs by 50% or more compared to electric resistance — and typically 30–50% compared to propane or oil — depending on your local rates and system efficiency.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Zap, title: "Going all-electric", action: "Heat pumps are the standard answer for whole-home all-electric heating.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Home, title: "New construction / addition", action: "Designing from scratch is the easiest path — one system, one fuel.", href: "#cta-form", linkLabel: "Request a callback" },
        ]}
      />

      <section className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="The Bryant Heat Pump Lineup"
            description="Three tiers, the same factory-trained install."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Evolution™ — Premium</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Variable-speed, highest efficiency, including cold-climate options for higher-elevation use. Evolution Connex compatible.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Preferred™ — Mid-Range</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Variable or two-stage operation, strong efficiency, broad model selection — the most popular tier for typical replacements.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Legacy™ — Essential</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Single-stage, reliable, lowest upfront cost. Right where budget is the primary driver.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-border bg-white p-5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-navy">Looking for ductless / mini-split heat pumps?</strong> See our{" "}
              <Link href="/services/hvac/bryant-ductless-mini-split" className="font-semibold text-primary hover:underline">
                Bryant Ductless Mini-Split
              </Link>{" "}
              page — same heat-pump technology, different zone/install pattern.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="Rebates, Tax Credits & Financing"
            description="Contact us for the latest tax credits and rebates — we'll check what your system qualifies for at the estimate."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Current tax credits</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tax credits and incentives change year to year. Contact us for the latest tax credits and rebates, and we'll confirm what your system qualifies for at the estimate.
              </p>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Local & utility rebates</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                PG&amp;E and other Tuolumne/Calaveras utility rebates frequently target heat pumps specifically. We check active programs and build the rebate into the proposal.
              </p>
            </div>
            <div className="rounded-2xl bg-off-white border border-border p-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Financing options</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Financing on installations and replacements so you can weigh monthly cost against the energy savings.
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
            Why Choose <span className="whitespace-nowrap">J. Hart</span> for Bryant Heat Pumps
          </>
        }
        features={[
          { icon: Award, title: "Bryant Factory Authorized Dealer", desc: "Factory-trained on Bryant heat-pump-specific procedures (reversing valves, defrost cycles, cold-climate sizing)." },
          { icon: Gauge, title: "Right-sized, cold-climate-aware installs", desc: "Manual J per home, with elevation correction and an honest cold-climate vs. dual-fuel recommendation." },
          { icon: Users, title: "Four generations local", desc: "Family-owned since 1984. Same name on the truck, same accountability." },
          { icon: ShieldCheck, title: "Licensed & insured", desc: "CA Lic #459194 · NV Lic #77957." },
        ]}
        columns={2}
      />

      <WhereWeWork />

      <TestimonialSpotlight
        quote="New to Sonora and so thankful for the referral. J Hart is the best in town, not only for plumbing but also HVAC. Brian and JD were thorough, professional, and showed excellence in customer care."
        author="Wendy Crowley"
        service="HVAC · 2025"
      />

      <FAQSection className="bg-background" items={faqItems} />

      <div id="cta-form">
        <CTAFormSection />
      </div>

      <Footer />
    </div>
  );
};

