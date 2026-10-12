import type { Metadata } from "next";
import { Events } from "@/components/pages/Events";
import { pageMetadata } from "@/components/metadata";

export const metadata: Metadata = pageMetadata("en", "events");

export default function Page() {
  return <Events locale="en" />;
}
