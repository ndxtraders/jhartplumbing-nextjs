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
 * The site has no other JSON-LD today — this is the project's introduction
 * of structured data. SPA-rendered (Google handles JS-injected JSON-LD,
 * but accept the tradeoff per the strategy docs; revisit if SSR is added).
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
