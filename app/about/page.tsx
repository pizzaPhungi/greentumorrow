import type { Metadata } from "next";
import { Card, Section, SectionHeading, PageHeader } from "@/components/ui";
import { euProjects, missionVision, partners, site, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "What gREen tumorrow is, how community energy cooperatives work, and who we build with in Munich.",
};

const cooperativeSteps = [
  {
    title: "Neighbours become owners",
    text: "People from the district join the cooperative by buying shares. That capital is what pays for the panels.",
  },
  {
    title: "The cooperative builds",
    text: "It signs the roof agreement, orders the system and takes on the project — as one legal body instead of forty private households.",
  },
  {
    title: "The district keeps the value",
    text: "The electricity and the earnings stay with the members rather than leaving for a distant utility.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A student initiative sitting between a university and a power plant."
        lead={site.description}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Mission" title={missionVision.mission} />
          </div>
          <div>
            <SectionHeading eyebrow="Vision" title={missionVision.vision} />
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionHeading eyebrow="Values" title="Three things we hold ourselves to" />
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
          eyebrow="How community energy works"
          title="Why a cooperative, and not a company"
          lead="An energy cooperative (eG) lets a neighbourhood collectively own the thing that generates its power. It is the legal form our projects run on, and understanding it is half the work."
        />
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {cooperativeSteps.map((s, i) => (
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
          Membership terms, shares and any financial details are a matter for the
          cooperative itself, not for us. If you are considering joining EGM eG as
          a member, go to their site — we are the student initiative that works on
          the projects, not the issuer.
        </p>
      </Section>

      <Section tone="sage">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Who else is in this"
          lead="Munich has a growing network of citizen energy cooperatives and EU-funded district projects. Our work sits inside it — as a partner, not as a subsidiary."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <Card key={p.name}>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-navy/55">{p.full}</p>
              <p className="mt-4 text-sm leading-relaxed text-navy/75">{p.text}</p>
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

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
          EU district projects in our neighbourhoods
        </h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {euProjects.map((p) => (
            <Card key={p.name} as="li">
              <div className="flex items-baseline justify-between gap-4">
                <h4 className="text-lg font-semibold">{p.name}</h4>
                <span className="text-sm text-navy/55">{p.place}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy/75">{p.text}</p>
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
