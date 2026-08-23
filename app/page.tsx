import Link from "next/link";
import { Arc, LogoMark, Wordmark } from "@/components/Logo";
import { Fillable } from "@/components/Todo";
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
  academics,
  contact,
  partners,
  projects,
  stats,
  units,
} from "@/content/site";

const differentiators = [
  {
    title: "Real plants, not concepts",
    text: "Our first system has been feeding the Munich grid since 2026. The second is on a church roof right now. Nothing here ends as a slide deck.",
  },
  {
    title: "Real money, not a play budget",
    text: "Our projects are financed by cooperative members — neighbours who bought shares. That changes how carefully you work, and how much you learn.",
  },
  {
    title: "Real academic credit",
    text: "Field data from live plants makes unusually good thesis material. We supply topic and supervision, a TUM chair supplies the format.",
  },
];

export default function HomePage() {
  const live = projects[0];

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <Arc
          className="pointer-events-none absolute -top-28 left-1/2 hidden h-auto w-[1900px] -translate-x-1/2 text-green/12 md:block"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <Eyebrow>TUM student initiative · Munich</Eyebrow>
              <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                You can drive past our first project.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75 sm:text-xl">
                <Wordmark className="text-[1.05em]" /> plans, finances and
                delivers community-owned solar in Munich together with the
                energy cooperative EGM&nbsp;eG. One plant is on the grid. The
                next is under construction. Six of us are doing it.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/join">Join the team</Button>
                <Button href="/projects" variant="secondary">
                  See the projects
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

      {/* Why */}
      <Section>
        <SectionHeading
          eyebrow="Why this one"
          title="There are 250 student clubs at TUM. Here is what is different about ours."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {differentiators.map((d, i) => (
            <div key={d.title}>
              <p className="font-semibold tabular-nums text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section tone="sage">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Projects"
            title="Two roofs in Munich"
            lead="Community-owned photovoltaics, developed with EGM eG and owned by the people who live around them."
          />
          <Button href="/projects" variant="secondary" className="shrink-0">
            All projects
          </Button>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.slug} as="article" className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <Pill tone={p.status === "Live" ? "live" : "building"}>
                  {p.status}
                </Pill>
                <span className="text-sm text-navy/55">{p.year}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
              <p className="mt-5 grow leading-relaxed text-navy/75">
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
      </Section>

      {/* Units */}
      <Section>
        <SectionHeading
          eyebrow="Where you plug in"
          title="Seven units. Six people. You can do the maths."
          lead="Every unit below is a real part of getting a plant built. Pick the one that sounds like you — you do not need prior experience, you need to show up."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <Card
              key={u.slug}
              as="li"
              className={u.open ? "border-amber-deep/50 bg-amber/8" : undefined}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{u.name}</h3>
                {u.open ? <Pill tone="building">Lead open</Pill> : null}
              </div>
              <p className="mt-2 text-navy/75">{u.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-navy/65">
                {u.work.map((w) => (
                  <li key={w} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                    {w}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-green/12 pt-4 text-sm text-navy/55">
                {u.lead ? `Led by ${u.lead}` : "Looking for a student lead"}
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Academics */}
      <Section tone="green">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Thesis & internships"
              title="Write your master's thesis about a plant you helped build."
              lead={academics.intro}
              invert
            />
            <Button href="/academics" variant="secondary" className="mt-9 border-mist/30 text-mist hover:border-mist hover:bg-mist/10">
              How it works
            </Button>
          </div>
          <ul className="space-y-5">
            {academics.majors.map((m) => (
              <li
                key={m}
                className="flex items-center gap-4 border-b border-mist/15 pb-5 text-lg text-mist/90"
              >
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-amber" />
                {m}
              </li>
            ))}
            <li className="pt-2 text-mist/60">
              Other programmes welcome — talk to us.
            </li>
          </ul>
        </div>
      </Section>

      {/* Come by */}
      <Section tone="deep">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Come by"
              title="The best way to find out is to turn up."
              lead="We meet regularly in Munich. No application needed to visit — bring questions."
            />
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                Where
              </p>
              <p className="mt-2 text-lg text-navy">
                {contact.address.street}
                <br />
                {contact.address.postalCode} {contact.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                When
              </p>
              <p className="mt-2 text-lg text-navy">
                <Fillable value={contact.meetup.cadence} />
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">
                Ask first
              </p>
              <p className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                <a href={`mailto:${contact.email}`} className="text-green-dark underline decoration-amber decoration-2 underline-offset-4">
                  {contact.email}
                </a>
                <a href={`tel:${contact.phoneHref}`} className="text-green-dark underline decoration-amber decoration-2 underline-offset-4">
                  {contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section>
        <SectionHeading eyebrow="Who we work with" title="Partners" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <Card key={p.name} as="li">
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
        </ul>
      </Section>

      {/* Closing CTA */}
      <Section tone="sage" className="py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <LogoMark className="h-16" />
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            The next roof is already out there. Help us find it.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/join">Join the team</Button>
            <Button href={`mailto:${contact.email}`} variant="secondary">
              Write to us
            </Button>
          </div>
          <p className="text-sm text-navy/60">
            Or read{" "}
            <Link href="/about" className="underline decoration-amber decoration-2 underline-offset-4">
              what we stand for
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
