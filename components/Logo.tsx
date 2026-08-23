import { cn } from "@/components/cn";

/**
 * The club's mark, rebuilt as vector from the deck: an amber arc (sun),
 * a blue wind turbine flanked by two green posts, standing on an amber hill.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 136"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="gREen tumorrow"
    >
      <path d="M18 100a82 82 0 0 1 164 0" stroke="var(--color-amber)" strokeWidth="6" />
      <path d="M78 80v46M114 80v46" stroke="var(--color-green-dark)" strokeWidth="5" />
      <path d="M96 52v70M96 74 79 89M96 74l17 15" stroke="var(--color-blue)" strokeWidth="5" />
      <path d="M78 130q40-15 80-3" stroke="var(--color-amber)" strokeWidth="6" />
    </svg>
  );
}

/**
 * "gREen tumorrow" — the RE of Renewable Energy and the TUM of Munich are
 * carried in the colour, so never render this as plain text.
 */
export function Wordmark({
  className,
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-semibold tracking-tight text-green",
        stacked && "flex flex-col leading-[0.95]",
        className,
      )}
    >
      <span aria-hidden="true">
        g<span className="text-amber-deep">RE</span>en
      </span>
      {stacked ? null : " "}
      <span aria-hidden="true">tumorrow</span>
      <span className="sr-only">gREen tumorrow</span>
    </span>
  );
}

/** The arc from the mark, used as a decorative section motif. */
export function Arc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 104"
      fill="none"
      aria-hidden="true"
      className={cn("w-full", className)}
    >
      <path
        d="M2 102a98 98 0 0 1 196 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
