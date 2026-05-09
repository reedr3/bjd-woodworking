import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const require = createRequire(import.meta.url);

function safeReadFile(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch {
    return null;
  }
}

function loadTailwindConfig() {
  const configPath = path.join(repoRoot, "tailwind.config.js");
  try {
    // tailwind.config.js is CommonJS by convention
    // eslint-disable-next-line import/no-commonjs
    const config = require(configPath);
    return { config, configPath, error: null };
  } catch (error) {
    return { config: null, configPath, error };
  }
}

function extractExtendTokens(tailwindConfig) {
  const extend = tailwindConfig?.theme?.extend ?? {};
  const tokenKeys = [
    "colors",
    "fontFamily",
    "fontSize",
    "spacing",
    "borderRadius",
    "boxShadow",
  ];

  const tokens = {};
  for (const key of tokenKeys) {
    tokens[key] = extend?.[key] ?? {};
  }
  return tokens;
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

function formatJsonBlock(value) {
  const json = JSON.stringify(value, null, 2);
  return ["```json", json, "```"].join("\n");
}

function generateMarkdown({ tokens, registryStatus }) {
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
    "Design tokens may live in `tailwind.config.js` under `theme.extend` and/or in CSS under `src/design-system/styles/` (for example `hobbit-theme.css` with `@theme inline`). Components live in `src/design-system/components/` and must export a default React component and a named `meta` object."
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

  lines.push("## Tokens (`tailwind.config.js` → `theme.extend`)");
  lines.push("");

  const allEmpty = Object.values(tokens).every(
    (section) => section && typeof section === "object" && Object.keys(section).length === 0
  );

  if (allEmpty) {
    lines.push(
      "_No tokens have been ported yet. Populate `theme.extend` in `tailwind.config.js` and re-run the generator._"
    );
    lines.push("");
  } else {
    for (const [section, value] of Object.entries(tokens)) {
      lines.push(`### ${section}`);
      lines.push("");
      lines.push(formatJsonBlock(value));
      lines.push("");
    }
  }

  lines.push("## Components");
  lines.push("");

  if (registryStatus.kind === "missing") {
    lines.push(
      "_No registry found at `src/design-system/registry.ts`. Create/register components and re-run the generator._"
    );
    lines.push("");
  } else if (registryStatus.kind === "empty") {
    lines.push(
      "_No components registered yet. Add components in `src/design-system/components/` and register them in `src/design-system/registry.ts`._"
    );
    lines.push("");
  } else {
    lines.push(
      "_Components appear to be registered, but this scaffold generator does not yet evaluate TypeScript registries. Extend `scripts/generate-design-system-docs.mjs` when you begin porting components._"
    );
    lines.push("");
  }

  lines.push("## Snapshot export (SingleFile)");
  lines.push("");
  lines.push("With the dev server running on `localhost:3000`:");
  lines.push("");
  lines.push("```bash");
  lines.push(
    "single-file --browser-wait-until networkidle0 http://localhost:3000/design-system design-system-snapshot.html"
  );
  lines.push("```");
  lines.push("");

  return lines.join("\n");
}

function main() {
  const { config, configPath, error } = loadTailwindConfig();
  if (!config) {
    // eslint-disable-next-line no-console
    console.error(`Failed to load Tailwind config at ${configPath}`);
    // eslint-disable-next-line no-console
    console.error(error);
    process.exitCode = 1;
    return;
  }

  const tokens = extractExtendTokens(config);

  const registryPath = path.join(repoRoot, "src", "design-system", "registry.ts");
  const registrySource = safeReadFile(registryPath);
  const registryStatus = inferRegistryStatus(registrySource);

  const outPath = path.join(repoRoot, "src", "design-system", "index.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, generateMarkdown({ tokens, registryStatus }), "utf8");

  // eslint-disable-next-line no-console
  console.log(`Wrote ${path.relative(repoRoot, outPath)}`);
}

main();

