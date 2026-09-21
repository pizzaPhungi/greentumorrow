import type { Metadata } from "next";
import { Projects } from "@/components/pages/Projects";
import { pageMetadata } from "@/components/metadata";

export const metadata: Metadata = pageMetadata("de", "projects");

export default function Page() {
  return <Projects locale="de" />;
}
