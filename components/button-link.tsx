import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:bg-[#b56408]",
  secondary:
    "bg-primary-deep text-white shadow-lg shadow-primary-deep/15 hover:-translate-y-0.5 hover:bg-[#172554]",
  outline:
    "border border-line bg-white text-primary-deep hover:border-primary hover:bg-primary hover:text-white"
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
