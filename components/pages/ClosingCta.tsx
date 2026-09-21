import { Reveal } from "@/components/Reveal";
import { Fill } from "@/components/Todo";
import { Button, Container } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { contact, isTodo, type Locale } from "@/content/shared";

/**
 * One colour per audience, carried by the arrow, the panel's own tint and its
 * label: blue for students, green for companies, amber for enthusiasts.
 */
const chevronColors = ["text-blue", "text-green", "text-amber-deep"];
const panelTints = ["bg-blue/8", "bg-green/8", "bg-amber/10"];
const labelColors = [
  "bg-blue/10 text-blue",
  "bg-green/10 text-green",
  "bg-amber-deep/10 text-amber-deep",
];
/** Only the panels whose headline breaks from the default green-dark. */
const titleColors: Record<number, string> = { 0: "text-blue", 2: "text-amber-deep" };
const contactLabelColors: Record<number, string> = { 2: "text-amber-deep" };

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 3 L18 12 L7 21" />
    </svg>
  );
}

/**
 * The only call to action on the site, so it closes every page rather than
 * living on the home page alone. A missing form link has to be impossible to
 * overlook, which is why the placeholder renders where the button would be.
 *
 * `id="join"` is what every Join button in the header and the hero scrolls to.
 * They deliberately do not link to the form directly: people should read what
 * they are signing up for before they land in a Notion form. This section is on
 * every page, so the anchor never leaves the current page.
 */
export function ClosingCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <section id="join" className="scroll-mt-18 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} variant="scale" delay={i * 100} className="flex flex-1">
              <div
                className={`group flex flex-1 flex-col items-center gap-4 rounded-xl p-6 text-center backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg ${panelTints[i]}`}
              >
                <span
                  className={`inline-flex shrink-0 items-center whitespace-nowrap rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${labelColors[i]}`}
                >
                  {copy.closing.audiences[i]}
                </span>
                <ChevronIcon
                  className={`h-10 w-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5 ${chevronColors[i]}`}
                />
                <h2
                  className={`text-lg font-semibold ${titleColors[i] ?? ""}`}
                >
                  {copy.closing.panels[i].title}
                </h2>
                <p className="text-sm text-navy/70">
                  {copy.closing.panels[i].lead}
                </p>
                {i === 0 ? (
                  isTodo(contact.joinForm) ? (
                    <Fill value={contact.joinForm} label={copy.todo.label} />
                  ) : (
                    <Button
                      href={contact.joinForm}
                      variant="quiet"
                      className="!p-0 !text-blue"
                    >
                      {copy.closing.cta}
                    </Button>
                  )
                ) : (
                  <p className="text-sm">
                    <span
                      className={`font-semibold ${contactLabelColors[i] ?? "text-green-dark"}`}
                    >
                      {copy.closing.contactUs}
                    </span>
                    <br />
                    <a
                      href={`mailto:${contact.email}`}
                      className="underline decoration-amber decoration-2 underline-offset-4"
                    >
                      {contact.email}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
