"use client";

import { Navbar } from "@/components/jhart/Navbar";
import { Hero } from "@/components/jhart/Hero";
import { TrustBar } from "@/components/jhart/TrustBar";
import { GoogleBadge } from "@/components/jhart/Badges";
import { ChecklistSection } from "@/components/jhart/ChecklistSection";
import { ReviewGrid } from "@/components/jhart/ReviewGrid";
import { LeaveReviewCard } from "@/components/jhart/LeaveReviewCard";
import { FinalCTASection } from "@/components/jhart/FinalCTASection";
import { ServiceAreaBar } from "@/components/jhart/ServiceAreaBar";
import { Footer } from "@/components/jhart/Footer";
import { Phone } from "lucide-react";


/* ════════════════════════════════════════════════════
   REVIEW DATA
   ════════════════════════════════════════════════════ */

interface Review {
  quote: string;
  author: string;
  initials: string;
  service: string;
  year: string;
  category: string[];
}

const reviews: Review[] = [
  { quote: "Is there a higher number I can post? This was the easiest, fastest, friendliest, and most professional contract job I've ever done! They helped me limp along on my old heater, then installed new one even before I knew it! They sealed the area around it, took care of details, and made the necessary changes immediately. I wish they did other things, I'd hire them for everything! Thank you, Hart Plumbing!", author: "Mona Gaskill", initials: "MG", service: "Heater Installation", year: "2025", category: ["heating"] },
  { quote: "New to Sonora and so thankful for the referral. J Hart is the best in town, not only for plumbing but also HVAC. Lisa and Kathleen in the office were wonderful. Brian and JD were thorough, explained everything about both my furnace and water heater; they were professional and showed excellence in customer care. I appreciate J Hart and will refer to any and all!", author: "Wendy Crowley", initials: "WC", service: "HVAC & Water Heater", year: "2025", category: ["heating", "plumbing"] },
  { quote: "J Hart Plumbing was a pleasure doing business with from start to finish. Lisa got back to me right away and had JT and Ruben out within a couple hours to give an estimate. They had an online customer portal with the estimate, photos and information. Cody and Ruben showed up on time and were very professional. The finished product surpassed all my expectations! I would highly recommend J Hart Plumbing!", author: "Joshua Campbell", initials: "JC", service: "Plumbing Installation", year: "2025", category: ["plumbing"] },
  { quote: "We had the best experience with J Hart Plumbing. Brad and Adam were so conscientious and so knowledgeable. They took the time to explain how best to deal with our softener system. They were very patient and kind. I really appreciated them and their expertise. Thank you J Hart Plumbing!", author: "Jody Kellerman", initials: "JK", service: "Water Softener", year: "2025", category: ["water-treatment"] },
  { quote: "We LOVE J Hart Plumbing! I'm the owner of Hotel Charlotte, a 103-year-old historic landmark hotel. They are our go-to plumber. They do extraordinary work! They are professional, punctual, fast and courteous. J Hart does it the way it's supposed to be done. They exceed expectations! You're in good hands with this plumbing company.", author: "Finn Horsley", initials: "FH", service: "Commercial Plumbing", year: "2025", category: ["commercial"] },
  { quote: "Great guys J.T and Bryan were here on time, even called earlier to let us know they would be here at the ETA. Very professional. The job seemed easy yet something came up that made it more complicated, but the guys were on top of it and handled it perfectly. I would recommend them to anyone I care about, that's how well everything went.", author: "Jeremy Latina", initials: "JL", service: "Plumbing Repair", year: "2025", category: ["plumbing"] },
  { quote: "I called J Hart yesterday morning and got an appointment for the afternoon. What a wonderful surprise to have Sal & JT come about 10am to snake my sewer line. I have had J Hart out about 3 times in the last couple years. They are always professional & friendly, make me confident in their ability. I recommend this company to anyone I meet who needs a plumber.", author: "Tina Wildmon", initials: "TW", service: "Sewer Line Service", year: "2024", category: ["plumbing"] },
  { quote: "My hot water heater was leaking. Kathleen was very courteous and helpful. I sent some pictures and within an hour I received an estimate and then a follow-up call. Jason and Ted showed up on time and said they could install the new water heater now. They installed it in record time and cleaned up everything. I am very happy with their professionalism.", author: "John Young", initials: "JY", service: "Water Heater Replacement", year: "2025", category: ["plumbing"] },
  { quote: "We had J Hart come out to assess a leak within one of our walls. It was determined that we had a slab leak under our foundation. Johnny and crew tried every option to reduce our cost to repair. They also took on several other small repairs efficiently at the same time. I appreciate all their hard work and fair pricing! Will be using them again.", author: "Brandon Vachter", initials: "BV", service: "Slab Leak Repair", year: "2025", category: ["plumbing"] },
  { quote: "Brian and Carlos removed the old water heater and installed a Navien tankless efficiently. Their attention to detail makes the appearance look great. They are respectful, polite, willing to answer questions with patience, and hardworking. Last year they also replaced our radiant floor boiler with a Navien boiler—it has worked flawlessly. We wholeheartedly recommend J Hart Plumbing.", author: "Jeff Kemper", initials: "JK", service: "Tankless Water Heater & Boiler", year: "2025", category: ["plumbing", "radiant"] },
  { quote: "I'm updating this review. From Lisa, down to JT, and ALL the people at this company are an exemplary example of how companies should be run! Needed them back this year, and it was not an easy job! They were wonderful and understanding. What an awesome team! Very friendly, on time, knowledgeable professionals. Got the job done fast. Highly recommend.", author: "Jessica G", initials: "JG", service: "Plumbing Service", year: "2025", category: ["plumbing"] },
  { quote: "I can not say enough about this company. From initial call through repair and completion, J Hart's entire staff are prompt, caring, and professional. I have used J Hart several times now for various projects and emergency repairs. Each time, I am amazed. I wish ALL companies could be this responsive and good. Thank you, J Hart Plumbing!", author: "George Wright", initials: "GW", service: "Various Repairs", year: "2024", category: ["plumbing"] },
  { quote: "Brian with J Hart Plumbing installed and has been servicing my water heater for almost 20 years! Brian is always prompt and puts his best effort to address and fix any issues. Thank you for your trusted service Brian!", author: "Boclaire Vaughn", initials: "BV", service: "Water Heater Maintenance", year: "2025", category: ["plumbing"] },
  { quote: "These guys are great! They do everything from new construction plumbing to all sorts of repairs on existing. They've repaired our old house plumbing and did the plumbing on a new building for us. They are honest and always do a great job plus they are on time!", author: "Trevor Thorn", initials: "TT", service: "New Construction & Repairs", year: "2025", category: ["plumbing"] },
  { quote: "We own a local business with two locations and the team at J. Hart has consistently exceeded expectations, whether it's a new install or urgent repair. Fair pricing, prompt communication, and excellent service!", author: "Daniel Rowe", initials: "DR", service: "Commercial Plumbing", year: "2024", category: ["commercial"] },
  { quote: "We called J. Hart and spoke with Robert, who was professional, kind, and sympathetic to my 89 year old Mother. Instead of trying to sell us a new water heater, they tried to repair it first. Johnny Hart and Dad came out and replaced it for us. So efficient, so timely, so nice! If I could give them more than five stars, I would!", author: "Stacey Ruiz", initials: "SR", service: "Water Heater Replacement", year: "2022", category: ["plumbing"] },
  { quote: "Showed up earlier than expected, courteous, knowledgeable, explained tankless water heater flushing process, completed flushing quickly. Took a look at my iron filter while water heater was flushing and spotted a problem with the backflush timer setting, which he adjusted, no charge!", author: "David Jigour", initials: "DJ", service: "Tankless Water Heater Flush", year: "2025", category: ["plumbing", "water-treatment"] },
  { quote: "Knowledgeable, efficient, polite, professional, and fixed the problem with a complex solar water heating system.", author: "Gail Johnson", initials: "GJ", service: "Solar Water Heating", year: "2025", category: ["plumbing"] },
  { quote: "Very efficient and professional plumbing services. They went out of their way to help.", author: "Kerri Quaglino", initials: "KQ", service: "Drain & Leak Repair", year: "2025", category: ["plumbing"] },
  { quote: "J Hart is always there for me. I recently acquired a new property with every plumbing frustration you can think of. Thankfully J Hart was not only familiar with the property but responsive and professional. I strongly recommend them to everyone. They show up quickly and get the job done.", author: "Michael Bardin", initials: "MB", service: "Property Plumbing", year: "2025", category: ["plumbing"] },
  { quote: "I had my water heater replaced and I'm so happy with their service! They were quick and very efficient. The guys were so polite and very professional, I will use them in the future for sure.", author: "Pam Jimenez", initials: "PJ", service: "Water Heater Replacement", year: "2025", category: ["plumbing"] },
  { quote: "I work out of state most of the time and have tenants in my home in California. The water heater went out and the weather's been bad. J Hart was really quick and professional. Got the job done even in the snow.", author: "LaFonda Quiggins", initials: "LQ", service: "Water Heater Replacement", year: "2025", category: ["plumbing"] },
  { quote: "I called J Hart Plumbing because I had an unknown leak in my house. They had someone come out the next morning. Sal and Blaine showed up on time and were very professional. They diagnosed the issue in less than 20 minutes and were finished in about an hour. They explained the issue in layman's terms and even cleaned up their mess. I was very impressed.", author: "Kandi Angermiller", initials: "KA", service: "Leak Detection & Repair", year: "2021", category: ["plumbing"] },
  { quote: "J Hart Plumbing did a great job fixing a leak under my sink and also fixed my new faucet in my bathroom. They were here on time, they were very friendly and I couldn't be happier with the job they did. Thank you J Hart!", author: "Michelle Battaglia", initials: "MB", service: "Sink & Faucet Repair", year: "2025", category: ["plumbing"] },
  { quote: "J Hart Plumbing has always been my go to with my plumbing issues. They are prompt and know what they are doing. Their communication is awesome. Thanks J Hart for always doing a great job!", author: "Tammy Hammond", initials: "TH", service: "Plumbing Service", year: "2024", category: ["plumbing"] },
  { quote: "Our underground propane line was leaking. We called J Hart for their help, and they arrived the next day. The crew was prompt, courteous and knowledgeable. We will definitely contact them again for any plumbing work.", author: "Marilyn Fitzsimmons", initials: "MF", service: "Gas Line Repair", year: "2026", category: ["plumbing"] },
  { quote: "On time to work and got our water heater problem solved quickly! Much appreciated and I highly recommend!", author: "Scott Wheadon", initials: "SW", service: "Water Heater Repair", year: "2026", category: ["plumbing"] },
  { quote: "Such great service! I was recommended by a friend to call them first, and I am glad I did.", author: "Bonny Collins", initials: "BC", service: "Plumbing Service", year: "2026", category: ["plumbing"] },
  { quote: "Our water heater was installed incorrectly so for 8 years we barely had enough hot water to shower properly. Now with sincere thanks to J Hart our water heater is working excellent! Long hot showers are the best! Thank you J Hart, you are the best!", author: "Susan Tucker", initials: "ST", service: "Water Heater Repair", year: "2025", category: ["plumbing"] },
  { quote: "J Hart Plumbing is Great! I bought and moved into a house that had no access to hot water. J Hart and Chris and the crew have gone beyond, getting me hot water and resolving the issues. I highly recommend them!", author: "Clarice Myers", initials: "CM", service: "Hot Water & Shower Repair", year: "2024", category: ["plumbing"] },
  { quote: "Thank you so much J.T. and Reuben for an awesome job installing our new hot water heater. We were scheduled quickly. They were on time, efficient and informative. We highly recommend J Hart Plumbing.", author: "Janine Costilla", initials: "JC", service: "Water Heater Installation", year: "2024", category: ["plumbing"] },
  { quote: "The J Hart team is always so helpful and friendly. They got the problem fixed in a timely manner and even stayed later than typical work hours to complete the job! I appreciate J Hart employees and their customer service!", author: "Alexis Simonson", initials: "AS", service: "Plumbing Repair", year: "2025", category: ["plumbing"] },
  { quote: "Guys were on time, friendly, and professional. Tenant says one of the men even had a calming effect on her dogs. Still willing to pay for a well done job.", author: "Adrian Wise", initials: "AW", service: "Rental Property Plumbing", year: "2025", category: ["plumbing"] },
];

const tabs = [
  { key: "all", label: "All Reviews" },
  { key: "plumbing", label: "Plumbing" },
  { key: "heating", label: "Heating & Cooling" },
  { key: "radiant", label: "Radiant Heating" },
  { key: "water-treatment", label: "Water Treatment" },
  { key: "commercial", label: "Commercial" },
];

const feedbackItems = [
  "Shows up on time and communicates clearly",
  "Explains options honestly without upselling",
  "Quality work that lasts",
  "Fair pricing with no surprises",
  "Professional, respectful service",
];

/* ════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════ */

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Hero
        heading={<>What Our Customers Say<br />About <span className="whitespace-nowrap">J. Hart</span> Plumbing</>}
        subtitle="Four generations serving Sonora and Tuolumne County. Here's what your neighbors have to say about working with us."
        primaryCTA={{ label: "Call Now: (209) 533-1978", href: "tel:+12095331978", icon: Phone }}
        secondaryCTA={{ label: "Request Service", href: "/contact#cta-form" }}
      >
        <GoogleBadge />
      </Hero>
      <TrustBar />

      <ChecklistSection
        heading={<>Why Our Customers Choose <span className="whitespace-nowrap">J. Hart</span></>}
        subtitle="Most Common Feedback"
        description="Over 100 five-star reviews from homeowners, property managers, and business owners throughout Tuolumne County. Real projects, real results, real feedback."
        items={feedbackItems}
      />

      <ReviewGrid reviews={reviews} tabs={tabs} />

      <LeaveReviewCard />

      <FinalCTASection
        heading={<>Ready to Experience <span className="whitespace-nowrap">J. Hart</span> Service?</>}
        description="Join 100+ satisfied customers throughout Tuolumne County. From emergency repairs to complete system installations, we deliver the quality work and straightforward service our customers appreciate."
        footerLines={["Monday–Friday, 7:30 AM – 4:00 PM", "CA Lic #459194 · NV Lic #77957"]}
      />

      <ServiceAreaBar />

      <Footer />
    </div>
  );
}
