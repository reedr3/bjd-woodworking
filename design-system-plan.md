# Port Design System — Plan & Conventions

## Overview

This document describes the structure, conventions, and maintenance workflow for the Port design system. It is the brief for Cursor when setting up and maintaining the design system within this Next.js project.

---

## Directory Structure

```
port/
  src/
    design-system/
      components/         # Reusable UI components
      index.md            # This file (Cursor maintains this)
  tailwind.config.js      # Single source of truth for design tokens
  app/
    design-system/
      page.tsx            # Dev-only visual index page
```

---

## Design Tokens

All design tokens (colors, typography, spacing, border radius, shadows, etc.) are defined in `tailwind.config.js` under the `theme.extend` block. This is the **single source of truth**. No hardcoded values should appear in components — always reference Tailwind classes or CSS variables derived from the config.

Example structure:
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      // e.g. 'wood-dark': '#3B2A1A',
    },
    fontFamily: {
      // e.g. 'display': ['...', 'serif'],
    },
    spacing: {
      // custom spacing if needed
    },
  }
}
```

---

## Components

Each component lives in `src/design-system/components/` as its own `.tsx` file. Components should:

- Accept props for all meaningful variations
- Use only Tailwind classes for styling (no inline styles)
- Export a default component and a named `meta` object describing the component (see below)

### Component Meta Convention

Each component file should export a `meta` object so the index page can render it automatically:

```tsx
export const meta = {
  name: 'ButtonPrimary',
  description: 'Primary call-to-action button',
  variants: ['default', 'hover', 'disabled'],
}
```

---

## Dev-Only Design System Route

The `/design-system` route (`app/design-system/page.tsx`) renders all components visually, grouped by category. It should:

- Only be accessible in development (`process.env.NODE_ENV === 'development'`)
- Import all components from `src/design-system/components/`
- Show each component with its name, description, and all variants
- Show a design tokens section (colors, type scale, spacing) derived from the Tailwind config

To export a static snapshot for sharing:
```bash
# With the dev server running on localhost:3000
single-file --browser-wait-until networkidle0 http://localhost:3000/design-system design-system-snapshot.html
```

---

## design-system.md — AI Reference Document

`src/design-system/index.md` is the AI-readable summary of the design system. It is **never hand-edited**. Cursor regenerates it whenever the design system changes.

### What it contains

- Design intent and aesthetic direction (written once, updated if direction changes)
- All token values extracted from `tailwind.config.js`
- A list of all components with their props, variants, and intended usage
- Any design decisions and the reasoning behind them

### When Cursor should update it

Cursor should regenerate or update `index.md` whenever:
- A new token is added or changed in `tailwind.config.js`
- A new component is added to `src/design-system/components/`
- An existing component's props or variants change
- A design decision is made that affects usage conventions

### Prompt to use with Cursor

When updating the design system, use this prompt:

> "I've just added/changed [X]. Please update `src/design-system/index.md` to reflect this change, keeping all existing content intact and adding a new entry for [X] with its token values / props / usage notes."

---

## Workflow Summary

1. **Make a change** — edit `tailwind.config.js` or add/modify a component
2. **Ask Cursor to update** `src/design-system/index.md`
3. **View the result** at `localhost:3000/design-system` in the running dev server
4. **Export a snapshot** with SingleFile CLI if you need to share a visual version

---

## Conventions & Rules

- Never hardcode color values, font names, or spacing values in components
- Always reference Tailwind config tokens via utility classes
- New components must include a `meta` export
- The `/design-system` route must be dev-only — add a redirect or 404 for production
- `index.md` is generated, never hand-edited

---

## Notes for Cursor

When working on Port, always read `src/design-system/index.md` first for design context. When building new pages or components for Port, use only components and tokens from the design system. If a new pattern is needed that doesn't exist yet, create it in `src/design-system/components/` first, then use it.
