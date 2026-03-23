const configuredSiteUrl = process.env.SITE_URL;

function getConnectSources(): string[] {
  const sources = ["'self'"];

  if (configuredSiteUrl) {
    try {
      sources.push(new URL(configuredSiteUrl).origin);
    } catch {
      // Ignore invalid SITE_URL and fall back to same-origin only.
    }
  }

  return Array.from(new Set(sources));
}

export function buildCsp(): string {
  const directives = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "connect-src": getConnectSources(),
    "font-src": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'none'"],
    "img-src": ["'self'", "data:"],
    "manifest-src": ["'self'"],
    "object-src": ["'none'"],
    // Next.js emits small inline runtime/hydration scripts, so a nonce-based
    // CSP would require extra middleware complexity. This keeps the site
    // deployable while still preventing third-party script execution by default.
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
