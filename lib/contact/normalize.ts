import type { ContactSubmission } from "@/lib/contact/types";

export function normalizeWhitespace(input: string): string {
  return input.replace(/\s+/g, " ").trim();
}

export function normalizeEmail(input: string): string {
  return normalizeWhitespace(input).toLowerCase();
}

export function sanitizeText(input: string): string {
  return normalizeWhitespace(input).replace(/[\u0000-\u001f\u007f]+/g, "");
}

export function normalizeSubmission(
  input: ContactSubmission
): ContactSubmission {
  return {
    fullName: sanitizeText(input.fullName),
    email: normalizeEmail(input.email),
    organization: sanitizeText(input.organization),
    phone: sanitizeText(input.phone),
    trainingInterest: sanitizeText(input.trainingInterest),
    message: sanitizeText(input.message)
  };
}
