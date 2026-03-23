import { ButtonLink } from "@/components/button-link";
import { company, navigationLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/10 bg-primary-deep text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_30%)]" />
      <div className="container-shell grid gap-10 py-16 md:grid-cols-[1.15fr_0.85fr_0.9fr]">
        <div className="space-y-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-orange-200">
              Mayura Corp
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Trusted training for modern organizations.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/72">
            Mayura Corp delivers high-quality professional training programs tailored to evolving client needs and designed to strengthen performance, capability, and growth.
          </p>
          <address className="not-italic text-sm leading-7 text-white/78">
            {company.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
          <ButtonLink
            href="/contact"
            variant="primary"
            className="w-fit bg-accent text-white hover:bg-[#b56408]"
          >
            Request a Consultation
          </ButtonLink>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-white/58">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/78">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-white/58">
            Contact
          </h2>
          <div className="mt-5 space-y-3 text-sm text-white/78">
            <a className="block hover:text-white" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className="block hover:text-white" href={`tel:${company.phone}`}>
              {company.phone}
            </a>
            <p className="pt-2 text-sm leading-7 text-white/64">
              We partner with individuals, SMEs, large corporations, parastatals, and top management teams across evolving training needs.
            </p>
            <div className="flex gap-4 pt-2">
              {company.socialLinks.map((link) => (
                <a key={link.label} className="hover:text-white" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
