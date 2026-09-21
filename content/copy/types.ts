import type { Fillable, ProjectSlug, Section } from "../shared.ts";

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

/**
 * Roles are deliberately absent. The club has not settled them yet, and a label
 * nobody stands behind is worse than no label. Names carry the section.
 */
export type PersonCopy = {
  /**
   * Overrides `programme` from shared.ts in this language. Only for lines that
   * have an official translation, such as a professorship; degree programme
   * titles stay English everywhere.
   */
  programme?: string;
  /**
   * Only needed once a portrait exists in content/images.ts. Add both together,
   * because a photo without alt text is an accessibility hole and alt text
   * without a photo is nothing at all.
   */
  photoAlt?: Fillable;
};

/** One closing-panel's headline and lead, targeted at a specific audience. */
export type ClosingPanel = {
  title: string;
  lead: string;
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
    /** First tab, back to the main page. Short: it sits in a tab bar. */
    homeTab: string;
    /** Tab labels, keyed by the section slugs in shared.ts. */
    sections: Record<Section, string>;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
  };

  hero: {
    headline: string;
    lead: string;
    joinCta: string;
    /** Written together with the photo, never after it. */
    photoAlt: Fillable;
  };

  /**
   * The three words double as the section's own title (coloured amber, blue,
   * green in turn) and as each block's own tag, so they are written once.
   */
  missionVisionValues: {
    mission: { label: string; text: string };
    vision: { label: string; text: string };
    values: { label: string; items: string[] };
  };

  stats: {
    title: string;
    items: {
      value: Fillable;
      unit?: string;
      label: string;
      note?: string;
      /** False for a year: counting up to it reads as nonsense. */
      animate?: boolean;
    }[];
  };

  pillars: {
    eyebrow: string;
    /** The `RE` prefix is separate so it can be coloured like the wordmark. */
    items: { prefix: string; name: string; text: string }[];
  };


  projects: {
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
    };
  };

  team: {
    title: string;
    people: Record<string, PersonCopy>;
  };

  advisors: {
    title: string;
  };

  partners: {
    title: string;
    entries: { name: string; full: string }[];
  };

  closing: {
    /** One headline and lead per panel, matching the order of `audiences`. */
    panels: [ClosingPanel, ClosingPanel, ClosingPanel];
    cta: string;
    contactUs: string;
    /** Labels the three panels by who each is for, in that order. */
    audiences: [string, string, string];
  };

  footer: {
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
