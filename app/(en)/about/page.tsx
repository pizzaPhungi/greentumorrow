import type { Metadata } from "next";
import { AboutUs } from "@/components/pages/AboutUs";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: copy.nav.sections.about,
  openGraph: { url: `${site.url}/about/` },
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      de: "/de/about",
      "x-default": "/about",
    },
  },
};

export default function Page() {
  return <AboutUs locale="en" />;
}
