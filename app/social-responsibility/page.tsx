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
        title="Supporting community growth through accessible training"
        description="Mayura Corp believes professional development should also contribute to broader social progress and educational opportunity."
      />
      <section className="container-shell grid gap-6 py-16 md:grid-cols-2">
        <article className="card-surface rounded-[1.6rem] p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Community support</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            The company extends its impact beyond commercial engagements by
            supporting initiatives that expand access to high-value learning.
          </p>
        </article>
        <article className="rounded-[1.6rem] border border-line bg-white p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">
            Discounted training for non-profits
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Discounted training options help non-profit organizations strengthen
            their teams, improve execution, and invest in people development.
          </p>
        </article>
        <article className="rounded-[1.6rem] border border-line bg-white p-8 md:col-span-2">
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
      <section className="container-shell pb-16">
        <div className="rounded-[2rem] bg-primary px-8 py-10 text-white md:px-12">
          <h2 className="text-3xl font-semibold">A trust-building commitment</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            By investing in communities as well as clients, Mayura Corp reinforces
            its commitment to integrity, collaboration, and meaningful impact.
          </p>
        </div>
      </section>
    </>
  );
}
