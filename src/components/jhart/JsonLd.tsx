"use client";

import React from "react";

type Schema = Record<string, unknown>;

interface JsonLdProps {
  /** A single Schema.org object or an array of them. */
  data: Schema | Schema[];
}

/**
 * Renders one or more <script type="application/ld+json"> tags inline.
 *
 * Marked "use client" for co-location with content components, but Next.js
 * App Router SSRs "use client" components — these tags appear in the initial
 * HTML response. A future refactor could move this to a Server Component.
 *
 * Usage:
 *   <JsonLd data={localBusiness} />
 *   <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
 *
 * Source data is built by `src/lib/structuredData.ts` (no untrusted input
 * reaches dangerouslySetInnerHTML — all values are author-controlled).
 */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
