import type { Metadata } from "next";
import { Fillable } from "@/components/Todo";
import { Button, Card, Pill, Section, SectionHeading, PageHeader } from "@/components/ui";
import { contact, join, units } from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join gREen tumorrow: what we expect, what you get, and the open roles in our units.",
};

export default function JoinPage() {
  const open = units.filter((u) => u.open);
  const staffed = units.filter((u) => !u.open);

  return (
    <>
      <PageHeader eyebrow="Join" title={join.headline} lead={join.intro} />

      <Section>
        <SectionHeading
          eyebrow="Before you write"
          title="What this actually asks of you"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {join.expectations.map((e) => (
            <Card key={e.title} as="li">
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                <Fillable value={e.text} />
              </p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Open roles"
          title="Where we need people most"
          lead="A unit without a lead does not stop existing — its work lands on someone already carrying another one. These are the gaps that hurt."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {open.map((u) => (
            <Card key={u.slug} as="li" className="border-amber-deep/50 bg-amber/8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">{u.name}</h3>
                <Pill tone="building">Lead open</Pill>
              </div>
              <p className="mt-3 text-navy/75">{u.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-navy/70">
                {u.work.map((w) => (
                  <li key={w} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-deep" />
                    {w}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>

        <h3 className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
          Every unit also takes members
        </h3>
        <ul className="mt-6 flex flex-wrap gap-3">
          {staffed.map((u) => (
            <li
              key={u.slug}
              className="rounded-full border border-green/20 bg-cream px-5 py-2.5 text-sm font-medium text-green-dark"
            >
              {u.name}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="The process" title="Three steps, no assessment centre" />
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {join.steps.map((s, i) => (
            <li key={s.title}>
              <p className="font-semibold tabular-nums text-amber-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="green">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Come by"
            title="Turn up before you commit."
            lead="Visiting a meet-up costs you an evening and tells you more than any page can."
            invert
          />
          <div className="space-y-7 text-mist/85">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                Where
              </p>
              <p className="mt-2 text-lg">
                {contact.address.street}, {contact.address.postalCode}{" "}
                {contact.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                When
              </p>
              <p className="mt-2 text-lg">
                <Fillable value={contact.meetup.cadence} />
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                How to find us
              </p>
              <p className="mt-2 text-lg">
                <Fillable value={contact.meetup.room} />
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                href={`mailto:${contact.email}?subject=Joining%20gREen%20tumorrow`}
                variant="secondary"
                className="border-mist/30 text-mist hover:border-mist hover:bg-mist/10"
              >
                Write to us
              </Button>
              <Button
                href={`tel:${contact.phoneHref}`}
                variant="secondary"
                className="border-mist/30 text-mist hover:border-mist hover:bg-mist/10"
              >
                {contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
