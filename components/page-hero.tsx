import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  highlights?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  highlights = []
}: PageHeroProps) {
  return (
    <section className="section-shell border-b border-line/80 bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.12),transparent_42%)]" />
      <div className="container-shell py-16 md:py-20">
        <div className="premium-outline overflow-hidden rounded-[2.2rem] border border-line bg-white shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="px-8 py-10 md:px-10 md:py-12">
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
              />
              {highlights.length > 0 ? (
                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item} className="rounded-[1.1rem] border border-line bg-surface-muted px-4 py-4">
                      <p className="text-sm leading-7 text-primary-deep">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="relative min-h-[320px] bg-primary-deep">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(30,58,138,0.24),transparent_26%)]" />
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover opacity-88 mix-blend-screen"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep via-primary-deep/55 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-5 text-white backdrop-blur-sm">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
                  Mayura Corp
                </p>
                <p className="mt-3 text-base leading-8 text-white/78">
                  Premium professional training for individuals, SMEs, corporations, parastatals, and top management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
