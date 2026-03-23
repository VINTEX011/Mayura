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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(217,119,6,0.08),transparent_22%),radial-gradient(circle_at_88%_18%,rgba(30,58,138,0.12),transparent_26%)]" />
        <div className="container-shell grid gap-14 py-18 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.34em] text-accent">
              Executive training partner in Nairobi
            </p>
            <h1 className="mt-6 max-w-[12ch] text-5xl font-semibold leading-none text-primary-deep md:text-7xl">
              Professional training that inspires excellence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {company.overview} {company.profileIntro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary">
                Request Training
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore Services
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-4 border-t border-line pt-6 md:grid-cols-3">
              {[
                "Customized training programs",
                "Flexible in-person, virtual, and hybrid delivery",
                "Industry experts and certification pathways"
              ].map((item) => (
                <p key={item} className="text-sm font-medium leading-7 text-primary-deep">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="premium-outline card-surface relative overflow-hidden rounded-[2rem] p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent via-orange-300 to-primary" />
            <div className="absolute -right-12 top-12 h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -left-10 bottom-20 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Welcome to Mayura Corp
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-surface-muted">
              <Image
                src="/profile-assets/pdf-image-01-994x618.jpg"
                alt="Professionals in a corporate training setting"
                width={994}
                height={618}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] bg-primary-deep p-6 text-white">
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-white/62">
                  Established
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">{company.founded}</p>
              </div>
              <div className="rounded-[1.4rem] bg-accent-soft p-6 text-primary-deep">
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-primary">
                  Delivery
                </p>
                <p className="mt-3 text-xl font-semibold">In-person, virtual, hybrid</p>
              </div>
              <div className="rounded-[1.4rem] border border-line bg-white p-6 md:col-span-2">
                <p className="font-sans text-xs uppercase tracking-[0.28em] text-primary">
                  Trusted focus
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  High-quality professional training built for individuals, SMEs, large corporations, parastatals, and top management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="Company overview"
          title="A forward-thinking company dedicated to growth and capability"
          description={`${company.overview} ${company.profileIntro}`}
        />
      </section>

      <section className="section-shell-muted py-20">
        <div className="container-shell">
        <SectionHeading
          eyebrow="Key offerings"
          title="Comprehensive training solutions shaped around client needs"
          centered
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item, index) => (
            <article key={item.title} className="premium-outline card-surface rounded-[1.7rem] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-deep text-sm font-semibold text-white">
                {`0${index + 1}`}
              </div>
              <h3 className="text-xl font-semibold text-primary-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="Why choose us"
          title="Professional standards, innovative methods, and dependable execution"
          description="The company profile emphasizes excellence, innovation, integrity, client-centric service, and collaboration. Those principles shape how every training engagement is designed and delivered."
        />
        <div className="grid gap-8 md:grid-cols-3">
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
              <h2 className="text-xl font-semibold text-primary-deep">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell-muted py-20">
        <div className="container-shell">
        <SectionHeading
          eyebrow="Delivery formats"
          title="Structured delivery formats for diverse operational realities"
          description="Training is delivered in the format best suited to audience needs, logistics, and learning preferences."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deliveryFormats.map((item) => (
            <article key={item.title} className="card-surface rounded-[1.7rem] p-7">
              <h3 className="text-xl font-semibold text-primary-deep">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="Client segments"
          title="Serving a diverse clientele with confidence and relevance"
          description="The company profile highlights a client base spanning individual professionals, SMEs, large corporations, parastatals, and top management."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {clientSegments.map((segment) => (
            <article key={segment.name} className="premium-outline rounded-[1.6rem] border border-line bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-primary-deep">{segment.name}</h3>
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
