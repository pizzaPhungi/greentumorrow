import type { Metadata } from "next";
import { AboutUs } from "@/components/pages/AboutUs";
import { pageMetadata } from "@/components/metadata";

export const metadata: Metadata = pageMetadata("de", "about");

export default function Page() {
  return <AboutUs locale="de" />;
}
