import type { MetadataRoute } from "next";

import { navigationLinks, siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return navigationLinks.map((item) => ({
    url: new URL(item.href, siteUrl).toString(),
    lastModified: now
  }));
}
