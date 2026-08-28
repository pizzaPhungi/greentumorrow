import { Arc, LogoMark, Wordmark } from "@/components/Logo";
import { Fill } from "@/components/Todo";
import {
  Button,
  Card,
  Container,
  Eyebrow,
  Pill,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";
import {
  contact,
  ownProjects,
  partners,
  pillars,
  projects,
  stats,
  team,
} from "@/content/site";

export default function HomePage() {
  const live = projects.find((p) => p.status === "Live") ?? projects[0];

  return (
    <>
      {/* Hero. The credibility sits in the lead so it precedes the journey. */}
      <div className="relative overflow-hidden">
        <Arc
          className="pointer-events-none absolute -top-28 left-1/2 hidden h-auto w-[1900px] -translate-x-1/2 text-green/12 md:block"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Eyebrow>Student initiative</Eyebrow>
              <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Learn renewable energy by building it.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75 sm:text-xl">
                <Wordmark className="text-[1.05em]" /> is where students who care
                about renewable energy do the work instead of reading about it.
                You join a real project, with one of our partners or one you
                bring yourself, and you build genuine expertise doing it. Two
                solar projects in Munich are what that has produced so far,
                one of them already feeding the grid.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/join">Join the team</Button>
                <Button href="#projects" variant="secondary">
                  See what we work on
                </Button>
              </div>
            </div>

            <Card className="relative bg-cream-deep/70">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                    First plant
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-green-dark">
                    {live.name}
                  </p>
                </div>
                <Pill tone="live">{live.status}</Pill>
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-green/15 pt-6">
                {live.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs uppercase tracking-wider text-navy/50">
                      {spec.label}
                    </dt>
                    <dd className="mt-1 font-semibold tabular-nums text-navy">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-green/15 pt-6">
                <p className="text-sm text-navy/60">
                  Built with{" "}
                  <span className="font-semibold text-green-dark">
                    {live.partner}
                  </span>
                </p>
                <LogoMark className="h-9 opacity-80" />
              </div>
            </Card>
          </div>
        </Container>
      </div>

      {/* Numbers */}
      <Section tone="deep" className="py-14 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      {/* Pillars: what the club does. Placed above the team on purpose:
          people come for purpose and accomplishments before personnel. */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="What we do"
          title="Three things, and they hold each other up."
          lead="Technology alone does not get a renewable energy project built. It takes people who know each other, work that actually ships, and knowledge that outlives the people who gathered it."
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

      {/* Projects: the evidence, in full */}
      <Section id="projects">
        <SectionHeading
          eyebrow="What we work on"
          title="Real projects, with real consequences if you get them wrong."
          lead="Everything we do runs on a real building, a real budget or a real research question. Two are running with partners today; the next one could be yours."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.slug} as="article" className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <Pill tone={p.status === "Live" ? "live" : "building"}>
                  {p.status}
                </Pill>
                <span className="text-sm font-medium text-green-dark">
                  {p.field}
                </span>
                <span className="text-sm text-navy/55">{p.year}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
              <p className="mt-4 grow leading-relaxed text-navy/75">
                {p.summary}
              </p>
              <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-green/15 pt-5">
                {p.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs uppercase tracking-wider text-navy/50">
                      {spec.label}
                    </dt>
                    <dd className="mt-0.5 font-semibold tabular-nums text-navy">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>

        {/* Own projects: an invitation, never dressed up as an existing project. */}
        <Card className="mt-6 border-dashed border-amber-deep/50 bg-amber/8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <Pill tone="building">Open</Pill>
              <h3 className="mt-4 text-xl font-semibold">
                {ownProjects.headline}
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">
                {ownProjects.intro}
              </p>
            </div>
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
              <p className="mt-6 text-sm text-navy/70">
                <Fill value={ownProjects.requirements} />
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* The team: who does the work. Each role names the work, not a label. */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Who you would work with"
          title="Our members"
          lead="There is no head office behind us. Everything above is done by the people below, which is also why there is room for you."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <Card key={person.name} as="li">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg font-semibold text-green-dark">
                  {person.name}
                </p>
                {person.kind === "advisor" ? (
                  <Pill>Advisor</Pill>
                ) : null}
              </div>
              <p className="mt-1 text-sm font-medium text-amber-deep">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {person.work}
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Partners */}
      <Section>
        <SectionHeading eyebrow="Who we work with" title="Partners" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <Card key={p.name} as="li">
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
        </ul>
      </Section>

      {/* Closing CTA */}
      <Section tone="mist" className="py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <LogoMark className="h-16" />
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            Renewable energy needs people who have already built something.
            Start here.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/join">Join the team</Button>
            <Button href={`mailto:${contact.email}`} variant="secondary">
              Write to us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
