# Prompt: “eldevel – Electronics Development” One-Page Landing (Astro **Static**) — Plan First, Build Iteratively

**Role:** You are an expert Astro + Tailwind developer and product designer.
**Goal:** Create a **single-page**, modern, responsive landing site for **eldevel – Electronics Development** that works perfectly when deployed as static HTML/CSS/JS on **GitHub Pages** or similar.

---

## Workflow — Plan Before Building

1. **Do not code yet.** First deliver a **step-by-step implementation plan** divided into phases (Setup; Structure & Anchors; Base Styles; Sections & Content; Interactivity; SEO/Analytics; Accessibility & Performance; Deployment).
   Each phase must list:

   * **Deliverables**
   * **Tools/Tech**
   * **Acceptance Criteria**
2. **Wait for my approval** before starting implementation.
3. **Iterative build:** Implement one phase at a time → show updated code/file tree → get feedback → adjust → proceed.

---

## Hosting Constraint (Important)

* **Static only**: Use `output: 'static'` in `astro.config.mjs`.
* **No SSR, no server endpoints**.
* Contact must work via:

  * `mailto:` link (default), or
  * Third-party static form (Formspree, Netlify Forms).
* Output: `dist/` folder ready for **GitHub Pages** (document base path if needed) and other static hosts.

---

## Company Context (for copy, visuals, schema)

* **Brand/Name:** **eldevel** — tagline **“Electronics Development”** (logo vibe: teal/orange neon outline).
* **Founder:** **Hans-Jürgen Rode**.
* **What we do:** Electronics & PCB design, prototyping, production support.
* **Experience:** 20+ years; self-employed since 2011.
* **CAD Tools:** Altium Designer, Eagle.
* **Services:**

  * **Feasibility** — Lasten-/Pflichtenheft, Blockschaltpläne, Risiko-/Kostenanalyse.
  * **Entwicklung (CAD)** — Schaltplan, PCB-Layout, Materialmanagement, Fertigungsdaten.
  * **Entwicklung Product** — Entwicklung von Produkten, Elektisch Mechanisch
  * **Vertigung von Kleinserien** — Vertigung von Kleinserien
  * **Prototyping & Tests** — Prototypen, Testsysteme, Inbetriebnahme, Fehleranalyse, EMV/HALT Tests.
  * **Redesign/Optimierung** — Erkenntnisse einfließen, Kostenoptimierung, interne/externe Tests.
  * **Produktbegleitung** — Qualitäts-/Termin-/Produktionsüberwachung, Feldfeedback, Reparaturen.
  * **Zertifizierung** — ISO 9001:2015
* **Kunden**
  * **WES** — WES GmbH
  * **Wisotec** — Wisotec GmbH
  * **Coherent** — Coherent GmbH
  * **Hochschuhle Flensburg** — Hochschuhle Flensburg GmbH
  * **Torlabs** — Torlabs GmbH
  * **Flügel** — Flügel GmbH
  * **Trident** — Trident GmbH
  
  
* **Kontakt Info:**
  * Adresse: Lise-Meitner-Straße 2, 24941 Flensburg, Deutschland
  * Telefon: 0461 – 494 339 10
  * E-Mail: [info@eldevel.de](mailto:info@eldevel.de)
  * Öffnungszeiten: Mo–Fr 9–17 Uhr
  * Unternehmensform: Einzelunternehmen
* **Language:** Primary German, but structure so English can be added later.

---

## Information Architecture (Single Page)

* **Navbar** (sticky, scrolls to sections via IDs)
* **Hero** — Headline, subhead, CTA buttons
* **Leistungen** — Card/grid layout of services above
* **Über mich / Unternehmen** — Founder intro, experience summary
* **Prozess** — How we work (optional)
* **Kontakt** — Info + form/mailto
* **Rechtliches** — Impressum & Datenschutz as collapsible sections or bottom-of-page anchors
* **Footer** — Compact, repeat contact + legal links

**Example Anchor IDs:**

```
#unternehmen
#leistungen
#prozess
#kontakt
#rechtliches
```

---

## Visual & UX Guidance

* **Style:** Clean, modern, lots of whitespace; rounded-xl/2xl cards; soft shadows; smooth hovers.
* **Palette:** Teal & orange accents + neutral grays; dark mode (`darkMode: 'class'`).
* **Imagery:** PCB macro photo as background motif.
* **Responsive:** Mobile-first; breakpoints at 768px, 1024px, 1280px.
* **Interactivity:** Smooth scrolling to anchors; mobile menu toggle; optional FAQ accordion.
* **Accessibility:** WCAG AA contrast, keyboard nav, semantic landmarks.

---

## Tech Stack & Limits

* **Astro** static output (`output: 'static'`).
* **Tailwind CSS** + `@tailwindcss/forms`, `@tailwindcss/typography`.
* Minimal JS — only for nav, accordion, smooth scroll.
* SEO meta tags + OG/Twitter.
* JSON-LD (`LocalBusiness` schema) with name, address, phone, opening hours.
* Image optimization with Astro `<Image />`, `loading="lazy"`.
* Lighthouse score ≥90.

---

## Repository Structure

```
/
├─ package.json
├─ astro.config.mjs
├─ tailwind.config.cjs
├─ postcss.config.cjs
├─ tsconfig.json
├─ public/
│  ├─ favicon.svg
│  └─ images/pcb-hero.jpg
├─ src/
│  ├─ env.d.ts
│  ├─ styles/globals.css
│  ├─ content/de.ts
│  ├─ components/
│  │  ├─ Seo.astro
│  │  ├─ Header.astro
│  │  ├─ MobileMenu.tsx
│  │  ├─ Hero.astro
│  │  ├─ About.astro
│  │  ├─ Services.astro
│  │  ├─ Process.astro
│  │  ├─ Contact.astro
│  │  ├─ Legal.astro
│  │  └─ Footer.astro
│  ├─ layouts/BaseLayout.astro
│  └─ pages/index.astro
└─ README.md
```

---

## Deployment Requirements

* Run `npm run build` → upload `dist/` to GitHub Pages
* Provide instructions for Pages + Netlify + Vercel static

---

## Acceptance Criteria

1. **Plan-first** and iterative workflow followed.
2. **Single-page Astro static build** with anchor navigation.
3. Works fully when hosted as plain static files.
4. German content centralized for easy translation.
5. Modern, responsive, accessible; Lighthouse ≥90.
6. SEO meta + JSON-LD with company/contact info.
7. Clean, documented code.

---

## Output Format

* **Phase 1:** Implementation plan only — stop and wait for approval.
* For later phases: updated file tree + changed source files + notes → feedback → adjust → proceed.

**Begin with the plan.**