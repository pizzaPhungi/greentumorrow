"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogoMark, Wordmark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { cn } from "@/components/cn";
import { joinCta, nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-cream/85 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between gap-6 py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="gREen tumorrow, home"
          >
            <LogoMark className="h-10" />
            <Wordmark className="text-base sm:text-lg" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-green-dark"
                      : "text-navy/70 hover:text-green-dark",
                  )}
                >
                  <span
                    className={cn(
                      "pb-1",
                      active && "border-b-2 border-amber",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link
              href={joinCta.href}
              className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-green-dark"
            >
              {joinCta.label}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-green-dark md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-green/10 bg-cream md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-green/8 py-4 text-base font-medium text-navy"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href={joinCta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-green px-6 py-3 text-sm font-semibold text-cream"
                >
                  {joinCta.label}
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
