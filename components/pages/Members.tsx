import { ClosingCta } from "@/components/pages/ClosingCta";
import { Photo } from "@/components/Photo";
import { Fill } from "@/components/Todo";
import { Card, Pill, Section, SectionHeading } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { teamFacts, type Locale } from "@/content/shared";
import { personPhotos } from "@/content/images";

export function Members({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      <Section>
        <SectionHeading eyebrow={copy.team.eyebrow} title={copy.team.title} />
        {/*
         * Each card spans three rows of the outer grid and adopts them through
         * `grid-rows-subgrid`, so name, programme and badge sit on shared
         * baselines across a row. Without it a two-line programme would push
         * its neighbour's name out of line.
         */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamFacts.map((person) => (
            <Card
              key={person.name}
              as="li"
              className="row-span-3 grid grid-cols-[auto_minmax(0,1fr)] grid-rows-subgrid gap-x-4 gap-y-1.5"
            >
              <Photo
                src={personPhotos[person.name]}
                alt={copy.team.people[person.name]?.photoAlt}
                missingLabel={copy.photo.missing}
                compact
                sizes="56px"
                className="col-start-1 row-span-3 h-14 w-14 self-start rounded-full object-cover"
              />
              <p className="col-start-2 self-start font-semibold text-green-dark">
                {person.name}
                {person.surname ? (
                  <>
                    {" "}
                    <Fill value={person.surname} label={copy.todo.label} />
                  </>
                ) : null}
              </p>
              <p className="col-start-2 self-start text-sm leading-snug text-navy/55">
                {copy.team.people[person.name]?.programme ?? person.programme}
              </p>
              {person.kind === "advisor" ? (
                <p className="col-start-2 self-start">
                  <Pill>{copy.team.advisorBadge}</Pill>
                </p>
              ) : null}
            </Card>
          ))}
        </ul>
      </Section>
      <ClosingCta locale={locale} />
    </>
  );
}
