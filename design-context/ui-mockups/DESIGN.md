# Hobbit Hole Design System
**Artisan Portfolio Theme**

A warm, earthy design system for showcasing handcrafted furniture and woodworking. Built for trust, craftsmanship, and natural beauty.

---

## Color Palette

### Foundation Colors
```css
--color-cream-light: #FAF5EA;    /* Primary background, text on dark */
--color-cream-base: #F0E8D0;     /* Page background */
--color-cream-warm: #F0E6C8;     /* Hero sections, accents */
--color-sand: #D8CEAA;           /* Borders, dividers */
```

### Primary — Forest Green
```css
--color-forest-dark: #4A6A34;    /* Footer, labels, panels */
--color-forest-base: #6B8E4E;    /* Navigation, primary actions */
--color-forest-light: #8AAE7A;   /* Accents, tags */
--color-forest-pale: #C8E0B0;    /* Secondary nav text */
--color-forest-soft: #A8C898;    /* Footer links */
```

### Accent — Golden Hour
```css
--color-gold-base: #C8963C;      /* CTAs, active states, arrows */
--color-gold-dark: #A67A28;      /* Eyebrows, category labels */
--color-gold-light: #C8A860;     /* Lightbox descriptions */
--color-gold-rich: #D4A848;      /* Decorative accents */
```

### Neutrals — Wood Tones
```css
--color-wood-darkest: #4A3A18;   /* Headings, lightbox header */
--color-wood-medium: #7A6030;    /* Subheadings, descriptions */
--color-wood-light: #8B7A50;     /* Specs, secondary text */
--color-wood-border: #4A3A1A;    /* Lightbox dividers */
--color-wood-accent: #8B6A30;    /* Lightbox borders */
```

### Utility Colors
```css
--color-tag-available-bg: rgba(138, 174, 122, 0.15);
--color-tag-available-border: rgba(138, 174, 122, 0.4);
--color-tag-sold-bg: rgba(200, 150, 60, 0.1);
--color-tag-sold-border: rgba(200, 150, 60, 0.35);
--color-overlay: rgba(74, 58, 24, 0.93);
--color-hover-overlay: rgba(74, 58, 24, 0.45);
```

---

## Typography

### Font Families
```css
--font-serif-display: 'Playfair Display', serif;  /* Headings, logos */
--font-serif-body: 'Lora', Georgia, serif;        /* Body text */
--font-mono: 'Courier Prime', monospace;          /* Labels, UI, eyebrows */
```

**Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Courier+Prime&display=swap');
```

### Type Scale

#### Display & Headings
```css
--text-h1: 30px;           /* Page headings */
--text-display-nav: 15px;  /* Nav logo */
--text-card-title: 14px;   /* Card headings */
--text-footer-logo: 13px;  /* Footer branding */
```

#### Body Text
```css
--text-body: 13px;         /* Hero subtext, descriptions */
--text-body-small: 12px;   /* Lightbox intro */
--text-body-xs: 11px;      /* Lightbox descriptions, specs */
```

#### UI & Labels
```css
--text-eyebrow: 10px;      /* Category labels, eyebrows */
--text-nav-link: 11px;     /* Navigation links */
--text-button: 11px;       /* Buttons, CTAs */
--text-filter: 11px;       /* Filter tabs */
--text-tag: 10px;          /* Status tags */
--text-spec: 11px;         /* Specifications */
--text-footer-copy: 10px;  /* Copyright */
--text-label-header: 0.72rem;  /* Frame labels */
```

#### Line Heights
```css
--leading-tight: 1.2;
--leading-normal: 1.5;
--leading-relaxed: 1.7;
```

#### Letter Spacing
```css
--tracking-tight: 0.05em;
--tracking-normal: 0.06em;
--tracking-wide: 0.08em;
--tracking-wider: 0.12em;
--tracking-widest: 0.15em;
--tracking-ultra: 0.2em;
```

---

## Spacing & Layout

### Spacing Scale
```css
--space-xs: 4px;
--space-sm: 6px;
--space-md: 8px;
--space-lg: 10px;
--space-xl: 12px;
--space-2xl: 14px;
--space-3xl: 16px;
--space-4xl: 20px;
--space-5xl: 28px;
--space-6xl: 36px;
--space-7xl: 40px;
```

### Content Padding
```css
--padding-section-x: 2.5rem;   /* Horizontal section padding */
--padding-section-y: 2rem;     /* Vertical section padding */
--padding-card: 12px 14px 14px;
--padding-nav: 0 2rem;
--padding-hero: 2.25rem 2.5rem 2rem;
```

### Borders & Radius
```css
--border-width: 1px;
--border-width-thick: 2px;
--border-radius-sm: 3px;       /* Tags */
--border-radius-md: 4px;       /* Buttons */
--border-radius-lg: 8px;       /* Cards, lightbox */
--border-radius-xl: 12px;      /* Frame */
```

### Container
```css
--container-max: 900px;
```

---

## Component Patterns

### Navigation Bar
- **Height:** 52px
- **Background:** `--color-forest-base`
- **Logo:** Display serif, 15px, cream
- **Links:** Mono, 11px, pale green, uppercase, wide tracking
- **Active state:** Cream text + gold bottom border (1.5px, 2px padding-bottom)
- **CTA button:** Mono, 11px, gold background, cream text, 4px radius

### Hero Section
- **Background:** `--color-cream-warm`
- **Eyebrow:** Mono, 10px, gold-dark, ultra-wide tracking, uppercase
- **Heading:** Display serif, 30px, wood-darkest, bold
- **Subtext:** Serif body, 13px, wood-medium, relaxed line-height
- **Max-width:** 520px

### Filter Bar
- **Background:** Cream light, bottom border
- **Buttons:** Mono, 11px, wood-light, 2px bottom border (transparent default)
- **Active:** Wood-darkest text, gold bottom border
- **Padding:** 0.85rem vertical, 1.1rem horizontal

### Portfolio Card
- **Background:** Off-white (`#FFFDF5`)
- **Border:** 1px sand color
- **Radius:** 8px
- **Hover:** Scale 1.02, overlay with eye emoji (28px)
- **Image aspect ratio:** 4:3 (featured: 16:9)
- **Tags:** Mono, 10px, rounded background, thin border
- **Arrow:** Gold color, 16px

### Lightbox Modal
- **Overlay:** 93% opacity dark overlay
- **Structure:** Two-column grid (3fr + 2fr)
- **Header:** Wood-darkest background, eyebrow + close
- **Image area:** Placeholder color, carousel dots at bottom
- **Info panel:** Dark wood background, structured specs with dividers
- **Buttons:** Stacked, gold primary + green ghost outline

### Footer
- **Background:** `--color-forest-dark`
- **Layout:** Three-column flex (logo, links, copyright)
- **Links:** Mono, 11px, forest-soft, uppercase

---

## UI States

### Interactive States
```css
/* Hover */
.card:hover { transform: scale(1.02); }
.overlay:hover { opacity: 1; background: rgba(74,58,24,0.45); }

/* Active */
.filter-active { border-bottom-color: var(--color-gold-base); }
.nav-active { border-bottom: 1.5px solid var(--color-gold-base); }

/* Focus */
/* Add 2px gold outline with 2px offset */
```

### Disabled States
```css
/* Reduce opacity to 0.5, remove cursor pointer */
```

---

## Shadows & Elevation
```css
--shadow-card: 0 8px 40px rgba(74, 58, 24, 0.18);
```

---

## Design Principles

### Visual Hierarchy
1. **Display serif** for primary headings and branding
2. **Body serif** for readable content
3. **Monospace** for all UI chrome, labels, and technical info
4. **Color as signal:** Gold for actions/active states, green for brand/navigation

### Texture & Materiality
- Warm, earthy tones evoke natural wood
- Subtle borders suggest craftsmanship and attention to detail
- Rounded corners feel approachable, not corporate
- Typography mix creates vintage-modern balance

### Information Density
- Generous whitespace around content
- Compact UI elements (mono 10-11px) keep chrome minimal
- Large images with 4:3 or 16:9 ratios showcase work

### Accessibility Considerations
- Ensure 4.5:1 contrast ratio minimum (check wood-light on cream-light)
- Provide hover AND focus states for all interactive elements
- Use semantic HTML and ARIA labels for screen readers
- Support keyboard navigation in gallery and lightbox

---

## Usage Guidelines

### When to use this system
- Portfolio sites for artisans, makers, craftspeople
- E-commerce for handmade goods
- Studio or workshop showcases
- Any brand emphasizing quality, tradition, and craftsmanship

### Color combinations

**High contrast (headings):**
- Wood-darkest on cream-light
- Cream-light on forest-dark

**Medium contrast (body text):**
- Wood-medium on cream-light
- Wood-light on cream-warm

**Accent pairings:**
- Gold-base with forest-base (CTA on nav)
- Gold-dark with cream-warm (eyebrows on hero)

### Typography pairing rules
1. Playfair Display = hierarchy and elegance (headings only)
2. Lora = warmth and readability (long-form content)
3. Courier Prime = structure and clarity (all UI, no exceptions)
4. Never mix serif fonts in the same text block
5. Always uppercase + letter-spacing for mono text

---

## Component Checklist

When creating new components, ensure:
- [ ] Typography uses correct font family for context
- [ ] Colors come from defined palette (no one-offs)
- [ ] Spacing uses the scale (no arbitrary values)
- [ ] Interactive elements have hover/focus/active states
- [ ] Text is uppercase + letter-spaced if using mono font
- [ ] Borders use 1px or 2px thickness only
- [ ] Radius uses 3px, 4px, 8px, or 12px values
- [ ] Accessible color contrast (WCAG AA minimum)
