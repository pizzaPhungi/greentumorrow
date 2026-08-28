import Link from "next/link";
import { getCopy } from "@/content/copy";
import { localeHome, locales, type Locale } from "@/content/shared";

/**
 * DE | EN. The current language is plain text, not a link. Both targets are
 * fixed URLs, so this needs no pathname lookup and stays a server component.
 *
 * Switching crosses root layouts, so the browser does a full page load. That is
 * correct here: the whole document language changes.
 */
export function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <p className="flex items-center gap-1.5 text-sm font-semibold">
      {locales.map((code, i) => {
        const current = code === locale;
        return (
          <span key={code} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span aria-hidden="true" className="text-navy/25">
                /
              </span>
            ) : null}
            {current ? (
              <span aria-current="true" className="text-green-dark">
                {code.toUpperCase()}
              </span>
            ) : (
              <Link
                href={localeHome[code]}
                hrefLang={code}
                title={getCopy(locale).switchToOther}
                className="text-navy/45 transition-colors hover:text-green-dark"
              >
                {code.toUpperCase()}
              </Link>
            )}
          </span>
        );
      })}
    </p>
  );
}
