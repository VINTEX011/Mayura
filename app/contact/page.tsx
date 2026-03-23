import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, buildPageTitle } from "@/lib/metadata";
import { company } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: buildPageTitle("Contact"),
  description:
    "Contact Mayura Corp to request a training program, discuss delivery formats, or make an inquiry.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation about your training requirements"
        description="Share your goals, audience, and preferred delivery format, and Mayura Corp will respond with a suitable next step."
        imageSrc="/profile-assets/pdf-image-02-916x1000.jpg"
        imageAlt="Professional working at a laptop in a calm office setting"
        highlights={[
          "Training inquiries",
          "Flexible delivery options",
          "Professional response"
        ]}
      />
      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <article className="premium-outline card-surface rounded-[1.7rem] p-7">
            <h2 className="text-2xl font-semibold text-primary-deep">Office address</h2>
            <address className="mt-4 not-italic text-base leading-8 text-muted">
              {company.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </article>
          <article className="overflow-hidden rounded-[1.7rem] border border-line bg-white shadow-soft">
            <Image
              src="/profile-assets/pdf-image-02-916x1000.jpg"
              alt="Professional working at a laptop in a calm office setting"
              width={916}
              height={1000}
              className="h-60 w-full object-cover"
            />
            <div className="p-7">
              <h2 className="text-2xl font-semibold text-primary-deep">Contact details</h2>
              <div className="mt-4 space-y-3 text-base text-muted">
                <a className="block hover:text-primary" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a className="block hover:text-primary" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </div>
            </div>
          </article>
          <article className="rounded-[1.7rem] border border-dashed border-line bg-surface-muted p-7">
            <h2 className="text-2xl font-semibold text-primary-deep">Map placeholder</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Third-party map embeds are intentionally disabled by default to
              reduce external dependencies and tighten the site&apos;s default CSP.
            </p>
          </article>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
