import Image from "next/image";

import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import {
  clientSegments,
  company,
  deliveryFormats,
  offerings
} from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line/70 bg-white">
        <div className="container-shell grid gap-14 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Premium corporate training in Nairobi
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-tight text-primary-deep md:text-6xl">
              Training programs that turn ambition into measurable capability.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {company.name} equips individuals, teams, and institutions with
              practical knowledge, strategic insight, and flexible delivery
              models built for today&apos;s business landscape.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:-translate-y-0.5 hover:bg-[#b85f05]"
              >
                Request Training
              </a>
              <a
                href="/services"
                className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-primary hover:border-primary hover:bg-primary hover:text-white"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="card-surface relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-orange-300 to-primary" />
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Trusted learning partner
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-line">
              <Image
                src="/placeholder-training.svg"
                alt="Abstract illustration representing professional training delivery"
                width={1200}
                height={720}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="mt-8 grid gap-5">
              <div className="rounded-[1.4rem] bg-primary p-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                  Founded
                </p>
                <p className="mt-3 text-3xl font-semibold">{company.founded}</p>
              </div>
              <div className="rounded-[1.4rem] bg-accent-soft p-6 text-primary-deep">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Delivery modes
                </p>
                <p className="mt-3 text-2xl font-semibold">In-person, virtual, hybrid</p>
              </div>
              <div className="rounded-[1.4rem] border border-line bg-white p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-primary">
                  Community focus
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  Discounted training support for non-profit organizations and
                  underserved educational communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-18">
        <SectionHeading
          eyebrow="Company overview"
          title="Forward-thinking training for modern organizations"
          description={`${company.overview} Established in ${company.founded}, the company delivers high-quality professional training programs tailored to evolving client needs.`}
        />
      </section>

      <section className="container-shell py-10">
        <SectionHeading
          eyebrow="Key offerings"
          title="Built for credibility, adaptability, and impact"
          centered
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item) => (
            <article key={item.title} className="card-surface rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold text-primary-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-18">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Professional rigor",
              body: "Clear program design, disciplined facilitation, and reliable execution that reflect a premium corporate standard."
            },
            {
              title: "Contextual relevance",
              body: "Training shaped around organizational priorities, sector dynamics, and the realities participants face at work."
            },
            {
              title: "Practical outcomes",
              body: "Learning experiences designed to support confident decision-making, stronger performance, and sustainable growth."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-primary-deep">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-18">
        <SectionHeading
          eyebrow="Delivery formats"
          title="Flexible training formats for different operational realities"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deliveryFormats.map((item) => (
            <article key={item.title} className="card-surface rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold text-primary-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-18">
        <SectionHeading
          eyebrow="Client segments"
          title="Serving professionals, institutions, and leadership teams"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {clientSegments.map((segment) => (
            <article key={segment.name} className="rounded-[1.6rem] border border-line bg-white p-6">
              <h3 className="text-lg font-semibold text-primary-deep">{segment.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{segment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-18">
        <div className="rounded-[2rem] border border-line bg-accent-soft px-8 py-10 md:px-12">
          <SectionHeading
            eyebrow="Social responsibility"
            title="Training that strengthens communities as well as organizations"
            description="Mayura Corp supports non-profit organizations through discounted access to training and contributes to educational projects in underserved communities."
          />
        </div>
      </section>

      <CtaBand
        title="Start a conversation about your next training program"
        description="Whether you need executive workshops, team capability building, or tailored development pathways, Mayura Corp is ready to help you plan the right engagement."
        secondaryHref="/about"
        secondaryLabel="Learn About Mayura Corp"
      />
    </>
  );
}
