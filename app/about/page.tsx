import Image from "next/image";

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
        title="A dynamic and forward-thinking company dedicated to professional growth"
        description={`${company.overview} ${company.profileIntro}`}
      />
      <section className="container-shell grid gap-8 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <article className="premium-outline card-surface rounded-[1.8rem] p-8">
          <h2 className="text-2xl font-semibold text-primary-deep">Company overview</h2>
          <p className="mt-4 text-base leading-8 text-muted">
            {company.overview} {company.profileIntro}
          </p>
        </article>
        <article className="overflow-hidden rounded-[1.8rem] border border-line bg-white shadow-soft">
          <Image
            src="/profile-assets/pdf-image-06-1303x1333.jpg"
            alt="Professionals meeting and building client relationships"
            width={1303}
            height={1333}
            className="h-72 w-full object-cover"
          />
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-primary-deep">Mission</h2>
            <p className="mt-4 text-base leading-8 text-muted">{company.mission}</p>
            <p className="mt-4 text-base leading-8 text-muted">
              The company is committed to equipping individuals and organizations
              with the tools and expertise necessary to succeed in their
              respective fields.
            </p>
          </div>
        </article>
      </section>
      <section className="section-shell-muted py-20">
        <div className="container-shell">
        <h2 className="text-3xl font-semibold text-primary-deep">Core values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {coreValues.map((value) => (
            <article key={value} className="card-surface rounded-[1.5rem] p-6">
              <h3 className="text-lg font-semibold text-primary-deep">{value}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {value === "Excellence" &&
                  "We strive for excellence in everything we do, ensuring our training programs meet and exceed industry standards."}
                {value === "Innovation" &&
                  "We continuously evolve our training methods to stay ahead of industry trends and deliver cutting-edge solutions."}
                {value === "Integrity" &&
                  "We uphold the highest ethical standards, fostering honesty, transparency, and accountability."}
                {value === "Client-Centric" &&
                  "Our clients are at the heart of the business, and we are dedicated to understanding and exceeding their expectations."}
                {value === "Collaboration" &&
                  "We believe in the power of collaboration, working closely with clients and partners to achieve mutual success."}
              </p>
            </article>
          ))}
        </div>
        </div>
      </section>
      <section className="container-shell py-20">
        <div className="premium-outline rounded-[2rem] bg-primary-deep px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-semibold">
            Excellence and innovation guide every training engagement.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            Mayura Corp combines professional discipline, innovative training
            methods, and client-centered service to deliver learning
            experiences that are relevant, practical, and credible.
          </p>
        </div>
      </section>
    </>
  );
}
