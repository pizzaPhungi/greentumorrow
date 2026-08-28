import Image, { type StaticImageData } from "next/image";
import { cn } from "@/components/cn";
import { isTodo, type Fillable } from "@/content/site";

/**
 * Renders a photo, or a loud placeholder in its exact shape while the club has
 * not supplied one. Never falls back to stock imagery.
 *
 * `src` comes from content/images.ts as a static import, which is what lets
 * next/image reserve the right space before the file loads.
 */
export function Photo({
  src,
  alt,
  className,
  sizes,
  /** Compact placeholder for small avatars, where a caption would not fit. */
  compact = false,
}: {
  src: StaticImageData | undefined;
  alt: Fillable;
  className?: string;
  sizes?: string;
  compact?: boolean;
}) {
  if (!src) {
    if (compact) {
      return (
        <span
          aria-hidden="true"
          title={isTodo(alt) ? alt.__todo : alt}
          className={cn(
            "flex shrink-0 items-center justify-center border border-dashed border-amber-deep/60 bg-amber/10 text-lg font-light text-amber-deep",
            className,
          )}
        >
          +
        </span>
      );
    }
    return (
      <div
        className={cn(
          "flex items-center justify-center border border-dashed border-amber-deep/60 bg-amber/8 p-6 text-center",
          className,
        )}
      >
        <span className="max-w-xs text-sm text-amber-deep">
          <span className="block text-[0.7em] font-semibold uppercase tracking-widest">
            Photo missing
          </span>
          <span className="mt-1 block text-navy/70">
            {isTodo(alt) ? alt.__todo : alt}
          </span>
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={isTodo(alt) ? "" : alt}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
