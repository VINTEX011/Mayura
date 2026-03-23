import { company } from "@/lib/site-config";

import type { ContactSubmission } from "@/lib/contact/types";

type MailProvider = "log";

type ContactEmailPayload = {
  subject: string;
  text: string;
  replyTo: string;
};

function getMailProvider(): MailProvider {
  const provider = process.env.MAIL_PROVIDER ?? "log";

  return provider === "log" ? provider : "log";
}

async function sendEmail(payload: ContactEmailPayload): Promise<void> {
  const provider = getMailProvider();

  if (provider === "log") {
    console.info("Contact form delivery", payload);
  }
}

export async function sendContactSubmissionEmail(
  submission: ContactSubmission
): Promise<void> {
  const text = [
    `Training inquiry for ${company.name}`,
    "",
    `Name: ${submission.fullName}`,
    `Email: ${submission.email}`,
    `Organization: ${submission.organization}`,
    `Phone: ${submission.phone}`,
    `Training interest: ${submission.trainingInterest}`,
    "",
    "Message:",
    submission.message
  ].join("\n");

  await sendEmail({
    subject: `New training inquiry from ${submission.organization}`,
    text,
    replyTo: submission.email
  });
}
