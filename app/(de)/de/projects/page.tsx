import type { Metadata } from "next";
import { Projects } from "@/components/pages/Projects";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.projects,
  openGraph: { url: `${site.url}/de/projects/` },
  alternates: {
    canonical: "/de/projects",
    languages: {
      en: "/projects",
      de: "/de/projects",
      "x-default": "/projects",
    },
  },
};

export default function Page() {
  return <Projects locale="de" />;
}
