"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/components/cn";
import {
  counterpartHref,
  localeHome,
  locales,
  sectionHref,
  sections,
  type Locale,
} from "@/content/shared";

/**
 * Tabs, language switch and the mobile menu. A client component because the
 * active tab and the language target both depend on the current path.
 *
 * Every route here is static, so per the Next docs `usePathname` resolves during
 * prerendering: the active tab and the counterpart link are already in the
 * exported HTML rather than appearing after hydration.
 *
 * Labels arrive as props so the dictionaries stay on the server.
 */
export function SiteNav({
  locale,
  homeLabel,
  labels,
  joinHref,
  joinLabel,
  openMenu,
  closeMenu,
}: {
  locale: Locale;
  homeLabel: string;
  labels: Record<string, string>;
  joinHref: string;
  joinLabel: string;
  openMenu: string;
  closeMenu: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // next.config sets trailingSlash, so usePathname yields "/projects/".
  const path = pathname.replace(/\/$/, "") || "/";
  const tabs = [
    {
      href: localeHome[locale],
      label: homeLabel,
      active: path === localeHome[locale],
    },
    ...sections.map((s) => {
      const href = sectionHref(locale, s);
      return { href, label: labels[s], active: path === href };
    }),
  ];

  return (
    <>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            aria-current={t.active ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors",
              t.active ? "text-green-dark" : "text-navy/70 hover:text-green-dark",
            )}
          >
            <span className={cn("pb-1", t.active && "border-b-2 border-amber")}>
              {t.label}
            </span>
          </Link>
        ))}
      </nav>

      <p className="flex items-center gap-1.5 text-sm font-semibold">
        {locales.map((code, i) => (
          <span key={code} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span aria-hidden="true" className="text-navy/25">
                /
              </span>
            ) : null}
            {code === locale ? (
              <span aria-current="true" className="text-green-dark">
                {code.toUpperCase()}
              </span>
            ) : (
              <Link
                href={counterpartHref(pathname, code)}
                hrefLang={code}
                className="text-navy/45 transition-colors hover:text-green-dark"
              >
                {code.toUpperCase()}
              </Link>
            )}
          </span>
        ))}
      </p>

      <a
        href={joinHref}
        className="rounded-full bg-green px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-green-dark sm:px-5"
      >
        {joinLabel}
      </a>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-green-dark md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeMenu : openMenu}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          strokeLinecap="round"
        >
          {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full border-t border-green/10 bg-cream px-5 shadow-sm md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col py-2">
            {tabs.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  onClick={() => setOpen(false)}
                  aria-current={t.active ? "page" : undefined}
                  className={cn(
                    "block border-b border-green/10 py-4 text-base font-medium",
                    t.active ? "text-green-dark" : "text-navy",
                  )}
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
