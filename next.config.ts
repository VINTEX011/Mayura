import type { NextConfig } from "next";

const configuredSiteUrl = process.env.SITE_URL;

function buildCsp(): string {
  const connectSources = ["'self'"];

  if (configuredSiteUrl) {
    try {
      connectSources.push(new URL(configuredSiteUrl).origin);
    } catch {
      // Fall back to same-origin only if SITE_URL is invalid.
    }
  }

  const directives = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "connect-src": Array.from(new Set(connectSources)),
    "font-src": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    "img-src": ["'self'", "data:"],
    "manifest-src": ["'self'"],
    "object-src": ["'none'"],
    "script-src": ["'self'", "'unsafe-inline'"],
    "style-src": ["'self'", "'unsafe-inline'"],
    "upgrade-insecure-requests": []
  } as const;

  return Object.entries(directives)
    .map(([name, values]) =>
      values.length > 0 ? `${name} ${values.join(" ")}` : name
    )
    .join("; ");
}

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: buildCsp()
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin"
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin"
  },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  }
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
