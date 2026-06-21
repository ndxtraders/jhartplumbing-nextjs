"use client";

import Link from "next/link";

import {
  Phone, Award, ShieldCheck, Wrench, Snowflake, Thermometer,
  Users, Clock, Home, Sparkles, Sliders,
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

const hvacHeroBg = "/images/bryant-ductless-twain-harte-ca.jpg";
const bryantDuctlessProImg = "/images/bryant-ductless-pro.png";


const PAGE_URL = "https://jhartplumbing.com/services/hvac/bryant-ductless-mini-split";

const faqItems = [
  {
    question: "What is a ductless mini-split system?",
    answer:
      "A ductless mini-split is a heating and cooling system with an outdoor compressor connected to one or more indoor air handlers by a small refrigerant line. There's no ductwork. The indoor units deliver conditioned air directly into the room. They're efficient, quiet, and let you control each room independently.",
  },
  {
    question: "How much does a mini-split cost to install in Sonora?",
    answer:
      "Single-zone systems typically run $4,500–$7,500 installed depending on the Bryant tier and install conditions. Multi-zone systems (2–4 indoor heads on one outdoor unit) are usually $9,000–$18,000 installed. We provide a written estimate based on your actual home and zone count. No guessing from square footage alone.",
  },
  {
    question: "How do I size a mini-split for my home?",
    answer:
      "Per room, not per total square footage. We do a Manual J load calculation for each zone you want to condition, accounting for insulation, windows, sun exposure, and elevation. A right-sized head dehumidifies properly and cycles efficiently.",
  },
  {
    question: "What are the disadvantages of a mini-split?",
    answer:
      "Honest answer: the indoor heads are visible on the wall. Multi-zone systems can be more expensive upfront than a basic central system. And you have multiple units to maintain rather than one.",
  },
  {
    question: "Is a mini-split expensive to run?",
    answer:
      "Generally no. They're among the most efficient HVAC equipment available because there's no duct loss and you only condition the rooms you use. Bryant Evolution variable-speed models run at very low load most of the time, which is where the efficiency lives.",
  },
  {
    question: "Will a ductless heat pump work in cold weather?",
    answer:
      "Bryant's cold-climate ductless heat pumps maintain heating capacity into the teens. For Sonora's typical winters that's well within range. For higher-elevation cabins or properties that regularly see temperatures drop below freezing, we'll spec a cold-climate model or discuss a dual-fuel backup.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical single-zone install is one day. Multi-zone systems run 1–3 days depending on the number of heads and the wall/ceiling routing.",
  },
];

export default function Page() {
  const serviceSchema = buildService({
    name: "Bryant Ductless Mini-Split Installation & Service",
    description:
      "Bryant ductless mini-split installation and service for additions, garages, ADUs, and homes without ductwork. Single-zone and multi-zone systems. Bryant Certified Ductless Pros serving Sonora, Tuolumne County, and Calaveras County.",
    serviceType: "Ductless Mini-Split Installation & Service",
    url: PAGE_URL,
    offerCatalog: [
      "Evolution Series Ductless",
      "Preferred Series Ductless",
      "Legacy Series Ductless",
    ],
  });
  const faqSchema = buildFaqPage(faqItems);
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Home", url: "https://jhartplumbing.com/" },
    { name: "Services" },
    { name: "HVAC", url: "https://jhartplumbing.com/services/hvac" },
    { name: "Bryant Heating & Cooling", url: "https://jhartplumbing.com/services/hvac/bryant-heating-cooling" },
    { name: "Bryant Ductless Mini-Split", url: PAGE_URL },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[localBusiness, serviceSchema, faqSchema, breadcrumbSchema]} />
      <Navbar />

      <Hero
        backgroundImage={hvacHeroBg}
        imageClassName="object-[85%_center] md:object-center"
        heading={
          <>
            Bryant Ductless Mini-Split Systems{" "}
            <br className="hidden md:block" />
            Sonora &amp; Tuolumne County
          </>
        }
        tagline="Heating and cooling where ductwork can't go — done right."
        subtitle="Bryant ductless for additions, ADUs, garages, bonus rooms, and homes without ductwork. We're Bryant Certified Ductless Pros and a Factory Authorized Dealer."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request a Callback", href: "#cta-form" }}
      >
        <GoogleBadge />
      </Hero>

      <TrustBar
        items={[
          { icon: Award, label: "Bryant Certified Ductless Pros", breakpoint: "always" as const },
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
          { label: "Bryant Ductless Mini-Split" },
        ]}
      />

      <IntroSection
        heading="Reliable Ductless Comfort, Installed Right"
        paragraphs={[
          <>
            A Bryant ductless system is the right answer when ductwork doesn't make sense: additions, ADUs, garages, bonus rooms, and older homes that were never ducted. One outdoor unit connects to one or more indoor heads through a discreet line set, giving you room-by-room control without the cost or disruption of new ductwork.{" "}
          </>,
          <>
            We're Bryant Certified Ductless Pros. Our team is trained on Bryant's ductless lineup, including sizing per zone, refrigerant procedures, and commissioning. As a Bryant Factory Authorized Dealer, you get the right equipment installed to spec, with the full Bryant warranty behind it.{" "}
            <Link href="/services/hvac/bryant-heating-cooling" className="font-semibold text-primary hover:underline">
              See our full Bryant lineup →
            </Link>
          </>,
        ]}
        image={{ src: bryantDuctlessProImg, alt: "Bryant Certified Ductless Pro badge", imageClassName: "object-contain" }}
        floatImage={false}
        className="bg-background"
      />

      <ServiceCardGrid
        className="bg-off-white"
        heading="What We Do — Ductless Services"
        cards={[
          {
            icon: Sliders,
            title: "Ductless Installation & System Design",
            services: [
              "Per-zone Manual J load calculation",
              "Indoor unit placement consultation",
              "Line-set routing and exterior penetration planning",
              "Bryant Factory Authorized installation to spec",
              "Evolution Connex commissioning where applicable",
            ],
            description: "We design the system around your actual rooms and usage. Not a generic square-footage guess.",
          },
          {
            icon: Home,
            title: "Single-Zone & Multi-Zone Systems",
            popular: true,
            services: [
              "Single-zone (one indoor head, one room)",
              "Multi-zone (2–8 indoor heads on one outdoor unit)",
              "Wall-mount, ceiling cassette, floor console, and ducted indoor types",
              "Mixed indoor-type configurations",
            ],
            description: "Choose the right configuration per room: wall mounts where they're fine, cassettes or low-wall consoles where aesthetics matter.",
          },
          {
            icon: Thermometer,
            title: "Heat-Pump Ductless (Heat + Cool)",
            services: [
              "Bryant heat-pump ductless for year-round comfort",
              "Cold-climate models for higher-elevation properties",
              "Dual-fuel backup when warranted",
              "Heating capacity sized for our climate, not generic charts",
            ],
            description: "Most modern ductless systems are heat pumps: one unit, both modes. For whole-home ducted heat pumps, see our Bryant Heat Pumps page.",
          },
          {
            icon: Wrench,
            title: "Ductless Repair & Maintenance",
            services: [
              "Diagnostic and repair on Bryant and most other ductless brands",
              "Refrigerant leak detection and recovery",
              "Indoor coil and filter cleaning",
              "Outdoor unit service and seasonal performance checks",
            ],
            description: "Already have a ductless system? We service Bryant and most other brands.",
          },
        ]}
      />

      <ActionGrid
        className="bg-background"
        heading="What Do You Need Help With?"
        items={[
          { icon: Home, title: "No heat or AC in an addition or ADU", action: "Most additions never get ducted. Ductless is the standard answer.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Sliders, title: "No ductwork in part of the house", action: "We can zone the underserved areas without touching the existing system.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Thermometer, title: "One room is always too hot or cold", action: "A single-zone mini-split fixes the problem room without redoing your central system.", href: "#cta-form", linkLabel: "Request a callback" },
          { icon: Wrench, title: "Replacing window or portable units", action: "Ductless is quieter, more efficient, and built for permanent use.", href: "#cta-form", linkLabel: "Request a callback" },
        ]}
      />

      <section className="bg-off-white px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="What Is a Ductless Mini-Split? How It Works"
            description="Plain-English overview before you talk to anyone about installation."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Snowflake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">How a ductless system works</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An outdoor compressor + one or more indoor heads, connected by a small refrigerant line set (typically 3 inches through the wall). No ductwork means no duct losses. Efficiency stays in the room with you.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sliders className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Single-zone vs. multi-zone</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Single-zone = one outdoor unit, one indoor head, one room. Multi-zone = one outdoor unit driving 2–8 indoor heads, each independently controlled. Multi-zone is more upfront but more efficient than separate single-zones if you need 3+ rooms.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-navy mb-2">Indoor unit types</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wall-mount (most common, lowest cost), ceiling cassette (flush in the ceiling), low-wall console (looks like a baseboard), and short-run ducted (for one zone with a few registers). Choose by aesthetics and the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        className="bg-background"
        heading="Bryant Ductless Lineup"
        subtitle="Three tiers, all installed by Bryant Certified Ductless Pros"
        features={[
          { icon: Sparkles, title: "Evolution™ — Premium", desc: "Quietest operation, highest efficiency, supports up to 8 indoor heads, full Evolution Connex compatibility. Best for whole-home or multi-zone projects where comfort and efficiency matter most." },
          { icon: Sliders, title: "Preferred™ — Mid-Range", desc: "Broad configuration range, strong efficiency, the most popular tier for typical single- and multi-zone installs." },
          { icon: Wrench, title: "Legacy™ — Essential", desc: "Single-zone reliability at the lowest upfront cost. Best when budget is the priority." },
        ]}
        columns={3}
      />

      <FeatureGrid
        className="bg-off-white"
        heading={
          <>
            Why Choose <span className="whitespace-nowrap">J. Hart</span> for Bryant Ductless
          </>
        }
        features={[
          { icon: Award, title: "Bryant Certified Ductless Pros", desc: "Specifically trained and certified on Bryant's ductless equipment — sizing, refrigerant procedures, commissioning." },
          { icon: Users, title: "Four generations local", desc: "Family-owned since 1984. Same name on the truck, same accountability." },
          { icon: ShieldCheck, title: "Licensed & insured", desc: "CA Lic #459194 · NV Lic #77957." },
          { icon: Sliders, title: "Honest sizing, no upselling", desc: "Per-room load calc. We won't push a 4-zone system if you genuinely only need 2." },
        ]}
        columns={2}
      />

      <section className="bg-background px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            heading="Serving Sonora, Tuolumne County & Calaveras County"
            description="Sonora, Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Pinecrest, Groveland, Chinese Camp, Don Pedro, Sierra Village, Angels Camp, and surrounding communities."
          />
        </div>
      </section>

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
