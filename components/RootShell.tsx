import type { ReactNode } from "react";
import { Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getCopy } from "@/content/copy";
import type { Locale } from "@/content/shared";
import "@/app/globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

/**
 * Shared body for both root layouts. Each language group renders its own
 * <html lang>, which is the reason there are two root layouts at all, but
 * everything inside is identical apart from the dictionary.
 */
export function RootShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const copy = getCopy(locale);

  return (
    <html
      lang={copy.htmlLang}
      className={figtree.variable}
      // globals.css sets smooth scrolling for in-page anchors. Without this,
      // Next 16 keeps it during route changes too, and its scroll-into-view
      // calls then animate and strand the new page halfway down.
      data-scroll-behavior="smooth"
      // SiteNav adds data-navigated on the client after the first route change.
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-green focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          {copy.nav.skipToContent}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
