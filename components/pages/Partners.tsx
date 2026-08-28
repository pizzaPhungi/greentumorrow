import { ClosingCta } from "@/components/pages/ClosingCta";
import { Card, Section, SectionHeading } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { partnerLinks, type Locale } from "@/content/shared";

export function Partners({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow={copy.partners.eyebrow}
          title={copy.partners.title}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {copy.partners.entries.map((p, i) => (
            <Card key={p.name} as="li">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-navy/55">{p.full}</p>
              <p className="mt-4 text-sm leading-relaxed text-navy/75">
                {p.text}
              </p>
              <a
                href={partnerLinks[i].href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-block text-sm font-semibold text-green-dark underline decoration-amber decoration-2 underline-offset-4"
              >
                {new URL(partnerLinks[i].href).hostname.replace(/^www\./, "")}
              </a>
            </Card>
          ))}
        </ul>
      </Section>
      <ClosingCta locale={locale} />
    </>
  );
}
