# Design System — Plan & Conventions

## Overview

Human-maintained brief for **BJD Woodworking**: how the design system is organized, how to extend it, and how docs stay in sync. For **extracted token values and registry status**, run `npm run design-system:docs` and read the generated **`src/design-system/index.md`** (do not edit that file by hand).

---

## Two documents

| Document | Role |
|----------|------|
| **`design-system-plan.md`** (this file) | Process, directory layout, conventions, when to regenerate docs. |
| **`src/design-system/index.md`** | Factual snapshot: **`@theme inline`** token map from CSS, registry notes, `meta` contract snippet. |

---

## Directory layout

```
tailwind.config.js              # Minimal v4 stub (no theme tokens here)
src/
  app/
    globals.css                 # @import "tailwindcss", @source, @theme inline (app tokens)
    design-system/
      page.tsx                  # Dev-only /design-system page
  design-system/
    registry.ts                 # Manual list of showcase components (used by docs tooling)
    index.md                    # Generated — npm run design-system:docs
    styles/                     # Theme CSS (@theme inline, e.g. hobbit-theme.css)
    components/                 # Design-system UI (flat files and subfolders allowed)
```

---

## Design tokens

Tokens are **Tailwind v4 `@theme inline`** in CSS (`src/app/globals.css` and `src/design-system/styles/`). Use **`@source`** in `globals.css` for content paths. Put shared literals on **`:root`** (or equivalent) when utilities need `var(...)`, then map them inside `@theme inline`.

**Current values:** see the **Tokens** section in **`src/design-system/index.md`** after running `npm run design-system:docs`.

---

## Components

Live under **`src/design-system/components/`** (one file or a subfolder with a barrel export). Register showcase entries in **`src/design-system/registry.ts`**. Each registered preview should export a default component and a named **`meta`** object (`name`, optional `description`, optional `variants`). The exact shape is repeated in **`src/design-system/index.md`** (generated).

Use Tailwind utilities where possible; **narrow inline `style` is acceptable** for dynamic demos (for example swatches driven by a hex prop).

---

## `/design-system` route

**`src/app/design-system/page.tsx`** is **development only** (`notFound()` when `NODE_ENV !== 'development'`). It is a living preview, not an exhaustive auto-catalog of every file in `components/`.

**Visual check:** run `npm run dev` and open `http://localhost:3000/design-system`.

**Static snapshot** (with dev server on `localhost:3000`):

```bash
single-file --browser-wait-until networkidle0 http://localhost:3000/design-system design-system-snapshot.html
```

---

## Regenerating `index.md`

After changing **`@theme inline`** (or supporting `:root` variables), **`registry.ts`**, or anything the generator should reflect:

```bash
npm run design-system:docs
```

Implementation: **`scripts/generate-design-system-docs.mjs`**. Extend that script when you need richer output (for example parsing **`registry.ts`** for a full component list).

---

## Conventions

- Prefer design-system tokens (from `@theme inline`) over magic values in app UI.
- New showcase components: add **`meta`**, register in **`registry.ts`**, run **`npm run design-system:docs`**.
- Do not hand-edit **`src/design-system/index.md`**.

---

## Notes for Cursor

Before UI or design-system work, read **`src/design-system/index.md`** (run **`npm run design-system:docs`** if it may be stale). Use this **`design-system-plan.md`** for workflow and layout. New primitives belong under **`src/design-system/components/`** first, then consume them from app routes.
