# Italy Education Consultants — one-page website

Premium, responsive, conversion-focused landing page for **Italy Education Consultants**
(Rajouri Garden, New Delhi).

Stack: **React 18 + Vite + Tailwind CSS 3 + lucide-react**. No animation library — scroll
reveals, counters, the timeline and the parallax all run on a small `IntersectionObserver`
hook and CSS transitions, and every one of them respects `prefers-reduced-motion`.

---

## Running it

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

Node 18+ is required. Verified working: `npm run build` succeeds and the page has been
checked in-browser at desktop (1280px) and mobile (375px) — no console errors, no
horizontal overflow, all seven images load, the FAQ accordion and form validation behave
correctly.

---

## ✅ Verified business details already wired in

- **Phone** — **+91 87963 71248** is the only number on the site. Every phone link and Call
  CTA is generated from `PHONE_DISPLAY` / `PHONE_DIGITS` in `src/data/site.js`, so changing
  it in one place updates the whole site. All contact CTAs use `tel:+918796371248`, which
  opens the dialer on mobile.
- **No WhatsApp, no business email** — WhatsApp has been removed entirely (no links, CTAs,
  icons or deep links anywhere), and no business email address is published. Contact routes
  are the phone number, the enquiry form and the Instagram profile.
- **Address** — Third Floor, B-11, Frontside, Block B, Rajouri Garden, New Delhi 110027.
- **Google Maps** — "Get Directions", the footer listing link and the JSON-LD `hasMap` all
  use the business short link `https://maps.app.goo.gl/w7wQryRTsKEsRbgY6`. The embedded map
  is pinned to the same resolved coordinates (28.6487068, 77.12657).

## Legal pages

Three standalone pages are built as real static routes, plus the image credits page:

| Route | Source |
| --- | --- |
| `/privacy-policy/` | `src/legal/PrivacyPolicy.jsx` |
| `/terms-and-conditions/` | `src/legal/TermsConditions.jsx` |
| `/disclaimer/` | `src/legal/Disclaimer.jsx` |
| `/image-credits.html` | `public/image-credits.html` |

They are wired through Vite's multi-page build (`rollupOptions.input` in `vite.config.js`),
each with its own `index.html` shell and entry file. Because they are genuinely static
pages rather than client-side routes, deep links and refreshes work on any host with **no
server rewrite rules and no router dependency**. Shared chrome (`Navbar`, `Footer`) is
reused, so branding stays identical; both accept a `linkPrefix` prop so section anchors
resolve back to the home page.

Content is written specifically for this business — Italy-focused counselling, the six
services, the six fields the enquiry form collects, and the third-party embeds actually
present (Google Fonts, Google Maps). It claims no cookies, analytics, certifications or
partnerships that this site does not have. Update `LAST_UPDATED` in
`src/legal/LegalPage.jsx` whenever you revise them, and have a legal professional review
them before launch.

## ⚠️ Still outstanding

### 1. Business hours — `src/data/site.js`

`HOURS` currently shows Monday–Saturday, 10:00 AM – 7:00 PM as originally briefed. Confirm
or correct it.

### 2. Statistics

`11K+`, `50+`, `10 Years`, `99%` are presented as fact — the asterisks and the
"figures to be verified" footnotes were removed on request. Make sure these numbers are
ones the business is comfortable standing behind publicly.

### 3. Testimonials

`TESTIMONIALS` in `site.js` are placeholder names and quotes (initials are derived from
the names, so the two always match). Swap them for verified Google Reviews when available.

Only add `Review` / `AggregateRating` schema once genuine review data exists — it is
intentionally absent from `index.html`.

### 4. Lead form — the one real gap

`handleSubmit` in `src/components/LeadForm.jsx` validates client-side and shows a
confirmation offering a direct call, but **the submitted details currently go nowhere**.
With WhatsApp and the business email both removed, connecting this to a CRM or form
backend is now the only way an enquiry reaches you in writing. Do this before launch.

### 5. Imagery — `src/data/images.js`

Seven photographs of historic Italian university architecture (Padua, Bologna, Venice)
ship in `public/images/`. They are freely licensed under CC BY-SA, which **requires
attribution** — provided at `/image-credits.html` and linked from the footer's Legal
column. Full per-file credits: `public/images/CREDITS.md`.

To use your own photography, drop files into `public/images/` with the same filenames —
nothing else needs to change. Once every CC image is replaced, remove the "Image Credits"
entry from `FOOTER_LINKS.legal` and delete `public/image-credits.html`.

Images are already optimised (5.3 MB → 1.3 MB). After adding or replacing any photo, re-run:

```bash
npm install --no-save sharp && node scripts/optimize-images.mjs
```

Do not add captions implying a partnership with any university shown — no such
relationship is claimed anywhere on the site.

### 6. SEO / schema — `index.html` and the three legal shells

Replace `https://www.italyeducationconsultants.com/` with the live domain (canonical and OG
tags in all four HTML files, `@id`s, `robots.txt`) and add `/og-image.jpg` (1200×630).
Phone, address, geo coordinates and `hasMap` are already the verified values.

Schema included: `LocalBusiness` + `EducationalOrganization`, `WebSite`, `BreadcrumbList`
(in `index.html`), `FAQPage` (generated from `FAQS`, in `FAQ.jsx`) and `Service` as an
`ItemList` (generated from `SERVICES`, in `App.jsx`).

---

## Content guardrails already applied

- No "guaranteed visa", "guaranteed scholarship", "100% admission", "no rejection" or
  "best consultancy in India" claims anywhere.
- FAQ answers on visas, scholarships and admissions explicitly state that decisions rest
  with universities/authorities and that requirements can change.
- The scholarships section carries its own disclaimer; the footer carries a global one.
- No fabricated university partnerships, awards, affiliations or student names.

---

## Structure

```
index.html                 meta, fonts, LocalBusiness/EducationalOrganization/Breadcrumb JSON-LD
privacy-policy/            \
terms-and-conditions/       > HTML shells for the three legal routes
disclaimer/                /
public/
  images/                  seven photographs + CREDITS.md
  image-credits.html       CC BY-SA attribution page (linked from the footer)
scripts/
  optimize-images.mjs      re-encode photographs to display size
src/
  App.jsx                  page composition + Service schema
  index.css                design tokens, button/field primitives, focus + motion rules
  data/site.js             ALL copy and business details (single source of truth)
  data/images.js           image sources + alt text
  hooks/useInView.js       one-shot IntersectionObserver
  legal/                   LegalPage shell, the three documents, and their entry files
  components/
    ui/                    Reveal, Section/SectionHeading/Eyebrow, SmartImage, Counter,
                           Wordmark, InstagramIcon
    Navbar, Hero, TrustBar, About, Services, Process, Scholarships, WhyUs,
    Achievements, Testimonials, VisualBreak, FAQ, LeadForm, FinalCTA, Contact,
    Footer, FloatingCTA
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `forest` (`forest-700`) | `#12372A` | Dominant brand colour |
| `ivory` | `#F8F5EE` | Default page background |
| `charcoal` | `#171717` | Body text |
| `sage` | `#DCE5DD` | Muted surfaces, text on green |
| `terracotta` | `#B9583C` | Accents only — eyebrows, icon highlights, focus rings |

Headlines: **DM Serif Display**. Body/UI: **Manrope**. Backgrounds alternate
ivory → white → ivory → deep green so sections read as distinct chapters.

## Accessibility

Skip link; semantic landmarks and a single `h1`; keyboard-operable nav, accordion and
carousel; `aria-expanded`/`aria-controls` on disclosures; labelled inputs with
`aria-invalid` + `role="alert"` errors and focus moved to the first invalid field;
visible focus ring on every interactive element; ≥48px tap targets; descriptive alt text;
counters expose their final value via `aria-label`; all motion honours
`prefers-reduced-motion`.
