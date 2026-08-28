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
                <p className="font-semibold text-green-dark">
                  {person.name}
                  {person.surname ? (
                    <>
                      {" "}
                      <Fill value={person.surname} label={copy.todo.label} />
                    </>
                  ) : null}
                </p>
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
      <ClosingCta locale={locale} />
    </>
  );
}
