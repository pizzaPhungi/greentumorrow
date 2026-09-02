/**
 * Facts that do not change with the language: links, slugs, figures,
 * people's names. Everything you can read in either language lives here once, so
 * a corrected email address cannot go stale in one translation.
 *
 * Prose lives in content/copy/de.ts and content/copy/en.ts.
 *
 * `TODO(...)` marks content the club still has to supply. It renders as a loud
 * amber placeholder on the page AND fails `npm run build` via the `prebuild`
 * check, so nothing unfinished can reach a launch unnoticed. Use
 * `ALLOW_TODOS=1 npm run build` for previews while placeholders remain.
 *
 * Keep this module importable by plain Node: no image imports, no JSX. The build
 * gate loads it directly and chokes on anything else.
 */

export const TODO = (what: string) => ({ __todo: what }) as const;
export type Todo = ReturnType<typeof TODO>;
export type Fillable = string | Todo;
export const isTodo = (v: unknown): v is Todo =>
  typeof v === "object" && v !== null && "__todo" in v;

export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];

/**
 * The default language sits at the root without a prefix, every other one gets
 * one. Everything below derives from this, so flipping the default is this one
 * line plus moving the route folders.
 */
export const defaultLocale: Locale = "en";

export const localeHome = Object.fromEntries(
  locales.map((l) => [l, l === defaultLocale ? "/" : `/${l}`]),
) as Record<Locale, string>;

/** The tabs in the top bar, in the order they appear. */
export const sections = ["projects", "partners", "members"] as const;
export type Section = (typeof sections)[number];

export const sectionHref = (locale: Locale, section: Section) =>
  locale === defaultLocale ? `/${section}` : `/${locale}/${section}`;

/**
 * Imprint and privacy exist in German only and stay unprefixed: they are the
 * one legal document this site has, not a translation of an English page. They
 * live in the German route group so their `lang` attribute stays honest.
 */
export const legalPages = ["imprint", "privacy"] as const;
export const legalHref = (page: (typeof legalPages)[number]) => `/${page}`;

/**
 * The same page in the other language. Used by the language switch, which has
 * to stay on the current tab rather than dropping the visitor back on the home
 * page.
 */
export const counterpartHref = (pathname: string, target: Locale) => {
  // next.config sets trailingSlash, so usePathname yields "/projects/".
  const path = pathname.replace(/\/$/, "") || "/";
  const section = sections.find((s) =>
    locales.some((l) => sectionHref(l, s) === path),
  );
  return section ? sectionHref(target, section) : localeHome[target];
};

export const site = {
  name: "gREen tumorrow",
  legalName: "gREen tumorrow",
  url: "https://greentumorrow.de",
};

export const contact = {
  email: "info@greentumorrow.de",
  instagram: "https://instagram.com/greentumorrow",
  instagramHandle: "@greentumorrow",
  linkedin: "https://www.linkedin.com/company/green-tumorrow",
  linkedinHandle: "green-tumorrow",
  /**
   * Notion form where people leave their name and number. It sits in front of
   * the WhatsApp group so the club sees who is coming before inviting them, and
   * it lives in the same Notion workspace as the club's own knowledge base, so
   * there is no second tool to keep alive.
   *
   * Linked, never embedded: an iframe would put Notion's cookies on this domain.
   */
  joinForm:
    "https://pretty-racer-d37.notion.site/3cf68aefbeb280899b7de042461094b1?pvs=105" as Fillable,
};

/**
 * Where the Join buttons in the header and the hero point. Not the form: they
 * scroll to the closing section, which says what joining involves before anyone
 * is handed a form. Only the button in that section opens the form itself, and
 * it falls back to a visible placeholder while `contact.joinForm` is a TODO, so
 * the site never ships a dead link.
 */
export const joinCta = "#join";

/**
 * The same target from anywhere in the header. Every content page carries the
 * closing section, but the legal pages do not, so from there Join has to reach
 * the home page's copy of it instead of scrolling nowhere.
 */
export const joinCtaFrom = (locale: Locale, pathname: string) => {
  const path = pathname.replace(/\/$/, "") || "/";
  if (!legalPages.some((p) => legalHref(p) === path)) return joinCta;
  const home = localeHome[locale];
  return `${home === "/" ? "" : home}/${joinCta}`;
};

/**
 * The natural person the legal pages have to name: service provider under § 5
 * DDG, responsible for content under § 18 Abs. 2 MStV, and controller under
 * Art. 4 Nr. 7 DSGVO. Until the e.V. exists there is no legal person to carry
 * this, so a real person does, personally.
 *
 * Kept here rather than in the pages so the build gate sees what is still
 * missing. An imprint without a postal address does not satisfy § 5 DDG.
 */
export const responsible = {
  name: "Duc Viet Phung",
  address: TODO("Postal address of the responsible person, no P.O. box"),
  legalForm: TODO(
    "Legal form once the e.V. is registered, incl. register court and number",
  ),
};

/** Founded and accredited by TUM in the same year. */
export const founded = "2026";

/** Slugs key both the copy and the photo imports in content/images.ts. */
export const projectSlugs = ["perlacher-herz", "gemeinde-neuperlach"] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

export type ProjectFacts = {
  slug: ProjectSlug;
  /** Where the project came from. Lets the copy group entries by origin. */
  type: "partner" | "own";
  status: "live" | "planning";
  partner?: string;
  /** Figures are the same in both languages; only the labels are translated. */
  specs: string[];
};

export const projectFacts: ProjectFacts[] = [
  {
    slug: "perlacher-herz",
    type: "partner",
    status: "live",
    partner: "EGM eG",
    specs: ["10 kWp", "24", "2026"],
  },
  {
    slug: "gemeinde-neuperlach",
    type: "partner",
    status: "planning",
    partner: "EGM eG",
    specs: ["25 kWp", "11 kWh"],
  },
];

/** Names key the portrait imports in content/images.ts. */
export type PersonFacts = {
  name: string;
  /** Set only while a surname is still missing, so the gate keeps blocking. */
  surname?: Fillable;
  kind: "student" | "advisor";
  /**
   * Degree programme for students, position for advisors. Official programme
   * titles, so they stay in English in both locales.
   */
  programme: string;
};

export const teamFacts: PersonFacts[] = [
  {
    name: "Nazli Ghazvanchahi",
    kind: "student",
    programme: "M.Sc. Sustainable Management & Technology",
  },
  {
    name: "Nana Kwabena Osei",
    kind: "student",
    programme: "M.Sc. Engineering Science",
  },
  {
    name: "Duc Viet Phung",
    kind: "student",
    programme: "M.Sc. Management & Technology",
  },
  {
    name: "Marvin Elling",
    kind: "student",
    programme: "M.Sc. Electrical & Computer Engineering",
  },
  {
    name: "Salma Gares",
    kind: "student",
    programme: "M.Sc. Electrical Engineering & Information Technology",
  },
  { name: "Karim Alzahabi", kind: "student", programme: "M.Sc. Power Engineering" },
  {
    name: "Dr. Markus Eblenkamp",
    kind: "advisor",
    programme: "Program Manager M.Sc. Power Engineering at TUM",
  },
  {
    name: "Dr. Christoph Göbel",
    kind: "advisor",
    programme: "PhD in Materials Chemistry and Catalysis",
  },
];

export const partnerLinks = [
  { name: "EGM eG", href: "https://www.energiegemeinschaften-muenchen.com/" },
  { name: "BENG eG", href: "https://www.beng-eg.de/" },
  { name: "TUM", href: "https://www.tum.de/" },
];
