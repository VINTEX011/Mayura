# Mayura Corp Website

Production-ready, security-first corporate website for Mayura Corp built with Next.js App Router, React, TypeScript, and Tailwind CSS, ready for Vercel deployment.

## Why these packages

- `next`, `react`, `react-dom`: required for the requested App Router stack.
- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`: required for strong typing and safer maintenance.
- `tailwindcss`, `@tailwindcss/postcss`: the official Tailwind packages, used instead of a third-party styling abstraction.

No database, CMS, auth system, dashboard, payment tooling, UI component library, or form dependency is included. The site keeps dependencies intentionally small to reduce maintenance burden and attack surface.

## Project structure

- `app/`: routes, layout, metadata, robots, sitemap, and the contact route handler.
- `components/`: shared presentation components and the contact form.
- `lib/`: content config, metadata helpers, security utilities, validation, rate limiting, and email abstraction.
- `public/`: local placeholder assets only.

## Local setup

Install dependencies:

```bash
npm install
```

Or:

```bash
pnpm install
```

Create local environment variables:

```bash
cp .env.example .env.local
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build commands

```bash
npm run typecheck
npm run build
```

## Environment variables

- `SITE_URL`: trusted canonical URL used for metadata, sitemap, and same-origin checks.
- `CONTACT_EMAIL`: contact email displayed on the site.
- `CONTACT_PHONE`: contact phone displayed on the site.
- `MAIL_PROVIDER`: currently `log` by default for safe local behavior.
- `MAIL_FROM`: sender identity for the server-side mail utility.
- `MAIL_TO`: destination inbox for contact inquiries.

Set these separately for Vercel Production, Preview, and Development environments. Environment variable changes generally require a redeploy before deployed builds and functions pick them up.

## Vercel deployment

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example` with real values.
4. Set `SITE_URL` to the trusted deployed domain for each environment.
5. Deploy.
6. Redeploy after any environment variable change.

## Secure production checklist

- Replace placeholder contact details with real values in environment variables.
- Set `SITE_URL` to the exact trusted origin for Production and Preview.
- Wire a real email provider into [`lib/contact/mailer.ts`](/C:/Users/Admin/Documents/Playground/lib/contact/mailer.ts).
- Replace the in-memory limiter in [`lib/contact/rate-limit.ts`](/C:/Users/Admin/Documents/Playground/lib/contact/rate-limit.ts) with a shared Vercel-compatible backend.
- Enable Vercel Firewall / WAF bot protection and rate-based rules for `/api/contact`.
- Review the CSP before adding analytics, embeds, remote fonts, or other third-party resources.
- Keep dependencies updated and remove anything unused.

## Company content customization

Most business content is centralized in [`lib/site-config.ts`](/C:/Users/Admin/Documents/Playground/lib/site-config.ts).

Adjust security assumptions in:

- [`lib/security/csp.ts`](/C:/Users/Admin/Documents/Playground/lib/security/csp.ts)
- [`lib/security/request.ts`](/C:/Users/Admin/Documents/Playground/lib/security/request.ts)
- [`next.config.ts`](/C:/Users/Admin/Documents/Playground/next.config.ts)

## Contact form notes

- The public write surface is limited to `/api/contact`.
- Client validation improves UX, but server validation is authoritative.
- Responses use safe, generic messaging and do not reflect raw input.
- The honeypot and limiter are layered controls, not complete anti-abuse guarantees.
- In production, pair the in-app checks with Vercel Firewall / WAF and provider-level abuse protections.
