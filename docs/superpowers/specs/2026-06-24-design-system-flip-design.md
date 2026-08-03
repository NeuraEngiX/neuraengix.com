# Design System Flip — neuraengix.com Portal

**Date:** 2026-06-24
**Goal:** Replace the site's dark industrial design system with the light, minimal, teal "Logic Mind" system defined in `Design.MD`, while keeping the existing itanta-style layout intact.

## Background

The portal currently runs a dark theme (`--bg-void #030711`, cyan `#00c8ff` + purple gradient, Oxanium/Figtree fonts, circuit-grid background, glow shadows, dark photo hero). `Design.MD` specifies the opposite: light off-white `#DFDEDC` background, black text, single teal `#00ACAC` accent, Inter font, flat minimal SaaS aesthetic. The user wants a full flip to Design.MD. Layout structure (already itanta-style from a prior rebuild) stays as-is.

## Strategy: flip via token remap

Most of the 13 components style through CSS variables in `src/styles/global.css`. Redefine those variables to Design.MD values **without renaming them**, so every `var(--…)` reference flips automatically. Then hand-fix the components that use hardcoded dark hex or dark-specific effects.

## Changes

### 1. `src/styles/global.css` — token remap (the main lever)

Redefine `:root` values (names unchanged):

| Variable | New value |
|---|---|
| `--bg-void` | `#DFDEDC` |
| `--bg-deep` | `#DFDEDC` |
| `--bg-surface` | `#ffffff` |
| `--bg-elevated` | `#f5f5f3` |
| `--border-subtle` | `rgba(0,0,0,0.08)` |
| `--border-glow` | `rgba(0,172,172,0.35)` (teal) |
| `--cyan` | `#00ACAC` |
| `--cyan-dim` | `rgba(0,172,172,0.6)` |
| `--cyan-ghost` | `rgba(0,172,172,0.08)` |
| `--green` | `#00ACAC` (collapse to teal) |
| `--amber` | keep or retire if unused |
| `--text-primary` | `#000000` |
| `--text-secondary` | `#464545` |
| `--text-muted` | `#A6A7A2` |
| `--text-code` | `#00ACAC` |
| `--font-display` | `'Inter', system-ui, sans-serif` |
| `--font-body` | `'Inter', system-ui, sans-serif` |
| `--font-mono` | `'JetBrains Mono', monospace` (kept) |
| `--radius-sm` | `8px` |
| `--radius-md` | `12px` |
| `--radius-lg` | `16px` |
| (new) `--radius-xl` | `24px` |
| `--shadow-glow` | `0 12px 32px rgba(0,0,0,0.08)` |
| `--shadow-glow-strong` | `0 16px 40px rgba(0,0,0,0.12)` |
| `--gradient-accent` | flat teal `#00ACAC` (or `linear-gradient(135deg,#00ACAC,#00ACAC)` so `.gradient-text` still works) |
| `--gradient-surface` | subtle `rgba(0,172,172,0.06)` |

Other changes in this file:
- Swap the Google Fonts `@import` to load **Inter** (weights 400/500/600/700) + keep JetBrains Mono; drop Oxanium and Figtree.
- `body`: background `#DFDEDC`, text `#000000`, font Inter.
- **Remove** `body::before` (circuit grid) and `body::after` (radial ambient glow) — dark-theme-only.
- `.gradient-text` keeps working via the flat-teal gradient (renders as solid teal).
- Retire dark-only keyframes (`scanline`, `flicker`) only if no component references them; otherwise leave.

### 2. Remove dark-only effects

- Delete `ParticleBackground` usage from `src/pages/index.astro`. Leave the component file or delete it — deletion preferred (it's a dark-canvas artifact).

### 3. Hand-fix components with hardcoded dark hex / glows

Highest hardcoded-hex counts first:
- **`Hero.tsx`** — rewrite as a clean light hero: off-white background, black headline, `#464545` subhead, teal primary CTA + outlined secondary CTA. **Drop the `hero-bg.webp` photo and its dark scrim + per-element textShadow.** Optionally an abstract teal-accented code/node graphic; not required.
- **`Nav.tsx`** — light bar, black links, teal CTA, light border.
- **`Footer.tsx`** — light background, dark text, teal accents.
- **`CTA.tsx`** — light section, teal primary action.
- **Remaining components** (Features, HowItWorks, Numbers, SuccessStories, UseCases, ProductWays, FAQ, SectionHeader) should largely auto-flip via the variable remap. Each gets a quick visual pass to catch stray hardcoded hex, glow shadows, or gradient text that reads wrong on light.

### 4. Code / terminal surfaces stay dark

Any code-block / terminal panel keeps `#000000` background with off-white `#DFDEDC` text and `#464545` border, per Design.MD §7. This is the one place dark is intentional.

### 5. Delete the photo asset

Remove `public/hero-bg.webp` (no longer referenced after the Hero rewrite).

## Out of scope (deliberately skipped)

- Renaming CSS variables — pointless churn; names stay, values change.
- Layout/grid restructuring — already itanta-style.
- A Tailwind/config or full design-token pipeline — CSS variables are sufficient. Add later only if a real token system is wanted.

## Verification

- `npm run build` succeeds (Astro + Cloudflare adapter).
- Manual visual pass of each section on light background: no dark-on-dark or low-contrast teal-on-light body text (Design.MD accessibility note — teal only for buttons/badges/short labels, not long copy).
- No remaining references to Oxanium, Figtree, `hero-bg`, circuit grid, or glow effects.
