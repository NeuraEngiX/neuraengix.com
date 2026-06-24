# Design System Flip Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Flip neuraengix.com from its dark industrial theme to the light/teal/Inter "Logic Mind" system in `Design.MD`, keeping the existing itanta-style layout.

**Architecture:** Redefine the CSS variables in `src/styles/global.css` to Design.MD values *without renaming them*, so every `var(--…)` reference flips automatically. Then hand-fix the four components with hardcoded dark hex / glow / gradient effects (Hero, Nav, Footer, CTA) and remove the dark-only `ParticleBackground` and circuit-grid effects.

**Tech Stack:** Astro v6, React (.tsx islands with inline styles), CSS variables, Cloudflare Pages adapter.

## Global Constraints

- Palette (Design.MD): bg `#DFDEDC`, card/white `#ffffff`, text `#000000`, secondary text `#464545`, muted `#A6A7A2`, teal accent `#00ACAC`.
- Font: **Inter** for UI + display; **JetBrains Mono** for code only. No Oxanium, no Figtree.
- Teal is for buttons/badges/short labels/focus rings only — never long body copy (Design.MD accessibility note).
- Radii: 8 / 12 / 16 / 24px.
- Shadows: soft only — `0 12px 32px rgba(0,0,0,0.08)`. No glow.
- Verification per task is `npm run build` (must succeed) plus a visual check; this is a CSS/markup change set with no unit tests.

---

### Task 1: Remap design tokens in `global.css`

**Files:**
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: the light token set every component consumes via `var(--…)`. Variable **names are unchanged**; only values change. Notable: `--bg-void`, `--bg-surface`, `--bg-elevated`, `--text-primary/secondary/muted`, `--cyan`, `--gradient-accent`, `--gradient-surface`, `--shadow-glow`, `--font-display`, `--font-body`, plus new `--radius-xl`.

- [ ] **Step 1: Replace the font `@import` (line 1)**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

- [ ] **Step 2: Replace the entire `:root` block (lines 3–37) with the light token set**

```css
:root {
  --bg-void: #DFDEDC;
  --bg-deep: #DFDEDC;
  --bg-surface: #ffffff;
  --bg-elevated: #f5f5f3;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-glow: rgba(0, 172, 172, 0.35);

  --cyan: #00ACAC;
  --cyan-dim: rgba(0, 172, 172, 0.6);
  --cyan-ghost: rgba(0, 172, 172, 0.08);
  --green: #00ACAC;
  --green-dim: rgba(0, 172, 172, 0.6);
  --amber: #00ACAC;

  --text-primary: #000000;
  --text-secondary: #464545;
  --text-muted: #A6A7A2;
  --text-code: #00ACAC;

  --font-display: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  --shadow-glow: 0 12px 32px rgba(0, 0, 0, 0.08);
  --shadow-glow-strong: 0 16px 40px rgba(0, 0, 0, 0.12);

  /* flat teal — keeps .gradient-text rendering as solid teal */
  --gradient-accent: linear-gradient(135deg, #00ACAC 0%, #00ACAC 100%);
  --gradient-surface: linear-gradient(160deg, rgba(0, 172, 172, 0.06), rgba(0, 172, 172, 0.06));
}
```

- [ ] **Step 3: Remove the dark-only background effects (`body::before` and `body::after`, lines 67–92)**

Delete both blocks entirely (the circuit grid and the radial ambient glow). The `body` rule itself stays — its `background-color: var(--bg-void)` and `color: var(--text-primary)` now resolve to the light palette automatically.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: build succeeds, no errors.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: remap design tokens to light/teal Inter system"
```

---

### Task 2: Remove the dark ParticleBackground

**Files:**
- Modify: `src/pages/index.astro`
- Delete: `src/components/ParticleBackground.tsx`

**Interfaces:**
- Consumes: nothing.
- Produces: an `index.astro` with no `ParticleBackground` import or element.

- [ ] **Step 1: Remove the import line from `index.astro`**

Delete: `import ParticleBackground from '../components/ParticleBackground.tsx';`

- [ ] **Step 2: Remove the element from the body**

Delete the line: `<ParticleBackground client:load />`

- [ ] **Step 3: Delete the component file**

```bash
git rm src/components/ParticleBackground.tsx
```

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: build succeeds, no unresolved-import error.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: drop dark ParticleBackground canvas"
```

---

### Task 3: Rewrite Hero as a clean light hero

**Files:**
- Modify: `src/components/Hero.tsx` (full rewrite)
- Delete: `public/hero-bg.webp`

**Interfaces:**
- Consumes: light tokens from Task 1 (`--cyan`, `--bg-void`, `--text-primary`, `--text-secondary`, `--font-display`, `--font-mono`, `--radius-md`, `--shadow-glow`).
- Produces: `Hero` default export, unchanged signature. Anchors `#waitlist` and `#how-it-works` preserved. Copy unchanged.

- [ ] **Step 1: Replace the whole file with the light hero**

```tsx
export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', paddingTop: '120px', paddingBottom: '100px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'var(--cyan-ghost)',
            border: '1px solid var(--border-glow)',
            borderRadius: '100px',
            marginBottom: '2rem',
            animation: 'fadeUp 0.6s ease both',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: 'var(--cyan)', display: 'inline-block',
              animation: 'pulseGlow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)',
            }}>
              AI for Industrial Automation
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            animation: 'fadeUp 0.6s 0.1s ease both',
            opacity: 0,
          }}>
            Generate, Convert &amp;
            <br />
            <span className="gradient-text">Modernize PLC Code</span>
            <br />
            in Minutes, Not Weeks
          </h1>

          {/* Subtext */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: '660px',
            margin: '0 auto 2.5rem',
            animation: 'fadeUp 0.6s 0.2s ease both',
            opacity: 0,
          }}>
            NeuraEngiX is AI-powered PLC development for Rockwell, Siemens, CODESYS,
            Beckhoff and more. Import existing logic, translate across vendors, and
            export native formats like L5X and PLCopen XML — without sacrificing
            quality or compliance.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.3s ease both', opacity: 0,
          }}>
            <a href="#waitlist" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 2rem',
              background: 'var(--cyan)',
              color: '#ffffff',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.95)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Join the Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--text-muted)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              See How It Works
            </a>
          </div>

          {/* Stat strip */}
          <div style={{
            display: 'flex', gap: '3rem', marginTop: '4rem', paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap', justifyContent: 'center',
            animation: 'fadeUp 0.6s 0.4s ease both', opacity: 0,
          }}>
            {[
              { value: '5+', label: 'PLC Platforms' },
              { value: '10×', label: 'Faster Delivery' },
              { value: '0', label: 'Vendor Lock-in' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700,
                  color: 'var(--cyan)', lineHeight: 1, marginBottom: '4px',
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--text-secondary)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Delete the now-unused photo**

```bash
git rm public/hero-bg.webp
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Visual check**

Run `npm run dev`, open the hero. Confirm: off-white background, black headline, teal CTA filled white text, no photo, no dark scrim, no text-shadow glow.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: clean light hero, drop industrial photo"
```

---

### Task 4: Fix Nav for light theme

**Files:**
- Modify: `src/components/Nav.tsx`

**Interfaces:**
- Consumes: light tokens from Task 1.
- Produces: `Nav` default export, unchanged signature and links.

- [ ] **Step 1: Light glass bar background (line ~41)**

Replace:
```tsx
background: scrolled ? 'rgba(7, 13, 26, 0.85)' : 'rgba(13, 21, 37, 0.55)',
```
with:
```tsx
background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(245, 245, 243, 0.6)',
```

- [ ] **Step 2: Light border + soft shadow (lines ~43–44)**

Replace:
```tsx
border: '1px solid rgba(0, 200, 255, 0.14)',
boxShadow: scrolled ? '0 8px 40px rgba(0, 0, 0, 0.4)' : 'none',
```
with:
```tsx
border: '1px solid var(--border-subtle)',
boxShadow: scrolled ? '0 8px 24px rgba(0, 0, 0, 0.08)' : 'none',
```

- [ ] **Step 3: Recolor the logo SVG strokes/fills**

Replace every `#00c8ff` in the SVG (lines ~50–57) with `#00ACAC`. (8 occurrences — `polygon` stroke, `circle` fill, and the 6 `line` strokes.)

- [ ] **Step 4: Remove glow on the CTA (lines ~102–105)**

Replace:
```tsx
boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',
```
with:
```tsx
boxShadow: 'none',
```
And in the two handlers replace the glow values:
```tsx
onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(0.95)'; }}
onMouseLeave={e => { e.currentTarget.style.filter = 'none'; }}
```

- [ ] **Step 5: Build + commit**

Run: `npm run build` → succeeds.
```bash
git add src/components/Nav.tsx
git commit -m "feat: light nav bar with teal logo, no glow"
```

---

### Task 5: Fix Footer for light theme

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Recolor the logo SVG (lines ~29–34)**

Replace every `#00c8ff` with `#00ACAC` (polygon stroke, circle fill, 4 line strokes).

- [ ] **Step 2: Build + visual check**

Run: `npm run build` → succeeds. Confirm footer text is dark-on-light and readable; the remaining `var(--cyan)`, `var(--text-muted)`, `var(--border-glow)` references resolve to teal/muted automatically.

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: teal footer logo for light theme"
```

---

### Task 6: Fix CTA / waitlist section

**Files:**
- Modify: `src/components/CTA.tsx`

**Interfaces:**
- Consumes: light tokens from Task 1. Preserves the `#waitlist` anchor and the form submit behavior.

- [ ] **Step 1: Replace the purple radial accent (line ~62)**

Replace:
```tsx
background: 'radial-gradient(ellipse, rgba(123, 92, 255, 0.06) 0%, transparent 70%)',
```
with:
```tsx
background: 'radial-gradient(ellipse, rgba(0, 172, 172, 0.06) 0%, transparent 70%)',
```

- [ ] **Step 2: Replace the green status pill (lines ~104–105)**

Replace:
```tsx
background: 'rgba(0, 255, 135, 0.06)',
border: '1px solid rgba(0, 255, 135, 0.25)',
```
with:
```tsx
background: 'var(--cyan-ghost)',
border: '1px solid var(--border-glow)',
```

- [ ] **Step 3: Replace submit-button glow (lines ~156, 167, 171–172)**

Replace the loading background `'rgba(0,200,255,0.5)'` with `'rgba(0,172,172,0.5)'`.
Replace `boxShadow: '0 0 20px rgba(0, 200, 255, 0.25)',` with `boxShadow: 'none',`.
Replace the two glow handlers with:
```tsx
onMouseEnter={e => { if (!isLoading) e.currentTarget.style.filter = 'brightness(0.95)'; }}
onMouseLeave={e => { e.currentTarget.style.filter = 'none'; }}
```

- [ ] **Step 4: Error text color (line ~184)**

`color: '#ff6b6b'` → leave as-is (error red reads fine on light); or align to Design.MD error `'#ba1a1a'`. Use `'#ba1a1a'`.

- [ ] **Step 5: Build + commit**

Run: `npm run build` → succeeds.
```bash
git add src/components/CTA.tsx
git commit -m "feat: light-theme CTA/waitlist, teal accents, no glow"
```

---

### Task 7: Visual sweep of auto-flipped components + final build

**Files:**
- Modify (only if a defect is found): `src/components/Features.tsx`, `HowItWorks.tsx`, `Numbers.tsx`, `SuccessStories.tsx`, `UseCases.tsx`, `ProductWays.tsx`, `FAQ.tsx`, `SectionHeader.tsx`

**Interfaces:**
- Consumes: light tokens from Task 1. These components are expected to auto-flip; this task catches stragglers.

- [ ] **Step 1: Grep for leftover dark/old values**

Run:
```bash
grep -rnE "#00c8ff|7b5cff|123, ?92, ?255|0, ?255, ?135|Oxanium|Figtree|hero-bg|rgba\(0, ?200, ?255" src/components
```
Expected: no matches. Fix any hit by swapping to the teal/light equivalent (`#00ACAC` / `rgba(0,172,172,…)`), removing glow box-shadows, and replacing gradient text/borders with flat teal.

- [ ] **Step 2: Run dev server and eyeball each section**

Run `npm run dev`. Scroll the full page. Check: no dark-on-dark, no low-contrast teal body text, cards read as white/`#f5f5f3` on the off-white page, headings black, soft shadows only.

- [ ] **Step 3: Final build**

Run: `npm run build`
Expected: succeeds for the Cloudflare adapter.

- [ ] **Step 4: Commit any fixes**

```bash
git add src/components
git commit -m "fix: light-theme visual sweep of remaining sections"
```
