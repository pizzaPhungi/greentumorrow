import type { StaticImageData } from "next/image";
import { Reveal } from "@/components/Reveal";
import { ClosingCta } from "@/components/pages/ClosingCta";
import { FixedBackground } from "@/components/FixedBackground";
import { Photo } from "@/components/Photo";
import { Fill } from "@/components/Todo";
import { cn } from "@/components/cn";
import { Card, Container, SectionHeading } from "@/components/ui";
import { getCopy } from "@/content/copy";
import {
  teamFacts,
  wattTheHackChallenges,
  type Locale,
} from "@/content/shared";
import {
  aboutBackgroundPhoto,
  challengeLogos,
  partnerLogos,
  personPhotos,
} from "@/content/images";

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
  // Five across on desktop, so a row holds more people than cards.
  return (
    <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {people.map((person, i) => {
        const frame = photoFrames[person.name];
        return (
          <Card
            key={person.name}
            as="li"
            delay={(i % 5) * 80}
            // Quiet: its tighter padding leaves room for long programme names
            // in a fifth of the row.
            weight="quiet"
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
            {copy.team.people[person.name]?.role ? (
              <p className="text-sm font-semibold text-green">
                {copy.team.people[person.name]?.role}
              </p>
            ) : null}
            <p className="text-sm leading-snug text-navy/70">
              <Fill
                value={
                  copy.team.people[person.name]?.programme ?? person.programme
                }
                label={copy.todo.label}
              />
            </p>
          </Card>
        );
      })}
    </ul>
  );
}

export function AboutUs({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const visible = teamFacts.filter((p) => !p.archived);
  const students = visible.filter((p) => p.kind === "student");
  const advisors = visible.filter((p) => p.kind === "advisor");
  type PartnerCard = { name: string; logo: StaticImageData | undefined };
  const standing: PartnerCard[] = copy.partners.entries.map((p) => ({
    name: p.full,
    logo: partnerLogos[p.name],
  }));
  const event: PartnerCard[] = wattTheHackChallenges.map((p) => ({
    name: p.company,
    logo: challengeLogos[p.slug],
  }));
  // Interleaved, so the two kinds read as one group rather than two blocks.
  const partners = Array.from(
    { length: Math.max(standing.length, event.length) },
    (_, i) => [event[i], standing[i]],
  )
    .flat()
    .filter(Boolean);

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
          <SectionHeading title={copy.team.title} />
          <PersonGrid people={students} copy={copy} tone="cream" />
        </Container>
      </div>

      <div className="mb-4 py-10 sm:mb-6 sm:py-14">
        <Container>
          <SectionHeading title={copy.advisors.title} />
          <PersonGrid people={advisors} copy={copy} tone="mist" />
        </Container>
      </div>

      <div className="mb-4 py-10 sm:mb-6 sm:py-14">
        <Container>
          <SectionHeading title={copy.partners.title} />
          {/* One list, standing and event partners mixed, four across, logos
              only. */}
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              // Plain Reveal, not Card: the logos sit straight on the photo.
              <Reveal
                key={p.name}
                as="li"
                delay={(i % 4) * 100}
                className="flex h-36 items-center justify-center"
              >
                {/* Logo only, so the name moves into the alt text: it is the
                    only place a screen reader learns who the partner is. */}
                <Photo
                  src={p.logo}
                  alt={p.name}
                  missingLabel={copy.photo.missing}
                  sizes="240px"
                  className="h-20 w-full max-w-56 object-contain"
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </div>

      <ClosingCta locale={locale} />
    </>
  );
}
