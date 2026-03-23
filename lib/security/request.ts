import { headers } from "next/headers";

import { siteUrl } from "@/lib/site-config";

export async function isAllowedOrigin(): Promise<boolean> {
  const requestHeaders = await headers();
  const origin = requestHeaders.get("origin");
  const host = requestHeaders.get("host");
  const forwardedProto = requestHeaders.get("x-forwarded-proto") ?? "https";

  if (!origin) {
    return true;
  }

  const acceptedOrigins = new Set<string>();

  try {
    acceptedOrigins.add(new URL(siteUrl).origin);
  } catch {
    // Fall back to host-based validation if SITE_URL is invalid.
  }

  if (host) {
    acceptedOrigins.add(`${forwardedProto}://${host}`);
  }

  return acceptedOrigins.has(origin);
}

export async function getClientIdentifier(): Promise<string> {
  const requestHeaders = await headers();
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim();

  return ip || requestHeaders.get("x-real-ip") || "unknown";
}
