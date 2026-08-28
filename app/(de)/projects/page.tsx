import type { Metadata } from "next";
import { Projects } from "@/components/pages/Projects";
import { getCopy } from "@/content/copy";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.projects,
  alternates: {
    canonical: "/projects",
    languages: { de: "/projects", en: "/en/projects", "x-default": "/projects" },
  },
};

export default function Page() {
  return <Projects locale="de" />;
}
