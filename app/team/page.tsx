import type { Metadata } from "next";
import { Button, Card, Pill, Section, SectionHeading, PageHeader } from "@/components/ui";
import { contact, team, units } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The students and academic advisors behind gREen tumorrow, a TUM student initiative for community-owned renewable energy.",
};

/** Portrait photography is not available yet — initials keep the grid honest. */
function Avatar({ name, kind }: { name: string; kind: "student" | "advisor" }) {
  const initials = name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      aria-hidden="true"
      className={
        kind === "advisor"
          ? "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue/12 text-lg font-semibold text-blue"
          : "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green/12 text-lg font-semibold text-green-dark"
      }
    >
      {initials}
    </span>
  );
}

export default function TeamPage() {
  const students = team.filter((p) => p.kind === "student");
  const advisors = team.filter((p) => p.kind === "advisor");
  const open = units.filter((u) => u.open);

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Six students and two academic advisors."
        lead="Small enough that everyone owns something real. Small enough that we are visibly short-staffed — which is the honest reason this page exists."
      />

      <Section>
        <SectionHeading eyebrow="Students" title="Unit leads" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((p) => (
            <Card key={p.name} as="li" className="flex items-center gap-5">
              <Avatar name={p.name} kind={p.kind} />
              <div>
                <p className="font-semibold text-green-dark">{p.name}</p>
                <p className="mt-0.5 text-sm text-navy/60">{p.role}</p>
              </div>
            </Card>
          ))}
          {open.map((u) => (
            <Card
              key={u.slug}
              as="li"
              className="flex items-center gap-5 border-dashed border-amber-deep/60 bg-amber/8"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dashed border-amber-deep/60 text-2xl font-light text-amber-deep"
              >
                +
              </span>
              <div>
                <p className="font-semibold text-green-dark">Open</p>
                <p className="mt-0.5 text-sm text-navy/60">{u.name} lead</p>
              </div>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Academic advisors"
          title="Our link into TUM"
          lead="They keep our Education unit running until a student takes it over, and connect our projects to chairs and teaching formats."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {advisors.map((p) => (
            <Card key={p.name} as="li" className="flex items-center gap-5">
              <Avatar name={p.name} kind={p.kind} />
              <div>
                <p className="font-semibold text-green-dark">{p.name}</p>
                <p className="mt-0.5 text-sm text-navy/60">{p.role}</p>
              </div>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="sage">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Structure"
            title="Seven units, one central management"
            lead="Each unit runs its own work and reports into central management, which coordinates across the project pipeline. If a unit has no lead, its work still has to happen — usually by someone already carrying another unit."
          />
          <Button href="/join">See open roles</Button>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {units.map((u) => (
            <li
              key={u.slug}
              className="flex items-center justify-between gap-3 rounded-xl border border-green/15 bg-cream px-5 py-4"
            >
              <span className="font-medium text-green-dark">{u.name}</span>
              {u.open ? <Pill tone="building">Open</Pill> : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-7">
          <SectionHeading
            eyebrow="Get in touch"
            title="Want to talk to one of us?"
            lead="Mail reaches the whole team. Say which unit you are after and it lands with the right person."
          />
          <Button href={`mailto:${contact.email}`}>{contact.email}</Button>
        </div>
      </Section>
    </>
  );
}
