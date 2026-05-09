import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRegistryEntries } from "./script-utils/hobbit-registry-ts-utils.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..", "..", "..");

function safeReadFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

/**
 * Extract inner bodies of every `@theme inline { ... }` block (brace-balanced).
 */
function extractAtThemeInlineBodies(css) {
  const bodies = [];
  const needle = "@theme inline";
  let pos = 0;
  while (pos < css.length) {
    const i = css.indexOf(needle, pos);
    if (i === -1) break;
    let j = i + needle.length;
    while (j < css.length && /\s/.test(css[j])) j += 1;
    if (css[j] !== "{") {
      pos = j + 1;
      continue;
    }
    j += 1;
    let depth = 1;
    const start = j;
    while (j < css.length && depth > 0) {
      const c = css[j];
      if (c === "{") depth += 1;
      else if (c === "}") depth -= 1;
      j += 1;
    }
    if (depth === 0) {
      bodies.push(css.slice(start, j - 1));
    }
    pos = j;
  }
  return bodies;
}

function parseThemeDeclarations(body) {
  const out = {};
  const cleaned = body.replace(/\/\*[\s\S]*?\*\//g, "");
  const declRe = /--([\w-]+)\s*:\s*([^;]+);/g;
  let m = declRe.exec(cleaned);
  while (m) {
    out[`--${m[1]}`] = m[2].trim().replace(/\s+/g, " ");
    m = declRe.exec(cleaned);
  }
  return out;
}

function collectThemeTokensByFile() {
  const styleDir = path.join(repoRoot, "src", "hobbit-library", "styles");
  const cssPaths = [path.join(repoRoot, "src", "app", "globals.css")];

  if (fs.existsSync(styleDir)) {
    const names = fs.readdirSync(styleDir).filter((f) => f.endsWith(".css")).sort();
    for (const name of names) {
      cssPaths.push(path.join(styleDir, name));
    }
  }

  /** @type {{ relativePath: string, variables: Record<string, string> }[]} */
  const byFile = [];

  for (const abs of cssPaths) {
    const source = safeReadFile(abs);
    if (!source) continue;
    const bodies = extractAtThemeInlineBodies(source);
    if (bodies.length === 0) continue;
    const variables = {};
    for (const body of bodies) {
      Object.assign(variables, parseThemeDeclarations(body));
    }
    if (Object.keys(variables).length === 0) continue;
    byFile.push({
      relativePath: path.relative(repoRoot, abs).split(path.sep).join("/"),
      variables,
    });
  }

  return byFile;
}

function formatJsonBlock(value) {
  const json = JSON.stringify(value, null, 2);
  return ["```json", json, "```"].join("\n");
}

/**
 * @param {string} registrySource
 * @returns {{ kind: 'missing' } | { kind: 'empty' } | { kind: 'ok', entries: { filePath: string, meta: { name: string, description?: string, variants?: string[] } }[] }}
 */
function analyzeRegistry(registrySource) {
  if (!registrySource) {
    return { kind: "missing" };
  }

  const entries = parseRegistryEntries(registrySource);
  if (entries.length === 0) {
    return { kind: "empty" };
  }
  return { kind: "ok", entries };
}

function generateMarkdown({ themeByFile, registryAnalysis }) {
  const lines = [];

  lines.push("<!--");
  lines.push("This file is generated. DO NOT EDIT BY HAND.");
  lines.push("Run: npm run hobbit-library:docs (syncs registry from components, then writes this file)");
  lines.push("-->");
  lines.push("");
  lines.push("# Hobbit Library");
  lines.push("");
  lines.push("## Overview");
  lines.push("");
  lines.push(
    "This file is regenerated from the repo. **Process, directory layout, and workflow** live in [`docs/hobbit-library-plan.md`](docs/hobbit-library-plan.md) next to this package in the repo."
  );
  lines.push("");
  lines.push(
    "Design tokens are defined with Tailwind v4 **`@theme inline`** in CSS (for example `src/app/globals.css` and `src/hobbit-library/styles/`). Reusable components under `src/hobbit-library/components/` (sync skips `components/meta-preview/`; see `docs/hobbit-library-plan.md`) should export a default React component plus `export const meta` (see below). Run `npm run hobbit-library:sync-registry` (or `npm run hobbit-library:docs`) to refresh `src/hobbit-library/registry.ts` from those files."
  );
  lines.push("");
  lines.push("### Component meta contract");
  lines.push("");
  lines.push("```tsx");
  lines.push("export const meta = {");
  lines.push("  name: 'ButtonPrimary',");
  lines.push("  description: 'Primary call-to-action button',");
  lines.push("  variants: ['default', 'hover', 'disabled'],");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Tokens (`@theme inline` in CSS)");
  lines.push("");

  if (themeByFile.length === 0) {
    lines.push("_No `@theme inline` blocks with custom properties were found. Add them under `src/app/globals.css` or `src/hobbit-library/styles/`._");
    lines.push("");
  } else {
    for (const { relativePath, variables } of themeByFile) {
      lines.push(`### \`${relativePath}\``);
      lines.push("");
      lines.push(formatJsonBlock(variables));
      lines.push("");
    }
  }

  lines.push("## Components");
  lines.push("");

  if (registryAnalysis.kind === "missing") {
    lines.push(
      "_No registry found at `src/hobbit-library/registry.ts`. Run `npm run hobbit-library:sync-registry` after adding `export const meta` to component files._"
    );
    lines.push("");
  } else if (registryAnalysis.kind === "empty") {
    lines.push(
      "_No components in the registry yet. Add `export const meta` under `src/hobbit-library/components/` (outside `meta-preview/`), then run `npm run hobbit-library:sync-registry` or `npm run hobbit-library:docs`._"
    );
    lines.push("");
  } else {
    lines.push(
      "The registry is generated into [`src/hobbit-library/registry.ts`](src/hobbit-library/registry.ts) from `export const meta` in each scanned component file (`components/meta-preview/` is excluded). Run `npm run hobbit-library:docs` (or `hobbit-library:sync-registry`) after changing meta."
    );
    lines.push("");
    for (const { filePath, meta } of registryAnalysis.entries) {
      lines.push(`### \`${meta.name}\``);
      lines.push("");
      lines.push(`- **File:** [\`${filePath}\`](${filePath})`);
      if (meta.description) {
        lines.push(`- **Description:** ${meta.description}`);
      }
      if (meta.variants?.length) {
        lines.push(`- **Variants:** ${meta.variants.map((v) => `\`${v}\``).join(", ")}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  const themeByFile = collectThemeTokensByFile();

  const registryPath = path.join(repoRoot, "src", "hobbit-library", "registry.ts");
  const registrySource = safeReadFile(registryPath);
  const registryAnalysis = analyzeRegistry(registrySource);

  const outPath = path.join(repoRoot, "src", "hobbit-library", "index.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, generateMarkdown({ themeByFile, registryAnalysis }), "utf8");

  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
}

main();
