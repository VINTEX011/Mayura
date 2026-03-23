import { PageHero } from "@/components/page-hero";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";
import { clientSegments } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: buildPageTitle("Clientele"),
  description:
    "See how Mayura Corp serves individuals, SMEs, large corporations, parastatals, and top management teams.",
  path: "/clientele"
});

export default function ClientelePage() {
  return (
    <>
      <PageHero
        eyebrow="Clientele"
        title="Training solutions for professionals, institutions, and leadership teams"
        description="Mayura Corp works across multiple client segments, adapting delivery, depth, and facilitation style to suit each audience."
      />
      <section className="container-shell py-16">
        <div className="grid gap-6">
          {clientSegments.map((segment) => (
            <article key={segment.name} className="card-surface rounded-[1.8rem] p-8">
              <h2 className="text-2xl font-semibold text-primary-deep">{segment.name}</h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
                {segment.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
