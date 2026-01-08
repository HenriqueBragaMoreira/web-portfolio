"use client";

import { useLocale, useTranslations } from "next-intl";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import {
  type ContactFormState,
  sendContactEmail,
} from "@/actions/sendContactEmail";
import { Input } from "./input";
import { Textarea } from "./textarea";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const t = useTranslations("Contact.form");
  const locale = useLocale();
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );

  useEffect(() => {
    if (state.status === "success") {
      toast.success(t("success"));
    } else if (state.status === "invalid") {
      toast.error(t("invalid"));
    } else if (state.status === "error") {
      toast.error(t("error"));
    }
  }, [state, t]);

  // React resets the form after every action; remounting with the submitted
  // values keeps what the visitor typed when sending fails.
  const fields = state.fields;

  return (
    <form
      key={state.submittedAt}
      action={formAction}
      className="flex h-full flex-col gap-5"
    >
      <input type="hidden" name="locale" value={locale} />

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="flex flex-col">
        <span className="sr-only">{t("name")}</span>
        <Input
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder={t("name")}
          defaultValue={fields?.name}
        />
      </label>

      <label className="flex flex-col">
        <span className="sr-only">{t("email")}</span>
        <Input
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder={t("email")}
          defaultValue={fields?.email}
        />
      </label>

      <label className="flex flex-1 flex-col">
        <span className="sr-only">{t("message")}</span>
        <Textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          className="min-h-[180px] flex-1 resize-none"
          placeholder={t("message")}
          defaultValue={fields?.message}
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        aria-busy={isPending}
        className="cursor-pointer rounded-md bg-primary px-4 py-2 font-medium text-background transition-colors duration-300 hover:bg-primary/80 disabled:cursor-progress disabled:bg-primary/60"
      >
        {isPending ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
