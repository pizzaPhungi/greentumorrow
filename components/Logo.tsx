import { cn } from "@/components/cn";

/**
 * The club's mark, rebuilt as vector from the deck: an amber arc (sun),
 * a blue wind turbine flanked by two green posts, standing on an amber hill.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      className={cn("h-10 w-auto", className)}
      role="img"
      aria-label="gREen tumorrow"
    >
      <path
        d="M77 152A68 68 0 1 1 123 152"
        fill="none"
        stroke="var(--color-sun)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M14 143C46 130 74 140 100 145c32 6 62 1 86-14-4 21-40 32-86 31-46-1-80-7-86-19Z"
        fill="var(--color-grass)"
      />
      <path
        d="M14 143c32-12 60-3 86 2 20 4 42 3 60-4-32 15-98 16-146 2Z"
        fill="var(--color-grass-dark)"
      />
      <g
        stroke="var(--color-teal)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M82 121 100 104l18 17" />
        <path d="M86 119v22M114 119v22" />
        <path d="M45 131 62 116l17 15" />
        <path d="M49 129v17M75 129v17" />
        <path d="M121 131 138 116l17 15" />
        <path d="M125 129v17M151 129v17" />
        <path d="M100 71v50M100 68V36M97 73 72 88M103 73l25 15" />
      </g>
      <circle cx="100" cy="70" r="5.5" fill="var(--color-teal)" />
      <g fill="var(--color-grass)">
        <rect x="93" y="125" width="6" height="6" rx="1" />
        <rect x="101" y="125" width="6" height="6" rx="1" />
        <rect x="93" y="133" width="6" height="6" rx="1" />
        <rect x="101" y="133" width="6" height="6" rx="1" />
      </g>
    </svg>
  );
}

/**
 * "gREen tumorrow": the RE of Renewable Energy and the TUM of Munich are
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
