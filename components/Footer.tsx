import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { contact, site, type Locale } from "@/content/shared";

/** The legal pages exist in German only and are linked from both languages. */
const legal = [
  { href: "/imprint", key: "imprint" as const },
  { href: "/privacy", key: "privacy" as const },
];

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <footer className="border-t border-green/15 bg-cream-deep">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10" />
              <Wordmark className="text-xl" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy/70">
              {copy.footer.blurb}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              {copy.footer.legalHeading}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    hrefLang="de"
                    className="text-navy/70 hover:text-green-dark"
                  >
                    {copy.footer[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              {copy.footer.findUsHeading}
            </h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-navy/75">
              <p>
                {contact.address.street}
                <br />
                {contact.address.postalCode} {contact.address.city}
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-green-dark"
                >
                  {contact.email}
                </a>
              </p>
              <p className="flex gap-4 pt-1">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-green-dark"
                >
                  Instagram
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-green-dark"
                >
                  LinkedIn
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-green/15 py-7 text-xs text-navy/55">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
