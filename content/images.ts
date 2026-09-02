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

import nazliGhazvanchahi from "./photos/nazli-ghazvanchahi.jpeg";
import nanaKwabenaOsei from "./photos/nana-kwabena-osei.jpeg";
import ducVietPhung from "./photos/duc-viet-phung.jpeg";
import marvinElling from "./photos/marvin-elling.jpeg";
import salmaGares from "./photos/salma-gares.jpeg";
import karimAlzahabi from "./photos/karim-alzahabi.jpeg";
import markusEblenkamp from "./photos/markus-eblenkamp.jpeg";
import christophGoebel from "./photos/christoph-goebel.jpeg";

import perlacherHerz from "./photos/perlacher-herz.webp";
import gemeindeNeuperlach from "./photos/gemeinde-neuperlach.png";

export const projectPhotos: Record<string, StaticImageData> = {
  "perlacher-herz": perlacherHerz,
  "gemeinde-neuperlach": gemeindeNeuperlach,
};

/** The one image above the fold. Nothing else on the page carries as much. */
export { default as heroPhoto } from "./photos/re-stock-image.jpeg";

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
  "Nazli Ghazvanchahi": nazliGhazvanchahi,
  "Nana Kwabena Osei": nanaKwabenaOsei,
  "Duc Viet Phung": ducVietPhung,
  "Marvin Elling": marvinElling,
  "Salma Gares": salmaGares,
  "Karim Alzahabi": karimAlzahabi,
  "Dr. Markus Eblenkamp": markusEblenkamp,
  "Dr. Christoph Göbel": christophGoebel,
};
