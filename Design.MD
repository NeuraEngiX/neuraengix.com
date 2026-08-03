---
name: Logic Mind Design System
colors:
  surface: '#f5fbfa'
  surface-dim: '#d5dbda'
  surface-bright: '#f5fbfa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5f4'
  surface-container: '#e9efee'
  surface-container-high: '#e3e9e8'
  surface-container-highest: '#dee4e3'
  on-surface: '#171d1d'
  on-surface-variant: '#3c4949'
  inverse-surface: '#2b3231'
  inverse-on-surface: '#ecf2f1'
  outline: '#6c7a79'
  outline-variant: '#bbc9c8'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#00acac'
  on-primary-container: '#003939'
  inverse-primary: '#56d9d9'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#974819'
  on-tertiary: '#ffffff'
  tertiary-container: '#e1824e'
  on-tertiary-container: '#582200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#76f6f5'
  primary-fixed-dim: '#56d9d9'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f4f'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb691'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783101'
  background: '#f5fbfa'
  on-background: '#171d1d'
  surface-variant: '#dee4e3'
  background-app: '#DFDEDC'
  background-editor: '#000000'
  text-primary: '#000000'
  text-secondary: '#464545'
  border-muted: '#464545'
  status-disabled: '#A6A7A2'
  accent-teal: '#00ACAC'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  small:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  code:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 2rem
  gutter: 1rem
  sidebar-width: 260px
  panel-width: 320px
  base-unit: 4px
---

# Design System — AI Code Generator Startup

## 1. Brand Overview

**Product:** AI-powered code generator for developers, startups, and technical teams.  
**Brand personality:** Fast, intelligent, precise, modern, trustworthy, developer-first.

The visual identity should feel minimal, technical, and highly usable. The interface should prioritize clarity, speed, and confidence, with a clean developer-focused aesthetic.

---

## 2. Color Palette

Extracted from the provided brand image.

| Token | Hex | Usage |
|---|---:|---|
| `color-black` | `#000000` | Primary text, dark UI backgrounds, terminal/code surfaces |
| `color-off-white` | `#DFDEDC` | Main app background, cards on dark surfaces, neutral panels |
| `color-dark-gray` | `#464545` | Secondary text, borders, muted UI elements |
| `color-teal` | `#00ACAC` | Primary accent, CTAs, active states, highlights, links |
| `color-warm-gray` | `#A6A7A2` | Disabled states, secondary backgrounds, subtle dividers |

### Recommended color usage

- Use `#000000` for high-contrast text and developer-oriented dark surfaces.
- Use `#DFDEDC` as the primary light background instead of pure white.
- Use `#00ACAC` sparingly for actions, active navigation, focus states, and AI-related highlights.
- Use `#464545` for secondary copy, icons, borders, and supporting UI.
- Use `#A6A7A2` for muted surfaces, disabled controls, and quiet layout structure.

### Accessibility notes

- Avoid using teal text on light gray backgrounds for long body copy.
- Use teal mainly for buttons, icons, badges, focus rings, and short labels.
- Primary body text should be black or dark gray for readability.

---

## 3. Typography

### Font direction

Use a modern sans-serif for the product UI and a monospace font for code-related surfaces.

**Primary UI font options:**

- Inter
- Geist Sans
- IBM Plex Sans
- SF Pro Display / SF Pro Text

**Code font options:**

- JetBrains Mono
- Geist Mono
- IBM Plex Mono
- Fira Code

### Type scale

| Style | Size | Weight | Usage |
|---|---:|---:|---|
| Display | 56–72px | 600–700 | Landing page hero headlines |
| H1 | 40–48px | 600–700 | Main page titles |
| H2 | 28–36px | 600 | Section headings |
| H3 | 20–24px | 600 | Cards, feature titles |
| Body | 16px | 400 | Main content |
| Small | 14px | 400–500 | Captions, metadata, helper text |
| Code | 13–15px | 400 | Editor, generated code, terminal output |

### Typography principles

- Keep headlines short, direct, and product-focused.
- Use generous line-height for readability.
- Use monospace only for code, prompts, commands, file paths, and technical examples.

---

## 4. Logo Direction

The logo should feel simple, technical, and scalable.

### Possible logo concepts

1. **Wordmark-first:** Minimal black wordmark with a subtle AI/code symbol.
2. **Linked-node mark:** A geometric symbol representing connected code blocks, files, or agents.
3. **Prompt cursor mark:** A cursor or terminal prompt combined with a spark/AI indicator.
4. **Code bracket mark:** Abstract `{ }`, `< >`, or `/` shape with a teal highlight.

### Logo usage

- Use black logo on light backgrounds.
- Use off-white logo on black backgrounds.
- Use teal only as an accent, not as the full logo color.

---

## 5. UI Style

### Overall direction

The interface should combine a clean SaaS dashboard with developer-tool precision.

**Keywords:**

- Minimal
- Fast
- Technical
- Structured
- Calm
- Intelligent
- High contrast

### Layout

- Use generous spacing and clear hierarchy.
- Prefer grid-based layouts.
- Keep dashboards compact but not crowded.
- Prioritize the code editor, prompt input, and generated output areas.

### Border radius

| Element | Radius |
|---|---:|
| Buttons | 8–12px |
| Cards | 16–24px |
| Input fields | 10–14px |
| Modals | 20–28px |
| Code windows | 14–18px |

### Shadows

Use soft, subtle shadows only when needed. Developer tools should feel stable, not overly decorative.

Example:

```css
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
```

---

## 6. Core Components

### Buttons

#### Primary button

- Background: `#00ACAC`
- Text: `#000000` or `#FFFFFF` depending on contrast testing
- Usage: Generate code, start building, run task, create project

Example labels:

- Generate code
- Build app
- Run agent
- Create project
- Start free

#### Secondary button

- Background: transparent or `#DFDEDC`
- Border: `#A6A7A2`
- Text: `#000000`

Example labels:

- View demo
- Import repo
- See examples
- Read docs

#### Ghost button

- Background: transparent
- Text: `#464545`
- Hover: light gray surface

---

## 7. Product Interface Patterns

### Main app structure

Recommended app layout:

1. **Left sidebar**
   - Projects
   - Recent generations
   - Templates
   - Settings

2. **Main workspace**
   - Prompt input
   - Code generation status
   - File tree
   - Editor preview

3. **Right panel**
   - AI explanation
   - Suggested changes
   - Test results
   - Deployment status

### Prompt input

The prompt input should be prominent and frictionless.

Placeholder examples:

- “Describe the feature you want to build…”
- “Generate a React dashboard with auth and billing…”
- “Refactor this API route and add tests…”

### Code output

Code blocks should use a dark background with clear syntax highlighting.

Recommended code surface:

```css
.code-panel {
  background: #000000;
  color: #DFDEDC;
  border: 1px solid #464545;
  border-radius: 16px;
}
```

---

## 8. Landing Page Structure

### Hero section

**Headline examples:**

- “Generate production-ready code from a single prompt.”
- “Your AI engineer for shipping software faster.”
- “Turn ideas into clean, working code.”

**Subheadline example:**

Build full-stack features, refactor existing code, generate tests, and ship faster with an AI code generation workspace built for developers.

**Primary CTA:** Start building  
**Secondary CTA:** Watch demo

### Feature sections

1. **Prompt to code**
   - Generate components, APIs, tests, and documentation from natural language.

2. **Repo-aware generation**
   - Understands your existing codebase, architecture, and style.

3. **Review before merge**
   - Inspect diffs, explanations, tests, and suggested improvements.

4. **Ship-ready workflows**
   - Connect GitHub, run tests, and create pull requests.

### Social proof

Use developer-focused proof points:

- “Used by founders, engineers, and product teams.”
- “Built for fast-moving software teams.”
- “From idea to pull request in minutes.”

---

## 9. Voice and Messaging

### Tone

- Clear
- Confident
- Technical but approachable
- Direct
- Useful

### Messaging principles

- Avoid vague AI hype.
- Emphasize outcomes: faster shipping, cleaner code, fewer repetitive tasks.
- Use developer language, but keep it understandable.

### Good phrases

- “Generate, review, and ship code faster.”
- “AI code generation that understands your repo.”
- “Move from prompt to pull request.”
- “Build features, tests, and docs in one workflow.”

### Avoid

- “Revolutionary AI magic”
- “10x everything”
- “No developers needed”
- “Perfect code every time”

---

## 10. Iconography

Use simple line icons with consistent stroke width.

Recommended icon themes:

- Code brackets
- Terminal cursor
- File tree
- Pull request
- Spark/AI indicator
- Git branch
- Shield/check for security
- Lightning bolt for speed

Icon style:

- 1.5px–2px stroke
- Rounded caps
- Minimal detail
- Mostly monochrome with teal accent

---

## 11. Illustration Style

Illustrations should be abstract and product-led, not cartoonish.

Recommended visuals:

- Code windows
- AI agent flow diagrams
- Connected file nodes
- Before/after code diffs
- Prompt-to-output sequences
- Deployment pipeline graphics

Use teal to highlight active or intelligent parts of the flow.

---

## 12. Motion Design

Motion should communicate speed and intelligence without becoming distracting.

Recommended animations:

- Cursor typing effect
- Code streaming into editor
- Subtle glowing teal focus ring
- Smooth panel transitions
- File tree expanding
- Diff preview appearing

Avoid excessive bouncing, spinning, or decorative animations.

---

## 13. Example CSS Variables

```css
:root {
  --color-black: #000000;
  --color-off-white: #DFDEDC;
  --color-dark-gray: #464545;
  --color-teal: #00ACAC;
  --color-warm-gray: #A6A7A2;

  --font-sans: Inter, Geist, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Geist Mono", monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}
```

---

## 14. Example Button CSS

```css
.button-primary {
  background: var(--color-teal);
  color: var(--color-black);
  border: none;
  border-radius: var(--radius-md);
  padding: 12px 18px;
  font-weight: 600;
  cursor: pointer;
}

.button-primary:hover {
  filter: brightness(0.95);
}

.button-secondary {
  background: transparent;
  color: var(--color-black);
  border: 1px solid var(--color-warm-gray);
  border-radius: var(--radius-md);
  padding: 12px 18px;
  font-weight: 500;
  cursor: pointer;
}
```

---

## 15. Recommended Product Screens

### MVP screens

1. Landing page
2. Sign in / onboarding
3. New project setup
4. Prompt-to-code workspace
5. Generated code review
6. File tree and editor preview
7. Pull request creation
8. Billing / plan page
9. Settings

### Dashboard cards

- Recent projects
- Active generations
- Open pull requests
- Test status
- Usage this month
- Suggested next actions

---

## 16. Design Do’s and Don’ts

### Do

- Keep the UI clean and focused.
- Make code easy to read.
- Use teal for clear action and status cues.
- Show AI reasoning in compact, inspectable panels.
- Give users control before applying generated changes.

### Don’t

- Overload screens with too many AI effects.
- Use teal as the main background everywhere.
- Hide generated changes from the user.
- Use low-contrast gray text for important information.
- Make the product feel like a toy instead of a professional tool.

---

## 17. Brand Summary

This startup should look and feel like a serious AI engineering tool: minimal, fast, intelligent, and reliable. The black, gray, off-white, and teal palette creates a strong developer-focused foundation, while the teal accent gives the brand a recognizable AI/product energy.

The design goal is simple: help users trust the AI, understand the code, and ship software faster.
