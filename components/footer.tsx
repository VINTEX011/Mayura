import { company, navigationLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line bg-primary-deep text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Mayura Corp</h2>
          <p className="max-w-md text-sm leading-7 text-white/78">
            Corporate training designed to build capability, strengthen teams,
            and support measurable professional growth.
          </p>
          <address className="not-italic text-sm leading-7 text-white/78">
            {company.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/78">
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
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Connect
          </h2>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            <a className="block hover:text-white" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className="block hover:text-white" href={`tel:${company.phone}`}>
              {company.phone}
            </a>
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
