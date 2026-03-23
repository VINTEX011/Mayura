import { SectionHeading } from "@/components/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell border-b border-line/80 bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.12),transparent_42%)]" />
      <div className="container-shell py-20 md:py-28">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>
    </section>
  );
}
