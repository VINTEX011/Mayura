import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
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
      <section className="section-shell border-b border-line/80 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(217,119,6,0.12),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(30,58,138,0.14),transparent_24%)]" />
        <div className="container-shell py-10 md:py-14">
          <div className="premium-outline overflow-hidden rounded-[2.4rem] bg-primary-deep shadow-[0_30px_100px_rgba(15,23,42,0.24)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative px-8 py-12 text-white md:px-12 md:py-16">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-accent/12 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-orange-200">
                  Welcome to Mayura Corp
                </p>
                <h1 className="mt-6 max-w-[11ch] text-5xl font-semibold leading-none text-white md:text-7xl">
                  Professional training designed to inspire excellence.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                  {company.overview} {company.profileIntro}
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <ButtonLink href="/contact" variant="primary">
                    Request Training
                  </ButtonLink>
                  <ButtonLink
                    href="/services"
                    variant="outline"
                    className="border-white/18 bg-transparent text-white hover:border-white hover:bg-white/10"
                  >
                    Explore Services
                  </ButtonLink>
                </div>
                <div className="mt-10 grid max-w-2xl gap-3 md:grid-cols-3">
                  {[
                    "Customized programs aligned to client needs",
                    "Flexible delivery across in-person, virtual, and hybrid formats",
                    "Industry experts and certification pathways"
                  ].map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/12 bg-white/6 px-4 py-4">
                      <p className="text-sm leading-7 text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-0 bg-white/4 p-4 md:grid-cols-[1.1fr_0.9fr] md:p-5">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
                  <Image
                    src="/profile-assets/pdf-image-01-994x618.jpg"
                    alt="Professionals in a corporate training setting"
                    width={994}
                    height={618}
                    className="h-full min-h-[320px] w-full object-cover"
                    priority
                  />
                </div>
                <div className="grid gap-4 p-4 md:p-0 md:pl-4">
                  <div className="rounded-[1.5rem] bg-white px-6 py-6 text-primary-deep shadow-soft">
                    <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary">
                      Established
                    </p>
                    <p className="mt-3 text-3xl font-semibold">{company.founded}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      A forward-thinking training company serving evolving professional needs.
                    </p>
                  </div>
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                    <Image
                      src="/profile-assets/pdf-image-04-1600x436.jpg"
                      alt="Facilitator leading a professional training session"
                      width={1600}
                      height={436}
                      className="h-full min-h-[220px] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Company overview"
            title="A forward-thinking company dedicated to growth and capability"
            description={`${company.overview} ${company.profileIntro}`}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["High-quality delivery", "Programs tailored to evolving client needs and business realities."],
              ["Corporate relevance", "Built for professional growth, leadership strength, and organizational impact."],
              ["Trusted flexibility", "Delivered in formats that fit teams, timeframes, and operational context."]
            ].map(([title, body]) => (
              <article key={title} className="rounded-[1.4rem] border border-line bg-white p-5 shadow-soft">
                <h3 className="text-lg font-semibold text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-muted py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Key offerings"
            title="Comprehensive training solutions shaped around client needs"
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {offerings.map((item, index) => (
              <article key={item.title} className="premium-outline card-surface group rounded-[1.7rem] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-deep text-sm font-semibold text-white">
                    {`0${index + 1}`}
                  </div>
                  <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-accent">
                    Key offering
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-primary-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/20 via-accent/25 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[2rem] bg-primary-deep px-8 py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.16)]">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-orange-200">
              Why choose us
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Professional standards with modern delivery and client-centered service.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/76">
              The company profile emphasizes excellence, innovation, integrity,
              client-centric service, and collaboration. Those principles shape
              how every engagement is designed and delivered.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Professional rigor",
                body: "Training programs are designed to meet and exceed industry standards while maintaining strong structure, clarity, and measurable value."
              },
              {
                title: "Innovative learning design",
                body: "Methods and curriculum continue to evolve so clients benefit from current industry trends, practical relevance, and modern delivery."
              },
              {
                title: "Client-centered partnership",
                body: "Mayura Corp works closely with clients and partners to understand context, exceed expectations, and support mutual success."
              }
            ].map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-line bg-white p-7 shadow-soft">
                <div className="h-1.5 w-12 rounded-full bg-accent" />
                <h2 className="mt-5 text-xl font-semibold text-primary-deep">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell-muted py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Delivery formats"
            title="Structured delivery formats for diverse operational realities"
            description="Training is delivered in the format best suited to audience needs, logistics, and learning preferences."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {deliveryFormats.map((item, index) => (
              <article key={item.title} className="card-surface rounded-[1.7rem] p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Format {index + 1}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-primary-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Client segments"
            title="Serving a diverse clientele with confidence and relevance"
            description="The company profile highlights a client base spanning individual professionals, SMEs, large corporations, parastatals, and top management."
          />
          <div className="rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-primary-deep shadow-soft">
            Trusted by professionals, institutions, and leadership teams
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {clientSegments.map((segment, index) => (
            <article key={segment.name} className="premium-outline rounded-[1.7rem] border border-line bg-white p-6 shadow-soft">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Segment 0{index + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-primary-deep">{segment.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{segment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell-muted py-20">
        <div className="container-shell">
        <div className="premium-outline rounded-[2rem] border border-line bg-accent-soft px-8 py-12 md:px-12">
          <SectionHeading
            eyebrow="Social responsibility"
            title="Giving back to the community through practical learning support"
            description="Mayura Corp actively participates in social responsibility initiatives by providing discounted training programs for non-profit organizations and supporting educational projects in underserved communities."
          />
        </div>
        </div>
      </section>

      <CtaBand
        title="Plan a training engagement that reflects your organization’s goals"
        description="From customized programs to certification-focused learning, Mayura Corp helps clients design training that is relevant, practical, and professionally delivered."
        secondaryHref="/about"
        secondaryLabel="Learn About Mayura Corp"
      />
    </>
  );
}
