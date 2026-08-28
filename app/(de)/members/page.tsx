import type { Metadata } from "next";
import { Members } from "@/components/pages/Members";
import { getCopy } from "@/content/copy";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.nav.sections.members,
  alternates: {
    canonical: "/members",
    languages: { de: "/members", en: "/en/members", "x-default": "/members" },
  },
};

export default function Page() {
  return <Members locale="de" />;
}
