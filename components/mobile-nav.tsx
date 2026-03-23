"use client";

"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { navigationLinks } from "@/lib/site-config";
import { ButtonLink } from "@/components/button-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const dialogId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-label="Open navigation menu"
        className="rounded-full border border-line bg-white px-4 py-3 text-sm font-semibold text-primary-deep shadow-sm hover:border-primary hover:bg-surface-muted"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-primary-deep/55 backdrop-blur-sm">
          <div
            id={dialogId}
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="section-shell-muted ml-auto flex h-full w-full max-w-sm flex-col border-l border-line bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                Navigate
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                className="rounded-full border border-line px-3 py-2 text-sm font-medium text-primary-deep hover:border-primary hover:bg-primary hover:text-white"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="mt-8 rounded-[1.75rem] border border-line bg-white/90 p-4 shadow-soft">
              <p className="text-sm leading-7 text-muted">
                Professional training solutions for individuals, SMEs, large corporations, parastatals, and top management.
              </p>
            </div>
            <nav className="mt-6 flex flex-col gap-3" aria-label="Mobile">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.2rem] border border-line bg-white px-4 py-4 text-base font-medium text-foreground hover:border-primary hover:bg-primary hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:bg-[#b56408]"
                onClick={() => setOpen(false)}
              >
                Request Training
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
