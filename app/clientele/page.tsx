import Image from "next/image";

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
        title="Serving professionals, institutions, and executive leadership with confidence"
        description="Mayura Corp serves a diverse clientele, adapting training depth, format, and focus to the needs of each audience."
        imageSrc="/profile-assets/pdf-image-05-1746x474.jpg"
        imageAlt="Corporate clients collaborating around strategy documents"
        highlights={[
          "Individuals",
          "SMEs and large corporations",
          "Parastatals and top management"
        ]}
      />
      <section className="container-shell py-20">
        <div className="mb-8 overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
          <Image
            src="/profile-assets/pdf-image-05-1746x474.jpg"
            alt="Corporate clients in discussion around documents and strategy"
            width={1746}
            height={474}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="grid gap-6">
          {clientSegments.map((segment, index) => (
            <article key={segment.name} className="premium-outline card-surface rounded-[1.9rem] p-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                Client segment {index + 1}
              </p>
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
