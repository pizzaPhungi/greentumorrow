<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-rules -->

# gREen tumorrow website

Static marketing site for a TUM student initiative. Next.js 16 App Router,
Tailwind v4, `output: "export"` — no server, no database, no client state
beyond the mobile nav toggle.

- **All copy and data live in `content/site.ts`.** Never hardcode text in a
  component; add it to the content module and read it from there.
- **Unknown facts are `TODO("...")`, never invented.** They render as a visible
  amber placeholder. Do not replace one with a plausible-sounding guess.
- **Base CSS must stay inside `@layer base`** in `app/globals.css`. Unlayered
  rules outrank Tailwind's utility layer, which silently breaks colour
  utilities on headings.
- **The wordmark is never plain text** — use `Wordmark` from `components/Logo`
  so `RE` and `TUM` keep their colour.
- **Section backgrounds** come from `Section`'s `tone` prop
  (`cream` | `deep` | `mist`-backed `sage` | `green`). Alternate them; do not
  invent one-off background colours.
- Primary audience is TUM master's students. Copy is British-leaning English,
  concrete and unhyped — no "empowering the future of sustainability".
- Legal pages (`imprint`, `privacy`) are placeholders pending the e.V.
  registration. Do not present them as final.
<!-- END:project-rules -->
