import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Fill } from "@/components/Todo";
import { Container, Pill } from "@/components/ui";
import { getCopy } from "@/content/copy";
import {
  wattTheHackChallenges,
  wattTheHackPhotographer,
  type Locale,
} from "@/content/shared";
import {
  challengeLogos,
  wattTheHackGallery,
  winnerPhotos,
} from "@/content/images";

/**
 * What WATT THE HACK left behind, shown under its card on the events page:
 * the four challenges with their winners, then the photos.
 */
export function WattTheHackRecap({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.wattTheHack;

  return (
    <>
      <section aria-labelledby="challenges-title" className="pb-14 sm:pb-20">
        <Container>
          {/* No panel: a cream glow keeps it legible on the photo, as with the
              page title. */}
          <Reveal className="max-w-3xl drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)]">
            <h3 id="challenges-title" className="text-2xl font-semibold sm:text-3xl">
              {t.partnersTitle}
            </h3>
            <p className="mt-2 font-medium leading-relaxed text-navy">{t.partnersLead}</p>
          </Reveal>
        </Container>

        {/* Wider than the Container: the four cards span the full page width,
            with the same side gutter. Plain Reveal, not Card: Card adds its own
            surface and border colour, and cn() does not dedupe, so the glass
            would lose. Four equal cards on purpose: the partners are peers,
            and giving one more weight would read as a ranking. */}
        <div className="mt-6 grid gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
            {wattTheHackChallenges.map((ch, i) => {
              const cc = t.challenges[ch.slug];
              return (
                <Reveal
                  key={ch.slug}
                  as="article"
                  delay={i * 100}
                  className="flex flex-col rounded-lg border border-white/40 bg-white/20 p-6 backdrop-blur-md drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)]"
                >
                  <div className="flex h-24 items-center justify-center">
                    <Photo
                      src={challengeLogos[ch.slug]}
                      alt={`${t.logoAlt} ${ch.company}`}
                      missingLabel={copy.photo.missing}
                      sizes="240px"
                      className="h-16 w-full max-w-60 rounded object-contain"
                    />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-green-dark">
                    {ch.company}
                  </p>
                  <h4 className="mt-1 text-lg font-semibold">{cc.title}</h4>
                  <p className="mt-3 font-medium leading-relaxed text-navy">
                    {cc.summary}
                  </p>
                </Reveal>
              );
            })}
        </div>
      </section>

      <section aria-labelledby="winners-title" className="pb-14 sm:pb-20">
        <Container>
          <Reveal className="max-w-3xl drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)]">
            <h3 id="winners-title" className="text-2xl font-semibold sm:text-3xl">
              {t.winnersTitle}
            </h3>
            <p className="mt-2 font-medium leading-relaxed text-navy">{t.winnersLead}</p>
          </Reveal>
        </Container>

        {/* Same order and width as the challenges above, so each team sits
            under the challenge it won. Led by the team name, not a logo. */}
        <ul className="mt-6 grid gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {wattTheHackChallenges.map((ch, i) => (
            <Reveal
              key={ch.slug}
              as="li"
              delay={i * 100}
              className="flex flex-col rounded-lg border border-white/40 bg-white/20 p-6 backdrop-blur-md drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)]"
            >
              <Photo
                src={winnerPhotos[ch.slug]}
                alt={t.challenges[ch.slug].winnerPhotoAlt}
                missingLabel={copy.photo.missing}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="mb-5 aspect-[3/2] w-full rounded-lg object-cover"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm font-semibold text-green-dark">
                  {`${ch.company} ${t.challengeWord}`}
                </span>
                <Pill tone="live">{t.prize}</Pill>
              </div>
              <h4 className="mt-4 text-2xl font-bold text-amber-deep">
                <Fill value={ch.winner} label={copy.todo.label} />
              </h4>
              {ch.members ? (
                <ul className="mt-3 space-y-1 font-medium text-navy">
                  {ch.members.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="gallery-title" className="pb-16 sm:pb-20">
        <Container>
          <Reveal className="drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)]">
            <h3 id="gallery-title" className="text-2xl font-semibold sm:text-3xl">
              {t.galleryTitle}
            </h3>
            <p className="mt-1 text-sm font-medium text-navy">
              {t.galleryCredit} {wattTheHackPhotographer}
            </p>
          </Reveal>
          {/* Columns, not a grid: every photo keeps its own shape, so the
              portrait shots are not cropped to a landscape box. */}
          <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {t.galleryAlts.map((alt, i) => (
              <Reveal
                key={i}
                delay={(i % 3) * 80}
                className="mb-4 break-inside-avoid"
              >
                <Photo
                  src={wattTheHackGallery[i]}
                  alt={alt}
                  missingLabel={copy.photo.missing}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded-lg"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
