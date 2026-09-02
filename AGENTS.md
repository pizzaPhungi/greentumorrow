<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-rules -->

# gREen tumorrow website

Static marketing site for a TUM student initiative. Next.js 16 App Router,
Tailwind v4, `output: "export"`. No server, no database, no client state
beyond the mobile nav toggle.

- **The site is bilingual: English at `/`, German at `/de`, English is the
  default.** `defaultLocale` in `content/shared.ts` decides which language is
  unprefixed, and every href helper derives from it. Never hardcode a
  user-visible string in a component. Facts go in
  `content/shared.ts`, prose goes in `content/copy/de.ts` and
  `content/copy/en.ts`, both typed `Copy` so a missing translation fails `tsc`.
- **Content modules must stay importable by plain Node**: relative imports with
  explicit `.ts` extensions, no image imports. The build gate loads them
  directly, and breaking that silently disables it.
- **Two root layouts, one per language, via route groups.** That is the only way
  `<html lang>` can differ. Legal pages are German only.
- **Every page exists twice**, once per locale, as a thin route file delegating
  to a shared component in `components/pages/`. TypeScript cannot catch a wrong
  `locale` literal in the `(en)` tree, so check the built HTML after adding one.
- **`next.config` sets `trailingSlash`**, so `usePathname()` returns
  `/projects/`. Strip it before comparing against a route.
- **Unknown facts are `TODO("...")`, never invented.** They render as a visible
  amber placeholder. Do not replace one with a plausible-sounding guess.
- **Base CSS must stay inside `@layer base`** in `app/globals.css`. Unlayered
  rules outrank Tailwind's utility layer, which silently breaks colour
  utilities on headings.
- **The wordmark is never plain text.** Use `Wordmark` from `components/Logo`
  so `RE` and `TUM` keep their colour.
- **Section backgrounds** come from `Section`'s `tone` prop
  (`cream` | `deep` | `mist` | `green`). Alternate them; do not invent one-off
  background colours.
- **Never use em dashes** in copy, comments or docs. Rewrite with a comma,
  colon, semicolon, full stop or parentheses instead.
- **Scope is renewable energy**, not the energy transition at large. The name
  carries `RE`, and so do the three pillars.
- **There are no units.** Work is described through the people who carry it:
  `team[].role` names the department, `team[].work` names the actual work.
- Audience is any student interested in renewable energy. Copy is
  British-leaning English, concrete and unhyped. No "empowering the future of
  sustainability".
- Legal pages (`imprint`, `privacy`) are placeholders pending the e.V.
  registration. Do not present them as final.
<!-- END:project-rules -->

<!-- BEGIN:design-rules -->
- **No stock photography, ever.** A missing photo renders as a visible
  placeholder via `components/Photo`. That is the intended state, not a bug.
- **Photo imports belong in `content/images.ts`, never in `content/site.ts`.**
  The build gate imports the content module with plain Node, which cannot load
  a `.jpg`. Putting an image import there silently breaks the gate.
- **Radius scale is short on purpose**: `rounded` for pills, `rounded-lg` for
  cards and secondary buttons, `rounded-xl` for a lead card, `rounded-full` only
  for primary CTAs. Do not add a fifth.
- **Not every section is heading + grid.** Vary the form down the page, and give
  one card in a group more weight than its neighbours rather than shipping rows
  of identical boxes.
<!-- END:design-rules -->
