"use client";

import Link from "next/link";

import {
  Phone, Award, ShieldCheck, GraduationCap, Wrench, ArrowRight,
  Snowflake, Fan, Thermometer, Sparkles,
  Users, Clock, Sliders,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
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

const hvacHeroBg = "/images/bryant-heating-cooling-hero.webp";
const jhartTeamImg = "/images/jhart-team.jpg";


const PAGE_URL = "https://jhartplumbing.com/services/hvac/bryant-heating-cooling";

const faqItems = [
  {
    question: "What does Bryant Factory Authorized Dealer mean?",
    answer:
      "Factory Authorized Dealer is Bryant's highest local-dealer designation. We meet Bryant's standards for technical training, customer service, and warranty support, which gives you access to enhanced Bryant warranties and installations done to manufacturer specifications.",
  },
  {
    question: "Is Bryant a good HVAC brand?",
    answer:
      "Yes! Bryant has been making heating and cooling equipment since 1904, making it one of the most established residential HVAC brands in North America. The Evolution™ line competes with any premium brand on comfort and efficiency. Preferred™ and Legacy™ cover mid-range and value tiers. We install Bryant because the equipment is reliable, parts are easy to source, and the factory-trained installer program produces consistent results.",
  },
  {
    question: "Do you service all Bryant systems?",
    answer:
      "Yes. We install, repair, and maintain the full Bryant residential lineup: air conditioners, heat pumps, gas/oil furnaces, ductless mini-splits, air handlers and coils, and Evolution Connex thermostats. We also service most other major HVAC brands on existing systems.",
  },
  {
    question: "What Bryant warranties apply to my system?",
    answer:
      "Most new Bryant Evolution and Preferred residential systems carry a 10-year parts warranty when registered within 90 days of installation. Some models add an extended compressor warranty. As a Factory Authorized Dealer we can also offer Red Shield™ extended labor coverage. Specific terms depend on the model — we put them in writing before installation.",
  },
  {
    question: "Do you offer financing on Bryant systems?",
    answer:
      "Yes, we can discuss financing options on installations and replacements. We'll walk you through available terms so you can compare upfront cost against monthly payments and energy savings.",
  },
  {
    question: "Which Bryant system is right for my home?",
    answer:
      "It depends on what you have today (AC and furnace, heat pump, ductless), the age of the equipment, your home's size and ductwork, fuel availability, and how long you plan to stay. We do a Manual J load calculation and walk you through the trade-offs between Evolution (premium/variable-speed), Preferred (mid), and Legacy (essential) so you can decide based on real numbers — not a sales pitch. Call (209) 533-1978 or request a callback to set up a recommendation.",
  },
];

interface BryantSystem {
  name: string;
  icon: React.ElementType;
  description: string;
  href?: string;
  built: boolean;
}

const BRYANT_SYSTEMS: BryantSystem[] = [
  {
    name: "Air Conditioners",
    icon: Snowflake,
    href: "/services/hvac/bryant-air-conditioners",
    description:
      "Bryant Evolution variable-speed, Preferred two-stage, and Legacy single-stage air conditioners. Sized correctly with Manual J load calculations.",
    built: true,
  },
  {
    name: "Ductless & Mini-Split",
    icon: Fan,
    href: "/services/hvac/bryant-ductless-mini-split",
    description:
      "Single-zone and multi-zone Bryant ductless systems for additions, garages, bonus rooms, and homes without ductwork. We're Bryant Certified Ductless Pros.",
    built: true,
  },
  {
    name: "Heat Pumps",
    icon: Thermometer,
    href: "/services/hvac/bryant-heat-pumps",
    description:
      "Whole-home central heat pumps that heat and cool with one system. Cold-climate options and dual-fuel setups available.",
    built: true,
  },
];

function BryantSystemsSection() {
  return (
    <section className="bg-off-white px-8 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          heading="Bryant Systems We Install"
          description="Three Bryant systems we install most often in Sonora and the surrounding foothills. Tap any card for full details."
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BRYANT_SYSTEMS.map((system) => {
            const card = (
              <div
                className={`group h-full rounded-2xl bg-white border p-6 shadow-card transition-colors ${
                  system.built
                    ? "border-border hover:border-primary"
                    : "border-border opacity-90"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <system.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy leading-tight">
                    {system.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {system.description}
                </p>
                {system.built ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:underline">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Service available · dedicated page coming
                  </span>
                )}
              </div>
            );
            return system.built && system.href ? (
              <Link key={system.name} href={system.href} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={system.name} className="h-full">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const serviceSchema = buildService({
    name: "Bryant HVAC Sales, Installation & Service",
    description:
      "J. Hart Plumbing is the local Bryant Factory Authorized Dealer serving Sonora, Tuolumne County, and Calaveras County. We install and service the full Bryant residential lineup: air conditioners, ductless mini-splits, heat pumps, furnaces, and Evolution™ controls. Every system sized correctly to manufacturer spec.",
    serviceType: "HVAC Sales, Installation & Service",
    url: PAGE_URL,
    offerCatalog: [
      "Air Conditioners",
      "Ductless Mini-Splits",
      "Heat Pumps",
      "Gas & Oil Furnaces",
      "Air Handlers & Coils",
      "Thermostats & Controls",
      "Indoor Air Quality",
    ],
  });
  const faqSchema = buildFaqPage(faqItems);
  const breadcrumbSchema = buildBreadcrumbList([
    { name: "Home", url: "https://jhartplumbing.com/" },
    // "Services" is name-only by design: /services is an intentional soft-404 nav label, not a routable page.
    { name: "Services" },
    { name: "HVAC", url: "https://jhartplumbing.com/services/hvac" },
    { name: "Bryant Heating & Cooling", url: PAGE_URL },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <JsonLd data={[localBusiness, serviceSchema, faqSchema, breadcrumbSchema]} />
      <Navbar />

      <Hero
        backgroundImage={hvacHeroBg}
        heading={
          <>
            Bryant Heating &amp; Cooling{" "}
            <br className="hidden md:block" />
            Factory Authorized Dealer in Sonora, CA
          </>
        }
        tagline="The full Bryant residential lineup — sold, installed, and serviced locally."
        subtitle="J. Hart is your local Bryant Factory Authorized Dealer for Sonora, Tuolumne County, and Calaveras County. Every system sized and installed to manufacturer spec."
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
          { label: "Bryant Heating & Cooling" },
        ]}
      />

      <IntroSection
        heading="Your Local Bryant Factory Authorized Dealer"
        paragraphs={[
          <>
            <span className="whitespace-nowrap">J. Hart</span> Plumbing is the local Bryant Factory Authorized Dealer for the Sonora area. That designation is Bryant's highest local-dealer recognition, earned through ongoing technical training, customer-service standards, and installations done to manufacturer spec.{" "}
          </>,
          <>
            For homeowners, the practical difference is two things: <strong className="text-navy">access to Bryant's enhanced warranties</strong> (typically 10-year parts on Evolution and Preferred systems when registered), and <strong className="text-navy">factory-trained installation</strong> so the equipment performs as engineered. Factory-quality work with the accountability of a local family-run shop.
          </>,
        ]}
        image={{ src: jhartTeamImg, alt: "The J. Hart Plumbing team" }}
        floatImage={false}
        className="bg-background"
      />

      <FeatureGrid
        className="bg-off-white"
        heading="Why a Bryant Factory Authorized Dealer Matters"
        features={[
          {
            icon: Award,
            title: "What \"Factory Authorized\" means",
            desc: "Bryant's top local-dealer designation. It requires ongoing technical training, verified customer-service standards, and adherence to installation specs.",
          },
          {
            icon: GraduationCap,
            title: "Factory-trained technicians",
            desc: "Our installers and service techs are trained on Bryant's specific equipment — sizing methodology, refrigerant procedures, and Evolution Connex commissioning.",
          },
          {
            icon: ShieldCheck,
            title: "Equipment warranty advantages",
            desc: "Bryant offers enhanced parts warranties (typically 10 years on Evolution and Preferred) when systems are installed by a Factory Authorized Dealer and registered within 90 days.",
          },
        ]}
        columns={3}
      />

      <BryantSystemsSection />

      <FeatureGrid
        className="bg-background"
        heading="The Bryant Residential Product Line"
        subtitle="Three tiers, the same factory-trained installation"
        features={[
          {
            icon: Sparkles,
            title: "Evolution™ — Premium",
            desc: "Variable-speed comfort, highest efficiency, Evolution™ Connex™ smart controls. Best when comfort, efficiency, and quiet operation matter most.",
          },
          {
            icon: Sliders,
            title: "Preferred™ — Mid-Range",
            desc: "Two-stage or single-stage operation, strong efficiency, broad model selection. The most popular tier for typical replacements.",
          },
          {
            icon: Wrench,
            title: "Legacy™ — Essential",
            desc: "Single-stage, reliable, lowest upfront cost. Best when budget is the priority.",
          },
        ]}
        columns={3}
      />

      <FeatureGrid
        className="bg-off-white"
        heading="How a Bryant Install Works at J. Hart"
        features={[
          {
            icon: Phone,
            title: "1. System recommendation",
            desc: "We discuss your current system, your home, and what's driving the replacement (failure, age, comfort, efficiency, going all-electric).",
          },
          {
            icon: Sliders,
            title: "2. Sizing & written proposal",
            desc: "Manual J load calculation based on your actual home. Not a guess from the old system's nameplate. Written proposal with the Bryant model, tier rationale, and price.",
          },
          {
            icon: Wrench,
            title: "3. Professional installation",
            desc: "Factory-trained installation: proper line sets, evacuation, refrigerant charge, ductwork verification, Evolution Connex commissioning where applicable.",
          },
          {
            icon: ShieldCheck,
            title: "4. Service & warranty",
            desc: "We register your Bryant warranty, document the install, and handle ongoing service. The same local team you bought from is the one you call later.",
          },
        ]}
        columns={2}
      />

      <FeatureGrid
        className="bg-background"
        heading={
          <>
            Why Choose <span className="whitespace-nowrap">J. Hart</span>
          </>
        }
        features={[
          { icon: Users, title: "Four generations local", desc: "Family-owned since 1984. Same name on the truck, same accountability." },
          { icon: Award, title: "Factory-authorized + local", desc: "Bryant Factory Authorized Dealer and Bryant Certified Ductless Pros, with the accountability of a local shop." },
          { icon: ShieldCheck, title: "Licensed & insured", desc: "CA License #459194 · NV License #77957. Fully insured for residential and commercial work." },
        ]}
        columns={3}
      />

      <section className="bg-off-white px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            heading="Serving Sonora, Tuolumne County & Calaveras County"
            description="Our service area covers Sonora, Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Pinecrest, Groveland, Chinese Camp, Don Pedro, Sierra Village, Angels Camp, and surrounding communities."
            className="mb-2"
          />
        </div>
      </section>

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
