import { ClosingCta } from "@/components/pages/ClosingCta";
import { FixedBackground } from "@/components/FixedBackground";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Card, Container, Pill } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { projectFacts, type Locale } from "@/content/shared";
import { projectPhotos, projectsBackgroundPhoto } from "@/content/images";

export function Projects({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.projects;

  return (
    <>
      <FixedBackground src={projectsBackgroundPhoto} />

      {/* Kept short so both project cards fit on screen below it. */}
      <div className="bg-cream/75 py-6 backdrop-blur-md sm:py-8">
        <Container>
          <Reveal className="lg:flex lg:items-center lg:gap-12">
            <h2 className="shrink-0 text-3xl font-semibold sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-navy/75 sm:text-lg lg:mt-0 lg:border-l lg:border-amber-deep/40 lg:pl-12">
              {t.lead}
            </p>
          </Reveal>
        </Container>
      </div>

      <div className="mb-4 pt-6 pb-10 sm:mb-6 sm:pb-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {projectFacts.map((p, i) => {
              const c = t.entries[p.slug];
              return (
                <Card
                  key={p.slug}
                  as="article"
                  delay={i * 120}
                  className="flex flex-col"
                >
                  <Photo
                    src={projectPhotos[p.slug]}
                    alt={c.photoAlt}
                    missingLabel={copy.photo.missing}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full rounded object-cover lg:aspect-auto lg:h-[clamp(7rem,calc(100svh-37rem),18rem)]"
                  />
                  <div className="mt-5 flex grow flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      <Pill tone={p.status === "live" ? "live" : "building"}>
                        {c.status}
                      </Pill>
                      <span className="text-sm font-medium text-green-dark">
                        {c.field}
                      </span>
                      <span className="text-sm text-navy/55">{c.year}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{c.name}</h3>
                    <p className="mt-3 grow leading-relaxed text-navy/75">
                      {c.summary}
                    </p>
                    <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-green/15 pt-4">
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
        </Container>
      </div>

      {/* An invitation, never dressed up as an existing project. */}
      <div className="mb-6 py-10 sm:mb-8 sm:py-14">
        <Container>
          <Card className="border-dashed border-amber-deep/50 bg-amber/8">
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
                <h3 className="mt-4 text-xl font-semibold lg:mt-0 lg:self-end">
                  {t.own.headline}
                </h3>
                <p className="mt-4 leading-relaxed text-navy/75 lg:mt-0">
                  {t.own.intro}
                </p>
              </div>
              <div className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
                <div aria-hidden="true" className="hidden lg:block" />
                <h4 className="text-base font-semibold text-green-dark lg:self-end">
                  {t.own.examplesLabel}
                </h4>
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
          </Card>
        </Container>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
