"use client";

import { useState } from "react";

import { contactFieldLimits } from "@/lib/contact/constants";
import type { ContactFieldErrors, ContactFormState } from "@/lib/contact/types";

const initialState: ContactFormState = { status: "idle" };

type ContactFormValues = {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  trainingInterest: string;
  message: string;
  website: string;
};

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  organization: "",
  phone: "",
  trainingInterest: "",
  message: "",
  website: ""
};

function validateClient(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  if (!values.organization.trim()) errors.organization = "Enter your organization.";
  if (!values.phone.trim()) errors.phone = "Enter your phone number.";
  if (!values.trainingInterest.trim()) {
    errors.trainingInterest = "Enter your training interest.";
  }
  if (!values.message.trim()) errors.message = "Enter a brief message.";

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<ContactFormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = validateClient(values);

    if (Object.keys(fieldErrors).length > 0) {
      setState({
        status: "error",
        message: "Please review the highlighted fields.",
        fieldErrors
      });
      return;
    }

    setSubmitting(true);
    setState(initialState);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = (await response.json()) as ContactFormState;

      if (!response.ok) {
        setState(result);
        return;
      }

      setState(result);
      setValues(initialValues);
    } catch {
      setState({
        status: "error",
        message:
          "We could not send your inquiry right now. Please try again shortly."
      });
    } finally {
      setSubmitting(false);
    }
  }

  function getError(field: keyof ContactFieldErrors): string | undefined {
    return state.status === "error" ? state.fieldErrors?.[field] : undefined;
  }

  return (
    <form
      className="card-surface rounded-[1.75rem] p-6 md:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Full name"
          name="fullName"
          value={values.fullName}
          maxLength={contactFieldLimits.fullName}
          error={getError("fullName")}
          onChange={(value) => setValues((current) => ({ ...current, fullName: value }))}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          maxLength={contactFieldLimits.email}
          error={getError("email")}
          onChange={(value) => setValues((current) => ({ ...current, email: value }))}
        />
        <Field
          label="Organization"
          name="organization"
          value={values.organization}
          maxLength={contactFieldLimits.organization}
          error={getError("organization")}
          onChange={(value) =>
            setValues((current) => ({ ...current, organization: value }))
          }
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          maxLength={contactFieldLimits.phone}
          error={getError("phone")}
          onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
        />
      </div>
      <div className="mt-5">
        <Field
          label="Training interest"
          name="trainingInterest"
          value={values.trainingInterest}
          maxLength={contactFieldLimits.trainingInterest}
          error={getError("trainingInterest")}
          onChange={(value) =>
            setValues((current) => ({ ...current, trainingInterest: value }))
          }
        />
      </div>
      <div className="mt-5">
        <label className="block text-sm font-medium text-primary-deep" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={contactFieldLimits.message}
          value={values.message}
          aria-invalid={Boolean(getError("message"))}
          aria-describedby={getError("message") ? "message-error" : undefined}
          className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted/60"
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
        />
        {getError("message") ? (
          <p id="message-error" className="mt-2 text-sm text-error">
            {getError("message")}
          </p>
        ) : null}
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) =>
            setValues((current) => ({ ...current, website: event.target.value }))
          }
        />
      </div>
      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending inquiry..." : "Send inquiry"}
        </button>
        {state.status !== "idle" ? (
          <p
            className={`text-sm ${state.status === "success" ? "text-success" : "text-error"}`}
            role="status"
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  maxLength?: number;
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  maxLength
}: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-primary-deep" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-foreground shadow-sm outline-none placeholder:text-muted/60"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
