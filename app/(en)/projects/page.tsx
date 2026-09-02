import type { Metadata } from "next";
import { Projects } from "@/components/pages/Projects";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: copy.nav.sections.projects,
  openGraph: { url: `${site.url}/projects/` },
  alternates: {
    canonical: "/projects",
    languages: {
      en: "/projects",
      de: "/de/projects",
      "x-default": "/projects",
    },
  },
};

export default function Page() {
  return <Projects locale="en" />;
}
