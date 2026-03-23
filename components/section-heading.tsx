type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold text-primary-deep md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[64ch] text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
