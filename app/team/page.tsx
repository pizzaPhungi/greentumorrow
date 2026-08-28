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
import { contact, leadership, openRoles, team } from "@/content/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind gREen tumorrow: six students and two academic advisors building renewable energy projects in Munich.",
};

/** Portrait photography is not available yet; initials keep the grid honest. */
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

function PersonCard({
  name,
  role,
  work,
  kind,
}: {
  name: string;
  role: string;
  work: string;
  kind: "student" | "advisor";
}) {
  return (
    <Card as="li">
      <div className="flex items-start gap-5">
        <Avatar name={name} kind={kind} />
        <div>
          <p className="text-lg font-semibold text-green-dark">{name}</p>
          <p className="mt-1 text-sm font-medium text-amber-deep">{role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-navy/70">{work}</p>
    </Card>
  );
}

export default function TeamPage() {
  const students = team.filter((p) => p.kind === "student");
  const advisors = team.filter((p) => p.kind === "advisor");

  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Six students and two academic advisors."
        lead="No head office, no staff. Everything this club has built was built by the people on this page, which is also the honest reason it is worth joining."
      />

      <Section>
        <SectionHeading
          eyebrow="Students"
          title="Who does what"
          lead="Each of us carries one kind of work. That is the whole structure."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
          {openRoles.map((role) => (
            <Card
              key={role.role}
              as="li"
              className="border-dashed border-amber-deep/60 bg-amber/8"
            >
              <div className="flex items-start gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dashed border-amber-deep/60 text-2xl font-light text-amber-deep"
                >
                  +
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <p className="text-lg font-semibold text-green-dark">Open</p>
                    <Pill tone="building">Yours?</Pill>
                  </div>
                  <p className="mt-1 text-sm font-medium text-amber-deep">
                    {role.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-navy/70">
                {role.work}
              </p>
              <p className="mt-3 text-sm text-navy/55">{role.note}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <SectionHeading
          eyebrow="Academic advisors"
          title="Our link into TUM"
          lead="They connect our projects to chairs and teaching formats, and they hold the Education role until a student takes it on."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {advisors.map((p) => (
            <PersonCard key={p.name} {...p} />
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="How we organise"
            title="Small enough that nothing hides."
            lead="Work is coordinated centrally across the project pipeline, but there is no layer between a member and the thing they are building."
          />
          <div className="self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep">
              Who runs the club
            </p>
            <p className="mt-3 text-lg text-navy/80">
              <Fill value={leadership} />
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-7">
          <SectionHeading
            eyebrow="Get in touch"
            title="Want to talk to one of us?"
            lead="Mail reaches the whole team. Name the person or the kind of work you are after and it lands with the right one."
          />
          <div className="flex flex-wrap gap-4">
            <Button href={`mailto:${contact.email}`}>{contact.email}</Button>
            <Button href="/join" variant="secondary">
              How joining works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
