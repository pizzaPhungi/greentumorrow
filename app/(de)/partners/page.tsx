import type { Metadata } from "next";
import { Partners } from "@/components/pages/Partners";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.partners,
  openGraph: { url: `${site.url}/${"partners"}/` },
  alternates: {
    canonical: "/partners",
    languages: { de: "/partners", en: "/en/partners", "x-default": "/partners" },
  },
};

export default function Page() {
  return <Partners locale="de" />;
}
