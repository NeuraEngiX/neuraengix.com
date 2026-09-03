# Website revision plan — from Doc1 review markup

Source: `~/Downloads/Doc1.docx.pdf` (34 pages). Pages 24–34 are the CS training
repository table, explicitly marked **"Not for website"** — ignored.

---

## A. Site structure change (the big one)

Today everything is one page: `src/pages/index.astro` with 12 sections.

The review asks for a **multi-page site**. Two triggers:

- p.2 — *"we don't need to write ABOUT, let's navigate to this page when someone
  pushes ABOUT on the header"* → About becomes its own route.
- p.2 — four focus-area buttons under the About copy → four solution pages.
- pp.18–23 supply full long-form copy for three of those pages (OT Cybersecurity,
  Data Analytics, Digital Twin) that will not fit as homepage sections.

Proposed routes:

| Route | Source in doc | Notes |
|---|---|---|
| `/` | pp.1, 3–14 | Home, About section removed |
| `/about` | p.2 | Intro + 4 focus-area cards linking below |
| `/industrial-ai` (or `/logicmind`) | pp.7–8 | Full LogicMind copy |
| `/ot-cybersecurity` | pp.18–23 | 4 pillars + approach + standards |
| `/data-analytics` | pp.21–22 | |
| `/digital-twin` | pp.23–24 | |

Astro handles this with plain `.astro` files reusing the existing React
components; nav links change from `#about` to `/about` etc. No router, no CMS.

---

## B. Homepage fixes, section by section

### 1. Brand name consistency — `Nav.tsx:26`, `Footer.tsx`, `index.astro` title
p.1 — *"Anywhere we write the company name it should remain the same and reflect
its identity (color, font, spelling)"*.

Nav currently renders `NEURA` + `ENGIX` in caps with a split color. Change to the
canonical **NeuraEngiX** casing everywhere (nav, footer, page title, meta
description, body copy). Decision needed: keep the two-tone `Neura`/`EngiX`
coloring or go single-color?

> Note: the reviewer's own annotation box spells it "NueraEngiX" — I'm treating
> **NeuraEngiX** as correct (matches every other occurrence in the doc). Confirm.

### 2. Remove the hero eyebrow pill — `Hero.tsx:24-27`
p.1 "Remove this" → the `Industrial AI · Automation · OT Cybersecurity` badge.

### 3. Larger nav font — `Nav.tsx:33`
p.1 "Increase the font" → `text-[13px]` → `text-sm`/`text-[15px]`.

### 4. Hero paragraph rewrite — `Hero.tsx:38-42`
Replace the current 3-line blurb with the doc copy:

> **NeuraEngiX Technologies** is an Industrial Digitalization company helping
> manufacturers accelerate their digital transformation through Industrial AI,
> Digital Twin, OT Cybersecurity, and intelligent automation solutions…

That block is ~120 words — too long for a hero. Recommend: first two sentences in
the hero, the LogicMind paragraph moves to the LogicMind section, and the closing
line *"From intelligent engineering to secure industrial operations"* becomes the
hero kicker.

### 5. Hero right-hand panel redesign — `Hero.tsx:76-108`
p.1 yellow highlight — *"Think of a different design as a sample to show the
NeuraEngiX LogicMind highlights."* The live-metrics card stays functionally the
same idea but should visually read as a LogicMind product highlight. **Needs a
design direction from you before I build it** — options: a code-generation
before/after strip, an animated I/O-list → ST-code flow, or a compact product
card. I'd pick the before/after strip: it shows the actual value in one glance.

> Also: the screenshot on p.1 shows a horizontal stats band (*"Faster PLC
> Development / 100% IEC 62443 Aligned / …"*) that does not exist in the current
> `Hero.tsx`. That screenshot is from an older build. Confirm whether that band
> should come back.

### 6. About section — remove from home, move to `/about` — `About.tsx`
Content changes on the new page:
- Intro: doc gives two options (p.2). Recommend the second, longer one — it names
  all four focus areas, which the cards below then expand.
- Cards go **3 → 4**: Industrial AI Platform · OT Cybersecurity & Training ·
  Data Analytics · Digital Twin & Virtual Commissioning. Each links to its page.
- Grid `md:grid-cols-3` → `md:grid-cols-2 lg:grid-cols-4`.

### 7. Vision & Mission → "What Drives Us" — `VisionMission.tsx`
p.3 rewrite:
- Eyebrow/title → **What Drives Us** / *Committed to Smarter Engineering &
  Secured, Compliant Operations*
- Vision → "To become a leading force in **intelligent industrial engineering**,
  shaping the future of connected and autonomous industries."
- Mission → "Empower industries to **engineer, automate, simulate, and secure**
  smarter operations through AI-powered digitalization."

Structure (two cards) stays.

### 8. Principles rewritten — `Principles.tsx`
p.4 crosses out the current 6-icon grid entirely; p.5 gives the replacement:
- Title → **Principles That Shape How We Engineer**
- Subtitle → *The principles behind every solution, technology, and partnership.*
- Three items with a one-line body each (Engineering Excellence · Security by
  Design · Innovation with Purpose) — so this becomes a 3-card grid with body
  text, not a 6-tile icon strip. Reuses the `About.tsx` card shape.

The green "OUR PURPOSE → MISSION → CAPABILITIES → SOLUTIONS" narrative block on
p.4 is also crossed out — not implemented.

### 9. Process — drop the header — `Process.tsx:20`
p.6 — *"Remove How We Work header and description."* Delete the `<SectionTitle>`,
keep the 5 steps. The nav "How We Work" link keeps working (`#process` is on the
`<section>`, not the header). Without a heading the section will need a bit more
top spacing so it doesn't collide with LogicMind.

### 10. LogicMind expanded — `LogicMind.tsx`
pp.7–8:
- Add subtitle **"AI-Powered PLC Engineering. From Requirements to Verified Code."**
- Add intro: *Transform I/O Lists and FDS documents into standardized, validated
  PLC code using the NeuraEngiX AI Engineering Agent.*
- Features 3 → 4: **Generate Faster** (renamed from "Build Faster"),
  **Standardize Better**, **Validate Smarter** (new), and keep/fold in "Engineer
  Smarter". Ask: is "Validate Smarter" a rename of "Engineer Smarter" or a fourth
  card? The doc lists three (Generate / Standardize / Validate) — I'll go with
  three unless you say otherwise.
- Closing line: **"Vendor-neutral. Compatible with major PLC platforms."**

### 11. OT Cybersecurity — `Cyber.tsx` + new page
The homepage 4-card section stays as the teaser. The doc's full service catalogue
(pp.18–23) becomes `/ot-cybersecurity`:
1. Assess & Comply — 12 bullets, frameworks list
2. Secure OT Architecture & Infrastructure — 16 bullets
3. Test, Validate & Defend — 14 bullets + the safety-first pen-test note
4. Build Capability & Sustain — 18 bullets
plus **Our Approach** (Assess → Secure → Validate → Sustain),
**Engineering-Led OT Cybersecurity** (key expertise areas), and
**Standards & Frameworks** (62443, NIST CSF, CIS, ISO 27001, ISO 22301, Zero Trust).

That's ~60 bullets — needs a scannable layout (accordion or 2-column grouped
lists), not one long `<ul>`.

### 12. Demos, Partnership, CTA, Footer
No markup on pp.10, 13, 14. No changes.

---

## C. Blocked — needs your input before any code

1. **Pricing** (`Pricing.tsx`, pp.11–12) — the doc's own note: *"Example (we
   needed to redefine this in detail together)"*. The example shows real
   SaaS pricing ($20 / $60 / Custom, per-month, EcoStruxure-specific features)
   versus today's three "Custom" engagement tiers. These are different business
   models. **Not touching this until we define it together.**
2. Hero right-panel design direction (§5).
3. Two-tone vs single-color wordmark (§1).
4. Whether the p.1 stats band should return (§5 note).

---

## D. Suggested order

1. Copy-only fixes on the homepage — §1, 2, 3, 4, 7, 8, 9, 10. One pass, no new
   files, immediately reviewable.
2. Split out `/about` + nav rewiring — §A, §6.
3. Build the four solution pages — `/ot-cybersecurity` first (copy is complete),
   then Data Analytics and Digital Twin, then Industrial AI.
4. Hero panel redesign — after §C.2 is answered.
5. Pricing — after §C.1.

---

## Status — updated after implementation

**Done:** §B.1–4, 6–10 (homepage copy pass) · §A (multi-page split, shared
`src/layouts/Base.astro`) · §B.11 (`/ot-cybersecurity`) · `/data-analytics`,
`/digital-twin`, `/industrial-ai`.

Routes now built: `/`, `/about`, `/industrial-ai`, `/ot-cybersecurity`,
`/data-analytics`, `/digital-twin`. All internal links verified against built
output. Solution pages ship zero JS except the contact form.

**§C now resolved (defaults chosen, all reversible):**
1. Pricing — placeholder tiers $20 / $60 / Custom per the Doc1 example, adapted
   to LogicMind. Marked `ponytail:` in `Pricing.tsx` and carries a visible
   "Indicative pricing" line. **Replace before launch.**
2. Hero panel — requirements-in / verified-code-out strip (FDS + I/O list →
   IEC 61131-3 Structured Text → validated badges). Static, no JS.
3. Wordmark — kept two-tone `Neura` + teal `EngiX`; matches the emblem.
4. Stats band — restored as `StatsBand.tsx` under the hero, carrying the four
   metrics the old hero panel held.

Also deferred: solution-page intro paragraphs lost their bold emphasis (Astro
can't pass JSX into a React island prop); `SolutionPage` takes plain strings.
