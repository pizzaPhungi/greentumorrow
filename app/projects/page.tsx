import type { Metadata } from "next";
import { Button, Card, Pill, Section, SectionHeading, PageHeader } from "@/components/ui";
import { contact, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Community-owned photovoltaic projects in Munich, built by gREen tumorrow with the energy cooperative EGM eG.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Two roofs in Munich, and counting."
        lead="Every project follows the same logic: a roof owner who wants solar, a cooperative that finances it, and a neighbourhood that ends up owning it. We do the work in between."
      />

      <Section>
        <ul className="space-y-8">
          {projects.map((p) => (
            <Card key={p.slug} as="li" className="p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Pill tone={p.status === "Live" ? "live" : "building"}>
                      {p.status}
                    </Pill>
                    <span className="text-sm text-navy/55">{p.year}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-navy/75">
                    {p.summary}
                  </p>
                  <p className="mt-6 text-sm text-navy/60">
                    Built with{" "}
                    <span className="font-semibold text-green-dark">
                      {p.partner}
                    </span>
                  </p>
                </div>
                <dl className="space-y-5 self-start rounded-xl bg-cream-deep/70 p-7">
                  {p.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-4 border-b border-green/12 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm uppercase tracking-wider text-navy/55">
                        {spec.label}
                      </dt>
                      <dd className="text-right text-lg font-semibold tabular-nums text-green-dark">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Next"
            title="Know a roof?"
            lead="Churches, housing associations, schools, sports clubs — if a building in Munich has an unused roof and an owner willing to talk, we want to hear about it."
          />
          <Button href={`mailto:${contact.email}`}>Tell us about it</Button>
        </div>
      </Section>
    </>
  );
}
