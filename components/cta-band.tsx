import { ButtonLink } from "@/components/button-link";

type CtaBandProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Request Training",
  secondaryHref,
  secondaryLabel
}: CtaBandProps) {
  return (
    <section className="container-shell py-16">
      <div className="premium-outline overflow-hidden rounded-[2.2rem] bg-primary-deep px-8 py-12 text-white shadow-2xl shadow-primary/20 md:px-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-orange-200">
              Build capability with confidence
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-8 text-white/74">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href={primaryHref} variant="primary">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink
                href={secondaryHref}
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
