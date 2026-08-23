# greentumorrow.de

Website for **gREen tumorrow**, a TUM student initiative building community-owned
renewable energy projects in Munich with the energy cooperative EGM eG.

Static site — Next.js 16 (App Router) + Tailwind v4, exported to plain HTML.
No backend, no database, no cookies, no analytics.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → ./out
npm run lint
```

`npm run build` writes a fully static site to `out/`. Any static host serves it —
Vercel, GitHub Pages, TUM webspace.

## Editing content

**Almost every word on the site lives in [`content/site.ts`](content/site.ts).**
Change it there and it updates everywhere. You do not need to touch the
components for text, projects, team members, units or contact details.

| What | Where in `content/site.ts` |
| --- | --- |
| Contact details, address, meet-up time | `contact` |
| Headline numbers on the home page | `stats` |
| PV projects | `projects` |
| Units and who leads them (`open: true` = advertised as vacant) | `units` |
| People | `team` |
| Mission, vision, values | `missionVision`, `values` |
| Thesis / internship content | `academics` |
| Partners and EU projects | `partners`, `euProjects` |
| Join page copy and expectations | `join` |

### The `TODO(...)` markers

Content that is still missing is written as `TODO("what is needed")`. It renders
on the page as a loud dashed amber box, so nothing unfinished slips into a
launch unnoticed. Replace the whole `TODO(...)` call with a plain string:

```ts
cadence: TODO("Weekday + time of the regular meet-up"),   // before
cadence: "Every Tuesday, 18:00",                          // after
```

## Before going live

1. **Imprint.** gREen tumorrow has no legal form yet, so no legal person can be
   the service provider under § 5 DDG. A natural person must be named with a
   real postal address and carries personal liability — or the site runs under
   TUM student-club infrastructure. See [`app/imprint/page.tsx`](app/imprint/page.tsx).
2. **Privacy policy.** Fill in the controller and the hosting provider's log
   retention. See [`app/privacy/page.tsx`](app/privacy/page.tsx).
3. **Meet-up time and room.** The single most important missing piece — the site
   invites people to turn up but cannot yet say when.
4. **Weekly time commitment** on the Join page.
5. **Verify the LinkedIn URL** in `contact.linkedin`.
6. **Team photos.** Currently rendered as initials. Portraits at 400×400 or
   larger would be better; the deck's versions are too low-resolution.
7. **Phone number.** `contact.phone` is a private mobile number. Public pages get
   scraped — consider a club number.

## Brand

Colours are sampled from the club's own deck (`greentumorrow.pptx`) and defined
once as Tailwind theme tokens in [`app/globals.css`](app/globals.css):

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#FFF3DD` | page background |
| `cream-deep` | `#F8E8C8` | alternating bands, footer |
| `mist` | `#E8EDE9` | cool alternating bands |
| `green` / `green-dark` | `#3A643C` / `#1F4438` | headings, primary buttons, dark sections |
| `amber` / `amber-deep` | `#FFC246` / `#D98F0D` | accents, eyebrows, underlines |
| `blue` | `#32459A` | logo turbine, advisor avatars |
| `navy` | `#0E2841` | body text |

The mark in [`components/Logo.tsx`](components/Logo.tsx) is a vector rebuild of
the deck's logo. If a proper vector original (AI/SVG) turns up, swap it in there.

The wordmark is never plain text: `gREen tumorrow` carries **RE** (renewable
energy) in amber and **TUM** inside "tumorrow". Always render it via the
`Wordmark` component.

## Structure

```
app/            routes — one folder per page
components/     Logo, Header, Footer, UI primitives, TODO markers
content/site.ts all copy and data
```
