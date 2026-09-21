import Link from "next/link";
import { LogoMark, Wordmark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { contact, legalHref, legalPages, site, type Locale } from "@/content/shared";

/** The legal pages exist in German only and are linked from both languages. */
const legal = legalPages.map((key) => ({ key, href: legalHref(key) }));

export function Footer({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <footer className="mt-10 border-t border-green/15 bg-cream-deep/60 backdrop-blur-md sm:mt-14">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10" alt="" />
              <Wordmark className="text-xl" />
            </div>
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
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-green-dark"
                >
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center gap-4 pt-1">
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="transition-opacity hover:opacity-80"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="transition-opacity hover:opacity-80"
                >
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-green/15 py-5 text-xs text-navy/70">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
        </div>
      </Container>
    </footer>
  );
}

/** Instagram's own gradient mark, not the site palette: a brand logo reads as
 *  itself regardless of what page it sits on. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="30%" stopColor="#FA7E1E" />
          <stop offset="55%" stopColor="#D62976" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagram-gradient)" />
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="3.5"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="16.3" cy="7.7" r="1" fill="white" />
    </svg>
  );
}

/** LinkedIn's own blue and mark, kept as-is for the same reason. */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2" />
      <path
        fill="white"
        d="M8.34 9.75H5.79v8.46h2.55V9.75Zm-1.27-4.08a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96Zm4.02 4.08H8.65c.02.65 0 8.46 0 8.46h2.44v-4.72c0-.26.02-.51.1-.7.2-.51.68-1.04 1.47-1.04 1.04 0 1.45.79 1.45 1.94v4.52h2.44v-4.85c0-2.25-1.2-3.3-2.81-3.3a2.43 2.43 0 0 0-2.2 1.22v-.03Z"
      />
    </svg>
  );
}
