import type { Metadata } from "next";

import { company, siteUrl } from "@/lib/site-config";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/"
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: company.name
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function buildPageTitle(pageTitle: string): string {
  return `${pageTitle} | ${company.name}`;
}
