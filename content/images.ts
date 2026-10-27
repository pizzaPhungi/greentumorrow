import type { StaticImageData } from "next/image";

/**
 * Static image imports, kept out of content/shared.ts and content/copy/ on purpose.
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
 *   3. replace the matching photoAlt TODO in content/copy/en.ts and de.ts
 *
 * Both halves are needed: without the alt text the build gate keeps failing,
 * and without the import the page shows a visible placeholder.
 */

import nazliGhazvanchahi from "./photos/nazli-ghazvanchahi.jpeg";
import nanaKwabenaOsei from "./photos/nana-kwabena-osei.jpeg";
import ducVietPhung from "./photos/duc-viet-phung.jpeg";
import marvinElling from "./photos/marvin-elling.jpeg";
import salmaGares from "./photos/salma-gares.jpeg";
import karimAlZahabi from "./photos/karim-al-zahabi.jpg";
import timKeuerleber from "./photos/tim-keuerleber.jpg";
import elianaSattarova from "./photos/eliana-sattarova.jpg";
import nikhilRaoJabadeChandra from "./photos/nikhil-rao-jabade-chandra.jpg";
import lamprosKonstantellos from "./photos/lampros-konstantellos.jpg";
import reinaldoTonkoski from "./photos/reinaldo-tonkoski.jpg";
import markusEblenkamp from "./photos/markus-eblenkamp.jpeg";
import christophGoebel from "./photos/christoph-goebel.jpeg";
import thomasHamacher from "./photos/thomas-hamacher.jpg";
import sebastianSchwenen from "./photos/sebastian-schwenen.webp";
import hubertRoeder from "./photos/hubert-roeder.jpg";

import harthofAscend from "./photos/harthof-ascend.jpg";
import gemeindeNeuperlach from "./photos/gemeinde-neuperlach.jpg";
import tumGarching from "./photos/tum-garching.png";

import wattTheHack from "./photos/watt-the-hack.webp";

import egmLogo from "./photos/egm-logo.webp";
import baywaReLogo from "./photos/baywa-re.png";
import nomadicDronesLogo from "./photos/nomadic-drones.png";
import ecuriousLogo from "./photos/ecurious.png";
import nuuenergyLogo from "./photos/nuuenergy.png";
import gallery001 from "./photos/watt-the-hack-001.jpg";
import gallery002 from "./photos/watt-the-hack-002.jpg";
import gallery003 from "./photos/watt-the-hack-003.jpg";
import gallery004 from "./photos/watt-the-hack-004.jpg";
import gallery005 from "./photos/watt-the-hack-005.jpg";
import gallery006 from "./photos/watt-the-hack-006.jpg";
import gallery007 from "./photos/watt-the-hack-007.jpg";
import gallery008 from "./photos/watt-the-hack-008.jpg";
import gallery009 from "./photos/watt-the-hack-009.jpg";
import gallery010 from "./photos/watt-the-hack-010.jpg";
import gallery011 from "./photos/watt-the-hack-011.jpg";
import gallery012 from "./photos/watt-the-hack-012.jpg";
import gallery013 from "./photos/watt-the-hack-013.jpg";
import gallery014 from "./photos/watt-the-hack-014.jpg";
import gallery015 from "./photos/watt-the-hack-015.jpg";
import gallery016 from "./photos/watt-the-hack-016.jpg";
import gallery017 from "./photos/watt-the-hack-017.jpg";
import gallery018 from "./photos/watt-the-hack-018.jpg";
import gallery019 from "./photos/watt-the-hack-019.jpg";
import gallery020 from "./photos/watt-the-hack-020.jpg";
import gallery021 from "./photos/watt-the-hack-021.jpg";
import gallery022 from "./photos/watt-the-hack-022.jpg";
import gallery023 from "./photos/watt-the-hack-023.jpg";
import gallery024 from "./photos/watt-the-hack-024.jpg";
import gallery025 from "./photos/watt-the-hack-025.jpg";
import gallery026 from "./photos/watt-the-hack-026.jpg";
import gallery027 from "./photos/watt-the-hack-027.jpg";
import gallery028 from "./photos/watt-the-hack-028.jpg";
import gallery029 from "./photos/watt-the-hack-029.jpg";
import gallery030 from "./photos/watt-the-hack-030.jpg";
import gallery031 from "./photos/watt-the-hack-031.jpg";
import gallery032 from "./photos/watt-the-hack-032.jpg";
import gallery033 from "./photos/watt-the-hack-033.jpg";
import gallery034 from "./photos/watt-the-hack-034.jpg";
import gallery035 from "./photos/watt-the-hack-035.jpg";
import gallery036 from "./photos/watt-the-hack-036.jpg";
import gallery037 from "./photos/watt-the-hack-037.jpg";
import gallery038 from "./photos/watt-the-hack-038.jpg";
import gallery039 from "./photos/watt-the-hack-039.jpg";
import gallery040 from "./photos/watt-the-hack-040.jpg";
import gallery041 from "./photos/watt-the-hack-041.jpg";
import gallery042 from "./photos/watt-the-hack-042.jpg";
import gallery043 from "./photos/watt-the-hack-043.jpg";
import gallery044 from "./photos/watt-the-hack-044.jpg";
import gallery045 from "./photos/watt-the-hack-045.jpg";
import gallery046 from "./photos/watt-the-hack-046.jpg";
import gallery047 from "./photos/watt-the-hack-047.jpg";
import gallery048 from "./photos/watt-the-hack-048.jpg";
import gallery049 from "./photos/watt-the-hack-049.jpg";
import gallery050 from "./photos/watt-the-hack-050.jpg";
import gallery051 from "./photos/watt-the-hack-051.jpg";
import gallery052 from "./photos/watt-the-hack-052.jpg";
import gallery053 from "./photos/watt-the-hack-053.jpg";
import gallery054 from "./photos/watt-the-hack-054.jpg";
import gallery055 from "./photos/watt-the-hack-055.jpg";
import gallery056 from "./photos/watt-the-hack-056.jpg";
import gallery057 from "./photos/watt-the-hack-057.jpg";
import gallery058 from "./photos/watt-the-hack-058.jpg";
import gallery059 from "./photos/watt-the-hack-059.jpg";
import gallery060 from "./photos/watt-the-hack-060.jpg";
import gallery061 from "./photos/watt-the-hack-061.jpg";
import gallery062 from "./photos/watt-the-hack-062.jpg";
import gallery063 from "./photos/watt-the-hack-063.jpg";
import gallery064 from "./photos/watt-the-hack-064.jpg";
import gallery065 from "./photos/watt-the-hack-065.jpg";
import gallery066 from "./photos/watt-the-hack-066.jpg";
import gallery067 from "./photos/watt-the-hack-067.jpg";
import gallery068 from "./photos/watt-the-hack-068.jpg";
import gallery069 from "./photos/watt-the-hack-069.jpg";
import gallery070 from "./photos/watt-the-hack-070.jpg";
import gallery071 from "./photos/watt-the-hack-071.jpg";
import gallery072 from "./photos/watt-the-hack-072.jpg";
import gallery073 from "./photos/watt-the-hack-073.jpg";
import gallery074 from "./photos/watt-the-hack-074.jpg";
import gallery075 from "./photos/watt-the-hack-075.jpg";
import gallery076 from "./photos/watt-the-hack-076.jpg";
import gallery077 from "./photos/watt-the-hack-077.jpg";
import gallery078 from "./photos/watt-the-hack-078.jpg";
import gallery079 from "./photos/watt-the-hack-079.jpg";
import gallery080 from "./photos/watt-the-hack-080.jpg";
import gallery081 from "./photos/watt-the-hack-081.jpg";
import gallery082 from "./photos/watt-the-hack-082.jpg";
import gallery083 from "./photos/watt-the-hack-083.jpg";
import gallery084 from "./photos/watt-the-hack-084.jpg";
import gallery085 from "./photos/watt-the-hack-085.jpg";
import gallery086 from "./photos/watt-the-hack-086.jpg";
import gallery087 from "./photos/watt-the-hack-087.jpg";
import gallery088 from "./photos/watt-the-hack-088.jpg";
import gallery089 from "./photos/watt-the-hack-089.jpg";
import gallery090 from "./photos/watt-the-hack-090.jpg";
import gallery091 from "./photos/watt-the-hack-091.jpg";
import gallery092 from "./photos/watt-the-hack-092.jpg";
import gallery093 from "./photos/watt-the-hack-093.jpg";
import gallery094 from "./photos/watt-the-hack-094.jpg";
import gallery095 from "./photos/watt-the-hack-095.jpg";
import gallery096 from "./photos/watt-the-hack-096.jpg";
import gallery097 from "./photos/watt-the-hack-097.jpg";
import gallery098 from "./photos/watt-the-hack-098.jpg";
import gallery099 from "./photos/watt-the-hack-099.jpg";
import gallery100 from "./photos/watt-the-hack-100.jpg";
import gallery101 from "./photos/watt-the-hack-101.jpg";
import gallery102 from "./photos/watt-the-hack-102.jpg";
import gallery103 from "./photos/watt-the-hack-103.jpg";
import gallery104 from "./photos/watt-the-hack-104.jpg";
import gallery105 from "./photos/watt-the-hack-105.jpg";
import gallery106 from "./photos/watt-the-hack-106.jpg";
import gallery107 from "./photos/watt-the-hack-107.jpg";
import gallery108 from "./photos/watt-the-hack-108.jpg";
import gallery109 from "./photos/watt-the-hack-109.jpg";
import gallery110 from "./photos/watt-the-hack-110.jpg";
import gallery111 from "./photos/watt-the-hack-111.jpg";
import gallery112 from "./photos/watt-the-hack-112.jpg";
import gallery113 from "./photos/watt-the-hack-113.jpg";
import gallery114 from "./photos/watt-the-hack-114.jpg";
import gallery115 from "./photos/watt-the-hack-115.jpg";
import gallery116 from "./photos/watt-the-hack-116.jpg";
import gallery117 from "./photos/watt-the-hack-117.jpg";
import gallery118 from "./photos/watt-the-hack-118.jpg";
import gallery119 from "./photos/watt-the-hack-119.jpg";
import gallery120 from "./photos/watt-the-hack-120.jpg";
import gallery121 from "./photos/watt-the-hack-121.jpg";
import gallery122 from "./photos/watt-the-hack-122.jpg";
import gallery123 from "./photos/watt-the-hack-123.jpg";
import gallery124 from "./photos/watt-the-hack-124.jpg";
import gallery125 from "./photos/watt-the-hack-125.jpg";
import gallery126 from "./photos/watt-the-hack-126.jpg";
import gallery127 from "./photos/watt-the-hack-127.jpg";
import winnersBaywaRe from "./photos/winners-baywa-re.jpg";
import winnersEcurious from "./photos/winners-ecurious.jpg";
import winnersNomadicDrones from "./photos/winners-nomadic-drones.jpg";
import winnersNuuenergy from "./photos/winners-nuuenergy.jpg";
import bengLogo from "./photos/beng-logo.jpg";

export const projectPhotos: Record<string, StaticImageData> = {
  "harthof-ascend": harthofAscend,
  "gemeinde-neuperlach": gemeindeNeuperlach,
  "tum-garching": tumGarching,
};

/** Keyed by event slug in shared.ts. The poster each event was announced with. */
export const eventPhotos: Record<string, StaticImageData> = {
  "watt-the-hack": wattTheHack,
};

/** Keyed by challenge slug in shared.ts. A missing one renders a placeholder. */
export const challengeLogos: Record<string, StaticImageData> = {
  "baywa-re": baywaReLogo,
  "nomadic-drones": nomadicDronesLogo,
  ecurious: ecuriousLogo,
  nuuenergy: nuuenergyLogo,
};

/** Keyed by challenge slug in shared.ts. Each winning team on stage. */
export const winnerPhotos: Record<string, StaticImageData> = {
  "baywa-re": winnersBaywaRe,
  "nomadic-drones": winnersNomadicDrones,
  ecurious: winnersEcurious,
  nuuenergy: winnersNuuenergy,
};

/**
 * WATT THE HACK photos, in the order they appear. Each needs an entry in
 * `wattTheHack.galleryAlts` in both copy files, same position.
 */
export const wattTheHackGallery: StaticImageData[] = [
  gallery001,
  gallery002,
  gallery003,
  gallery004,
  gallery005,
  gallery006,
  gallery007,
  gallery008,
  gallery009,
  gallery010,
  gallery011,
  gallery012,
  gallery013,
  gallery014,
  gallery015,
  gallery016,
  gallery017,
  gallery018,
  gallery019,
  gallery020,
  gallery021,
  gallery022,
  gallery023,
  gallery024,
  gallery025,
  gallery026,
  gallery027,
  gallery028,
  gallery029,
  gallery030,
  gallery031,
  gallery032,
  gallery033,
  gallery034,
  gallery035,
  gallery036,
  gallery037,
  gallery038,
  gallery039,
  gallery040,
  gallery041,
  gallery042,
  gallery043,
  gallery044,
  gallery045,
  gallery046,
  gallery047,
  gallery048,
  gallery049,
  gallery050,
  gallery051,
  gallery052,
  gallery053,
  gallery054,
  gallery055,
  gallery056,
  gallery057,
  gallery058,
  gallery059,
  gallery060,
  gallery061,
  gallery062,
  gallery063,
  gallery064,
  gallery065,
  gallery066,
  gallery067,
  gallery068,
  gallery069,
  gallery070,
  gallery071,
  gallery072,
  gallery073,
  gallery074,
  gallery075,
  gallery076,
  gallery077,
  gallery078,
  gallery079,
  gallery080,
  gallery081,
  gallery082,
  gallery083,
  gallery084,
  gallery085,
  gallery086,
  gallery087,
  gallery088,
  gallery089,
  gallery090,
  gallery091,
  gallery092,
  gallery093,
  gallery094,
  gallery095,
  gallery096,
  gallery097,
  gallery098,
  gallery099,
  gallery100,
  gallery101,
  gallery102,
  gallery103,
  gallery104,
  gallery105,
  gallery106,
  gallery107,
  gallery108,
  gallery109,
  gallery110,
  gallery111,
  gallery112,
  gallery113,
  gallery114,
  gallery115,
  gallery116,
  gallery117,
  gallery118,
  gallery119,
  gallery120,
  gallery121,
  gallery122,
  gallery123,
  gallery124,
  gallery125,
  gallery126,
  gallery127,
];

/** The one image above the fold. Nothing else on the page carries as much. */
export { default as heroPhoto } from "./photos/hero.webp";

/** Fixed backdrop behind the whole home page, purely decorative. */
export { default as homeBackgroundPhoto } from "./photos/solar-wind-v2.jpeg";

/** Cropped from the home backdrop to the turbines alone, until the excursion has a site of its own. */
export { default as windExcursionPhoto } from "./photos/wind-turbines.jpg";

/** Fixed backdrop behind the whole projects page, purely decorative. Solar and wind, like the page. */
export { default as projectsBackgroundPhoto } from "./photos/solar-wind-v2.jpeg";

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
  "Nazli Ghazvanchahi": nazliGhazvanchahi,
  "Nana Kwabena Osei": nanaKwabenaOsei,
  "Duc Viet Phung": ducVietPhung,
  "Marvin Elling": marvinElling,
  "Salma Gares": salmaGares,
  "Karim Al Zahabi": karimAlZahabi,
  "Tim Keuerleber": timKeuerleber,
  "Eliana Sattarova": elianaSattarova,
  "Nikhil Rao Jabade Chandra": nikhilRaoJabadeChandra,
  "Lampros Konstantellos": lamprosKonstantellos,
  "Prof. Dr. Reinaldo Tonkoski": reinaldoTonkoski,
  "Dr. Markus Eblenkamp": markusEblenkamp,
  "Prof. Dr. Christoph Goebel": christophGoebel,
  "Prof. Dr. Thomas Hamacher": thomasHamacher,
  "Prof. Dr. Sebastian Schwenen": sebastianSchwenen,
  "Prof. Dr. Hubert Röder": hubertRoeder,
};

/** Keyed by the exact `name` in copy.partners.entries. */
export const partnerLogos: Record<string, StaticImageData> = {
  "EGM eG": egmLogo,
  "BENG eG": bengLogo,
};
