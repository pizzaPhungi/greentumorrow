import { Countdown } from "@/components/Countdown";
import { FixedBackground } from "@/components/FixedBackground";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Button, Container } from "@/components/ui";
import { ClosingCta } from "@/components/pages/ClosingCta";
import { getCopy } from "@/content/copy";
import { WattTheHackRecap } from "@/components/pages/WattTheHackRecap";
import { eventFacts, type Locale } from "@/content/shared";
import { eventPhotos, homeBackgroundPhoto } from "@/content/images";

/**
 * Same backdrop and frosted panels as the home page. Each event gets its poster
 * beside one lead panel with the countdown, rather than a grid of equal cards:
 * there are few events, and each one deserves the room.
 */
export function Events({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const t = copy.events;

  return (
    <>
      <FixedBackground src={homeBackgroundPhoto} />

      <div className="pt-10 sm:pt-14">
        <Container>
          {/* No panel behind the title: it sits straight on the photo, with a
              cream glow (as on Projects) to keep it legible. */}
          <Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)] sm:text-5xl">
              {t.title}
            </h1>
          </Reveal>
        </Container>
      </div>

      {eventFacts.map((event) => {
        const c = t.entries[event.slug];
        return (
          <article key={event.slug} className="mt-10 sm:mt-14">
            {event.recap ? (
              // Over: no poster, date boxes or countdown. A short header, then
              // what the day produced.
              <Container>
                {/* One faint white glass panel: facts left, story right. The
                    blur and a cream glow keep the text legible. */}
                <Reveal className="mb-10 grid gap-8 rounded-xl border border-white/30 bg-white/10 p-8 backdrop-blur-sm drop-shadow-[0_2px_8px_rgba(255,250,242,0.9)] sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
                  <div>
                    <h2 className="text-4xl font-bold text-amber-deep sm:text-5xl">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-2xl font-semibold text-green-dark">
                      {c.tagline}
                    </p>
                    <dl className="mt-6 space-y-3">
                      {[
                        { label: t.dateLabel, value: c.date },
                        { label: t.placeLabel, value: c.place },
                      ].map((d) => (
                        <div key={d.label} className="border-l-2 border-green/40 pl-4">
                          <dt className="text-xs uppercase tracking-wider text-navy/75">
                            {d.label}
                          </dt>
                          <dd className="mt-0.5 font-semibold text-navy">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  {c.recap ? (
                    <div className="flex items-center border-white/40 lg:border-l lg:pl-12">
                      <p className="text-lg font-medium leading-relaxed text-navy">
                        {c.recap}
                      </p>
                    </div>
                  ) : null}
                </Reveal>
              </Container>
            ) : (
              <Container>
                <div className="grid gap-10 pb-16 sm:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                  <Reveal variant="scale">
                    <Photo
                      src={eventPhotos[event.slug]}
                      alt={c.photoAlt}
                      missingLabel={copy.photo.missing}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="aspect-square w-full rounded-lg object-cover shadow-lg"
                    />
                  </Reveal>

                  <Reveal
                    delay={120}
                    className="flex flex-col justify-center rounded-xl bg-cream/60 p-8 backdrop-blur-md sm:p-10"
                  >
                    <p className="text-sm font-semibold text-green-dark">
                      {c.presentedBy}
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-amber-deep sm:text-5xl">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-2xl font-semibold text-green-dark">
                      {c.tagline}
                    </p>

                    <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                      {[
                        { label: t.dateLabel, value: c.date },
                        { label: t.placeLabel, value: c.place },
                      ].map((d) => (
                        <div key={d.label} className="border-l-2 border-green/40 pl-4">
                          <dt className="text-xs uppercase tracking-wider text-navy/55">
                            {d.label}
                          </dt>
                          <dd className="mt-0.5 font-semibold text-navy">{d.value}</dd>
                        </div>
                      ))}
                    </dl>

                    {event.registerUrl ? (
                      <>
                        <div className="mt-8">
                          <Countdown
                            target={event.startsAt}
                            label={t.countdownLabel}
                            doneLabel={t.countdownDone}
                            units={t.units}
                          />
                        </div>
                        <div className="mt-8">
                          <Button href={event.registerUrl} size="lg" className="group">
                            {t.register}
                            {/* Decorative: screen readers get the label alone. */}
                            <span
                              aria-hidden="true"
                              className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </Button>
                        </div>
                      </>
                    ) : null}
                  </Reveal>
                </div>
              </Container>
            )}
            {event.recap && event.slug === "watt-the-hack" ? (
              <WattTheHackRecap locale={locale} />
            ) : null}
          </article>
        );
      })}

      <ClosingCta locale={locale} />
    </>
  );
}
