import { LogoMark } from "@/components/Logo";
import { Fill } from "@/components/Todo";
import { Button, Section } from "@/components/ui";
import { getCopy } from "@/content/copy";
import { contact, isTodo, type Locale } from "@/content/shared";

/**
 * The only call to action on the site, so it closes every page rather than
 * living on the home page alone. A missing form link has to be impossible to
 * overlook, which is why the placeholder renders where the button would be.
 */
export function ClosingCta({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <Section tone="mist" className="py-20">
      <div className="flex flex-col items-center gap-8 text-center">
        <LogoMark className="h-16" />
        <h2 className="max-w-2xl text-3xl font-semibold sm:text-4xl">
          {copy.closing.title}
        </h2>
        <p className="max-w-md text-navy/70">{copy.closing.lead}</p>
        {isTodo(contact.joinForm) ? (
          <Fill value={contact.joinForm} label={copy.todo.label} />
        ) : (
          <Button href={contact.joinForm}>{copy.closing.cta}</Button>
        )}
        <p className="text-sm text-navy/60">
          {copy.closing.askInstead}{" "}
          <a
            href={`mailto:${contact.email}`}
            className="underline decoration-amber decoration-2 underline-offset-4"
          >
            {contact.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
