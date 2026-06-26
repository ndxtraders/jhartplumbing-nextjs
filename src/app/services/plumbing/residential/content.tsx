"use client";

import {
  Phone, Users, Shield, Clock, DollarSign,
  Flame, Droplets, Wrench, ShowerHead, Home, PenTool,
  AlertTriangle, Award, CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { Breadcrumb } from "@/components/jhart/Breadcrumb";
import { IntroSection } from "@/components/jhart/IntroSection";
import { ProcessSteps } from "@/components/jhart/ProcessSteps";
import { CTABanner } from "@/components/jhart/CTABanner";
import { HomeownerGuide } from "@/components/jhart/HomeownerGuide";
import { EmergencyBanner } from "@/components/jhart/EmergencyBanner";
import { RecentWork } from "@/components/jhart/RecentWork";
import { FeatureGrid } from "@/components/jhart/FeatureGrid";
import { TestimonialsSection } from "@/components/jhart/TestimonialsSection";
import { FAQSection } from "@/components/jhart/FAQSection";
import { CTAFormSection } from "@/components/jhart/CTAFormSection";
import { Footer } from "@/components/jhart/Footer";
import { GoogleBadge } from "@/components/jhart/Badges";
import { ServiceCardGrid } from "@/components/jhart/ServiceCardGrid";
import { GuideH4, GuideBullets, GuideCard } from "@/components/jhart/GuideHelpers";

const plumbingHeroBg = "/images/residential-hero-bg.webp";
const copperTubImg = "/images/copper-tub.webp";
const tanklessInstallImg = "/images/tankless-install.webp";
const bathroomVanityImg = "/images/bathroom-vanity.webp";
const slabWorkImg = "/images/slab-work.webp";
const tanklessInstall2Img = "/images/tankless-install-2.webp";
const tankWaterHeaterImg = "/images/tank-water-heater.webp";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ HERO ═══ */}
      <Hero
        backgroundImage={plumbingHeroBg}
        heading={<>Residential Plumbing Services<br />For Homes in Sonora &amp; Tuolumne County</>}
        tagline="If it leaks, clogs, won't heat, or won't drain — we can fix it."
        subtitle="Honest plumbing service for your home, without the runaround. Serving Sonora, Twain Harte, Columbia, Jamestown, Tuolumne, Mi-Wuk Village, Groveland, Angels Camp, and surrounding areas."
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
          { label: "Residential" },
        ]}
      />

      {/* ═══ INTRO ═══ */}
      <IntroSection
        heading="Residential Plumbing—Done Right, With No Surprises"
        image={{ src: tanklessInstallImg, alt: "Tankless water heater and water softener installation by J. Hart Plumbing" }}
        paragraphs={[
          <><span className="whitespace-nowrap">J. Hart</span> Plumbing provides complete residential plumbing services throughout Sonora and surrounding areas. From leaks and clogs to full remodels — we do it right, and we clean up after ourselves.</>,
          <p key="approve" className="font-semibold text-navy">
            Before we start any work, you'll get a clear explanation of what's going on and a written estimate. You approve the work first — no surprises.
          </p>,
        ]}
      />

      {/* ═══ HOW IT WORKS ═══ */}
      <ProcessSteps
        heading={<>What to Expect When You Call <span className="whitespace-nowrap">J. Hart</span></>}
        steps={[
          { title: "Tell us what's going on", description: "Call or request service. We'll ask a few quick questions and schedule the soonest available time." },
          { title: "We diagnose the issue", description: "We find the cause, explain it in plain language, and walk you through your options." },
          { title: "You approve the work", description: "You'll know what it costs and what's included before we begin." },
          { title: "We fix it right, test, and clean up", description: "We check for leaks, verify performance, clean up the area, and walk you through what we did." },
        ]}
      />

      {/* ═══ COMMON RESIDENTIAL SERVICES ═══ */}
      <ServiceCardGrid
        className="bg-off-white"
        heading="Common Residential Services"
        cards={[
          {
            icon: Flame,
            title: "Water Heaters",
            services: [
              "Water heater repair and troubleshooting",
              "Tank water heater replacement",
              "Tankless water heater installation",
              "Emergency no-hot-water service",
            ],
            description: "No hot water? We'll diagnose the problem and give you clear options to fix it or replace it.",
          },
          {
            icon: Droplets,
            title: "Leaks & Pipe Repairs",
            services: [
              "Leaking faucets, toilets, and fixtures",
              "Under-sink leaks",
              "Pipe repairs and repiping",
              "Slab leak detection and repair",
              "Water line repairs",
            ],
            description: "Small leaks turn into big problems. We find the source and fix it right.",
          },
          {
            icon: AlertTriangle,
            title: "Drains & Clogs",
            services: [
              "Slow drains and complete clogs",
              "Kitchen and bathroom drain cleaning",
              "Main sewer line cleaning",
              "Camera inspection for stubborn issues",
              "Preventive drain maintenance",
            ],
            description: "We clear the clog and, if needed, show you exactly what's causing it.",
          },
          {
            icon: Wrench,
            title: "Fixtures & Installations",
            services: [
              "Faucet and sink installation",
              "Toilet replacement and repair",
              "Garbage disposal service",
              "Shower and tub fixtures",
              "Dishwasher and appliance hookups",
            ],
            description: "Upgrading your bathroom or kitchen? We handle the plumbing side professionally.",
          },
          {
            icon: Home,
            title: "Remodels & Upgrades",
            services: [
              "Bathroom and kitchen plumbing",
              "Fixture relocations",
              "Adding new bathrooms",
              "Whole-house repiping",
              "Water line upgrades",
            ],
            description: "We work with your contractor or handle the full plumbing scope ourselves.",
          },
          {
            icon: PenTool,
            title: "Sewer Lines",
            services: [
              "Root intrusion and broken line repairs",
              "Cleanout installation and upgrades",
              "Camera inspection to locate the issue",
              "Spot repairs or full line replacement",
            ],
            description: "If a clog keeps coming back, the problem may be the line. We'll find the failure and fix it right.",
          },
        ]}
      />

      {/* ═══ SAME-DAY CTA ═══ */}
      <CTABanner heading="Same-Day Service Available for Urgent Issues" />

      {/* ═══ HOMEOWNER GUIDE ═══ */}
      <HomeownerGuide
        className="bg-background"
        heading="Common Residential Plumbing Issues — And What to Do About Them"
        description="If you own a home long enough, you'll deal with plumbing problems. Here's what you need to know about the most common issues we see in Sonora-area homes."
        tabs={[
          {
            id: "water-heaters",
            label: "Water Heaters",
            subtitle: "Water Heater Problems: Repair or Replace?",
            content: (
              <>
                <div>
                  <GuideH4>How long do water heaters last?</GuideH4>
                  <p>Tank water heaters typically last 8–12 years. Tankless units can last 15–20 years with proper maintenance. If your water heater is approaching or past its expected lifespan and having problems, replacement often makes more sense than repeated repairs.</p>
                </div>
                <div>
                  <GuideH4>Signs your water heater is failing</GuideH4>
                  <GuideBullets icon={AlertTriangle} variant="warning" items={[
                    "Water isn't getting hot enough (or at all)",
                    "Rusty or discolored hot water",
                    "Strange noises (popping, rumbling, banging)",
                    "Leaking around the base of the tank",
                    "Inconsistent water temperature",
                    "Age: 10+ years for tank units",
                  ]} />
                </div>
                <div>
                  <GuideH4>Tank vs. tankless: which is better?</GuideH4>
                  <p>It depends on your home and how you use hot water.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <GuideCard title="Tank water heaters">
                      <p>Lower upfront cost and a reliable fit for most homes. Easy to service and predictable performance.</p>
                    </GuideCard>
                    <GuideCard title="Tankless water heaters">
                      <p>Higher upfront cost, but you won't run out of hot water and they're more efficient over time. Great for larger families or higher demand.</p>
                    </GuideCard>
                  </div>
                  <p className="mt-3">We'll assess your needs, explain the trade-offs, and give you honest pricing for both options. No pressure — just clear information so you can decide what makes sense.</p>
                </div>
                <div>
                  <GuideH4>How much does water heater replacement cost?</GuideH4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <GuideCard title="Tank Water Heater">
                      <p>A standard 40–50 gallon unit installed in a straightforward location is often <span className="font-semibold text-navy">$2,000–$3,000</span>.</p>
                    </GuideCard>
                    <GuideCard title="Tankless Water Heater">
                      <p>Commonly <span className="font-semibold text-navy">$4,500–$5,500</span> depending on size and installation complexity.</p>
                    </GuideCard>
                  </div>
                  <p className="mt-3">Pricing depends on access, parts, and code requirements — we provide a written estimate before work begins.</p>
                </div>
              </>
            ),
          },
          {
            id: "leaks",
            label: "Leaks & Pipes",
            subtitle: "Dealing With Leaks: Why Acting Fast Matters",
            content: (
              <>
                <p>Even small leaks waste water, cause damage, and get worse over time. Here are the most common ones we see:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <GuideCard title="Faucet leaks">
                    <p>Often worn washers, O-rings, or cartridges. Usually an easy fix — but constant dripping wastes water and can damage fixtures.</p>
                  </GuideCard>
                  <GuideCard title="Toilet leaks">
                    <p>Commonly a bad flapper or fill valve. A running toilet can waste hundreds of gallons per day. Listen for hissing or check if the tank refills randomly.</p>
                  </GuideCard>
                  <GuideCard title="Under-sink leaks">
                    <p>Typically supply lines, drain connections, or disposal seals. Catching these early prevents cabinet and flooring damage.</p>
                  </GuideCard>
                  <GuideCard title="Slab leaks">
                    <p>Serious and time-sensitive. If you have unexplained wet spots, a sudden higher water bill, or hear water running when nothing's on, you may have a leak under the foundation.</p>
                  </GuideCard>
                  <GuideCard title="Pipe leaks">
                    <p>Older galvanized pipes corrode from the inside out. If you're getting frequent leaks or rusty water, it may be time to discuss repiping.</p>
                  </GuideCard>
                </div>
                <div>
                  <GuideH4>When to call immediately</GuideH4>
                  <GuideBullets icon={Phone} variant="warning" items={[
                    "Any active spraying or flooding",
                    "Water near electrical outlets or panels",
                    "Suspected slab leak",
                    "No water pressure throughout the house",
                    "Visible water damage spreading",
                  ]} />
                </div>
              </>
            ),
          },
          {
            id: "drains",
            label: "Drains & Clogs",
            subtitle: "Slow Drains and Clogs: What's Actually Happening",
            content: (
              <>
                <div>
                  <GuideH4>Why do drains get slow?</GuideH4>
                  <p>Build-up. Over time, soap scum, hair, grease, food particles, and mineral deposits restrict flow. "A little slow" becomes "completely clogged" if ignored.</p>
                </div>
                <div>
                  <GuideH4>Can I just use drain cleaner?</GuideH4>
                  <p>We don't recommend it. Chemical drain cleaners can be harsh on pipes (especially older ones) and often create a temporary hole without actually clearing the blockage. They can also create safety hazards if misused.</p>
                </div>
                <div>
                  <GuideH4>What actually works</GuideH4>
                  <GuideBullets icon={Wrench} variant="action" items={[
                    "Snaking/augering — Mechanical removal using specialized tools",
                    "Hydro-jetting — High-pressure cleaning for stubborn build-up or main line clogs",
                    "Camera inspection — For recurring clogs, we can see what's causing it (tree roots, collapsed pipe, heavy buildup)",
                  ]} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <GuideCard title="Kitchen drains">
                    <p>Usually grease and food debris. Even with a disposal, grease solidifies in pipes and traps other material.</p>
                  </GuideCard>
                  <GuideCard title="Bathroom drains">
                    <p>Hair, soap, and residue. Shower drains are the worst offenders.</p>
                  </GuideCard>
                  <GuideCard title="Main sewer lines">
                    <p>Roots, shifting soil, or decades of build-up. If multiple drains are slow or backing up at once, it's often a main line issue.</p>
                  </GuideCard>
                </div>
                <div>
                  <GuideH4>How much does drain cleaning cost?</GuideH4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <GuideCard title="Basic drain cleaning">
                      <p><span className="font-semibold text-navy">$200–$300</span> depending on severity and location.</p>
                    </GuideCard>
                    <GuideCard title="Main sewer line">
                      <p><span className="font-semibold text-navy">$300–$600</span> for main line cleaning.</p>
                    </GuideCard>
                    <GuideCard title="Camera inspection">
                      <p><span className="font-semibold text-navy">$200–$400</span> if needed for diagnosis.</p>
                    </GuideCard>
                  </div>
                  <p className="mt-3">We'll quote the work before starting.</p>
                </div>
              </>
            ),
          },
          {
            id: "repiping",
            label: "Repiping",
            subtitle: "Repiping: When It's Time to Replace Your Plumbing",
            content: (
              <>
                <div>
                  <GuideH4>Signs you might need repiping</GuideH4>
                  <GuideBullets icon={AlertTriangle} variant="warning" items={[
                    "Frequent leaks in multiple locations",
                    "Discolored water (rusty, brown, or yellow)",
                    "Low water pressure throughout the house",
                    "Visible corrosion on exposed pipes",
                    "Home built before 1970 with original galvanized pipes",
                  ]} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GuideCard title="How does repiping work?">
                    <p>We replace old pipes with modern materials (typically PEX or copper). Most homes take 2–5 days depending on size and access. We work cleanly, patch access points, and test thoroughly before finishing.</p>
                  </GuideCard>
                  <GuideCard title="Whole-house repiping cost">
                    <p>Often <span className="font-semibold text-navy">$5,000–$10,000</span> for an average home, depending on size, access, and materials chosen. More cost-effective than constant repairs — and it restores pressure and reliability.</p>
                  </GuideCard>
                </div>
              </>
            ),
          },
          {
            id: "remodels",
            label: "Remodels",
            subtitle: "Bathroom and Kitchen Plumbing for Remodels",
            content: (
              <>
                <p>Planning a remodel? The plumbing needs to be done right or problems show up later.</p>
                <div>
                  <GuideH4>What we handle</GuideH4>
                  <GuideBullets icon={CheckCircle2} variant="action" items={[
                    "Moving fixtures to new locations",
                    "Installing new sinks, faucets, and toilets",
                    "Shower and tub plumbing and drains",
                    "Dishwasher and refrigerator water lines",
                    "Disposal and appliance hookups",
                    "Vent pipe modifications",
                    "Code compliance for new work",
                  ]} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-card aspect-[4/3]">
                    <img src={copperTubImg} alt="Custom copper bathtub installation by J. Hart Plumbing" className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-card aspect-[4/3]">
                    <img src={bathroomVanityImg} alt="Modern bathroom vanity and wall-mount toilet installation" className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
                  </div>
                </div>
                <p>We can work within your contractor's timeline or handle the full plumbing scope if you're managing the project yourself.</p>
              </>
            ),
          },
        ]}
      />

      {/* ═══ EMERGENCY ═══ */}
      <EmergencyBanner
        heading="Emergency Plumbing: When to Call Right Away"
        description="Some plumbing problems can wait. Others can't. Call immediately if you're dealing with:"
        items={[
          "Burst pipes or active flooding — Shut off your main water valve and call us",
          "No water at all — Could be a main line break or serious leak",
          "Sewage backup — Health hazard that needs immediate attention",
          "Gas smell near water heater — Shut off gas, leave the house, call us and the gas company",
          "Major leak you can't stop — Every minute counts with water damage",
        ]}
        footnote="We offer same-day service for urgent issues and will walk you through emergency shut-off procedures over the phone if needed."
      />

      {/* ═══ RECENT WORK ═══ */}
      <RecentWork
        heading="Recent Residential Work"
        description="A few examples of common jobs we handle for Sonora-area homeowners:"
        images={[
          { src: slabWorkImg, alt: "J. Hart plumber working on slab pipe installation" },
          { src: tanklessInstall2Img, alt: "Tankless water heater system installation with recirculation" },
          { src: tankWaterHeaterImg, alt: "Lochinvar tank water heater installation" },
        ]}
        items={[
          "Water heater replacements with clean, code-compliant installs",
          "Fast leak detection and targeted repairs (no guessing)",
          "Main line snaking plus camera inspection when clogs return",
          "Toilet, faucet, and fixture swaps with proper shutoffs and cleanup",
          "Slab leak detection and repair planning that minimizes disruption",
          "Remodel rough-in and trim-out aligned to your project timeline",
        ]}
      />

      {/* ═══ WHY J. HART ═══ */}
      <FeatureGrid
        heading={<>Why Choose <span className="whitespace-nowrap">J. Hart</span> for Your Home's Plumbing?</>}
        subtitle="We don't overbook. We don't cut corners. We show up ready, explain the problem, and fix it right the first time."
        features={[
          { icon: Users, title: "Four generations serving Sonora-area homes", desc: "We've seen it all and fixed it all." },
          { icon: DollarSign, title: "Straightforward pricing", desc: "We explain what's wrong and what it'll cost before we start." },
          { icon: Shield, title: "No unnecessary upselling", desc: "If you need a $200 repair, we won't pitch you a $5,000 replacement." },
          { icon: Home, title: "Clean, respectful service", desc: "We treat your home like our own and clean up after ourselves." },
          { icon: Award, title: "Licensed and insured", desc: "CA Lic #459194 | NV Lic #77957" },
          { icon: Award, title: "4.9 from 100+ reviews", desc: "Trusted by Sonora homeowners." },
        ]}
      />

      {/* ═══ TESTIMONIALS ═══ */}
      <TestimonialsSection
        heading="Trusted by Sonora Homeowners"
        testimonials={[
          {
            quote: "J Hart Plumbing did a great job fixing a leak under my sink and also fixed my new faucet in my bathroom. They were here on time, they were very friendly and I couldn't be happier with the job they did.",
            author: "Michelle Battaglia",
            initials: "MB",
            location: "Sink & Faucet Repair · 2025",
          },
          {
            quote: "We had J Hart come out to assess a leak within one of our walls. It was determined that we had a slab leak under our foundation. Johnny and crew tried every option to reduce our cost to repair. I appreciate all their hard work and fair pricing!",
            author: "Brandon Vachter",
            initials: "BV",
            location: "Slab Leak Repair · 2025",
          },
          {
            quote: "I called J Hart because I had an unknown leak in my house. Sal and Blaine showed up on time and were very professional. They diagnosed the issue in less than 20 minutes and were finished in about an hour. They explained the issue in layman's terms and even cleaned up their mess.",
            author: "Kandi Angermiller",
            initials: "KA",
            location: "Leak Detection & Repair · 2021",
          },
        ]}
      />

      {/* ═══ FAQ ═══ */}
      <FAQSection
        heading="Frequently Asked Questions"
        items={[
          { question: "How much does a plumber cost in Sonora?", answer: "Service call rates typically run $185 to come out and diagnose the problem. Actual repair costs vary widely depending on the issue. Simple repairs like replacing a faucet cartridge might be $185–$300 total. Complex repairs or replacements run higher. We provide clear pricing before starting work." },
          { question: "Do you charge extra for same-day or emergency service?", answer: "We offer same-day appointments when available at our standard rates. After-hours emergency service (evenings and weekends) may have additional charges. We'll tell you the cost upfront." },
          { question: "How can I prevent plumbing problems?", answer: "Basic maintenance helps: don't pour grease down drains, use drain screens to catch hair, flush your water heater annually, know where your main shut-off valve is, and address small leaks promptly before they become big ones." },
          { question: "Should I replace everything when remodeling?", answer: "Not necessarily. If your existing plumbing is in good shape and works with your new layout, we can often reuse it. We'll assess your situation and recommend what actually needs replacing versus what can stay." },
          { question: "How do I know if I need a plumber or if it's DIY-able?", answer: "If you're handy and it's a simple fixture swap with accessible connections, you might handle it yourself. But if you're dealing with leaks, no water, suspect pipe damage, or anything involving your home's main plumbing systems, call a professional. DIY gone wrong gets expensive fast." },
          { question: "Do you work on manufactured homes?", answer: "Yes. We service manufactured homes, but the plumbing access and materials are sometimes different from site-built homes. Some repairs take longer due to access issues, but we're experienced with both." },
          { question: "What payment methods do you accept?", answer: "Cash, check, and major credit cards. Financing or payment plans may be available for larger projects—ask us what options fit your job." },
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
