"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const jhartLogo = "/images/jhart-logo.webp";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; children?: { label: string; href: string }[] }[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "All Services", href: "/services" },
      {
        label: "Plumbing",
        href: "/services/plumbing",
        children: [
          { label: "Residential", href: "/services/plumbing/residential" },
          { label: "Commercial", href: "/services/plumbing/commercial" },
          { label: "New Construction", href: "/services/plumbing/new-construction" },
        ],
      },
      {
        label: "HVAC",
        href: "/services/hvac",
        children: [
          { label: "Bryant Heating & Cooling", href: "/services/hvac/bryant-heating-cooling" },
        ],
      },
      { label: "Radiant Heating", href: "/services/radiant-heating" },
      { label: "Water Treatment", href: "/services/water-treatment" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  items?: NavItem[];
  className?: string;
}

// Pages that have an on-page #cta-form anchor
const PAGES_WITH_CTA_FORM = ["/", "/contact", "/services", "/services/plumbing", "/services/plumbing/residential", "/services/plumbing/commercial", "/services/plumbing/new-construction", "/services/hvac", "/services/hvac/bryant-heating-cooling", "/services/hvac/bryant-ductless-mini-split", "/services/hvac/bryant-air-conditioners", "/services/hvac/bryant-heat-pumps", "/services/radiant-heating", "/services/water-treatment", "/design-system"];

export function Navbar({ items = defaultNavItems, className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const [mobPlumbingOpen, setMobPlumbingOpen] = useState(false);
  const [mobHvacOpen, setMobHvacOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeFlyout, setActiveFlyout] = useState<string | null>(null);

  const pathname = usePathname();

  const isOnPageWithForm = PAGES_WITH_CTA_FORM.includes(pathname);
  const ctaHref = isOnPageWithForm ? "#cta-form" : "/contact#cta-form";

  const handleCtaClick = (e: React.MouseEvent) => {
    if (isOnPageWithForm) {
      e.preventDefault();
      const el = document.getElementById("cta-form");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMobile();
  };

  const closeMobile = () => { setMobileOpen(false); setMobServicesOpen(false); setMobPlumbingOpen(false); setMobHvacOpen(false); };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top info bar — desktop only */}
      <div className="bg-white hidden md:flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Link href="/"><img src={jhartLogo} alt="J. Hart Plumbing" className="h-14 w-auto" width={84} height={56} /></Link>
        </div>
        <div className="flex items-center gap-8">
          <a href="tel:+12095331978" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground">
              <Phone className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold text-foreground">(209) 533-1978</div>
              <div className="text-xs text-muted-foreground">info@jhartplumbing.com</div>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground">
              <Clock className="h-4 w-4" />
            </span>
            <div>
              <div className="text-sm font-semibold text-foreground">Mon – Fri 7:30 AM – 4:00 PM</div>
              <div className="text-xs text-muted-foreground">Same Day Appointments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary nav bar */}
      <div className="bg-white md:bg-primary shadow-[0_2px_0_rgba(0,0,0,0.08)] sticky top-0 z-50 transition-all duration-200">
        <div className={cn("flex items-stretch justify-between px-4 transition-all duration-200", scrolled ? "h-[54px]" : "h-16")}>
          {/* Mobile logo */}
          <div className="flex items-center md:hidden gap-3">
            <Link href="/"><img src={jhartLogo} alt="J. Hart Plumbing" className="h-11 w-auto" width={66} height={44} /></Link>
            <a href="tel:+12095331978" className="text-sm font-bold text-foreground">(209) 533-1978</a>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden flex-1 items-stretch md:flex">
            <Link
              href="/"
              className={cn(
                "flex items-center border-r border-white/10 overflow-hidden transition-all duration-300",
                scrolled ? "w-auto px-4 opacity-100" : "w-0 px-0 opacity-0"
              )}
            >
              <img src={jhartLogo} alt="J. Hart Plumbing" className="h-8 w-auto brightness-0 invert shrink-0" />
            </Link>
            {items.map((item, i) => {
              if (item.children) {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div key={i} className="relative flex items-stretch border-l border-white/10">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-2 px-7 text-sm font-semibold uppercase tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200",
                        isServicesActive ? "text-white bg-white/10" : "text-white/90"
                      )}
                      onClick={() => { setServicesOpen(!servicesOpen); setActiveFlyout(null); }}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", servicesOpen && "rotate-180")} />
                    </button>
                    {servicesOpen && (
                      <div className="absolute z-50 bg-white rounded-xl shadow-elevated border border-border py-2" style={{ top: "calc(100% + 4px)", minWidth: 230 }}>
                        {item.children.map((child, ci) => (
                          <div
                            key={ci}
                            className="relative"
                            onMouseEnter={() => child.children && setActiveFlyout(child.label)}
                            onMouseLeave={() => child.children && setActiveFlyout(null)}
                          >
                            <Link
                              href={child.href}
                              className={cn(
                                "flex items-center justify-between w-full gap-2 px-4 py-2.5 text-sm font-semibold transition-colors",
                                isActive(child.href) ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary"
                              )}
                              onClick={(e) => {
                                if (child.children && !activeFlyout) {
                                  e.preventDefault();
                                  setActiveFlyout(child.label);
                                } else {
                                  setServicesOpen(false);
                                  setActiveFlyout(null);
                                }
                              }}
                            >
                              {child.label}
                              {child.children && <ChevronDown className={cn("h-3.5 w-3.5 -rotate-90 text-muted-foreground transition-transform", activeFlyout === child.label && "rotate-0")} />}
                            </Link>
                            {child.children && activeFlyout === child.label && (
                              <div className="absolute z-50 pl-1.5" style={{ top: 0, left: "100%" }}>
                                <div className="bg-white rounded-xl shadow-elevated border border-border py-2" style={{ minWidth: 200 }}>
                                  {child.children.map((gc, gi) => (
                                    <Link
                                      key={gi}
                                      href={gc.href}
                                      className={cn(
                                        "block px-4 py-2.5 text-sm font-semibold transition-colors",
                                        isActive(gc.href) ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary"
                                      )}
                                      onClick={() => { setServicesOpen(false); setActiveFlyout(null); }}
                                    >
                                      {gc.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={i}
                  href={item.href!}
                  className={cn(
                    "flex items-center px-7 text-sm font-semibold uppercase tracking-wide border-l border-white/10 first:border-l-0 transition-all duration-200",
                    isActive(item.href!) ? "text-white bg-white/10" : "text-white/90 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="flex items-center gap-2 text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="text-sm font-semibold uppercase tracking-wide">Menu</span>
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="ml-auto hidden md:flex items-stretch">
            <Link href={ctaHref} onClick={handleCtaClick} className="flex items-center bg-cta px-8 text-sm font-bold uppercase tracking-wide text-white hover:bg-cta-hover transition-colors">
              Request Service
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="py-2">
              <Link href="/" onClick={closeMobile} className={cn("flex items-center px-5 py-3 text-sm font-semibold transition-colors", isActive("/") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>
                Home
              </Link>
              <div>
                <button
                  type="button"
                  className={cn("flex items-center justify-between w-full px-5 py-3 text-sm font-semibold transition-colors", pathname.startsWith("/services") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}
                  onClick={() => setMobServicesOpen(!mobServicesOpen)}
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", mobServicesOpen && "rotate-180")} />
                </button>
                {mobServicesOpen && (
                  <div className="bg-off-white border-y border-border">
                    <button
                      type="button"
                      className={cn("flex items-center justify-between w-full px-8 py-2.5 text-sm font-semibold transition-colors", pathname.startsWith("/services/plumbing") ? "text-primary" : "text-foreground hover:bg-light-blue hover:text-primary")}
                      onClick={() => setMobPlumbingOpen(!mobPlumbingOpen)}
                    >
                      Plumbing
                      <ChevronDown className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", mobPlumbingOpen && "rotate-180")} />
                    </button>
                    {mobPlumbingOpen && (
                      <div className="bg-white border-b border-border">
                        <Link href="/services/plumbing/residential" onClick={closeMobile} className={cn("flex items-center px-12 py-2.5 text-sm", isActive("/services/plumbing/residential") ? "text-primary font-semibold bg-light-blue" : "text-foreground hover:text-primary hover:bg-light-blue")}>Residential</Link>
                        <Link href="/services/plumbing/commercial" onClick={closeMobile} className={cn("flex items-center px-12 py-2.5 text-sm", isActive("/services/plumbing/commercial") ? "text-primary font-semibold bg-light-blue" : "text-foreground hover:text-primary hover:bg-light-blue")}>Commercial</Link>
                        <Link href="/services/plumbing/new-construction" onClick={closeMobile} className={cn("flex items-center px-12 py-2.5 text-sm", isActive("/services/plumbing/new-construction") ? "text-primary font-semibold bg-light-blue" : "text-foreground hover:text-primary hover:bg-light-blue")}>New Construction</Link>
                      </div>
                    )}
                    <button
                      type="button"
                      className={cn("flex items-center justify-between w-full px-8 py-2.5 text-sm font-semibold transition-colors", pathname.startsWith("/services/hvac") ? "text-primary" : "text-foreground hover:bg-light-blue hover:text-primary")}
                      onClick={() => setMobHvacOpen(!mobHvacOpen)}
                    >
                      HVAC
                      <ChevronDown className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", mobHvacOpen && "rotate-180")} />
                    </button>
                    {mobHvacOpen && (
                      <div className="bg-white border-b border-border">
                        <Link href="/services/hvac" onClick={closeMobile} className={cn("flex items-center px-12 py-2.5 text-sm", pathname === "/services/hvac" ? "text-primary font-semibold bg-light-blue" : "text-foreground hover:text-primary hover:bg-light-blue")}>HVAC Overview</Link>
                        <Link href="/services/hvac/bryant-heating-cooling" onClick={closeMobile} className={cn("flex items-center px-12 py-2.5 text-sm", isActive("/services/hvac/bryant-heating-cooling") ? "text-primary font-semibold bg-light-blue" : "text-foreground hover:text-primary hover:bg-light-blue")}>Bryant Heating & Cooling</Link>
                      </div>
                    )}
                    <Link href="/services/radiant-heating" onClick={closeMobile} className={cn("flex items-center px-8 py-2.5 text-sm font-semibold", isActive("/services/radiant-heating") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>Radiant Heating</Link>
                    <Link href="/services/water-treatment" onClick={closeMobile} className={cn("flex items-center px-8 py-2.5 text-sm font-semibold", isActive("/services/water-treatment") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>Water Treatment</Link>
                  </div>
                )}
              </div>
              <Link href="/reviews" onClick={closeMobile} className={cn("flex items-center px-5 py-3 text-sm font-semibold", isActive("/reviews") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>Reviews</Link>
              <Link href="/about" onClick={closeMobile} className={cn("flex items-center px-5 py-3 text-sm font-semibold", isActive("/about") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>About</Link>
              <Link href="/contact" onClick={closeMobile} className={cn("flex items-center px-5 py-3 text-sm font-semibold", isActive("/contact") ? "text-primary bg-light-blue" : "text-foreground hover:bg-light-blue hover:text-primary")}>Contact</Link>
              <div className="px-4 py-3">
                <Button variant="nav-cta" size="nav" asChild>
                  <Link href={ctaHref} onClick={handleCtaClick}>Request Service</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
