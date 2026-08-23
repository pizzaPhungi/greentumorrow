import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/components/cn";

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
  tone?: "cream" | "deep" | "green" | "sage";
}) {
  const tones = {
    cream: "bg-cream",
    deep: "bg-cream-deep",
    green: "bg-green-dark text-mist",
    sage: "bg-mist",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";
  const variants = {
    primary: "bg-green text-cream hover:bg-green-dark",
    secondary:
      "border border-green/30 text-green-dark hover:border-green hover:bg-green/5",
    quiet: "text-green-dark underline decoration-amber decoration-2 underline-offset-4 hover:decoration-amber-deep px-0 py-0",
  };
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (external) {
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
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-green/12 bg-cream p-7 shadow-[0_1px_0_rgba(58,100,60,0.06)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Stat({
  value,
  unit,
  label,
  note,
}: {
  value: string;
  unit?: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="border-t border-green/20 pt-5">
      <p className="font-semibold tracking-tight text-green-dark tabular-nums">
        <span className="text-4xl sm:text-5xl">{value}</span>
        {unit ? (
          <span className="ml-1 text-xl text-amber-deep sm:text-2xl">{unit}</span>
        ) : null}
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
  tone?: "neutral" | "live" | "building";
}) {
  const tones = {
    neutral: "bg-green/10 text-green-dark",
    live: "bg-green text-cream",
    building: "bg-amber text-navy",
  };
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider",
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
