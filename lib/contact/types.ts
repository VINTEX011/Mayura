export type ContactFormInput = {
  fullName: string;
  email: string;
  organization: string;
  phone: string;
  trainingInterest: string;
  message: string;
  website?: string;
};

export type ContactSubmission = Omit<ContactFormInput, "website">;

export type ContactFieldErrors = Partial<Record<keyof ContactSubmission, string>>;

export type ContactFormState =
  | { status: "idle"; message?: undefined; fieldErrors?: undefined }
  | { status: "success"; message: string; fieldErrors?: undefined }
  | { status: "error"; message: string; fieldErrors?: ContactFieldErrors };
