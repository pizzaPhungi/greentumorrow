import type { Metadata } from "next";
import { Fill } from "@/components/Todo";
import { Card, PageHeader, Section, SectionHeading } from "@/components/ui";
import {
  euProjects,
  founded,
  leadership,
  missionVision,
  morePartners,
  ownProjects,
  partners,
  pillars,
  site,
  values,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What gREen tumorrow is, how our projects come about, and who we work with in Munich.",
};

const howProjectsStart = [
  {
    title: "A partner brings a need",
    text: "A cooperative, a building owner or a chair has something that has to get done and no team to do it. We take it on as a project.",
  },
  {
    title: "Or a member brings an idea",
    text: "Someone in the club sees a building, a gap or a question worth chasing and proposes it. Own projects start here.",
  },
  {
    title: "People pick it up",
    text: "Engineering, finance, legal, outreach: whichever kinds of work the project needs. Most need several at once, so most projects are shared.",
  },
  {
    title: "It ships, or it teaches us something",
    text: "Some projects end as an installation on a roof. Others end as a study, a model or a clear answer that a project was not viable. Both are worth the work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A student club for people who want to work on renewable energy."
        lead={site.description}
      />

      <Section>
        <SectionHeading
          eyebrow="Our three pillars"
          title="Technology alone does not get anything built."
          lead="Accelerating renewable energy takes people who know each other, work that actually ships, and knowledge that outlives whoever gathered it. Everything we do sits under one of these three."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Card key={p.name} as="li" className="flex flex-col">
              <p className="font-semibold tabular-nums text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                <span className="text-amber-deep">{p.prefix}</span>{" "}
                <span className="text-green-dark">{p.name}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">{p.text}</p>
            </Card>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Mission" title={missionVision.mission} />
          <SectionHeading eyebrow="Vision" title={missionVision.vision} />
        </div>
        <div className="mt-16 grid gap-8 border-t border-green/15 pt-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Founded
            </p>
            <p className="mt-3 text-navy/75">
              <Fill value={founded} />
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Who runs it
            </p>
            <p className="mt-3 text-navy/75">
              <Fill value={leadership} />
            </p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Values"
          title="Three things we hold ourselves to"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.name} as="li">
              <h3 className="text-xl font-semibold">{v.name}</h3>
              <p className="mt-4 leading-relaxed text-navy/75">{v.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How a project starts"
          title="Two ways in, one way of working"
          lead="We are not a consultancy waiting for briefs, and not a think tank writing concepts. Work arrives one of two ways, and then it gets done the same way."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {howProjectsStart.map((s, i) => (
            <li key={s.title}>
              <p className="font-semibold tabular-nums text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-navy/60">
          <Fill value={ownProjects.requirements} />
        </p>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Who we work with"
          title="Partners"
          lead="Munich has a growing network of energy cooperatives, chairs and district projects. We work inside it as a partner, not as anyone's subsidiary."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <Card key={p.name}>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-navy/55">{p.full}</p>
              <p className="mt-4 text-sm leading-relaxed text-navy/75">
                {p.text}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-block text-sm font-semibold text-green-dark underline decoration-amber decoration-2 underline-offset-4"
              >
                Visit site
              </a>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy/70">
          <Fill value={morePartners} />
        </p>

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
          EU district projects our partners are part of
        </h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {euProjects.map((p) => (
            <Card key={p.name} as="li">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <span className="text-sm text-navy/55">{p.place}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/75">
                {p.text}
              </p>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-block text-sm font-semibold text-green-dark underline decoration-amber decoration-2 underline-offset-4"
              >
                Visit site
              </a>
            </Card>
          ))}
        </ul>
      </Section>
    </>
  );
}
