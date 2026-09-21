import type { StaticImageData } from "next/image";

/**
 * Static image imports, kept out of content/site.ts on purpose.
 *
 * scripts/check-content.mjs imports the content module with plain Node to run
 * the build gate, and plain Node cannot import a .jpg. It fails with
 * ERR_UNKNOWN_FILE_EXTENSION. So the data stays there and the assets stay here.
 *
 * Static imports (rather than string paths) let next/image derive width and
 * height on its own, which is what keeps photos from shifting the layout as they
 * load. Nobody has to maintain pixel dimensions by hand when a photo is swapped.
 *
 * To add a photo:
 *   1. drop the file in content/photos/
 *   2. import it below and key it by project slug or person name
 *   3. replace the matching photoAlt TODO in content/site.ts
 *
 * Both halves are needed: without the alt text the build gate keeps failing,
 * and without the import the page shows a visible placeholder.
 */

import nanaKwabenaOsei from "./photos/nana-kwabena-osei.jpeg";
import ducVietPhung from "./photos/duc-viet-phung.jpeg";
import marvinElling from "./photos/marvin-elling.jpeg";
import salmaGares from "./photos/salma-gares.jpeg";
import karimAlZahabi from "./photos/karim-al-zahabi.jpg";
import markusEblenkamp from "./photos/markus-eblenkamp.jpeg";
import christophGoebel from "./photos/christoph-goebel.jpeg";
import thomasHamacher from "./photos/thomas-hamacher.jpg";
import sebastianSchwenen from "./photos/sebastian-schwenen.webp";
import hubertRoeder from "./photos/hubert-roeder.jpg";

import harthofAscend from "./photos/harthof-ascend.png";
import gemeindeNeuperlach from "./photos/gemeinde-neuperlach.png";

import egmLogo from "./photos/egm-logo.webp";
import bengLogo from "./photos/beng-logo.jpg";

export const projectPhotos: Record<string, StaticImageData> = {
  "harthof-ascend": harthofAscend,
  "gemeinde-neuperlach": gemeindeNeuperlach,
};

/** The one image above the fold. Nothing else on the page carries as much. */
export { default as heroPhoto } from "./photos/hero.webp";

/** Fixed backdrop behind the whole home page, purely decorative. */
export { default as homeBackgroundPhoto } from "./photos/solar-wind-landscape.jpg";

/** Fixed backdrop behind the whole projects page, purely decorative. */
export { default as projectsBackgroundPhoto } from "./photos/solar-field-aerial.jpg";

/** Fixed backdrop behind the whole about-us page, purely decorative. */
export { default as aboutBackgroundPhoto } from "./photos/office-workspace.jpg";

/**
 * Keyed by the exact `name` in teamFacts, including the "Dr." on the advisors.
 * A typo here shows as a placeholder rather than an error, so check the page
 * after adding one.
 *
 * No `photoAlt` goes with these. The person's name sits directly beside the
 * portrait, so alt text would only repeat it; Photo renders `alt=""` and screen
 * readers skip straight to the name. That is the intended result here, unlike
 * the hero and project photos, which show a scene and do need describing.
 */
export const personPhotos: Record<string, StaticImageData> = {
  "Nana Kwabena Osei": nanaKwabenaOsei,
  "Duc Viet Phung": ducVietPhung,
  "Marvin Elling": marvinElling,
  "Salma Gares": salmaGares,
  "Karim Al Zahabi": karimAlZahabi,
  "Dr. Markus Eblenkamp": markusEblenkamp,
  "Prof. Dr. Christoph Goebel": christophGoebel,
  "Prof. Dr. Thomas Hamacher": thomasHamacher,
  "Prof. Dr. Sebastian Schwenen": sebastianSchwenen,
  "Prof. Dr. Hubert Röder": hubertRoeder,
};

/** Keyed by the exact `name` in partnerLinks. No TUM entry: that panel was dropped. */
export const partnerLogos: Record<string, StaticImageData> = {
  "EGM eG": egmLogo,
  "BENG eG": bengLogo,
};
