# Hobbit Library — Plan & Conventions

## Overview

Human-maintained brief for **BJD Woodworking**: how the Hobbit library is organized, how to extend it, and how docs stay in sync. For **extracted token values and registry status**, run `npm run hobbit-library:docs` and read the generated **`src/hobbit-library/index.md`** (do not edit that file by hand).

---

## Two documents

| Document | Role |
|----------|------|
| **`src/hobbit-library/docs/hobbit-library-plan.md`** (this file) | Process, directory layout, conventions, when to regenerate docs. |
| **`src/hobbit-library/index.md`** | Factual snapshot: **`@theme inline`** token map from CSS, registry notes, `meta` contract snippet. |

---

## Directory layout

```
tailwind.config.js              # Minimal v4 stub (no theme tokens here)
src/
  app/
    globals.css                 # @import "tailwindcss", @source, @theme inline (app tokens)
    page.tsx                    # Home (re-exports ./main)
    (dev-routes)/
      hobbit-library-view/
        page.tsx                # Dev-only route — Hobbit library preview (notFound in production)
  hobbit-library/
    registry.ts                 # Manual list of showcase components (used by docs tooling)
    index.md                    # Generated — npm run hobbit-library:docs
    docs/
      hobbit-library-plan.md    # This plan (human-maintained)
    scripts/
      generate-hobbit-library-docs.mjs
    styles/                     # Theme CSS (@theme inline, e.g. hobbit-hole-theme.css)
    components/                 # Hobbit library UI (flat files and subfolders allowed)
    utils/
      utils.ts                  # Shared helpers (e.g. cn) for library components
```

---

## Design tokens

Tokens are **Tailwind v4 `@theme inline`** in CSS (`src/app/globals.css` and `src/hobbit-library/styles/`). Use **`@source`** in `globals.css` for content paths. Put shared literals on **`:root`** (or equivalent) when utilities need `var(...)`, then map them inside `@theme inline`.

**Current values:** see the **Tokens** section in **`src/hobbit-library/index.md`** after running `npm run hobbit-library:docs`.

---

## Components

Live under **`src/hobbit-library/components/`** (one file or a subfolder with a barrel export). Register showcase entries in **`src/hobbit-library/registry.ts`**. Each registered preview should export a default component and a named **`meta`** object (`name`, optional `description`, optional `variants`). The exact shape is repeated in **`src/hobbit-library/index.md`** (generated).

Use Tailwind utilities where possible; **narrow inline `style` is acceptable** for dynamic demos (for example swatches driven by a hex prop).

---

## Dev Hobbit library route

**`src/app/(dev-routes)/hobbit-library-view/page.tsx`** is the dev-only Hobbit library preview (`notFound()` when `NODE_ENV !== 'development'`). It is a living preview, not an exhaustive auto-catalog of every file in `components/`.

**Visual check:** run `npm run dev` and open `http://localhost:3000/hobbit-library-view`.

**Static snapshot** (with dev server on `localhost:3000`):

```bash
single-file --browser-wait-until networkidle0 http://localhost:3000/hobbit-library-view hobbit-library-snapshot.html
```

---

## Regenerating `index.md`

After changing **`@theme inline`** (or supporting `:root` variables), **`registry.ts`**, or anything the generator should reflect:

```bash
npm run hobbit-library:docs
```

Implementation: **`src/hobbit-library/scripts/generate-hobbit-library-docs.mjs`**. Extend that script when you need richer output (for example parsing **`registry.ts`** for a full component list).

---

## Conventions

- Prefer hobbit-library tokens (from `@theme inline`) over magic values in app UI.
- New showcase components: add **`meta`**, register in **`registry.ts`**, run **`npm run hobbit-library:docs`**.
- Do not hand-edit **`src/hobbit-library/index.md`**.

---

## Notes for Cursor

Before UI or hobbit-library work, read **`src/hobbit-library/index.md`** (run **`npm run hobbit-library:docs`** if it may be stale). Use this **`docs/hobbit-library-plan.md`** for workflow and layout. New primitives belong under **`src/hobbit-library/components/`** first, then consume them from app routes.
