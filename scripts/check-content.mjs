/**
 * Fails the build while `TODO(...)` placeholders remain in the content module.
 *
 * Runs automatically as the `prebuild` npm lifecycle script. Set ALLOW_TODOS=1
 * to build anyway — needed for previews and staging while the club is still
 * filling content in.
 */
/**
 * Facts and both language dictionaries. All three must stay importable by plain
 * Node: no image imports, explicit .ts specifiers. If this stops running, the
 * gate silently stops protecting the site.
 */
const MODULES = [
  ["shared", "../content/shared.ts"],
  ["de", "../content/copy/de.ts"],
  ["en", "../content/copy/en.ts"],
];

if (process.env.ALLOW_TODOS === "1") {
  console.log("check:content — skipped (ALLOW_TODOS=1)");
  process.exit(0);
}

const found = [];
/** The same TODO object can be referenced from several places; report it once. */
const seen = new WeakSet();

const walk = (value, path) => {
  if (!value || typeof value !== "object") return;
  if (seen.has(value)) return;
  seen.add(value);
  if ("__todo" in value) {
    found.push({ path, what: value.__todo });
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    walk(child, path ? `${path}.${key}` : key);
  }
};

for (const [prefix, path] of MODULES) {
  const mod = await import(new URL(path, import.meta.url));
  for (const [key, value] of Object.entries(mod)) {
    if (typeof value === "function") continue;
    // The copy modules export a single object already named for the locale,
    // so prefixing again would read "de.de.…".
    walk(value, key === prefix ? key : `${prefix}.${key}`);
  }
}

if (found.length === 0) {
  console.log("check:content — no unresolved placeholders");
  process.exit(0);
}

const width = Math.max(...found.map((f) => f.path.length));
console.error(
  `\n❌ ${found.length} unresolved TODO(...) placeholder${found.length === 1 ? "" : "s"}:\n`,
);
for (const { path, what } of found) {
  console.error(`   ${path.padEnd(width)}  ${what}`);
}
console.error(
  "\n   Fill these in, or run with ALLOW_TODOS=1 to build a preview anyway.\n",
);
process.exit(1);
