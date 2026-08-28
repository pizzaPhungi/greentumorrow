import type { Metadata } from "next";
import { Fill } from "@/components/Todo";
import {
  Button,
  Card,
  PageHeader,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui";
import { contact, ownProjects, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The renewable energy projects gREen tumorrow works on, with partners and the ones our members bring themselves.",
};

export default function ProjectsPage() {
  const partnerProjects = projects.filter((p) => p.type === "partner");
  const memberProjects = projects.filter((p) => p.type === "own");

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Everything here runs on a real building or a real question."
        lead="Some projects come through a partner who needs the work done. Others start with a member who had an idea. Both count, and both are how you learn this properly."
      />

      <Section>
        <SectionHeading
          eyebrow="Partner projects"
          title="Work that came to us through a partner"
          lead="A partner brings the site and the stakes; we bring the people who do the work. Our first two are photovoltaic installations with the energy cooperative EGM eG."
        />
        <ul className="mt-14 space-y-8">
          {partnerProjects.map((p) => (
            <Card key={p.slug} as="li" className="p-8 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Pill tone={p.status === "Live" ? "live" : "building"}>
                      {p.status}
                    </Pill>
                    <span className="text-sm font-medium text-green-dark">
                      {p.field}
                    </span>
                    <span className="text-sm text-navy/55">{p.year}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-5 text-lg leading-relaxed text-navy/75">
                    {p.summary}
                  </p>
                  {p.partner ? (
                    <p className="mt-6 text-sm text-navy/60">
                      Built with{" "}
                      <span className="font-semibold text-green-dark">
                        {p.partner}
                      </span>
                    </p>
                  ) : null}
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

      <Section tone="mist">
        <SectionHeading
          eyebrow="Own projects"
          title={ownProjects.headline}
          lead={ownProjects.intro}
        />

        {memberProjects.length > 0 ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {memberProjects.map((p) => (
              <Card key={p.slug} as="li">
                <div className="flex flex-wrap items-center gap-3">
                  <Pill tone={p.status === "Live" ? "live" : "building"}>
                    {p.status}
                  </Pill>
                  <span className="text-sm font-medium text-green-dark">
                    {p.field}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
                <p className="mt-4 leading-relaxed text-navy/75">{p.summary}</p>
              </Card>
            ))}
          </ul>
        ) : (
          <Card className="mt-14 border-dashed border-amber-deep/50 bg-amber/8">
            <p className="text-lg leading-relaxed text-navy/80">
              None running yet, so you could be first. If you already have
              something in mind, that is the fastest way into this club.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  For example
                </p>
                <ul className="mt-4 space-y-2 text-navy/75">
                  {ownProjects.examples.map((e) => (
                    <li key={e} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-deep"
                      />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  How to propose one
                </p>
                <p className="mt-4 text-navy/75">
                  <Fill value={ownProjects.requirements} />
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Button href={`mailto:${contact.email}?subject=Project%20idea`}>
                Pitch your project
              </Button>
            </div>
          </Card>
        )}
      </Section>

      <Section tone="deep">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Next"
            title="Know a building, a partner or a question worth chasing?"
            lead="Churches, housing associations, schools, sports clubs, chairs with a dataset nobody has used. If there is a renewable energy project in it, we want to hear about it."
          />
          <Button href={`mailto:${contact.email}`}>Tell us about it</Button>
        </div>
      </Section>
    </>
  );
}
