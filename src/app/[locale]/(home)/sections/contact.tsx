import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { CopyEmailButton } from "@/components/copyEmailButton";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { site } from "@/data/site";
import { ContactForm } from "./components/contactForm";
import { LocalTime } from "./components/localTime";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="flex w-full max-w-[700px] flex-col justify-center gap-8"
    >
      <h2 className="font-medium leading-6 md:text-xl">{t("title")}</h2>

      <div className="flex w-full flex-col gap-12 md:flex-row md:gap-8">
        <div className="flex flex-col gap-8 border-foreground border-l pl-4">
          <p className="font-medium text-secondary text-sm md:text-base">
            {t("localTime")} <LocalTime />
          </p>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-sm md:text-base">{t("email")}</h3>

            <div className="min-w-[241.4px]">
              <CopyEmailButton />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-sm md:text-base">{t("phone")}</h3>

            <a
              href={site.phone.href}
              className="group flex items-center gap-1 text-secondary"
            >
              <Phone
                className="group-hover:text-primary"
                size={14}
                aria-hidden="true"
              />

              <span className="text-sm group-hover:text-primary md:text-base">
                {site.phone.label}
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-sm md:text-base">{t("socials")}</h3>

            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-0.5 flex items-center gap-1"
            >
              <Instagram className="size-3.5 fill-secondary group-hover:fill-primary md:size-4" />

              <span className="text-secondary text-sm group-hover:text-primary md:text-base">
                Instagram
              </span>
            </a>

            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1"
            >
              <Linkedin className="size-4.5 fill-secondary group-hover:fill-primary md:size-5" />

              <span className="text-secondary text-sm group-hover:text-primary md:text-base">
                LinkedIn
              </span>
            </a>

            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-0.5 flex items-center gap-1 text-secondary hover:text-primary"
            >
              <Github className="size-3.5 md:size-4" />

              <span className="text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4">
          <h3 className="font-medium text-sm leading-4 md:text-base md:leading-6">
            {t("formTitle")}
          </h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
