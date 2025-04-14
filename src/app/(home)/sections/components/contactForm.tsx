"use client";

import { sendEmail } from "@/app/api/resend";
import { useActionState } from "react";
import { toast } from "sonner";
import { Input } from "./input";
import { Textarea } from "./textarea";

export function ContactForm() {
  const [_state, formAction, isPending] = useActionState(
    (_previousState: unknown, formData: FormData) =>
      toast.promise(sendEmail(formData), {
        loading: "Enviando sua mensagem...",
        success: "Email enviado com sucesso!",
        error: "Erro ao enviar email!",
      }),
    null
  );

  return (
    <form action={formAction} className="flex flex-col gap-5 h-full">
      <Input name="name" type="text" required placeholder="Seu nome" />

      <Input
        name="email"
        type="email"
        required
        placeholder="Seu melhor email"
      />

      <Textarea
        name="message"
        required
        className="flex-1 resize-none min-h-[180px]"
        placeholder="Mensagem"
      />

      <button
        disabled={isPending}
        className="py-2 px-4 rounded-md bg-primary text-background cursor-pointer hover:bg-primary/60 transition-colors duration-300"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
