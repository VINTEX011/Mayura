import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-full px-1 py-1 text-sm font-semibold text-primary-deep"
    >
      <span className="premium-outline flex h-12 w-12 items-center justify-center rounded-full bg-primary-deep text-lg font-bold text-white shadow-lg shadow-primary-deep/20">
        MC
      </span>
      <span className="flex flex-col">
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.34em] text-primary">
          Mayura Corp
        </span>
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.32em] text-muted">
          Corporate Training Profile
        </span>
      </span>
    </Link>
  );
}
