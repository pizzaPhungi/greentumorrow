import type { Metadata } from "next";
import { Fill } from "@/components/Todo";
import {
  Button,
  Card,
  PageHeader,
  Pill,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  contact,
  join,
  journey,
  openRoles,
  ownProjects,
  projects,
  team,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "How to join gREen tumorrow: the projects you can work on, the people you would work with, and what to put in your first mail.",
};

export default function JoinPage() {
  const students = team.filter((person) => person.kind === "student");

  return (
    <>
      <PageHeader eyebrow="Join" title={join.headline} lead={join.intro} />

      {/* Step 1: what you would work on. The project is the primary home. */}
      <Section>
        <SectionHeading
          eyebrow="Step one"
          title="Pick what you want to work on"
          lead="Projects are where the actual work happens. Join one that is running, or bring your own."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.slug} as="li" className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <Pill tone={p.status === "Live" ? "live" : "building"}>
                  {p.status}
                </Pill>
                <span className="text-sm font-medium text-green-dark">
                  {p.field}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-3 grow text-sm leading-relaxed text-navy/75">
                {p.summary}
              </p>
            </Card>
          ))}
          <Card
            as="li"
            className="flex flex-col border-dashed border-amber-deep/50 bg-amber/8 md:col-span-2"
          >
            <span className="self-start">
              <Pill tone="building">Open</Pill>
            </span>
            <h3 className="mt-4 text-lg font-semibold">
              {ownProjects.headline}
            </h3>
            <p className="mt-3 leading-relaxed text-navy/75">
              {ownProjects.intro}
            </p>
            <p className="mt-4 text-sm text-navy/70">
              <Fill value={ownProjects.requirements} />
            </p>
          </Card>
        </ul>
      </Section>

      {/* Step 2: the people. Each one names the work they carry. */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="Step two"
          title="Find the person whose work you want a piece of"
          lead="There is no department to apply to. Each of us carries one kind of work, and that is who you would actually sit next to."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((person) => (
            <Card key={person.name} as="li">
              <p className="text-lg font-semibold text-green-dark">
                {person.name}
              </p>
              <p className="mt-1 text-sm font-medium text-amber-deep">
                {person.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {person.work}
              </p>
            </Card>
          ))}
          {openRoles.map((role) => (
            <Card
              key={role.role}
              as="li"
              className="border-dashed border-amber-deep/60 bg-amber/8"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-lg font-semibold text-green-dark">Open</p>
                <Pill tone="building">Yours?</Pill>
              </div>
              <p className="mt-1 text-sm font-medium text-amber-deep">
                {role.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {role.work}
              </p>
              <p className="mt-3 text-sm text-navy/55">{role.note}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Step 3: the mail. Concrete ask, stated response window. */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Step three"
            title="Write the mail"
            lead="This is the whole application. There is no form, no CV screening and no assessment centre."
          />
          <Card className="bg-cream-deep/60">
            <p className="leading-relaxed text-navy/80">{join.mail.intro}</p>
            <ol className="mt-6 space-y-4">
              {join.mail.items.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="font-semibold tabular-nums text-amber-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-navy/80">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-green/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
                When you will hear back
              </p>
              <p className="mt-3 text-navy/75">
                <Fill value={join.mail.responseTime} />
              </p>
            </div>
            <div className="mt-8">
              <Button
                href={`mailto:${contact.email}?subject=Joining%20gREen%20tumorrow`}
              >
                {contact.email}
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Expectations. The filter stays. */}
      <Section tone="deep">
        <SectionHeading
          eyebrow="Before you write"
          title="What this actually asks of you"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {join.expectations.map((e) => (
            <Card key={e.title} as="li">
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/75">
                <Fill value={e.text} />
              </p>
            </Card>
          ))}
        </ul>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              When you can join
            </p>
            <p className="mt-3 text-navy/75">
              <Fill value={join.admission} />
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Your first four weeks
            </p>
            <p className="mt-3 text-navy/75">
              <Fill value={join.firstWeeks} />
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The process" title="Four steps, start to finish" />
        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((s, i) => (
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
            title="Or turn up before you commit."
            lead="Visiting a meet-up costs you an evening and tells you more than any page can. Writing works just as well if the timing does not."
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
                <Fill value={contact.meetup.cadence} />
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
                How to find us
              </p>
              <p className="mt-2 text-lg">
                <Fill value={contact.meetup.room} />
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
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
