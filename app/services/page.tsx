import Image from "next/image";

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
        title="Comprehensive training services tailored to your unique requirements"
        description="Mayura Corp delivers high-quality professional training programs designed to meet evolving client needs across industries and leadership levels."
        imageSrc="/profile-assets/pdf-image-04-1600x436.jpg"
        imageAlt="Facilitator leading a professional training session"
        highlights={[
          "Customized training programs",
          "Cutting-edge curriculum",
          "Industry-recognized certification"
        ]}
      />
      <section className="container-shell py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((service, index) => (
            <article key={service.title} className="premium-outline card-surface rounded-[1.7rem] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-sm font-semibold text-primary-deep">
                {`0${index + 1}`}
              </div>
              <h2 className="text-2xl font-semibold text-primary-deep">{service.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-shell pb-4">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
          <Image
            src="/profile-assets/pdf-image-04-1600x436.jpg"
            alt="Facilitator leading a professional training session"
            width={1600}
            height={436}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>
      <section className="section-shell-muted py-20">
        <div className="container-shell">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Training designed around the specific needs of individuals and organizations.",
            "Curriculum informed by current industry trends, technologies, and best practices.",
            "Experienced trainers who bring real-world insight and practical knowledge."
          ].map((benefit) => (
            <article key={benefit} className="rounded-[1.6rem] border border-line bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-primary-deep">Why train with us</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{benefit}</p>
            </article>
          ))}
        </div>
        </div>
      </section>
      <section className="container-shell py-20">
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
        <div className="premium-outline rounded-[2rem] border border-line bg-accent-soft px-8 py-12 md:px-12">
          <h2 className="text-3xl font-semibold text-primary-deep">Certification pathways</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
            Mayura Corp offers industry-recognized certification programs that
            validate the skills and competencies gained through training.
          </p>
        </div>
      </section>
      <CtaBand
        title="Discuss the right training format for your organization"
        description="Share your priorities, audience, and preferred delivery model, and we will help shape a professional engagement that reflects your goals."
      />
    </>
  );
}
