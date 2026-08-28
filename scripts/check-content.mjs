/**
 * Fails the build while `TODO(...)` placeholders remain in the content module.
 *
 * Runs automatically as the `prebuild` npm lifecycle script. Set ALLOW_TODOS=1
 * to build anyway — needed for previews and staging while the club is still
 * filling content in.
 */
const MODULE = new URL("../content/site.ts", import.meta.url);

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

const site = await import(MODULE);
for (const [key, value] of Object.entries(site)) {
  if (typeof value === "function") continue;
  walk(value, key);
}

if (found.length === 0) {
  console.log("check:content — no unresolved placeholders");
  process.exit(0);
}

const width = Math.max(...found.map((f) => f.path.length));
console.error(
  `\n❌ ${found.length} unresolved TODO(...) placeholder${found.length === 1 ? "" : "s"} in content/site.ts:\n`,
);
for (const { path, what } of found) {
  console.error(`   ${path.padEnd(width)}  ${what}`);
}
console.error(
  "\n   Fill these in, or run with ALLOW_TODOS=1 to build a preview anyway.\n",
);
process.exit(1);
