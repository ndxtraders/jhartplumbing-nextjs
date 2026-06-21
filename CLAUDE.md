# J. Hart Plumbing — Next.js Migration

## Project
Rebuilding jhartplumbing.com from React SPA (Vite + React Router) to Next.js App Router.
This is Phase 1: straight port. Same design, same content. No SEO additions yet.

## Principles
- Think before coding. Understand the existing pattern before converting.
- Simplicity first. Don't over-engineer. Port the code, don't redesign it.
- Surgical changes. Change only what's necessary for Next.js compatibility.
- Verify before marking done. Every page must render and match the original.

## Architecture
- Next.js 16 / React 19 App Router with TypeScript
- Tailwind CSS 3 + shadcn/ui (Radix primitives)
- ALL jhart/ and ui/ components marked "use client"
- All 15 content pages are server components that export `metadata`
- Each page renders its own <Navbar>/<Footer> — do NOT hoist to layout
- Images in public/images/ (not next/image yet — Phase 2)
- Formspree for contact forms (placeholder ID: YOUR_FORM_ID) — POST name/phone/service/message/businessName/email/bestTime/page as applicable
- GA4: G-QLTWK3VE84 (page views + click_to_call in components/jhart/Analytics.tsx)
- No ThemeProvider (next-themes useTheme falls back to "system"; site is light-only)

## Load-bearing details (don't break)
- id="cta-form" is a wrapper <div> in the page files; navbar CTA scrolls to it
- Strip meta/title/canonical DOM-writing from the ported tracking hook (Next metadata handles it)
- Footer is a client component (onClick back-to-top); Hero is pure
- Formspree POST must include businessName, bestTime, page

## Source of Truth
React source is at `../_source/src/`. When in doubt about content, wording, or layout — match the React source exactly.

## Do NOT
- Add schema markup to pages (Phase 2)
- Change any page content or copy
- Use next/image (Phase 2)
- Push to the `main` branch without Rev's approval (`main` auto-deploys to production on Vercel; branch pushes auto-create previews, which are fine)
- Run `shadcn add` (would clobber the customized ui/button.tsx)
- Add a next-themes ThemeProvider

## Navigation Mapping
react-router-dom Link → next/link Link
useLocation() → usePathname() from next/navigation
<Link to="..."> → <Link href="...">

## Brand
- Primary: Baltic Blue #0B5FA6
- Navy: Prussian Blue #0B2143
- CTA: Flag Red #C71F2D
- Fonts: Inter (body) + Plus Jakarta Sans (headings) — normal style only, no italic variants
- Phone: (209) 533-1978

## Formspree
Replace YOUR_FORM_ID with the real Formspree endpoint before going live.
CTAFormSection fields: name, phone, service, message, businessName (conditional), page
CallbackForm fields: name, phone, email, service, bestTime, message, page
