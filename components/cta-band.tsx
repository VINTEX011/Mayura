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
      <div className="overflow-hidden rounded-[2rem] bg-primary-deep px-8 py-10 text-white shadow-2xl shadow-primary/20 md:px-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
              Build capability with confidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-8 text-white/78">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={primaryHref}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#b85f05]"
            >
              {primaryLabel}
            </a>
            {secondaryHref && secondaryLabel ? (
              <a
                href={secondaryHref}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
