import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
  const styleDir = path.join(repoRoot, "src", "hobbit-component-library", "styles");
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

function inferRegistryStatus(registrySource) {
  if (!registrySource) {
    return { kind: "missing" };
  }

  const normalized = registrySource.replace(/\s+/g, " ").trim();
  if (normalized.includes("export const registry") && normalized.includes("= []")) {
    return { kind: "empty" };
  }

  return { kind: "present-unknown" };
}

function generateMarkdown({ themeByFile, registryStatus }) {
  const lines = [];

  lines.push("<!--");
  lines.push("This file is generated. DO NOT EDIT BY HAND.");
  lines.push("Run: npm run design-system:docs");
  lines.push("-->");
  lines.push("");
  lines.push("# Design System");
  lines.push("");
  lines.push("## Overview");
  lines.push("");
  lines.push(
    "This file is regenerated from the repo. **Process, directory layout, and workflow** live in [`docs/design-system-plan.md`](docs/design-system-plan.md) next to this package in the repo."
  );
  lines.push("");
  lines.push(
    "Design tokens are defined with Tailwind v4 **`@theme inline`** in CSS (for example `src/app/globals.css` and `src/hobbit-component-library/styles/`). Components live in `src/hobbit-component-library/components/` and must export a default React component and a named `meta` object."
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
    lines.push("_No `@theme inline` blocks with custom properties were found. Add them under `src/app/globals.css` or `src/hobbit-component-library/styles/`._");
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

  if (registryStatus.kind === "missing") {
    lines.push(
      "_No registry found at `src/hobbit-component-library/registry.ts`. Create/register components and re-run the generator._"
    );
    lines.push("");
  } else if (registryStatus.kind === "empty") {
    lines.push(
      "_No components registered yet. Add components in `src/hobbit-component-library/components/` and register them in `src/hobbit-component-library/registry.ts`._"
    );
    lines.push("");
  } else {
    lines.push(
      "_Components appear to be registered, but this scaffold generator does not yet evaluate TypeScript registries. Extend `src/hobbit-component-library/scripts/generate-design-system-docs.mjs` when you begin porting components._"
    );
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const themeByFile = collectThemeTokensByFile();

  const registryPath = path.join(repoRoot, "src", "hobbit-component-library", "registry.ts");
  const registrySource = safeReadFile(registryPath);
  const registryStatus = inferRegistryStatus(registrySource);

  const outPath = path.join(repoRoot, "src", "hobbit-component-library", "index.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, generateMarkdown({ themeByFile, registryStatus }), "utf8");

  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
}

main();
