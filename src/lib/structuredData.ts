/**
 * Structured data (Schema.org JSON-LD) builders.
 *
 * Net-new mechanism for this site — no other JSON-LD exists today. Centralized
 * so every page references the same LocalBusiness `@id`, ensuring search
 * engines treat the site as one entity.
 *
 * NAP sourced verbatim from src/components/jhart/Footer.tsx and
 * src/components/jhart/ContactInfoCards.tsx. Geo from src/components/jhart/MapSection.tsx.
 */

const SITE_URL = "https://jhartplumbing.com";
const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Shared LocalBusiness (typed as Plumber + HVACBusiness). Referenced by
 * `provider: { "@id": BUSINESS_ID }` from per-page Service blocks.
 */
export const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "HVACBusiness"],
  "@id": BUSINESS_ID,
  name: "J. Hart Plumbing & HVAC",
  url: SITE_URL,
  telephone: "+1-209-533-1978",
  email: "info@jhartplumbing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18887 Plum Industrial Ct.",
    addressLocality: "Sonora",
    addressRegion: "CA",
    postalCode: "95370",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9837,
    longitude: -120.3817,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "16:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Sonora" },
    { "@type": "AdministrativeArea", name: "Tuolumne County" },
    { "@type": "AdministrativeArea", name: "Calaveras County" },
  ],
  foundingDate: "1984",
  identifier: [
    { "@type": "PropertyValue", propertyID: "California Contractor License", value: "459194" },
    { "@type": "PropertyValue", propertyID: "Nevada Contractor License", value: "77957" },
  ],
};

const AREAS_SERVED = localBusiness.areaServed;

export interface ServiceSchemaOptions {
  /** Display name of the service (e.g. "Bryant Heat Pump Installation & Service"). */
  name: string;
  /** One-sentence description; reused by search engines. */
  description: string;
  /** Short serviceType keyword (e.g. "HVAC Installation"). */
  serviceType: string;
  /** Absolute URL of the page this Service is for. */
  url: string;
  /** Optional tier names — render as an OfferCatalog (e.g. ["Evolution Series", "Preferred Series", "Legacy Line"]). */
  offerCatalog?: string[];
}

export function buildService({
  name,
  description,
  serviceType,
  url,
  offerCatalog,
}: ServiceSchemaOptions) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED,
    brand: { "@type": "Brand", name: "Bryant" },
  };
  if (offerCatalog && offerCatalog.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name,
      itemListElement: offerCatalog.map((tier) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: tier },
      })),
    };
  }
  return schema;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Build a FAQPage schema from the same {question, answer}[] array the on-page
 * FAQSection already consumes, so UI and schema stay in sync from one source.
 */
export function buildFaqPage(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/**
 * Breadcrumb crumb. If `url` is omitted, the crumb is name-only (no `item`).
 * Used for the "Services" node, which is an intentional soft-404 nav label
 * (not a routable page) and therefore must not be a linked breadcrumb target.
 */
export interface Crumb {
  name: string;
  url?: string;
}

export function buildBreadcrumbList(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const li: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
      };
      if (c.url) li.item = c.url;
      return li;
    }),
  };
}
