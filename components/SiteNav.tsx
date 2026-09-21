"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/components/cn";
import {
  counterpartHref,
  heroJoinId,
  joinCtaFrom,
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
  joinLabel,
  openMenu,
  closeMenu,
}: {
  locale: Locale;
  homeLabel: string;
  labels: Record<string, string>;
  joinLabel: string;
  openMenu: string;
  closeMenu: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // next.config sets trailingSlash, so usePathname yields "/projects/".
  const path = pathname.replace(/\/$/, "") || "/";

  // On the home page the header's Join stays hidden while the hero's Join is
  // on screen. Starting hidden there keeps the prerendered HTML from flashing a
  // second button before the observer reports.
  const isHome = path === localeHome[locale];
  const [heroJoinInView, setHeroJoinInView] = useState(isHome);
  useEffect(() => {
    if (!isHome) return;
    const target = document.getElementById(heroJoinId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) =>
      setHeroJoinInView(entry.isIntersecting),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [isHome]);
  const hideJoin = isHome && heroJoinInView;
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
              "text-sm font-bold text-navy transition-colors hover:text-green-dark",
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
        href={joinCtaFrom(locale, pathname)}
        onClick={() => setOpen(false)}
        // Hidden, not removed: keeping its space stops the tabs from shifting.
        aria-hidden={hideJoin || undefined}
        tabIndex={hideJoin ? -1 : undefined}
        className={cn(
          // visibility is in the transition list on purpose: it then flips at
          // the end of a fade-out and at the start of a fade-in, so both
          // directions animate the same way instead of vanishing instantly.
          "rounded-full bg-green px-5 py-3 text-sm font-semibold text-cream shadow-md shadow-green/25 transition-[opacity,visibility,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-green-dark hover:shadow-lg hover:shadow-green/30 sm:px-6",
          hideJoin && "pointer-events-none invisible opacity-0",
        )}
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
                  className="block border-b border-green/10 py-4 text-base font-bold text-navy"
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
