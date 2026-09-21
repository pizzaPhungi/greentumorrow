import type { Metadata } from "next";
import { Projects } from "@/components/pages/Projects";
import { pageMetadata } from "@/components/metadata";

export const metadata: Metadata = pageMetadata("en", "projects");

export default function Page() {
  return <Projects locale="en" />;
}
