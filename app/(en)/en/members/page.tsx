import type { Metadata } from "next";
import { Members } from "@/components/pages/Members";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: copy.nav.sections.members,
  openGraph: { url: `${site.url}/en/${"members"}/` },
  alternates: {
    canonical: "/en/members",
    languages: { de: "/members", en: "/en/members", "x-default": "/members" },
  },
};

export default function Page() {
  return <Members locale="en" />;
}
