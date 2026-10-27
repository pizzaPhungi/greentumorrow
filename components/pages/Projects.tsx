import { cn } from "@/components/cn";
import { ClosingCta } from "@/components/pages/ClosingCta";
import { FixedBackground } from "@/components/FixedBackground";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Button, Card, Container, Pill } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { contact, projectFacts, type Locale } from "@/content/shared";
import {
  projectPhotos,
  projectsBackgroundPhoto,
  windExcursionPhoto,
} from "@/content/images";

export function Projects({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.projects;

  return (
    <>
      <FixedBackground src={projectsBackgroundPhoto} />

      {/* Kept short so the project cards fit on screen below it. */}
      <div className="bg-cream/75 py-6 backdrop-blur-md sm:py-8">
        <Container>
          <Reveal className="lg:flex lg:items-center lg:gap-12">
            <h1 className="shrink-0 text-3xl font-semibold sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-3 max-w-3xl leading-relaxed text-navy/75 sm:text-lg lg:mt-0 lg:border-l lg:border-amber-deep/40 lg:pl-12">
              {t.lead}
            </p>
          </Reveal>
          <nav
            aria-label={t.jumpLabel}
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm"
          >
            <Button href="#pv" variant="quiet">
              {t.pvTitle}
            </Button>
            <Button href="#wind" variant="quiet">
              {t.windTitle}
            </Button>
          </nav>
        </Container>
      </div>

      <section
        id="pv"
        aria-labelledby="pv-title"
        className="mb-4 pt-6 pb-10 sm:mb-6 sm:pb-14"
      >
        <Container>
          <GroupTitle id="pv-title">{t.pvTitle}</GroupTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectFacts.map((p, i) => {
              const c = t.entries[p.slug];
              return (
                <Card
                  key={p.slug}
                  as="article"
                  delay={i * 120}
                  // At two columns the last card would sit alone; let it span.
                  className={cn(
                    "flex flex-col",
                    i === projectFacts.length - 1 &&
                      projectFacts.length % 2 === 1 &&
                      "md:col-span-2 lg:col-span-1",
                  )}
                >
                  <Photo
                    src={projectPhotos[p.slug]}
                    alt={c.photoAlt}
                    missingLabel={copy.photo.missing}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    eager={i < 2}
                    className="aspect-[16/10] w-full rounded-lg object-cover lg:aspect-auto lg:h-[clamp(7rem,calc(100svh-37rem),18rem)]"
                  />
                  <div className="mt-5 flex grow flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Neutral for a concept: not under way yet, so not amber. */}
                      <Pill
                        tone={
                          p.status === "live"
                            ? "live"
                            : p.status === "planning"
                              ? "building"
                              : "neutral"
                        }
                      >
                        {c.status}
                      </Pill>
                      <span className="text-sm font-medium text-green-dark">
                        {c.field}
                      </span>
                      <span className="text-sm text-navy/70">{c.year}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
                    <p className="mt-3 grow leading-relaxed text-navy/75">
                      {c.summary}
                    </p>
                    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-green/15 pt-4">
                      {p.specs.map((value, i) => (
                        <div key={c.specLabels[i]}>
                          <dt className="text-xs uppercase tracking-wider text-navy/70">
                            {c.specLabels[i]}
                          </dt>
                          <dd className="mt-0.5 font-semibold tabular-nums text-navy">
                            {value}
                          </dd>
                        </div>
                      ))}
                      {p.partner ? (
                        <div>
                          <dt className="text-xs uppercase tracking-wider text-navy/70">
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
        </Container>
      </section>

      <section
        id="wind"
        aria-labelledby="wind-title"
        className="mb-4 pb-10 sm:mb-6 sm:pb-14"
      >
        <Container>
          <GroupTitle id="wind-title">{t.windTitle}</GroupTitle>
          {/* One wide card, not a grid: there is a single entry, and it asks
              two audiences for help rather than listing figures. */}
          <Card
            as="article"
            className="grid gap-7 lg:grid-cols-[5fr_7fr] lg:gap-10"
          >
            <Photo
              src={windExcursionPhoto}
              alt={t.wind.photoAlt}
              missingLabel={copy.photo.missing}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[16/10] w-full rounded-lg object-cover object-[65%_50%] lg:aspect-auto lg:h-full"
            />
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                {/* Hollow like the open invitation below: nothing is under way
                    yet, a partner slot is waiting to be filled. */}
                <Pill tone="open">{t.wind.status}</Pill>
                <span className="text-sm font-medium text-green-dark">
                  {t.wind.field}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{t.wind.name}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                {t.wind.summary}
              </p>
              <div className="mt-6 grid gap-6 border-t border-green/15 pt-5 sm:grid-cols-2">
                {t.wind.asks.map((a) => (
                  <div key={a.label} className="flex flex-col">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-green-dark">
                      {a.label}
                    </h4>
                    <p className="mt-2 grow text-sm leading-relaxed text-navy/75">
                      {a.text}
                    </p>
                    <Button
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(a.subject)}`}
                      variant="secondary"
                      className="mt-4 self-start"
                    >
                      {a.cta}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* An invitation, never dressed up as an existing project. */}
      <div className="mb-6 py-10 sm:mb-8 sm:py-14">
        <Container>
          {/* Not a Card: Card's own border class would override the dashed
              amber one, and cn() does not dedupe. Solid cream like the project
              cards beside it; a tint alone is unreadable over the photo. */}
          <Reveal className="rounded-lg border border-dashed border-amber-deep/60 bg-cream p-7">
            {/* Subgrid, so the three rows line up across both columns whatever the
                translation does to the line count: chip, heading, body. The
                examples therefore start where the intro starts, not where the
                headline does. */}
            <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr] lg:gap-x-14 lg:gap-y-4">
              <div className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
                <div>
                  {/* Neutral on purpose. Solid green means live and solid amber
                      means in planning; this is not a project's status but a
                      standing invitation, so it must not read as either. */}
                  <Pill tone="open">{t.own.badge}</Pill>
                </div>
                <h2 className="mt-4 text-xl font-semibold lg:mt-0 lg:self-end">
                  {t.own.headline}
                </h2>
                <p className="mt-4 leading-relaxed text-navy/75 lg:mt-0">
                  {t.own.intro}
                </p>
              </div>
              <div className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
                <div aria-hidden="true" className="hidden lg:block" />
                <h3 className="text-base font-semibold text-green-dark lg:self-end">
                  {t.own.examplesLabel}
                </h3>
                <ul className="mt-4 space-y-2 text-navy/75 lg:mt-0">
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
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}

/** Frosted, because the group titles sit straight on the fixed photo. */
function GroupTitle({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="mb-5 inline-block rounded-lg bg-cream/85 px-4 py-2 text-2xl font-semibold backdrop-blur-md"
    >
      {children}
    </h2>
  );
}
