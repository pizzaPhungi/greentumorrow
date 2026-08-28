import { Arc, LogoMark, Wordmark } from "@/components/Logo";
import { Photo } from "@/components/Photo";
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
import { getCopy } from "@/content/copy";
import {
  contact,
  isTodo,
  joinHref,
  partnerLinks,
  projectFacts,
  teamFacts,
  type Locale,
} from "@/content/shared";
import { heroPhoto, personPhotos, projectPhotos } from "@/content/images";

/**
 * One structure, two dictionaries. Facts come from shared.ts and are identical
 * in both languages; every string comes from the locale's copy module.
 */
export function Home({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.projects;

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <Arc
          className="pointer-events-none absolute -top-28 left-1/2 hidden h-auto w-[1900px] -translate-x-1/2 text-green/12 md:block"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
              <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                {copy.hero.headline}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75 sm:text-xl">
                <Wordmark className="text-[1.05em]" /> {copy.hero.lead}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={joinHref}>{copy.hero.joinCta}</Button>
                <Button href="#projects" variant="secondary">
                  {copy.hero.projectsCta}
                </Button>
              </div>
            </div>

            <Photo
              src={heroPhoto}
              alt={copy.hero.photoAlt}
              missingLabel={copy.photo.missing}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
        </Container>
      </div>

      {/* Numbers */}
      <Section tone="deep" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow={copy.stats.eyebrow}
          title={copy.stats.title}
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.items.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      {/* Pillars. Equal weight, separated columns rather than a card row. */}
      <Section tone="mist">
        <Eyebrow>{copy.pillars.eyebrow}</Eyebrow>
        <ol className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {copy.pillars.items.map((p) => (
            <li
              key={p.name}
              className="border-t-2 border-green/25 pt-6 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0"
            >
              <h3 className="text-2xl font-semibold">
                <span className="text-amber-deep">{p.prefix}</span>{" "}
                <span className="text-green-dark">{p.name}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Events. The Knowledge pillar was a claim until this section existed. */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow={copy.events.eyebrow}
            title={copy.events.title}
            lead={copy.events.lead}
          />
          <div className="self-center text-lg leading-relaxed text-navy/80">
            <Fill value={copy.events.sofar} label={copy.todo.label} />
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" tone="mist">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projectFacts.map((p) => {
            const c = t.entries[p.slug];
            return (
              <Card key={p.slug} as="article" className="flex flex-col">
                <Photo
                  src={projectPhotos[p.slug]}
                  alt={c.photoAlt}
                  missingLabel={copy.photo.missing}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] w-full rounded"
                />
                <div className="mt-6 flex grow flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <Pill tone={p.status === "live" ? "live" : "building"}>
                      {c.status}
                    </Pill>
                    <span className="text-sm font-medium text-green-dark">
                      {c.field}
                    </span>
                    <span className="text-sm text-navy/55">{c.year}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{c.name}</h3>
                  <p className="mt-4 grow leading-relaxed text-navy/75">
                    {c.summary}
                  </p>
                  <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-green/15 pt-5">
                    {p.specs.map((value, i) => (
                      <div key={c.specLabels[i]}>
                        <dt className="text-xs uppercase tracking-wider text-navy/50">
                          {c.specLabels[i]}
                        </dt>
                        <dd className="mt-0.5 font-semibold tabular-nums text-navy">
                          {value}
                        </dd>
                      </div>
                    ))}
                    {p.partner ? (
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-navy/50">
                          {t.partnerLabel}
                        </dt>
                        <dd className="mt-0.5 font-semibold text-navy">
                          {p.partner}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </div>
              </Card>
            );
          })}
        </div>

        {/* An invitation, never dressed up as an existing project. */}
        <Card className="mt-6 border-dashed border-amber-deep/50 bg-amber/8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div>
              <span className="inline-flex">
                <Pill tone="building">{t.own.badge}</Pill>
              </span>
              <h3 className="mt-4 text-xl font-semibold">{t.own.headline}</h3>
              <p className="mt-4 leading-relaxed text-navy/75">{t.own.intro}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
                {t.own.examplesLabel}
              </p>
              <ul className="mt-4 space-y-2 text-navy/75">
                {t.own.examples.map((e) => (
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
                <Fill value={t.own.requirements} label={copy.todo.label} />
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* The team */}
      <Section tone="deep">
        <SectionHeading eyebrow={copy.team.eyebrow} title={copy.team.title} />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamFacts.map((person) => (
            <Card key={person.name} as="li" className="flex items-center gap-4">
              <Photo
                src={personPhotos[person.name]}
                alt={copy.team.people[person.name]?.photoAlt}
                missingLabel={copy.photo.missing}
                compact
                sizes="56px"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="font-semibold text-green-dark">{person.name}</p>
                {person.kind === "advisor" ? (
                  <p className="mt-1.5">
                    <Pill>{copy.team.advisorBadge}</Pill>
                  </p>
                ) : null}
              </div>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Partners */}
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

      {/* Closing. Joining is the WhatsApp group and nothing else, so a missing
          invite link has to be impossible to overlook. */}
      <Section tone="mist" className="py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          <LogoMark className="h-16" />
          <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
            {copy.closing.title}
          </h2>
          <p className="max-w-md text-navy/70">{copy.closing.lead}</p>
          {isTodo(contact.whatsapp) ? (
            <Fill value={contact.whatsapp} label={copy.todo.label} />
          ) : (
            <Button href={contact.whatsapp}>{copy.closing.cta}</Button>
          )}
          <p className="text-sm text-navy/60">
            {copy.closing.askInstead}{" "}
            <a
              href={`mailto:${contact.email}`}
              className="underline decoration-amber decoration-2 underline-offset-4"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
