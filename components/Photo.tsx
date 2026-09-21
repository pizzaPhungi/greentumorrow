import Image, { type StaticImageData } from "next/image";
import { cn } from "@/components/cn";
import { isTodo, type Fillable } from "@/content/shared";

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
  missingLabel,
  eager = false,
}: {
  src: StaticImageData | undefined;
  alt: Fillable | undefined;
  className?: string;
  sizes?: string;
  compact?: boolean;
  /** "Photo missing" in the current language. */
  missingLabel: string;
  /**
   * For a photo on screen at load. next/image lazy-loads by default, which
   * delays exactly the image most likely to be the page's LCP.
   */
  eager?: boolean;
}) {
  if (!src) {
    if (compact) {
      return (
        <span
          aria-hidden="true"
          title={typeof alt === "string" ? alt : undefined}
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
            {missingLabel}
          </span>
          <span className="mt-1 block text-navy/70">
            {isTodo(alt) ? alt.__todo : (alt ?? missingLabel)}
          </span>
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={typeof alt === "string" ? alt : ""}
      sizes={sizes}
      className={className}
      loading={eager ? "eager" : undefined}
      fetchPriority={eager ? "high" : undefined}
      // The build inlines a tiny blurred copy of every static import, so a
      // slow connection shows the photo's colours instead of an empty box.
      placeholder={eager ? "blur" : undefined}
    />
  );
}
