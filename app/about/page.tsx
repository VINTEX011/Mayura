import { PageHero } from "@/components/page-hero";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";
import { company, coreValues } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: buildPageTitle("About"),
  description:
    "Learn about Mayura Corp, its mission, core values, and commitment to excellence in professional training.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mayura Corp"
        title="A modern training company focused on growth, rigor, and trust"
        description={`${company.overview} The company partners with clients to strengthen personal and professional capability through relevant, high-quality learning.`}
      />
      <section className="container-shell grid gap-8 py-16 md:grid-cols-2">
        <article className="card-surface rounded-[1.6rem] p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Company overview</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            Established in {company.founded}, Mayura Corp is dedicated to
            delivering training that helps individuals and organizations thrive
            in a competitive business environment. Each engagement is designed
            to reflect client priorities, operational realities, and the need
            for credible outcomes.
          </p>
        </article>
        <article className="rounded-[1.6rem] border border-line bg-white p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Mission</h2>
          <p className="mt-4 text-base leading-8 text-muted">{company.mission}</p>
        </article>
      </section>
      <section className="container-shell py-8">
        <h2 className="text-3xl font-semibold text-primary-deep">Core values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {coreValues.map((value) => (
            <article key={value} className="card-surface rounded-[1.4rem] p-6">
              <h3 className="text-lg font-semibold text-primary-deep">{value}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {value === "Excellence" &&
                  "We hold our programs, facilitation, and client experience to a consistently high standard."}
                {value === "Innovation" &&
                  "We keep our training methods and curriculum responsive to changing industry expectations."}
                {value === "Integrity" &&
                  "We work with professionalism, transparency, and dependable follow-through."}
                {value === "Client-Centric" &&
                  "We shape our engagements around the priorities, context, and goals of each client."}
                {value === "Collaboration" &&
                  "We believe learning is strongest when it is participatory, practical, and aligned across teams."}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-16">
        <div className="rounded-[2rem] bg-primary px-8 py-10 text-white md:px-12">
          <h2 className="text-3xl font-semibold">
            Excellence and innovation guide every training engagement.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            Mayura Corp combines disciplined program design with fresh thinking
            so clients receive training that feels current, relevant, and ready
            to support meaningful progress.
          </p>
        </div>
      </section>
    </>
  );
}
