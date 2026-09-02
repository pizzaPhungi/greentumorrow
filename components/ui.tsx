import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/components/cn";
import { TodoNote } from "@/components/Todo";
import { isTodo, type Fillable as FillableValue } from "@/content/shared";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "deep" | "green" | "mist";
}) {
  const tones = {
    cream: "bg-cream",
    deep: "bg-cream-deep",
    green: "bg-green-dark text-mist",
    mist: "bg-mist",
  };
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-deep",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-amber" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "text-3xl font-semibold sm:text-4xl",
          invert && "text-mist",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-mist/80" : "text-navy/75",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-colors duration-200";
  const variants = {
    primary: "rounded-full bg-green text-cream hover:bg-green-dark",
    secondary:
      "rounded-lg border border-green/30 text-green-dark hover:border-green hover:bg-green/5",
    quiet: "text-green-dark underline decoration-amber decoration-2 underline-offset-4 hover:decoration-amber-deep px-0 py-0",
  };
  // A hash is a scroll target on the current page, not a route, so it takes the
  // plain anchor branch together with the external schemes.
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const plain = external || href.startsWith("#");

  if (plain) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noreferrer noopener" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
  as: Tag = "div",
  weight = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  /** Lets a card carry more or less visual weight than its neighbours. */
  weight?: "lead" | "default" | "quiet";
}) {
  const weights = {
    lead: "rounded-xl border-green/25 bg-cream p-8 shadow-[0_2px_0_rgba(58,100,60,0.10)] sm:p-10",
    default: "rounded-lg border-green/12 bg-cream p-7",
    quiet: "rounded-lg border-green/10 bg-transparent p-6",
  };
  return (
    <Tag className={cn("border", weights[weight], className)}>{children}</Tag>
  );
}

export function Stat({
  value,
  unit,
  label,
  note,
}: {
  value: FillableValue;
  unit?: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="border-t border-green/20 pt-5">
      <p className="font-semibold tracking-tight text-green-dark tabular-nums">
        {isTodo(value) ? (
          <TodoNote value={value} label="To do" />
        ) : (
          <>
            <span className="text-4xl sm:text-5xl">{value}</span>
            {unit ? (
              <span className="ml-1 text-xl text-amber-deep sm:text-2xl">
                {unit}
              </span>
            ) : null}
          </>
        )}
      </p>
      <p className="mt-2 text-sm font-medium text-navy">{label}</p>
      {note ? <p className="mt-0.5 text-sm text-navy/55">{note}</p> : null}
    </div>
  );
}

export function Pill({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "live" | "building" | "open";
}) {
  const tones = {
    neutral: "bg-green/10 text-green-dark",
    live: "bg-green text-cream",
    building: "bg-amber text-navy",
    /**
     * Hollow on purpose. Solid green reads as running and solid amber as under
     * way; an outline reads as the slot nobody has taken yet, which is what an
     * open invitation is. The inset ring keeps the box the same height as a
     * filled pill, so a row of mixed tones still lines up.
     */
    open: "text-green-dark ring-1 ring-inset ring-green/40",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-wider",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="border-b border-green/12 bg-cream-deep">
      <Container>
        <div className="max-w-3xl py-16 sm:py-24">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 text-lg leading-relaxed text-navy/75 sm:text-xl">
              {lead}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
