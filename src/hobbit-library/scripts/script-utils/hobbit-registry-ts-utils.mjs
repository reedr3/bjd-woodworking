import ts from "typescript";

/** @param {ts.Node} node */
export function getStringLiteralText(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isTemplateExpression(node) && node.head.text !== undefined) {
    let out = node.head.text;
    for (const span of node.templateSpans) {
      out += span.literal.text;
    }
    return out;
  }
  return undefined;
}

/** @param {ts.ObjectLiteralExpression} obj @param {string} name */
export function getObjectPropertyInitializer(obj, name) {
  for (const prop of obj.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const key = prop.name;
    if (ts.isIdentifier(key) && key.text === name) {
      return prop.initializer;
    }
    if (ts.isStringLiteral(key) && key.text === name) {
      return prop.initializer;
    }
  }
  return undefined;
}

/** @param {ts.Node} node */
export function unwrapToObjectLiteral(node) {
  if (ts.isObjectLiteralExpression(node)) return node;
  if (ts.isAsExpression(node) || ts.isSatisfiesExpression(node)) {
    return unwrapToObjectLiteral(node.expression);
  }
  return undefined;
}

/**
 * @param {ts.ObjectLiteralExpression} objLit
 * @param {ts.SourceFile} sf
 * @returns {{ name: string, description?: string, variants?: string[] } | null}
 */
export function extractMetaFromObjectLiteral(objLit, sf) {
  const nameInit = getObjectPropertyInitializer(objLit, "name");
  const name = nameInit ? getStringLiteralText(nameInit) : undefined;
  if (!name) return null;

  let description;
  const descInit = getObjectPropertyInitializer(objLit, "description");
  if (descInit) {
    const t = getStringLiteralText(descInit);
    if (t !== undefined) description = t;
    else description = descInit.getText(sf);
  }

  /** @type {string[] | undefined} */
  let variants;
  const varInit = getObjectPropertyInitializer(objLit, "variants");
  if (varInit && ts.isArrayLiteralExpression(varInit)) {
    variants = [];
    for (const v of varInit.elements) {
      const s = getStringLiteralText(v);
      if (s) variants.push(s);
    }
  }

  return { name, description, variants };
}

/**
 * @param {string} source
 * @returns {{ name: string, description?: string, variants?: string[] } | null}
 */
export function parseExportedMetaFromComponentSource(source) {
  const sf = ts.createSourceFile("comp.tsx", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  /** @type {{ name: string, description?: string, variants?: string[] } | null} */
  let found = null;

  function visit(node) {
    if (
      ts.isVariableStatement(node) &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || decl.name.text !== "meta") continue;
        const objLit = decl.initializer ? unwrapToObjectLiteral(decl.initializer) : undefined;
        if (!objLit) continue;
        const meta = extractMetaFromObjectLiteral(objLit, sf);
        if (meta) found = meta;
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
  return found;
}

/**
 * Read `export const registry = [...]` from registry.ts without executing code.
 * @param {string} source
 * @returns {{ filePath: string, meta: { name: string, description?: string, variants?: string[] } }[]}
 */
export function parseRegistryEntries(source) {
  const sf = ts.createSourceFile("registry.ts", source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  /** @type {{ filePath: string, meta: { name: string, description?: string, variants?: string[] } }[]} */
  const entries = [];

  function visit(node) {
    if (
      ts.isVariableStatement(node) &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      for (const decl of node.declarationList.declarations) {
        if (!ts.isIdentifier(decl.name) || decl.name.text !== "registry") continue;
        const init = decl.initializer;
        if (!init || !ts.isArrayLiteralExpression(init)) continue;

        for (const el of init.elements) {
          if (!ts.isObjectLiteralExpression(el)) continue;
          const filePathInit = getObjectPropertyInitializer(el, "filePath");
          const metaInit = getObjectPropertyInitializer(el, "meta");
          const filePath = filePathInit ? getStringLiteralText(filePathInit) : undefined;
          if (!filePath || !metaInit) continue;
          const metaObj = unwrapToObjectLiteral(metaInit);
          if (!metaObj) continue;
          const meta = extractMetaFromObjectLiteral(metaObj, sf);
          if (!meta) continue;
          entries.push({ filePath, meta });
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
  return entries;
}
