"use server";

import { ContactFormEmail } from "@/components/emails/contactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const message = (formData.get("message") as string) || "";

  await resend.emails.send({
    from: "Contato do Portfolio <portfolio@resend.dev>",
    to: ["shenrique40moreira@gmail.com"],
    subject: `Portfolio - Contato de ${name}`,
    react: ContactFormEmail({ email, message, name }),
  });
}
