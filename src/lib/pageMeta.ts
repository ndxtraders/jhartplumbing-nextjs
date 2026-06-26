interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "J. Hart Plumbing, Heating, Cooling & Water Treatment | Sonora, CA",
    description: "Sonora's trusted plumbing, HVAC, radiant heating & water treatment experts since 1984. Call (209) 533-1978.",
  },
  "/services": {
    title: "Plumbing, HVAC, Radiant & Water Treatment | J. Hart | Sonora, CA",
    description: "Sonora's family-owned source for plumbing, heating, cooling, radiant, and water treatment since 1984. Serving Tuolumne & Calaveras County. (209) 533-1978.",
  },
  "/services/plumbing": {
    title: "Plumbing Services | J. Hart | Sonora, CA",
    description: "Residential and commercial plumbing service, repair, and installation in Tuolumne County.",
  },
  "/services/plumbing/residential": {
    title: "Residential Plumbing | J. Hart | Sonora, CA",
    description: "Home plumbing repairs, water heaters, repiping, and fixture installation in Sonora.",
  },
  "/services/plumbing/commercial": {
    title: "Commercial Plumbing | J. Hart | Sonora, CA",
    description: "Commercial plumbing for businesses, schools, and facilities across Tuolumne County.",
  },
  "/services/plumbing/new-construction": {
    title: "New Construction Plumbing | J. Hart | Sonora, CA",
    description: "Plumbing design and installation for new construction in Tuolumne County.",
  },
  "/services/radiant-heating": {
    title: "Radiant Heating | J. Hart | Sonora, CA",
    description: "Radiant floor heating design, installation, and repair in the Motherlode region.",
  },
  "/services/water-treatment": {
    title: "Water Filtration & Treatment Services in Sonora, CA",
    description: "Water testing, filtration, softeners, reverse osmosis, and treatment systems for homes in Sonora, CA. Get cleaner, better water with local service from J. Hart.",
  },
  "/services/hvac": {
    title: "HVAC Services | J. Hart | Sonora, CA",
    description: "Heating and cooling installation, repair, and maintenance. Bryant Factory Authorized Dealer.",
  },
  "/services/hvac/bryant-heating-cooling": {
    title: "Bryant Heating & Cooling Dealer | J. Hart | Sonora, CA",
    description: "Sonora's Bryant Factory Authorized Dealer. AC, ductless mini-splits, heat pumps, and furnaces installed and serviced across Tuolumne and Calaveras County.",
  },
  "/services/hvac/bryant-ductless-mini-split": {
    title: "Bryant Ductless Mini-Split Installation | Sonora, CA",
    description: "Bryant Certified Ductless Pros in Sonora. Single-zone and multi-zone mini-split installation and service across Tuolumne and Calaveras County.",
  },
  "/services/hvac/bryant-air-conditioners": {
    title: "Bryant Evolution AC Installation & Service | Sonora, CA",
    description: "Bryant Evolution variable-speed AC plus Preferred and Legacy tiers. Manual J sized installs by Factory Authorized Dealer J. Hart, Sonora CA.",
  },
  "/services/hvac/bryant-heat-pumps": {
    title: "Bryant Heat Pump Installation & Service | Sonora, CA",
    description: "Whole-home Bryant central heat pumps with cold-climate and dual-fuel options. Sonora's Factory Authorized Dealer for energy-efficient upgrades.",
  },
  "/reviews": {
    title: "Customer Reviews | J. Hart | Sonora, CA",
    description: "Read reviews from J. Hart customers across Tuolumne County. 4.6-star Google rating.",
  },
  "/contact": {
    title: "Contact Us | J. Hart | Sonora, CA",
    description: "Contact J. Hart for service requests, estimates, or emergency plumbing and HVAC.",
  },
  "/about": {
    title: "About Us | J. Hart | Sonora, CA",
    description: "Family-owned since 1984. Four generations of plumbing, HVAC, and radiant heating expertise.",
  },
};

const FALLBACK = PAGE_META["/"];

export function getPageMeta(pathname: string): PageMeta {
  return PAGE_META[pathname] ?? FALLBACK;
}
