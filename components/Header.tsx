import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { SiteNav } from "@/components/SiteNav";
import { Container } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { joinHref, localeHome, type Locale } from "@/content/shared";

/**
 * Stays a server component. Everything that needs the current path lives in
 * SiteNav; the dictionary is read here and passed down as plain strings.
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
            <Wordmark className="hidden text-lg lg:inline" />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            <SiteNav
              locale={locale}
              homeLabel={copy.nav.homeTab}
              labels={copy.nav.sections}
              joinHref={joinHref}
              joinLabel={copy.nav.join}
              openMenu={copy.nav.openMenu}
              closeMenu={copy.nav.closeMenu}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
