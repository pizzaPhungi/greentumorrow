import type { Metadata } from "next";
import { getCopy } from "@/content/copy";
import {
  defaultLocale,
  legalHref,
  legalPages,
  localeHome,
  locales,
  sectionHref,
  site,
  type Locale,
  type Section,
} from "@/content/shared";

/**
 * Next merges metadata shallowly: a page that sets `openGraph` or `alternates`
 * replaces the layout's object wholesale instead of extending it. So every
 * page builds the complete objects here, and all URLs derive from the same
 * href helpers the navigation uses.
 */

/** Both root layouts. The home page itself adds nothing on top. */
export function layoutMetadata(locale: Locale): Metadata {
  const copy = getCopy(locale);
  return {
    ...pageMetadata(locale),
    metadataBase: new URL(site.url),
    title: { default: copy.meta.title, template: `%s · ${site.name}` },
    description: copy.meta.description,
  };
}

/** A page that exists in every language: the home page, or one of the tabs. */
export function pageMetadata(locale: Locale, section?: Section): Metadata {
  const copy = getCopy(locale);
  const href = (l: Locale) => (section ? sectionHref(l, section) : localeHome[l]);
  const title = section ? copy.nav.sections[section] : undefined;
  return {
    ...(title ? { title } : {}),
    alternates: {
      canonical: href(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, href(l)])),
        "x-default": href(defaultLocale),
      },
    },
    openGraph: {
      type: "website",
      locale: copy.meta.ogLocale,
      siteName: site.name,
      url: href(locale),
      title: title ? `${title} · ${site.name}` : copy.meta.title,
      description: copy.meta.description,
    },
  };
}

/**
 * The German-only legal pages: their own canonical, no language alternates,
 * and kept out of search results while they are placeholders.
 */
export function legalMetadata(
  page: (typeof legalPages)[number],
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    robots: { index: false },
    alternates: { canonical: legalHref(page) },
    openGraph: {
      type: "website",
      locale: getCopy("de").meta.ogLocale,
      siteName: site.name,
      url: legalHref(page),
      title: `${title} · ${site.name}`,
      description,
    },
  };
}
