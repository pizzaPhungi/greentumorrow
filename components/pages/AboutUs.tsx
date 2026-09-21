import { ClosingCta } from "@/components/pages/ClosingCta";
import { FixedBackground } from "@/components/FixedBackground";
import { Photo } from "@/components/Photo";
import { Fill } from "@/components/Todo";
import { cn } from "@/components/cn";
import { Card, Container, SectionHeading } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { teamFacts, type Locale } from "@/content/shared";
import { aboutBackgroundPhoto, partnerLogos, personPhotos } from "@/content/images";

/**
 * Per-person crop tweak for a source photo whose framing puts the face too
 * close to an edge for a plain circular `object-cover`. Keyed by the exact
 * `name` in teamFacts. The wrapping div (see below) keeps the 80px circle
 * fixed while this transform pans and zooms the image inside it.
 */
const photoFrames: Record<string, string> = {
  "Prof. Dr. Thomas Hamacher": "object-[15%_50%] scale-[1.8] translate-y-[40%]",
};

function PersonGrid({
  people,
  copy,
  tone,
}: {
  people: typeof teamFacts;
  copy: ReturnType<typeof getCopy>;
  tone: "cream" | "mist";
}) {
  return (
    <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, i) => {
        const frame = photoFrames[person.name];
        return (
          <Card
            key={person.name}
            as="li"
            delay={i * 80}
            translucent
            tone={tone}
            className="flex flex-col items-center gap-1.5 text-center"
          >
            {frame ? (
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <Photo
                  src={personPhotos[person.name]}
                  alt={copy.team.people[person.name]?.photoAlt}
                  missingLabel={copy.photo.missing}
                  compact
                  sizes="80px"
                  className={cn("h-full w-full object-cover", frame)}
                />
              </div>
            ) : (
              <Photo
                src={personPhotos[person.name]}
                alt={copy.team.people[person.name]?.photoAlt}
                missingLabel={copy.photo.missing}
                compact
                sizes="80px"
                className="h-20 w-20 rounded-full object-cover"
              />
            )}
            <p className="mt-3 font-semibold text-green-dark">
              {person.name}
              {person.surname ? (
                <>
                  {" "}
                  <Fill value={person.surname} label={copy.todo.label} />
                </>
              ) : null}
            </p>
            <p className="text-sm leading-snug text-navy/70">
              {copy.team.people[person.name]?.programme ?? person.programme}
            </p>
          </Card>
        );
      })}
    </ul>
  );
}

export function AboutUs({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const students = teamFacts.filter((p) => p.kind === "student");
  const advisors = teamFacts.filter((p) => p.kind === "advisor");

  return (
    <>
      <FixedBackground src={aboutBackgroundPhoto} />
      {/* The page has no visible title, its sections speak for themselves,
          but every page needs one h1 for screen readers and search. */}
      <h1 className="sr-only">{copy.nav.sections.about}</h1>

      {/* No section background here: the fixed photo shows straight through,
          and only the cards on top of it carry the frosted tint. */}
      <div className="mb-4 py-10 sm:mb-6 sm:py-14">
        <Container>
          <SectionHeading
            title={copy.team.title}
          />
          <PersonGrid people={students} copy={copy} tone="cream" />
        </Container>
      </div>

      <div className="mb-4 py-10 sm:mb-6 sm:py-14">
        <Container>
          <SectionHeading
            title={copy.advisors.title}
          />
          <PersonGrid people={advisors} copy={copy} tone="mist" />
        </Container>
      </div>

      <div className="mb-4 py-10 sm:mb-6 sm:py-14">
        <Container>
          <SectionHeading
            title={copy.partners.title}
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {copy.partners.entries.map((p, i) => (
              <Card
                key={p.name}
                as="li"
                delay={i * 120}
                translucent
                tone="cream"
                className="flex items-center gap-5"
              >
                <Photo
                  src={partnerLogos[p.name]}
                  alt={undefined}
                  missingLabel={copy.photo.missing}
                  sizes="96px"
                  className="h-14 w-auto max-w-24 shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-navy/70">{p.full}</p>
                </div>
              </Card>
            ))}
          </ul>
        </Container>
      </div>

      <ClosingCta locale={locale} />
    </>
  );
}
