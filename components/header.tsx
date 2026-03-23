import { MobileNav } from "@/components/mobile-nav";
import { SiteLogo } from "@/components/site-logo";
import { navigationLinks } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6 py-3">
        <SiteLogo />
        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted hover:bg-primary hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="ml-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:bg-[#b85f05]"
          >
            Request Training
          </a>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
