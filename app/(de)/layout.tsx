import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { layoutMetadata } from "@/components/metadata";

export const metadata: Metadata = layoutMetadata("de");

export default function GermanLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="de">{children}</RootShell>;
}
