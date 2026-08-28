import type { Metadata } from "next";
import { Partners } from "@/components/pages/Partners";
import { getCopy } from "@/content/copy";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: copy.nav.sections.partners,
  alternates: {
    canonical: "/en/partners",
    languages: { de: "/partners", en: "/en/partners", "x-default": "/partners" },
  },
};

export default function Page() {
  return <Partners locale="en" />;
}
