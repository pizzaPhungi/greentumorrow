import type { Fillable, ProjectSlug } from "../shared.ts";

/**
 * The contract both languages must satisfy. `content/copy/de.ts` and
 * `content/copy/en.ts` are both typed `Copy`, so TypeScript fails the build if
 * either language is missing a key. That is the completeness check: there is no
 * codegen step and neither language is the source the other is derived from.
 *
 * Keep this importable by plain Node. The build gate loads both dictionaries
 * directly to find unresolved `TODO(...)` markers.
 */

export type ProjectCopy = {
  name: string;
  /** Which renewable energy area, e.g. Solar, Solar and storage. */
  field: string;
  status: string;
  /** Where the project stands, in words: "on the grid since 2026". */
  year: string;
  summary: string;
  /** Labels for the figures in shared.ts, same order. */
  specLabels: string[];
  /** One short line for the hero card. Only the essentials. */
  heroLine: string;
  photoAlt: Fillable;
};

export type PersonCopy = {
  role: string;
  /** What that role actually does. A department label alone says nothing. */
  work: string;
  photoAlt: Fillable;
};

export type Copy = {
  htmlLang: string;
  /** Label for the other language in the switch, e.g. "English" as a title. */
  switchToOther: string;

  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };

  nav: {
    join: string;
    home: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };

  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    joinCta: string;
    projectsCta: string;
    cardTitle: string;
  };

  stats: { value: Fillable; unit?: string; label: string; note?: string }[];

  pillars: {
    eyebrow: string;
    title: string;
    lead: string;
    /** The `RE` prefix is separate so it can be coloured like the wordmark. */
    items: { prefix: string; name: string; text: string }[];
  };

  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    partnerLabel: string;
    entries: Record<ProjectSlug, ProjectCopy>;
    own: {
      badge: string;
      headline: string;
      intro: string;
      examplesLabel: string;
      examples: string[];
      requirements: Fillable;
    };
  };

  team: {
    eyebrow: string;
    title: string;
    advisorBadge: string;
    people: Record<string, PersonCopy>;
  };

  partners: {
    eyebrow: string;
    title: string;
    entries: { name: string; full: string; text: string }[];
  };

  closing: {
    title: string;
    lead: string;
    cta: string;
    askInstead: string;
  };

  footer: {
    blurb: string;
    legalHeading: string;
    findUsHeading: string;
    imprint: string;
    privacy: string;
  };

  photo: {
    missing: string;
  };

  todo: {
    label: string;
  };
};
