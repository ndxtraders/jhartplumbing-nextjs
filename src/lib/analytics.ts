"use client";

const GA_ID = "G-QLTWK3VE84";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackPageView(pathname: string, search: string) {
  if (!window.gtag) return;
  window.gtag("config", GA_ID, {
    page_path: pathname + search,
    page_location: window.location.href,
    page_title: document.title,
  });
}

let lastCallHref = "";
let lastCallTime = 0;

export function trackCall({
  phone_number,
  link_text,
  page_path,
}: {
  phone_number: string;
  link_text: string;
  page_path: string;
}) {
  if (!window.gtag) return;
  const now = Date.now();
  if (phone_number === lastCallHref && now - lastCallTime < 500) return;
  lastCallHref = phone_number;
  lastCallTime = now;

  window.gtag("event", "click_to_call", {
    phone_number,
    link_text,
    page_path,
    outbound: true,
  });
}

export function trackLead(service: string, formName: string, pagePath: string) {
  if (!window.gtag) return;
  window.gtag("event", "generate_lead", {
    service,
    form_name: formName,
    page_path: pagePath,
    method: "form",
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!window.gtag) return;
  window.gtag("event", name, params);
}
