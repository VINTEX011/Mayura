import { ButtonLink } from "@/components/button-link";
import { MobileNav } from "@/components/mobile-nav";
import { SiteLogo } from "@/components/site-logo";
import { navigationLinks } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/88 backdrop-blur-2xl">
      <div className="container-shell flex min-h-22 items-center justify-between gap-6 py-3">
        <SiteLogo />
        <nav aria-label="Primary" className="hidden items-center gap-2 lg:flex">
          {navigationLinks.map((link) => (
            <ButtonLink
              key={link.href}
              href={link.href}
              variant="outline"
              className="border-transparent bg-transparent px-4 py-2 text-sm font-medium text-muted shadow-none hover:border-line hover:bg-surface-muted hover:text-primary-deep"
            >
              {link.label}
            </ButtonLink>
          ))}
          <ButtonLink href="/contact" className="ml-2">
            Request Training
          </ButtonLink>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
