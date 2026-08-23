import type { Metadata } from "next";
import { Button, Card, Section, SectionHeading, PageHeader } from "@/components/ui";
import { academics, contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Thesis & Internships",
  description:
    "Master's theses, research internships and seminars at TUM based on live community energy projects in Munich.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Thesis & internships"
        title="Academic work with a plant behind it."
        lead={academics.intro}
      />

      <Section>
        <SectionHeading eyebrow="How it works" title="Four steps, two supervisors" />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {academics.steps.map((s, i) => (
            <li key={s.title}>
              <p className="font-semibold tabular-nums text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sage">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Formats"
            title="Pick the one that fits your semester."
          />
          <ul className="grid gap-5 sm:grid-cols-2">
            {academics.formats.map((f) => (
              <Card key={f.name} as="li">
                <h3 className="text-lg font-semibold">{f.name}</h3>
                <p className="mt-3 leading-relaxed text-navy/75">{f.text}</p>
              </Card>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who this is for"
              title="Programmes we work with most"
              lead="These are the programmes our topics map onto cleanly. If yours is not listed and you still see a fit, make the case — we read every mail."
            />
          </div>
          <ul className="space-y-4 self-center">
            {academics.majors.map((m) => (
              <li
                key={m}
                className="flex items-center gap-4 rounded-xl border border-green/12 bg-cream-deep/60 px-6 py-5 text-lg"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-amber" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="green">
        <div className="flex flex-col items-start gap-8">
          <SectionHeading
            eyebrow="Get a topic"
            title="Tell us what you want to work on."
            lead="Send your programme, your semester and the rough direction that interests you. We will tell you honestly whether we have a topic that carries a thesis."
            invert
          />
          <Button
            href={`mailto:${contact.email}?subject=Thesis%20topic`}
            variant="secondary"
            className="border-mist/30 text-mist hover:border-mist hover:bg-mist/10"
          >
            {contact.email}
          </Button>
        </div>
      </Section>
    </>
  );
}
