import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: buildPageTitle("Social Responsibility"),
  description:
    "Discover how Mayura Corp supports non-profits and underserved communities through accessible training initiatives.",
  path: "/social-responsibility"
});

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Social responsibility"
        title="Committed to giving back to the community through meaningful training support"
        description="Mayura Corp actively participates in social responsibility initiatives that widen access to learning and support underserved communities."
      />
      <section className="container-shell grid gap-6 py-20 md:grid-cols-2">
        <article className="premium-outline card-surface rounded-[1.7rem] p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Community support</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            The company extends its impact beyond commercial engagements by
            supporting initiatives that expand access to high-value training and
            professional development opportunities.
          </p>
        </article>
        <article className="overflow-hidden rounded-[1.7rem] border border-line bg-white shadow-soft">
          <Image
            src="/profile-assets/pdf-image-07-1242x1333.jpg"
            alt="Community-focused outdoor support activity"
            width={1242}
            height={1333}
            className="h-72 w-full object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-primary-deep">
              Discounted training for non-profits
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Discounted training options help non-profit organizations strengthen
              their teams, improve execution, and invest in people development.
            </p>
          </div>
        </article>
        <article className="rounded-[1.7rem] border border-line bg-white p-8 shadow-soft md:col-span-2">
          <h2 className="text-2xl font-semibold text-primary-deep">
            Educational support for underserved communities
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
            Mayura Corp contributes to educational projects in underserved
            communities, helping widen access to practical knowledge and
            developmental opportunities that can shape long-term success.
          </p>
        </article>
      </section>
      <section className="container-shell pb-20">
        <div className="premium-outline rounded-[2rem] bg-primary-deep px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-semibold">A trust-building commitment</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            By investing in communities as well as clients, Mayura Corp
            reinforces its commitment to integrity, collaboration, and
            meaningful long-term impact.
          </p>
        </div>
      </section>
    </>
  );
}
