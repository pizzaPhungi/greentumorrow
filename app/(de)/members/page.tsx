import type { Metadata } from "next";
import { Members } from "@/components/pages/Members";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.members,
  openGraph: { url: `${site.url}/members/` },
  alternates: {
    canonical: "/members",
    languages: { de: "/members", en: "/en/members", "x-default": "/members" },
  },
};

export default function Page() {
  return <Members locale="de" />;
}
