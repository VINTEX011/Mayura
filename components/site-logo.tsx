import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 rounded-full px-1 py-1 text-sm font-semibold text-primary-deep"
    >
      <span className="premium-outline flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-primary-deep shadow-lg shadow-primary-deep/20">
        <Image
          src="/mayura-mark.svg"
          alt="Mayura Corp brand mark"
          width={48}
          height={48}
          className="h-12 w-12"
        />
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
