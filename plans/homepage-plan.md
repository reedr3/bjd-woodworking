# BJD Woodworking — Homepage Redesign
## Design Document

> **Purpose:** Specification for refining the homepage mockup to align with the hobbit-library component system, plus definitions for new components to be added to the library.
>
> **Repo:** `reedr3/bjd-woodworking` · **Library path:** `src/hobbit-library/`
>
> **Primary homepage goal:** Get inspired and commission something (portfolio-first)

---

## 1. Page Structure

The homepage is wrapped in `HobbitPageShell` and composed of the following sections in order:

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Navigation | `HobbitNav` | Existing — no changes |
| 2 | Hero | `HobbitHero` | Existing — update required (see §3) |
| 3 | Featured Pieces | `HobbitPortfolioCard` + `HobbitTag` | Existing — use as-is |
| 4 | Commission a Piece | `HobbitProcessSteps` | **New component** (see §4) |
| 5 | Testimonials | `HobbitTestimonial` | **New component** (see §5) |
| 6 | Footer | `HobbitFooter` | **New component** (see §6) |

**Removed from original mockup:**
- Instagram photo grid (entire section removed)
- Shop Pieces section (entire section removed)

---

## 2. Navigation — `HobbitNav`

No changes to the component itself. Homepage usage:

- **Brand:** Bridget J. Duffy
- **Links:** Portfolio · Shop · Commissions · About · Contact
- **CTA button:** "Request Commission" → links to `/commissions`
- **Button style:** `HobbitButton` variant `primary`

---

## 3. Hero — `HobbitHero` (Update Required)

### Current state
`HobbitHero` is described as a "warm bordered panel." The homepage mockup uses a **split layout** — text/CTAs on the left, a photo panel on the right — which the current component does not support.

### Required update
Add a `layout` prop to `HobbitHero` with two variants:

| Variant | Description |
|---------|-------------|
| `centered` | Existing behavior — eyebrow, title, copy centered on a warm bordered panel |
| `split` | New — text column left (~58% width), photo slot right (~42% width) |

### Split layout spec
- **Left column:** eyebrow label, H1 title, supporting copy, button group
- **Right column:** image slot (accepts a `src` prop or renders a placeholder); background defaults to `--color-hobbit-gold-thumb` when no image supplied
- **Background:** `--color-hobbit-cream-warm`
- **Min height:** `240px`
- **Eyebrow:** `font-hobbit-ui`, `10px`, `--color-hobbit-gold-dark`, `uppercase`, `letter-spacing: 0.2em`
- **H1:** `font-hobbit-display`, `28px`, `--color-hobbit-wood-darkest`, `font-weight: 700`
- **Supporting copy:** `font-hobbit-body`, `13px`, `--color-hobbit-gold-dark`, `line-height: 1.7`, `max-width: 300px`

### Homepage usage
```tsx
<HobbitHero
  layout="split"
  eyebrow="Handcrafted furniture"
  title="Made to last a lifetime"
  copy="Every piece is designed around your space and built by hand in our workshop."
  photoSrc="/images/hero.jpg"
  buttons={[
    { label: "Start a commission", variant: "primary", href: "/commissions" },
    { label: "View the work", variant: "ghost", href: "/portfolio" },
  ]}
/>
```

---

## 4. Featured Pieces — `HobbitPortfolioCard` + `HobbitTag`

### Layout
- 3-column × 2-row grid
- Gap: `10px`
- "View all work" link (right-aligned, `--color-hobbit-gold-base`, underlined) links to `/portfolio`

### Card style
Use `HobbitPortfolioCard` with **always-visible info below the image** (not hover-overlay). This ensures visitors absorb piece names and details immediately, supporting the commission-first goal, and works correctly on mobile.

### Card content per item
- Image slot (4:3 aspect ratio)
- `HobbitTag` — wood species (variant: `forest`)
- Piece title — `font-hobbit-display`, `13px`, `--color-hobbit-wood-darkest`, `font-weight: 700`
- Spec line — dimensions or descriptor — `font-hobbit-ui`, `10px`, `--color-hobbit-gold-dark`

### Sample data (placeholder)
| Title | Tag | Spec |
|-------|-----|------|
| Walnut dining table | Walnut | 84″ × 38″ |
| White oak sideboard | White Oak | 60″ × 32″ |
| Cherry writing desk | Cherry | 48″ × 24″ |
| Maple side tables | Hard Maple | Set of 2 |
| Walnut bookshelf | Walnut | 72″ tall |
| Oak coffee table | White Oak | 48″ × 24″ |

---

## 5. Commission a Piece — `HobbitProcessSteps` (New Component)

### Add to hobbit-library
**File:** `src/hobbit-library/components/HobbitProcessSteps.tsx`

### Component meta
```tsx
export const meta = {
  name: 'HobbitProcessSteps',
  description: 'Numbered process step strip for commission or how-it-works flows.',
  variants: ['horizontal', 'vertical'],
}
```

### Props
```tsx
type Step = {
  number: string       // e.g. "01"
  title: string
  description: string
}

type HobbitProcessStepsProps = {
  eyebrow?: string
  heading: string
  subtext?: string
  steps: Step[]
  cta?: {
    label: string
    href: string
    variant?: 'primary' | 'ghost' | 'outline-gold'
  }
  layout?: 'horizontal' | 'vertical'  // default: 'horizontal'
}
```

### Visual spec

**Section wrapper**
- Background: `--color-hobbit-cream-warm`
- Padding: `2.25rem 2.5rem`

**Heading block** (above the strip)
- Eyebrow: `font-hobbit-ui`, `10px`, `--color-hobbit-gold-dark`, uppercase
- Amber divider: `36px × 2px`, `--color-hobbit-gold-base`, `border-radius: 1px`
- Heading: `font-hobbit-display`, `22px`, `--color-hobbit-wood-darkest`
- Subtext: `font-hobbit-body`, `13px`, `--color-hobbit-gold-dark`, `line-height: 1.7`, `max-width: 500px`

**Step strip (horizontal layout)**
- Background: `--color-hobbit-forest-dark` (slightly darker than forest-base)
- `border-radius: 8px`
- 4-column grid (equal widths)
- Each step separated by a `1px` right border in `--color-hobbit-forest-base`; last step has no border

**Per step**
- Padding: `1rem 1.1rem`
- Step number: `font-hobbit-ui`, `10px`, `--color-hobbit-forest-light`, `letter-spacing: 0.1em`
- Title: `font-hobbit-display`, `13px`, `--color-hobbit-cream-light`, `font-weight: 700`
- Description: `font-hobbit-body`, `10px`, `--color-hobbit-forest-pale`, `line-height: 1.5`

**CTA button**
- Rendered below the strip, `margin-top: 1.25rem`
- Uses `HobbitButton`

### Homepage usage
```tsx
<HobbitProcessSteps
  eyebrow="How it works"
  heading="Commission a piece"
  subtext="Have something specific in mind? Every commission starts with a conversation. We'll work together from first sketch to final delivery."
  steps={[
    { number: "01", title: "Consult", description: "We discuss your vision, space, and budget over a free call." },
    { number: "02", title: "Design", description: "Sketches and material samples before any wood is cut." },
    { number: "03", title: "Build", description: "Handcrafted in our workshop, with progress updates throughout." },
    { number: "04", title: "Deliver", description: "White-glove delivery and installation in your home." },
  ]}
  cta={{ label: "Start your commission", href: "/commissions", variant: "primary" }}
  layout="horizontal"
/>
```

---

## 6. Testimonials — `HobbitTestimonial` (New Component)

### Add to hobbit-library
**File:** `src/hobbit-library/components/HobbitTestimonial.tsx`

### Component meta
```tsx
export const meta = {
  name: 'HobbitTestimonial',
  description: 'Customer quote display in grid or single featured layout.',
  variants: ['grid', 'featured'],
}
```

### Props
```tsx
type Testimonial = {
  quote: string
  author: string
  project?: string
  rating?: number   // 1–5, default 5
}

type HobbitTestimonialProps = {
  eyebrow?: string
  heading?: string
  items: Testimonial[]
  variant: 'grid' | 'featured'
}
```

### Visual spec — `grid` variant

**Section wrapper**
- Background: `--color-hobbit-cream-light`
- Padding: `2.25rem 2.5rem`

**Cards**
- 3-column grid, gap `12px`
- Card background: `--color-hobbit-paper`
- Border: `1px solid --color-hobbit-sand`
- `border-radius: 8px`, padding: `14px`

**Per card**
- Stars: `--color-hobbit-gold-base`, `12px`
- Quote: `font-hobbit-body`, italic, `12px`, `--color-hobbit-wood-medium`, `line-height: 1.7`
- Author: `font-hobbit-ui`, `11px`, `--color-hobbit-wood-darkest`
- Project: `font-hobbit-ui`, `10px`, `--color-hobbit-gold-dark`, `margin-top: 2px`

### Visual spec — `featured` variant
- Single quote, centered
- Quote font size: `18px`, `font-hobbit-body`, italic
- Author: `font-hobbit-ui`, `13px`
- Decorative large quotation mark in `--color-hobbit-gold-light` behind the text

### Homepage usage
```tsx
<HobbitTestimonial
  eyebrow="What clients say"
  heading="Testimonials"
  variant="grid"
  items={[
    { quote: "The dining table exceeded every expectation. The grain matching alone took my breath away.", author: "Sarah M.", project: "Custom walnut dining table" },
    { quote: "Nothing comes close to the quality or care that went into our sideboard.", author: "James & Lori T.", project: "White oak sideboard" },
    { quote: "From first sketch to delivery, the process was seamless. Compliments every time someone visits.", author: "Rachel K.", project: "Cherry writing desk" },
  ]}
/>
```

---

## 7. Footer — `HobbitFooter` (New Component)

### Add to hobbit-library
**File:** `src/hobbit-library/components/HobbitFooter.tsx`

### Component meta
```tsx
export const meta = {
  name: 'HobbitFooter',
  description: 'Site footer with brand, tagline, and navigation links in forest tones.',
}
```

### Props
```tsx
type FooterLink = {
  label: string
  href: string
}

type HobbitFooterProps = {
  brand: string
  tagline?: string
  links: FooterLink[]
  copyright?: string
}
```

### Visual spec
- Background: `--color-hobbit-forest-dark`
- Padding: `1.75rem 2.5rem 1.25rem`

**Top row** — three columns, space-between:
- Left: brand name (`font-hobbit-display`, `15px`, `--color-hobbit-cream-light`, `font-weight: 700`) + tagline below (`font-hobbit-body`, `11px`, `--color-hobbit-forest-light`, italic)
- Right: nav links (`font-hobbit-ui`, `11px`, `--color-hobbit-forest-pale`, uppercase, `letter-spacing: 0.07em`), gap `16px`

**Bottom row:**
- Copyright: `font-hobbit-ui`, `10px`, `--color-hobbit-forest-light`
- Top border: `1px solid --color-hobbit-forest-base`, `padding-top: 0.75rem`, `margin-top: 1rem`

> **Removed from mockup:** newsletter email signup field — not included in this component.

### Homepage usage
```tsx
<HobbitFooter
  brand="Bridget J. Duffy"
  tagline="Handmade with love since 2009"
  links={[
    { label: "Portfolio", href: "/portfolio" },
    { label: "Shop", href: "/shop" },
    { label: "Commissions", href: "/commissions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
  copyright="© 2026 Bridget J. Duffy"
/>
```

---

## 8. Token Reference

All components use tokens from `src/hobbit-library/styles/hobbit-hole-theme.css`. No hardcoded hex values.

| Role | Token |
|------|-------|
| Page background | `--color-hobbit-cream-light` |
| Warm section background | `--color-hobbit-cream-warm` |
| Card/paper background | `--color-hobbit-paper` |
| Card border | `--color-hobbit-sand` |
| Primary text | `--color-hobbit-wood-darkest` |
| Secondary text | `--color-hobbit-wood-medium` |
| Muted text | `--color-hobbit-gold-dark` |
| Accent / CTA | `--color-hobbit-gold-base` |
| Nav / footer background | `--color-hobbit-forest-dark` |
| Nav / footer links | `--color-hobbit-forest-pale` |
| Display font | `--font-hobbit-display` |
| Body font | `--font-hobbit-body` |
| UI / mono font | `--font-hobbit-ui` |

---

## 9. New Components Summary

| Component | File | Action |
|-----------|------|--------|
| `HobbitHero` | `components/HobbitHero.tsx` | **Update** — add `split` layout variant |
| `HobbitProcessSteps` | `components/HobbitProcessSteps.tsx` | **Create** |
| `HobbitTestimonial` | `components/HobbitTestimonial.tsx` | **Create** |
| `HobbitFooter` | `components/HobbitFooter.tsx` | **Create** |

After creating or updating components, run:
```bash
npm run hobbit-library:docs
```
to regenerate `src/hobbit-library/index.md`.