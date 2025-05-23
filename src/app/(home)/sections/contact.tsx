import { CopyEmailButton } from "@/components/copyEmailButton";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { Phone } from "lucide-react";
import { ContactForm } from "./components/contactForm";
import { LocalTime } from "./components/localTime";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section-name="contact"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <h2 className="md:text-xl font-medium leading-6">Vamos conversar</h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-8 w-full">
        <div className="flex flex-col gap-8 pl-4 border-l border-foreground">
          <h3 className="text-sm md:text-base text-secondary font-medium">
            Horário para mim: <LocalTime />
          </h3>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm md:text-base font-medium">Email:</h3>

            <div className="min-w-[241.4px]">
              <CopyEmailButton />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm md:text-base font-medium">Telefone:</h3>

            <a
              href="tel:+5511942998620"
              className="flex gap-1 items-center text-secondary group"
            >
              <Phone className="group-hover:text-primary" size={14} />

              <span className="text-sm md:text-base group-hover:text-primary">
                +55 (11) 94299-8620
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Sociais:</h3>

            <a
              href="https://www.instagram.com/hen1_braga/"
              className="flex gap-1 items-center ml-0.5 group"
            >
              <Instagram className="size-3.5 md:size-4 fill-secondary group-hover:fill-primary" />

              <span className="text-secondary group-hover:text-primary text-sm md:text-base">
                Instagram
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/h-braga/"
              className="flex gap-1 items-center group"
            >
              <Linkedin className="size-4.5 md:size-5 fill-secondary group-hover:fill-primary" />

              <span className="text-secondary group-hover:text-primary text-sm md:text-base">
                Linkedin
              </span>
            </a>

            <a
              href="https://github.com/HenriqueBragaMoreira"
              className="flex gap-1 items-center text-secondary hover:text-primary ml-0.5"
            >
              <Github className="size-3.5 md:size-4" />

              <span className="text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-sm md:text-base font-medium leading-4 md:leading-6">
            Entre em contato
          </h3>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
