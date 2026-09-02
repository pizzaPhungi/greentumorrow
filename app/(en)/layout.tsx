import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/RootShell";
import { getCopy } from "@/content/copy";
import { site } from "@/content/shared";

const copy = getCopy("en");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", de: "/de", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    locale: copy.meta.ogLocale,
    url: site.url,
    siteName: site.name,
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
