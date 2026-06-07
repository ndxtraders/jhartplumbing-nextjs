"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView, trackCall } from "@/lib/analytics";

function AnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    trackPageView(pathname, searchParams.toString() ? "?" + searchParams.toString() : "");
  }, [pathname, searchParams]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement).closest('a[href^="tel:"]');
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const phone_number = href.replace(/^tel:/i, "").trim();
      const link_text =
        anchor.textContent?.trim() ||
        anchor.getAttribute("aria-label")?.trim() ||
        "";

      trackCall({ phone_number, link_text, page_path: pathname });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [pathname]);

  return null;
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsInner />
    </Suspense>
  );
}
