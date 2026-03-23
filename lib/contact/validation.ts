import { contactFieldLimits } from "@/lib/contact/constants";
import { normalizeSubmission } from "@/lib/contact/normalize";
import type {
  ContactFieldErrors,
  ContactFormInput,
  ContactSubmission
} from "@/lib/contact/types";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-\s]{7,40}$/;

function requireString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function extractContactInput(payload: unknown): ContactFormInput {
  const record = typeof payload === "object" && payload ? payload : {};

  return {
    fullName: requireString((record as Record<string, unknown>).fullName),
    email: requireString((record as Record<string, unknown>).email),
    organization: requireString((record as Record<string, unknown>).organization),
    phone: requireString((record as Record<string, unknown>).phone),
    trainingInterest: requireString(
      (record as Record<string, unknown>).trainingInterest
    ),
    message: requireString((record as Record<string, unknown>).message),
    website: requireString((record as Record<string, unknown>).website)
  };
}

export function validateContactInput(input: ContactFormInput): {
  success: boolean;
  data?: ContactSubmission;
  fieldErrors?: ContactFieldErrors;
} {
  const fieldErrors: ContactFieldErrors = {};

  if (input.website && input.website.trim().length > 0) {
    return {
      success: false,
      fieldErrors: {
        fullName: "Unable to process this inquiry."
      }
    };
  }

  const normalized = normalizeSubmission({
    fullName: input.fullName,
    email: input.email,
    organization: input.organization,
    phone: input.phone,
    trainingInterest: input.trainingInterest,
    message: input.message
  });

  if (!normalized.fullName || normalized.fullName.length > contactFieldLimits.fullName) {
    fieldErrors.fullName = "Enter your full name.";
  }

  if (
    !normalized.email ||
    normalized.email.length > contactFieldLimits.email ||
    !emailPattern.test(normalized.email)
  ) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (
    !normalized.organization ||
    normalized.organization.length > contactFieldLimits.organization
  ) {
    fieldErrors.organization = "Enter your organization.";
  }

  if (
    !normalized.phone ||
    normalized.phone.length > contactFieldLimits.phone ||
    !phonePattern.test(normalized.phone)
  ) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (
    !normalized.trainingInterest ||
    normalized.trainingInterest.length > contactFieldLimits.trainingInterest
  ) {
    fieldErrors.trainingInterest = "Tell us what training you need.";
  }

  if (!normalized.message || normalized.message.length > contactFieldLimits.message) {
    fieldErrors.message = "Share a brief outline of your training needs.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  return {
    success: true,
    data: normalized
  };
}
