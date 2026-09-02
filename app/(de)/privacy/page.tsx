import type { Metadata } from "next";
import { Fill, TodoNote } from "@/components/Todo";
import { Container, PageHeader } from "@/components/ui";
import { TODO, contact, responsible } from "@/content/shared";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for greentumorrow.de.",
  robots: { index: false },
};

/**
 * PLACEHOLDER. The final wording depends on where the site is hosted and which
 * third parties are actually contacted at runtime. Today the site is fully
 * static, loads Google Fonts self-hosted through next/font, sets no cookies and
 * runs no analytics. Keep it that way and this document stays short.
 */
export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        lead="How we handle personal data on this website, under the GDPR."
      />
      <Container>
        <div className="max-w-2xl space-y-12 py-16 sm:py-24">
          <div className="rounded-lg border border-dashed border-amber-deep bg-amber/10 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Placeholder, needs review before launch
            </p>
            <p className="mt-4 leading-relaxed text-navy/80">
              The text below reflects how the site is built today. Static pages,
              no cookies, no analytics, no forms, fonts served from our own
              domain. It still needs the controller details filled in and a check
              against the hosting provider actually used.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Controller</h2>
            <div className="space-y-3 text-navy/80">
              <p>{responsible.name}</p>
              <p>
                <Fill value={responsible.address} label="To do" />
              </p>
            </div>
            <p className="text-navy/80">
              Email an{" "}
              <a
                href={`mailto:${contact.email}`}
                className="underline decoration-amber decoration-2 underline-offset-4"
              >
                {contact.email}
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What this site collects</h2>
            <p className="leading-relaxed text-navy/80">
              This website is static. It sets no cookies, runs no analytics or
              tracking, embeds no third-party media and contains no forms.
              Typefaces are served from this domain, so no request goes to Google
              Fonts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">The join form</h2>
            <p className="leading-relaxed text-navy/80">
              The join buttons lead to a form hosted by Notion. Nothing is
              embedded here, so following the link is what takes you to Notion,
              and only what you type there reaches us: your name and how to
              contact you. We use it to get in touch and to invite you to our
              group, on the basis of Art. 6(1)(b) and (f) GDPR, and delete it
              once it is no longer needed for that.
            </p>
            <TodoNote
              label="To do"
              value={TODO(
                "Notion is a US provider. Name the data processing agreement and the transfer basis, and say how long entries are kept",
              )}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Server log files</h2>
            <p className="leading-relaxed text-navy/80">
              Our hosting provider records technical access data (IP address,
              time of request, page requested, browser and operating system) in
              server log files. This is necessary to deliver the site and to keep
              it secure. The legal basis is Art. 6(1)(f) GDPR.
            </p>
            <TodoNote label="To do" value={TODO("Name of the hosting provider and its retention period for log files")} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contacting us</h2>
            <p className="leading-relaxed text-navy/80">
              If you write or call us, we process the data you provide in order
              to answer you (Art. 6(1)(b) and (f) GDPR). We keep it as long as
              needed for that purpose and delete it afterwards.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Your rights</h2>
            <p className="leading-relaxed text-navy/80">
              You have the right to access, rectification, erasure, restriction of
              processing, data portability and to object to processing. You may
              also lodge a complaint with a supervisory authority, for us the
              Bayerisches Landesamt für Datenschutzaufsicht.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
