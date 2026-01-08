"use server";

import { Resend } from "resend";
import { ContactFormEmail } from "@/components/emails/contactFormEmail";
import { site } from "@/data/site";

export type ContactFormStatus = "idle" | "success" | "invalid" | "error";

export interface ContactFormState {
  status: ContactFormStatus;
  submittedAt?: number;
  fields?: { name: string; email: string; message: string };
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, messageMin: 10, messageMax: 5000 };

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactEmail(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const submittedAt = Date.now();

  // Honeypot: real visitors never see this field, bots fill it in.
  if (readField(formData, "company")) {
    return { status: "success", submittedAt };
  }

  const fields = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    message: readField(formData, "message"),
  };

  const isValid =
    fields.name.length > 0 &&
    fields.name.length <= LIMITS.name &&
    fields.email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(fields.email) &&
    fields.message.length >= LIMITS.messageMin &&
    fields.message.length <= LIMITS.messageMax;

  if (!isValid) {
    return { status: "invalid", submittedAt, fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return { status: "error", submittedAt, fields };
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: "Contato do Portfolio <portfolio@resend.dev>",
    to: [site.email],
    replyTo: fields.email,
    subject: `Portfolio - Contato de ${fields.name}`,
    react: ContactFormEmail({
      ...fields,
      locale: readField(formData, "locale"),
    }),
  });

  if (error) {
    console.error("[contact] Resend failed", error);
    return { status: "error", submittedAt, fields };
  }

  return { status: "success", submittedAt };
}
