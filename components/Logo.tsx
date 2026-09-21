import Image from "next/image";
import { cn } from "@/components/cn";
import logoMark from "@/public/logo-mark.png";

/**
 * The club's mark: a house holding a wind turbine, white on the brand's dark
 * green, with the roofline, hub and underline in amber. Supplied as a raster
 * badge rather than redrawn, so it stays pixel-identical to the source asset.
 */
export function LogoMark({
  className,
  alt = "gREen Tumorrow",
  eager = false,
}: {
  className?: string;
  /** Empty where a Wordmark sits beside it, so the name is not read twice. */
  alt?: string;
  /** For the header, which is always on screen at load. */
  eager?: boolean;
}) {
  return (
    <Image
      src={logoMark}
      alt={alt}
      loading={eager ? "eager" : undefined}
      className={cn("aspect-square h-10 w-auto rounded-xl", className)}
    />
  );
}

/**
 * "gREen Tumorrow": the RE of Renewable Energy and the TUM of Munich are
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
      <span aria-hidden="true">Tumorrow</span>
      <span className="sr-only">gREen Tumorrow</span>
    </span>
  );
}
