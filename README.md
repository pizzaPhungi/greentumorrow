# greentumorrow.de

Website for **gREen Tumorrow**, a student initiative at TUM for people who want to
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

The site is bilingual: **English at `/`, German at `/de`**, English is the
default. Which language is unprefixed is decided by `defaultLocale` in
`content/shared.ts`; `localeHome`, `sectionHref` and `counterpartHref` all
derive from it. Text and facts are split across three files:

- [`content/shared.ts`](content/shared.ts) holds everything that is the same in
  both languages: email, address, links, project figures, people's names.
- [`content/copy/de.ts`](content/copy/de.ts) and
  [`content/copy/en.ts`](content/copy/en.ts) hold the prose. Both are typed
  `Copy`, so **TypeScript fails the build if either language is missing a key.**

Change text there and it updates everywhere. You do not need to touch the
components.

| What | Where |
| --- | --- |
| Contact details and address | `shared.contact` |
| Headline numbers on the home page | `copy.stats` |
| Project figures and status | `shared.projectFacts` |
| Project names, summaries, spec labels | `copy.projects.entries` |
| The "bring your own project" invitation | `copy.projects.own` |
| The three pillars (RE Community / Projects / Knowledge) | `copy.pillars` |
| People | `shared.teamFacts` and `copy.team.people` |
| The Notion form people fill in to join | `shared.contact.joinForm` |
| Partners | `shared.partnerLinks` and `copy.partners` |
| Alt text for photos | `copy.projects.entries[].photoAlt`, `copy.team.people[].photoAlt` |


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

1. **Imprint.** gREen Tumorrow has no legal form yet, so no legal person can be
   the service provider under § 5 DDG. A natural person must be named with a
   real postal address and carries personal liability, or the site runs under
   TUM student-club infrastructure. See [`app/imprint/page.tsx`](app/imprint/page.tsx).
2. **Privacy policy.** Fill in the controller and the hosting provider's log
   retention. See [`app/privacy/page.tsx`](app/privacy/page.tsx).
3. **Notion processing agreement and retention period** on the privacy page.
   Joining runs through a Notion form (`contact.joinForm`), linked and never
   embedded so no consent banner is needed. Notion is a US provider, so the
   agreement and the retention period still have to be named.
4. **Team portraits.** Eight of them, plus a `photoAlt` line for each. These no
   longer block the build: the member cards show a dashed circle until the
   photos arrive.
5. **Consent for the Perlacher Herz photo.** It shows roughly ten identifiable
   people; publishing needs their agreement (GDPR, § 22 KunstUrhG). Same for
   every portrait.
6. **Verify the LinkedIn URL** in `contact.linkedin`.
7. **A second contact channel.** The phone number is gone, so email is the only
   way to reach you. § 5 DDG asks for means of quick electronic contact; email
   alone is generally accepted, but a club phone number or a form would be
   safer.

## Brand

Colours are sampled from the club's current logo and defined once as Tailwind
theme tokens in [`app/globals.css`](app/globals.css):

| Token | Hex | Use |
| --- | --- | --- |
| `cream` | `#FFF3DD` | page background |
| `cream-deep` | `#F8E8C8` | alternating bands, footer |
| `mist` | `#E8EDE9` | cool alternating bands |
| `green` / `green-dark` | `#0F4D33` / `#0B3624` | headings, primary buttons, dark sections |
| `amber` / `amber-deep` | `#F9B233` / `#C78E29` | accents, eyebrows, underlines |
| `blue` | `#2F5597` | advisor avatars |
| `navy` | `#0E2841` | body text |

The mark in [`components/Logo.tsx`](components/Logo.tsx) is the club's actual
logo asset (a house holding a wind turbine, white on dark green, with amber
accents), stored at [`public/logo-mark.png`](public/logo-mark.png) and used as-is
via `next/image` rather than redrawn, so it stays pixel-identical to the source.
The same file is also [`app/icon.png`](app/icon.png), the site favicon.

The wordmark is never plain text: `gREen Tumorrow` carries **RE** (renewable
energy) in amber. Always render it via the `Wordmark` component.

## Structure

```
app/(en)/                  English routes: /, /projects, /about
app/(de)/de/               German routes: /de and the same two tabs
app/(de)/imprint, privacy  legal pages, German only, unprefixed
components/                Logo, Header, Footer, UI primitives, TODO markers
components/pages/          page bodies, shared by both languages
content/shared.ts          language-independent facts
content/copy/              de.ts, en.ts and the Copy type they both satisfy
content/images.ts          static photo imports, keyed by slug / name
content/photos/            the photo files themselves
scripts/check-content.mjs  the build gate for unfinished content
```

Two route groups means two root layouts, which is the only way `<html lang>` can
differ per language. The legal pages exist in German only, because the club is
based in Germany and they are its one legal document rather than a translation
of an English page. They therefore keep unprefixed URLs but sit in the German
route group, so they render with `lang="de"`, and both languages link to them.

### Adding a photo

Photos are split across two files on purpose. `scripts/check-content.mjs` imports
`content/shared.ts` and both copy modules with plain Node to run the build gate,
and plain Node cannot import a `.jpg`; it fails with
`ERR_UNKNOWN_FILE_EXTENSION`. So the alt text lives in the copy modules and the
image import lives in `content/images.ts`.

1. Drop the file in `content/photos/`
2. Import it in `content/images.ts` and key it by project slug or person name
3. Add `photoAlt` in **both** `content/copy/de.ts` and `content/copy/en.ts`.
   For portraits the field is optional and only needed once the photo exists:
   a photo without alt text is an accessibility hole, alt text without a photo
   is nothing at all.

Both halves are needed. Until then the page shows a visible "photo missing" box
and the build stays blocked. The import is static rather than a string path so
`next/image` derives `width` and `height` from the file itself, which prevents
layout shift and means nobody maintains pixel dimensions by hand.

**No stock photography.** A visible placeholder is better than a fake.

**Photos of identifiable people need consent** before they go live (GDPR, and
§ 22 KunstUrhG). That applies to the Perlacher Herz group shot and to every
portrait.

Joining runs through a Notion form, then the WhatsApp group. Neither lives on this site.
The site has three pages per language: home plus the Projects and About us
tabs. Add or rename a tab in `sections` in
[`content/shared.ts`](content/shared.ts), add its label to `nav.sections` in both
copy modules, and create the two route files. `Header` stays a server component;
`SiteNav` is the client part that needs the current path for the active tab and
for pointing the language switch at the same page in the other language.
