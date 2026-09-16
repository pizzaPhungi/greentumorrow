import { Arc, Wordmark } from "@/components/Logo";
import { Photo } from "@/components/Photo";
import {
  Button,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";
import { ClosingCta } from "@/components/pages/ClosingCta";
import { getCopy } from "@/content/copy";
import { heroJoinId, joinCta, type Locale } from "@/content/shared";
import { heroPhoto } from "@/content/images";

/**
 * One structure, two dictionaries. Facts come from shared.ts and are identical
 * in both languages; every string comes from the locale's copy module.
 */
export function Home({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <Arc
          className="pointer-events-none absolute -top-28 left-1/2 hidden h-auto w-[1900px] -translate-x-1/2 text-green/12 md:block"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-14 pt-10 pb-20 sm:pt-14 sm:pb-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
              <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                {copy.hero.headline}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/75 sm:text-xl">
                <Wordmark className="text-[1.05em]" /> {copy.hero.lead}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button id={heroJoinId} href={joinCta} size="lg">
                  {copy.hero.joinCta}
                </Button>
              </div>
            </div>

            <Photo
              src={heroPhoto}
              alt={copy.hero.photoAlt}
              missingLabel={copy.photo.missing}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
        </Container>
      </div>

      {/* Numbers */}
      <Section tone="deep" className="py-14 sm:py-16">
        <SectionHeading
          eyebrow={copy.stats.eyebrow}
          title={copy.stats.title}
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.stats.items.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </Section>

      {/* Pillars. Equal weight, separated columns rather than a card row. */}
      <Section>
        <Eyebrow>{copy.pillars.eyebrow}</Eyebrow>
        <ol className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
          {copy.pillars.items.map((p) => (
            <li
              key={p.name}
              className="border-t-2 border-green/25 pt-6 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0"
            >
              <h3 className="text-2xl font-semibold">
                <span className="text-amber-deep">{p.prefix}</span>{" "}
                <span className="text-green-dark">{p.name}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-navy/75">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <ClosingCta locale={locale} />
    </>
  );
}
