# greentumorrow.de

Website for **gREen tumorrow**, a student initiative at TUM for people who want to
work on renewable energy, by joining real projects, with partners or their own,
and building expertise doing it.

Static site. Next.js 16 (App Router) + Tailwind v4, exported to plain HTML.
No backend, no database, no cookies, no analytics.

## Run it

```bash
npm install
npm run dev              # http://localhost:3000
npm run check:content    # list unfinished content
npm run build            # static export → ./out  (blocked while content is unfinished)
npm run lint
```

`npm run build` writes a fully static site to `out/`. Any static host serves it:
Vercel, GitHub Pages, TUM webspace.

**The build refuses to run while `TODO(...)` placeholders remain.** That is
deliberate: it is what stops an unanswered "how quickly do you reply?" from
ending up on the live site. To build a preview anyway:

```bash
ALLOW_TODOS=1 npm run build
```

## Editing content

**Almost every word on the site lives in [`content/site.ts`](content/site.ts).**
Change it there and it updates everywhere. You do not need to touch the
components for text, projects, team members or contact details.

| What | Where in `content/site.ts` |
| --- | --- |
| Contact details and address | `contact` |
| Headline numbers on the home page | `stats`, `founded` |
| Projects (`type: "partner"` or `"own"`, plus a `field`) | `projects` |
| The "bring your own project" invitation | `ownProjects` |
| The three pillars (RE Community / Projects / Knowledge) | `pillars` |
| People and the work each carries | `team` |
| What to put in a first mail, and how fast you answer | `join.mail` |
| The four steps of joining | `journey` |
| Partners | `partners` |
| Top-level pages besides home (currently empty) | `nav` |
| Join page copy and expectations | `join` |

### The `TODO(...)` markers

Content that is still missing is written as `TODO("what is needed")`. It does two
things: it renders on the page as a loud dashed amber box, and it makes
`npm run build` fail with a list of everything outstanding. Run
`npm run check:content` any time to see that list. Replace the whole `TODO(...)`
call with a plain string:

```ts
responseTime: TODO("How quickly you answer mail"),   // before
responseTime: "Within three days",                   // after
```

## Before going live

Run `npm run check:content`; it prints everything still outstanding. On top of
that:

1. **Imprint.** gREen tumorrow has no legal form yet, so no legal person can be
   the service provider under § 5 DDG. A natural person must be named with a
   real postal address and carries personal liability, or the site runs under
   TUM student-club infrastructure. See [`app/imprint/page.tsx`](app/imprint/page.tsx).
2. **Privacy policy.** Fill in the controller and the hosting provider's log
   retention. See [`app/privacy/page.tsx`](app/privacy/page.tsx).
3. **How to find you at Dachauer Str. 90** (`contact.meetup.room`).
4. **How fast you answer mail** (`join.mail.responseTime`). Research on newcomer
   drop-out points at "finding a way to start" as the main reason people who
   already cared still leave; NN/g's contact-page guidance adds that a stated
   response window is what makes writing feel low-risk. Commit to a number.
5. **Weekly time commitment** on the Join page.
6. **Verify the LinkedIn URL** in `contact.linkedin`.
7. **Team photos.** Currently rendered as initials. Portraits at 400×400 or
   larger would be better; the deck's versions are too low-resolution.
8. **Phone number.** `contact.phone` is a private mobile number. Public pages get
   scraped. Consider a club number.

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
| `blue` | `#32459A` | advisor avatars |
| `navy` | `#0E2841` | body text |

The mark in [`components/Logo.tsx`](components/Logo.tsx) is a vector rebuild of
the club's logo, traced by eye from a raster image. **If the vector original
(AI/SVG/EPS) exists, drop it in and replace the hand-built paths** — this version
is an approximation, not the source of truth.

The mark carries its own four colours, kept separate from the brand palette
because they do not match it:

| Token | Hex | Use |
| --- | --- | --- |
| `sun` | `#F2A81B` | the ring |
| `teal` | `#0E5B57` | turbine and buildings |
| `grass` | `#57A82B` | hills and the window |
| `grass-dark` | `#3C8A1C` | the darker hill |

[`app/icon.svg`](app/icon.svg) is a deliberately simplified variant (ring,
turbine, hill only) because the full mark turns to mush at favicon sizes.

The wordmark is never plain text: `gREen tumorrow` carries **RE** (renewable
energy) in amber and **TUM** inside "tumorrow". Always render it via the
`Wordmark` component.

## Structure

```
app/                       routes: home, join, imprint, privacy
components/                Logo, Header, Footer, UI primitives, TODO markers
content/site.ts            all copy and data
scripts/check-content.mjs  the build gate for unfinished content
```

The site is currently one page plus the Join page and the two legal pages.
Adding entries to `nav` in `content/site.ts` brings the header navigation and
the mobile menu back automatically; both handle an empty list.
