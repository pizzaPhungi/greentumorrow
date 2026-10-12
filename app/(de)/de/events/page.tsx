import type { Metadata } from "next";
import { Events } from "@/components/pages/Events";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.events,
  openGraph: { url: `${site.url}/de/events/` },
  alternates: {
    canonical: "/de/events",
    languages: {
      en: "/events",
      de: "/de/events",
      "x-default": "/events",
    },
  },
};

export default function Page() {
  return <Events locale="de" />;
}
