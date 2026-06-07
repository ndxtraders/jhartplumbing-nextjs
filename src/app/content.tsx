"use client";

import { Wrench, Flame, Droplets, Wind, Phone, ArrowRight, MapPin, BookOpen, Award, Shield } from "lucide-react";
import { StorySnippet } from "@/components/jhart/StorySnippet";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { IconFeatureCard } from "@/components/jhart/Cards";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { JHartDifference } from "@/components/jhart/JHartDifference";
import { DarkCTASection } from "@/components/jhart/DarkCTASection";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { PastProjects } from "@/components/jhart/PastProjects";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { Button } from "@/components/ui/button";

const jhartTeam2025 = "/images/jhart-team-2025.webp";
const bbbBadge = "/images/bbb-badge.webp";
const bryantUnit = "/images/bryant-unit.jpg";
const jhartOffice = "/images/jhart-office.webp";
const jhartLogo = "/images/jhart-logo.webp";
const tanklessInstall = "/images/tankless-install.webp";
const radiantFloor = "/images/radiant-floor-tubing.webp";
const chickenRanch = "/images/chicken-ranch-fire-station.webp";
const sonoraAquatics = "/images/sonora-aquatics-center.webp";
const commercialHvac = "/images/commercial-hvac-ductwork.webp";
const indianRock = "/images/indian-rock-center.jpg";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={jhartLogo}
        heading={
          <>
            Sonora's Trusted Plumbing, HVAC &amp;&nbsp;Radiant&nbsp;Heating Experts{" "}
            <span className="text-cta">Since&nbsp;1984</span>
          </>
        }
        subtitle={<>From emergency plumbing repairs to high-efficiency heating and cooling, <span className="whitespace-nowrap">J. Hart</span> delivers dependable service, fair pricing, and work done right the first time.</>}
        primaryCTA={{ label: "Request Service", href: "#cta-form" }}
        secondaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978" }}
      >
        <GoogleBadge />
      </Hero>

      {/* ═══ TRUST BAR ═══ */}
      <TrustBar />

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="bg-light-blue px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            heading="Choose the Service You Need"
            description="Fast routing to the right team—residential and light commercial."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <IconFeatureCard
              icon={Wrench}
              title="Plumbing"
              description="Repairs, replacements, and installations for homes and light commercial properties — from leaks and clogs to fixtures, piping, water heaters, and remodels."
              link={{ label: "Learn More", href: "/services/plumbing" }}
            />
            <IconFeatureCard
              icon={Wind}
              title="HVAC"
              description="Heating and cooling repair, maintenance, replacement, and high-efficiency system installation for year-round comfort in the Motherlode climate."
              link={{ label: "Learn More", href: "/services/hvac" }}
            />
            <IconFeatureCard
              icon={Flame}
              title="Radiant Heating"
              description="Radiant floor heating design, installation, troubleshooting, and repair for comfortable, efficient heat throughout your home or business."
              link={{ label: "Learn More", href: "/services/radiant-heating" }}
            />
            <IconFeatureCard
              icon={Droplets}
              title="Water Treatment"
              description="Water softeners, filtration, UV systems, and reverse osmosis solutions designed for local water conditions in Sonora and surrounding areas."
              link={{ label: "Learn More", href: "/services/water-treatment" }}
            />
          </div>
        </div>
      </section>

      {/* ═══ THE J. HART DIFFERENCE ═══ */}
      <JHartDifference />

      {/* ═══ MID-PAGE CTA ═══ */}
      <DarkCTASection
        heading="Not sure who to call — plumbing or HVAC?"
        description="Call us and we'll route you to the right technician and get you scheduled."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978" }}
        secondaryCTA={{ label: "Request Service", href: "#cta-form" }}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="Trusted by Your Neighbors"
        testimonials={[
          {
            quote: "I can not say enough about this company. From initial call through repair and completion, J Hart's entire staff are prompt, caring, and professional. I have used J Hart several times now for various projects and emergency repairs. Each time, I am amazed. I wish ALL companies could be this responsive and good. Thank you, J Hart Plumbing!",
            author: "George Wright",
            initials: "GW",
            location: "Various Repairs · 2024",
          },
          {
            quote: "J Hart Plumbing has always been my go to with my plumbing issues. They are prompt and know what they are doing. Their communication is awesome. Thanks J Hart for always doing a great job!",
            author: "Tammy Hammond",
            initials: "TH",
            location: "Plumbing Service · 2024",
          },
          {
            quote: "I'm updating this review. From Lisa, down to JT, and ALL the people at this company are an exemplary example of how companies should be run! Needed them back this year, and it was not an easy job! They were wonderful and understanding. What an awesome team! Very friendly, on time, knowledgeable professionals. Got the job done fast. Highly recommend.",
            author: "Jessica G",
            initials: "JG",
            location: "Plumbing Service · 2025",
          },
        ]}
      />

      {/* ═══ ABOUT / STORY ═══ */}
      <StorySnippet
        logo={jhartLogo}
        badge={null}
        heading="Four Generations. One Standard."
        paragraphs={[
          <p key="1" className="text-lg leading-relaxed text-muted-foreground">
            Since 1984, <span className="whitespace-nowrap">J. Hart</span> Plumbing has been the Motherlode's trusted name in plumbing—and over the years, we've expanded into radiant heating, HVAC, and water treatment.
          </p>,
          <p key="2" className="text-lg leading-relaxed text-muted-foreground">
            The services expanded, but the approach never changed: honest pricing, quality work, and a team that shows up and gets it done right.
          </p>,
          <p key="3" className="text-lg leading-relaxed text-muted-foreground font-semibold text-navy">
            No call centers. No revolving door of subcontractors. Just a local family that stands behind every job.
          </p>,
        ]}
        bannerImage={{
          src: jhartTeam2025,
          alt: "The J. Hart Plumbing team in front of the Sonora shop",
          caption: <>The team behind every job, at our Sonora shop.</>,
        }}
        cta={{ label: "Our Story", href: "/about" }}
      />

      {/* ═══ PAST PROJECTS ═══ */}
      <PastProjects
        heading="Quality Work You Can See"
        description="Recent installs, repairs, and commercial projects across Tuolumne County. Every job gets our full attention—from small repairs to major installations."
        projects={[
          { title: "HVAC Installation", location: "Sonora, CA", image: bryantUnit },
          { title: "Commercial HVAC", location: "Tuolumne County", image: commercialHvac },
          { title: "Radiant Floor Heating", location: "Twain Harte, CA", image: radiantFloor },
          { title: "New Construction", location: "Sonora, CA", image: chickenRanch },
          { title: "Tankless Water Heater", location: "Columbia, CA", image: tanklessInstall },
          { title: "Aquatics Center", location: "Sonora, CA", image: sonoraAquatics },
        ]}
      />

      {/* ═══ SERVICE AREA ═══ */}
      <WhereWeWork />

      {/* ═══ FINAL CTA + FORM ═══ */}
      <div id="cta-form">
        <CTAFormSection />
      </div>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};
