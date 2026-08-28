import type { Metadata } from "next";
import { TodoNote } from "@/components/Todo";
import { Container, PageHeader } from "@/components/ui";
import { TODO, contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal notice for greentumorrow.de.",
  robots: { index: false },
};

/**
 * PLACEHOLDER. gREen tumorrow has no legal form yet, so no legal person can be
 * the service provider under § 5 DDG. Until the e.V. is registered, a natural
 * person must be named here, with a real address, and carries personal
 * liability for the site's content. Do not launch without resolving this.
 */
export default function ImprintPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Imprint"
        lead="Information according to § 5 DDG (Digitale-Dienste-Gesetz)."
      />
      <Container>
        <div className="max-w-2xl space-y-12 py-16 sm:py-24">
          <div className="rounded-lg border border-dashed border-amber-deep bg-amber/10 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Placeholder: not ready for launch
            </p>
            <p className="mt-4 leading-relaxed text-navy/80">
              {site.name} is not yet a registered association. Until the e.V.
              exists, German law requires a natural person to be named as the
              service provider here, with a postal address at which they can be
              reached, and that person is personally liable for the content of
              this site. Fill in the fields below, or run the site under TUM
              student-club infrastructure, before going live.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Service provider</h2>
            <div className="space-y-3">
              <TodoNote value={TODO("Full name of the responsible person")} />
              <br />
              <TodoNote value={TODO("Postal address (no P.O. box)")} />
              <br />
              <TodoNote value={TODO("Legal form once the e.V. is registered, incl. register court and number")} />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="text-navy/80">
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="underline decoration-amber decoration-2 underline-offset-4"
              >
                {contact.email}
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Responsible for content
            </h2>
            <TodoNote value={TODO("Name and address of the person responsible for editorial content")} />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Dispute resolution</h2>
            <p className="leading-relaxed text-navy/80">
              We are neither obliged nor willing to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Liability for links</h2>
            <p className="leading-relaxed text-navy/80">
              This site contains links to external websites over whose content we
              have no control. Responsibility for the content of linked pages
              always lies with their respective provider or operator.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
