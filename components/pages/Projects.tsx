import { ClosingCta } from "@/components/pages/ClosingCta";
import { Photo } from "@/components/Photo";
import { Card, Pill, Section, SectionHeading } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { projectFacts, type Locale } from "@/content/shared";
import { projectPhotos } from "@/content/images";

export function Projects({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.projects;

  return (
    <>
      <Section>
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
      </Section>
      <ClosingCta locale={locale} />
    </>
  );
}
