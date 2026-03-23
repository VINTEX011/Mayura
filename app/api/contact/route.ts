import { NextResponse } from "next/server";

import { sendContactSubmissionEmail } from "@/lib/contact/mailer";
import { rateLimitContactSubmission } from "@/lib/contact/rate-limit";
import { extractContactInput, validateContactInput } from "@/lib/contact/validation";
import { getClientIdentifier, isAllowedOrigin } from "@/lib/security/request";

export const runtime = "nodejs";

function jsonResponse(
  body: unknown,
  status: number,
  extraHeaders?: Record<string, string>
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...extraHeaders
    }
  });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse(
      {
        status: "error",
        message: "Unsupported request format."
      },
      415
    );
  }

  const allowedOrigin = await isAllowedOrigin();

  if (!allowedOrigin) {
    return jsonResponse(
      {
        status: "error",
        message: "Unable to process this request."
      },
      403
    );
  }

  const identifier = await getClientIdentifier();
  const limitResult = await rateLimitContactSubmission(identifier);

  if (!limitResult.success) {
    return jsonResponse(
      {
        status: "error",
        message:
          "Too many inquiries were sent from this network. Please try again later."
      },
      429,
      {
        "Retry-After": String(limitResult.retryAfterSeconds)
      }
    );
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse(
      {
        status: "error",
        message: "Invalid request body."
      },
      400
    );
  }

  const input = extractContactInput(payload);
  const validation = validateContactInput(input);

  if (!validation.success || !validation.data) {
    return jsonResponse(
      {
        status: "error",
        message: "Please review the highlighted fields.",
        fieldErrors: validation.fieldErrors
      },
      400
    );
  }

  try {
    await sendContactSubmissionEmail(validation.data);

    return jsonResponse(
      {
        status: "success",
        message:
          "Your inquiry has been received. We will get back to you shortly."
      },
      200
    );
  } catch (error) {
    console.error("Contact form delivery failed", {
      error: error instanceof Error ? error.message : "unknown"
    });

    return jsonResponse(
      {
        status: "error",
        message:
          "We could not send your inquiry right now. Please try again shortly."
      },
      500
    );
  }
}
