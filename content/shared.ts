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

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

/** German sits at the root, English one level down. No redirect involved. */
export const localeHome: Record<Locale, string> = { de: "/", en: "/en" };

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
   * Invite link to the WhatsApp group. This is the whole joining process, so
   * until it is here the site cannot honestly ask anyone to join.
   */
  whatsapp: TODO(
    "Invite link to the WhatsApp group (https://chat.whatsapp.com/...)",
  ) as Fillable,
};

/**
 * Where every join button points. The WhatsApp group once it exists, email
 * until then, so the site never ships a dead link. The build stays blocked
 * either way until `contact.whatsapp` is filled in.
 */
export const joinHref = isTodo(contact.whatsapp)
  ? `mailto:${contact.email}`
  : contact.whatsapp;

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
};

export const teamFacts: PersonFacts[] = [
  { name: "Nazli", surname: TODO("Nazli's surname"), kind: "student" },
  { name: "Nana Kwabena Osei", kind: "student" },
  { name: "Duc Viet Phung", kind: "student" },
  { name: "Marvin Elling", kind: "student" },
  { name: "Salma Gares", kind: "student" },
  { name: "Karim Alzahabi", kind: "student" },
  { name: "Dr. Markus Eblenkamp", kind: "advisor" },
  { name: "Dr. Christoph Göbel", kind: "advisor" },
];

export const partnerLinks = [
  { name: "EGM eG", href: "https://www.energiegemeinschaften-muenchen.com/" },
  { name: "BENG eG", href: "https://www.beng-eg.de/" },
  { name: "TUM", href: "https://www.tum.de/" },
];
