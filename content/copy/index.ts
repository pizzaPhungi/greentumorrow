import type { Locale } from "../shared.ts";
import { de } from "./de.ts";
import { en } from "./en.ts";
import type { Copy } from "./types.ts";

const dictionaries: Record<Locale, Copy> = { de, en };

export const getCopy = (locale: Locale): Copy => dictionaries[locale];
export type { Copy } from "./types.ts";
