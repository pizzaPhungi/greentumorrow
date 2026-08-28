import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Container } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { joinHref, localeHome, type Locale } from "@/content/shared";

/**
 * A server component: with one page per language there is no navigation to
 * reveal, so there is no menu state and no client bundle. If top-level pages
 * come back, the nav list and a burger menu return with them.
 */
export function Header({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-cream/85 backdrop-blur-md">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4 py-3">
          <Link
            href={localeHome[locale]}
            className="flex items-center gap-3"
            aria-label={copy.nav.home}
          >
            <LogoMark className="h-10" />
            <Wordmark className="text-base sm:text-lg" />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <LanguageSwitch locale={locale} />
            <a
              href={joinHref}
              className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-green-dark"
            >
              {copy.nav.join}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
