import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-full px-1 py-1 text-sm font-semibold text-primary-deep"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/20">
        M
      </span>
      <span className="flex flex-col">
        <span className="text-base font-semibold tracking-[0.14em] text-primary">
          Mayura Corp
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.28em] text-muted">
          Corporate Training
        </span>
      </span>
    </Link>
  );
}
