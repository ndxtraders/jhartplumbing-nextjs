"use client";

import {
  Phone, Wrench, Flame, Snowflake, ThermometerSun, Shield,
  Droplets, Award,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { ServiceCard } from "@/components/jhart/Cards";
import { SectionHeader } from "@/components/jhart/SectionHeader";
import { DarkCTASection } from "@/components/jhart/DarkCTASection";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { GoogleBadge } from "@/components/jhart/Badges";
import { WhereWeWork } from "@/components/jhart/WhereWeWork";
import { CredentialsSection } from "@/components/jhart/CredentialsSection";
import { ChecklistSection } from "@/components/jhart/ChecklistSection";
import { FinalCTASection } from "@/components/jhart/FinalCTASection";
import { Footer } from "@/components/jhart/Footer";
import { StorySection } from "@/components/jhart/StorySection";
import { TeamPhotoSection } from "@/components/jhart/TeamPhotoSection";
import { HowWeWork } from "@/components/jhart/HowWeWork";
import { ExperienceSection } from "@/components/jhart/ExperienceSection";
import { ExpertiseGrid } from "@/components/jhart/ExpertiseGrid";

const jhartLogo = "/images/jhart-logo.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={jhartLogo}
        heading={<>About <span className="whitespace-nowrap">J. Hart</span> Plumbing</>}
        tagline="Family-Owned & Serving Sonora Since 1984"
        subtitle="Four decades of honest plumbing, heating, and specialty services for homes and businesses throughout Tuolumne County."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request Service", href: "/contact#cta-form" }}
      >
        <GoogleBadge />
      </Hero>
      <TrustBar />

      {/* ═══ OUR STORY ═══ */}
      <StorySection />

      {/* ═══ MEET THE TEAM ═══ */}
      <TeamPhotoSection />

      {/* ═══ SERVICES GRID ═══ */}
      <section className="bg-background px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader heading="What We Do" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Wrench}
              title="Plumbing Services"
              description="Plumbing service, repair, and installation for homes and commercial properties. From everyday repairs to full system upgrades, we keep your water flowing and your drains working—done right, with clear pricing and no upselling."
              link={{ label: "Learn More", href: "/services/plumbing" }}
            />
            <ServiceCard
              icon={Flame}
              title="Heating Services"
              description="Furnace repair, replacement, and maintenance for residential homes and commercial properties. When your heat goes out, we diagnose accurately and provide honest guidance on repair versus replacement."
              link={{ label: "Learn More", href: "/services/hvac" }}
            />
            <ServiceCard
              icon={Snowflake}
              title="Cooling Services"
              description="Air conditioning service, repair, and installation including traditional central AC and Bryant ductless mini-split systems. From routine maintenance to complete system replacements."
              link={{ label: "Learn More", href: "/services/hvac" }}
            />
            <ServiceCard
              icon={ThermometerSun}
              title="Radiant Floor Heating"
              description="One of our specialties. We've been installing hydronic radiant heating systems since the early 2000s—the most comfortable, efficient heat available. We design and install systems built to perform for decades."
              link={{ label: "Learn More", href: "/services/radiant-heating" }}
            />
            <ServiceCard
              icon={Shield}
              title="Fire Sprinkler Systems"
              description="Code-compliant residential and commercial fire sprinkler installation, inspection, and service."
              link={{ label: "Learn More", href: "/services/plumbing/new-construction" }}
            />
            <ServiceCard
              icon={Droplets}
              title="Water Treatment"
              description="Water softeners, reverse osmosis systems, iron filtration, UV disinfection, and whole-house filtration. We test your water and install treatment systems sized correctly for your actual water chemistry."
              link={{ label: "Learn More", href: "/services/water-treatment" }}
            />
          </div>
        </div>
      </section>

      {/* ═══ FREE ESTIMATES CTA ═══ */}
      <DarkCTASection
        heading="Free Estimates on Major Plumbing, HVAC, Radiant Heating, Water Treatment Projects"
        description=""
        primaryCTA={{ label: "Call Now (209) 533-1978", href: "tel:+12095331978" }}
        logo={jhartLogo}
      />

      {/* ═══ HOW WE WORK ═══ */}
      <HowWeWork />

      {/* ═══ 40 YEARS STRONG ═══ */}
      <ExperienceSection />

      {/* ═══ WHERE WE WORK ═══ */}
      <WhereWeWork
        className="bg-background"
        primaryCities={["Sonora", "Twain Harte", "Columbia", "Jamestown", "Tuolumne", "Mi-Wuk Village", "Pinecrest", "Groveland", "Chinese Camp", "Don Pedro", "Sierra Village", "Angels Camp"]}
      />

      {/* ═══ CREDENTIALS ═══ */}
      <CredentialsSection
        className="bg-off-white"
        heading="Licensed, Insured & Professional"
        credentials={[
          { title: "Code-compliant installations", description: "Our installations meet code requirements and pass inspection the first time." },
          { title: "Ongoing training and certifications", description: "Codes change, technology evolves, and best practices improve. Our team stays current through continuing education and manufacturer training programs." },
        ]}
      />

      {/* ═══ WHO WE SERVE ═══ */}
      <ExpertiseGrid className="bg-background" />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="What Our Customers Say"
        testimonials={[
          {
            quote: "I can not say enough about this company. From initial call through repair and completion, J Hart's entire staff are prompt, caring, and professional. I have used J Hart several times now for various projects and emergency repairs. Each time, I am amazed.",
            author: "George Wright",
            initials: "GW",
            location: "Various Repairs · 2024",
          },
          {
            quote: "J Hart is always there for me. I recently acquired a new property with every plumbing frustration you can think of. Thankfully J Hart was not only familiar with the property but responsive and professional. I strongly recommend them to everyone.",
            author: "Michael Bardin",
            initials: "MB",
            location: "Property Plumbing · 2025",
          },
          {
            quote: "This company has the most fabulous customer service I have ever seen. I would highly recommend them to anyone.",
            author: "Debi Taylor",
            initials: "DT",
            location: "Plumbing Service · 2023",
          },
          {
            quote: "THEY ARE THE BEST I have ever seen. The entire TEAM and family — simply put, the best in business.",
            author: "Rick Ali",
            initials: "RA",
            location: "Plumbing Service · 2024",
          },
          {
            quote: "J Hart is the most amazing and reliable plumber I have ever used. I strongly encourage you to call them for even simple plumbing needs.",
            author: "Kris Persson",
            initials: "KP",
            location: "Plumbing Service · 2022",
          },
          {
            quote: "Is there a higher number I can post? This was the easiest, fastest, friendliest, and most professional contract job I've ever done! They helped me limp along on my old heater, then installed new one even before I knew it!",
            author: "Mona Gaskill",
            initials: "MG",
            location: "Heater Installation · 2025",
          },
        ]}
        />

      {/* ═══ OUR PROMISE ═══ */}
      <ChecklistSection
        heading="Our Commitment"
        subtitle={<>When you call <span className="whitespace-nowrap">J. Hart</span>:</>}
        description="We're not the biggest plumbing and HVAC company in California. We're not trying to be. We're focused on being the most reliable, honest, and skilled team serving Sonora and Tuolumne County."
        variant="off-white"
        items={[
          "You talk to real people who know what they're doing",
          "You get honest assessments and fair pricing",
          "You work with experienced technicians who take pride in their work",
          "You get quality installations and repairs that last",
          "You're treated with respect and your property is cared for",
          "You can count on us to show up and follow through",
        ]}
        footnote="That's been our approach for 40 years, and it's not changing."
      />

      {/* ═══ FINAL CTA ═══ */}
      <FinalCTASection
        heading="Ready to Work Together?"
        description="Whether you need emergency repairs, routine maintenance, or are planning a major project, we're here to help."
        logo={jhartLogo}
        footerLines={[
          "Monday–Friday, 7:30 AM – 4:00 PM",
        ]}
        footerLinks={[
          { label: "View Our Services", href: "/services/plumbing" },
          { label: "Service Areas", href: "/about#service-area" },
          { label: "Read Reviews", href: "/reviews" },
          { label: "Contact Us", href: "/contact#cta-form" },
        ]}
      />

      <Footer />
    </div>
  );
};
