import NextImage, { type StaticImageData } from "next/image";

/**
 * Pinned behind the whole page: it never scrolls, so every translucent
 * section above it reveals a little of it as the page moves. Dimmed and
 * washed with the brand cream so it reads as texture, not a competing photo.
 */
export function FixedBackground({ src }: { src: StaticImageData }) {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <NextImage
        src={src}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-cream/25" />
    </div>
  );
}
