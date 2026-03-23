# Security Notes

## Threat model

This is a public corporate marketing site with one public write endpoint: the contact form. The most relevant threats are:

- Automated spam and abuse against `/api/contact`
- Malformed or hostile input attempting XSS, header injection, or parser abuse
- Weak CSP or header configuration that allows unnecessary browser capabilities
- Secret exposure through client-side environment variables or repository files
- Dependency risk from extra or poorly maintained packages
- Trust erosion from insecure third-party embeds or stale content

## Implemented protections

- Static-first App Router architecture with minimal client-side JavaScript
- No login, admin route, database, CMS, or extra public API routes
- Security headers in [`next.config.ts`](/C:/Users/Admin/Documents/Playground/next.config.ts)
- Restrictive CSP in [`lib/security/csp.ts`](/C:/Users/Admin/Documents/Playground/lib/security/csp.ts)
- Same-origin-aware origin checks in [`lib/security/request.ts`](/C:/Users/Admin/Documents/Playground/lib/security/request.ts)
- Server-side normalization, validation, and length limits in [`lib/contact/validation.ts`](/C:/Users/Admin/Documents/Playground/lib/contact/validation.ts)
- Honeypot field and safe error responses in the contact flow
- Provider-agnostic, server-only email utility in [`lib/contact/mailer.ts`](/C:/Users/Admin/Documents/Playground/lib/contact/mailer.ts)
- No user-controlled HTML rendering
- `Cache-Control: no-store` on contact responses

## CSP note

The CSP blocks third-party scripts by default, but it currently allows `'unsafe-inline'` for scripts and styles. This is a practical compromise for straightforward Next.js deployment without adding nonce middleware. If you want a stricter CSP later, migrate to a nonce-based approach and validate all framework/runtime requirements before rollout.

## Vercel protections to enable

- Vercel Firewall / WAF rate-based rules for `/api/contact`
- Bot protection or challenge rules on form submissions
- Centralized logging and alerting for spikes or repeated failures
- Environment variable separation across Production, Preview, and Development
- Domain configuration that matches the trusted `SITE_URL`

## Residual risks

- The included rate limiter is an abstraction and development fallback, not final distributed production enforcement.
- Public contact forms always retain some spam risk even with layered controls.
- If you add analytics scripts, embedded maps, chat widgets, or remote assets, the CSP and privacy posture will need review.
- Mail deliverability and abuse prevention also depend on the chosen provider configuration.

## Secure maintenance checklist

- Review dependency updates regularly.
- Run `npm run typecheck` and `npm run build` after updates.
- Re-test the contact flow after provider, domain, or infrastructure changes.
- Revisit CSP before allowing any new external domain.
- Confirm no server secrets are exposed through `NEXT_PUBLIC_` variables.
- Rotate secrets immediately if compromise is suspected.

## Dependency update guidance

- Prefer official or well-maintained packages with a clear operational reason.
- Remove unused dependencies rather than keeping them for convenience.
- Review Next.js and Tailwind release notes before major upgrades.

## Content update guidance

- Keep content in typed config and page components instead of injecting raw HTML.
- Avoid copying third-party embed snippets directly into the site.
- Keep contact details, social links, and trusted domain configuration current.

## Incident response basics

- Identify whether the issue is abuse, outage, content tampering, or secret exposure.
- Use Vercel protections to throttle or block abusive traffic quickly.
- Review recent deployments, logs, and environment variable changes.
- Rotate affected secrets and redeploy if configuration exposure is suspected.
- Document the event, containment steps, and follow-up improvements.
