# BJD Woodworking

Next.js + Tailwind site for BJD Woodworking.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — lint
- `npm run hobbit-library:sync-registry` — refresh `src/hobbit-library/registry.ts` from `export const meta` in components (skips `components/meta-preview/`)
- `npm run hobbit-library:docs` — runs sync-registry, then regenerates `src/hobbit-library/index.md`
