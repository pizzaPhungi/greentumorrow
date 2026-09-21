import { FixedBackground } from "@/components/FixedBackground";
import { Wordmark } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import {
  Button,
  Container,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";
import { ClosingCta } from "@/components/pages/ClosingCta";
import { getCopy } from "@/content/copy";
import { heroJoinId, joinCta, type Locale } from "@/content/shared";
import { heroPhoto, homeBackgroundPhoto } from "@/content/images";

/**
 * One structure, two dictionaries. Facts come from shared.ts and are identical
 * in both languages; every string comes from the locale's copy module.
 */
export function Home({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const mvv = copy.missionVisionValues;

  return (
    <>
      <FixedBackground src={homeBackgroundPhoto} />

      {/* Hero */}
      <div className="mb-10 sm:mb-14">
        <Container>
          <div className="pt-10 pb-20 sm:pt-14 sm:pb-28">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="rounded-xl bg-cream/60 p-8 backdrop-blur-md sm:p-10">
                <Reveal as="h1" className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                  {copy.hero.headline}
                </Reveal>
                <Reveal
                  as="p"
                  delay={120}
                  className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75 sm:text-xl"
                >
                  <Wordmark className="text-[1.05em]" /> {copy.hero.lead}
                </Reveal>
                <Reveal
                  as="div"
                  delay={240}
                  className="mt-10 flex flex-wrap items-center gap-4"
                >
                  <Button
                    id={heroJoinId}
                    href={joinCta}
                    size="lg"
                    className="group"
                  >
                    {copy.hero.joinCta}
                    {/* Decorative: screen readers get the label alone. */}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Button>
                </Reveal>
              </div>

              <Reveal variant="scale" delay={150}>
                <Photo
                  src={heroPhoto}
                  alt={copy.hero.photoAlt}
                  missingLabel={copy.photo.missing}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[3/2] w-full rounded-lg object-cover lg:aspect-auto lg:h-full lg:object-[22%_50%]"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </div>

      {/* Mission, vision, values. Each block carries its own colour and
          slides in from its own direction, rather than the uniform reveal
          the rest of the page uses. */}
      <Section tone="mist" translucent className="mb-10 sm:mb-14">
        <div className="grid gap-10 md:grid-cols-3">
          <Reveal variant="left">
            <MissionIcon className="mx-auto h-10 w-10 animate-float text-amber-deep" />
            <h3 className="mt-3 text-center text-3xl font-bold text-amber-deep">
              {mvv.mission.label}
            </h3>
            <div className="mt-3 border-t-2 border-amber pt-6">
              <p className="text-center text-lg leading-relaxed text-amber-deep">
                {mvv.mission.text}
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={150}>
            <VisionIcon className="mx-auto h-10 w-10 animate-float text-blue [animation-delay:0.3s]" />
            <h3 className="mt-3 text-center text-3xl font-bold text-blue">
              {mvv.vision.label}
            </h3>
            <div className="mt-3 border-t-2 border-blue pt-6">
              <p className="text-center text-lg leading-relaxed text-blue">
                {mvv.vision.text}
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={300}>
            <ValuesIcon className="mx-auto h-10 w-10 animate-float text-green-dark [animation-delay:0.6s]" />
            <h3 className="mt-3 text-center text-3xl font-bold text-green-dark">
              {mvv.values.label}
            </h3>
            <div className="mt-3 border-t-2 border-green pt-6">
              <ul className="space-y-2 text-center text-lg text-green-dark">
                {mvv.values.items.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Numbers */}
      <Section tone="deep" translucent className="mb-10 py-8 sm:mb-14 sm:py-10">
        <SectionHeading
          title={<span className="text-green">{copy.stats.title}</span>}
        />
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.items.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 100} />
          ))}
        </div>
      </Section>

      {/* Pillars. Equal weight, separated columns rather than a card row. */}
      <Section translucent className="mb-10 sm:mb-14">
        <Reveal as="div">
          <h2 className="text-3xl font-semibold text-amber-deep sm:text-4xl">
            {copy.pillars.eyebrow}
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {copy.pillars.items.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={i * 100}
              className="border-t-2 border-green/25 pt-6 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0"
            >
              <h3 className="text-2xl font-semibold">
                <span className="text-amber-deep">{p.prefix}</span>{" "}
                <span className="text-green-dark">{p.name}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <ClosingCta locale={locale} />
    </>
  );
}

/** A bullseye: mission is the thing being aimed at. */
function MissionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** An eye: vision is what is seen ahead. */
function VisionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/** A leaf: growth and sustainability, the first value on the list. */
function ValuesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M20 5c-9 0-15 6-15 15 9 0 15-6 15-15Z" />
      <path d="M6 19c3-6 7-10 13-13" />
    </svg>
  );
}
