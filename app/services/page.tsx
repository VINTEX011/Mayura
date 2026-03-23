import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";
import { deliveryFormats, offerings } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: buildPageTitle("Services"),
  description:
    "Explore Mayura Corp's customized training programs, delivery models, and certification-focused offerings.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional training services tailored to your goals"
        description="Mayura Corp designs and delivers learning programs that help organizations build capability, strengthen leadership, and support measurable performance."
      />
      <section className="container-shell py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((service) => (
            <article key={service.title} className="card-surface rounded-[1.6rem] p-7">
              <h2 className="text-2xl font-semibold text-primary-deep">{service.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Programs aligned to client context and workforce priorities.",
            "Facilitators who blend subject expertise with practical application.",
            "Professional delivery built to support confidence, retention, and real-world use."
          ].map((benefit) => (
            <article key={benefit} className="rounded-[1.6rem] border border-line bg-white p-6">
              <h2 className="text-xl font-semibold text-primary-deep">Benefit</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{benefit}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-16">
        <h2 className="text-3xl font-semibold text-primary-deep">Delivery models</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {deliveryFormats.map((format) => (
            <article key={format.title} className="card-surface rounded-[1.6rem] p-6">
              <h3 className="text-xl font-semibold text-primary-deep">{format.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{format.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell py-8">
        <div className="rounded-[2rem] border border-line bg-accent-soft px-8 py-10 md:px-12">
          <h2 className="text-3xl font-semibold text-primary-deep">Certification pathways</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            Certification-oriented programs give participants a structured path
            to demonstrate knowledge, reinforce progress, and signal commitment
            to continued professional development.
          </p>
        </div>
      </section>
      <CtaBand
        title="Discuss the right format for your team"
        description="Share your objectives and preferred delivery model, and we will help shape a training approach that suits your people and timeline."
      />
    </>
  );
}
