import { CopyEmailButton } from "@/components/copyEmailButton";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { Phone } from "lucide-react";
import { Input } from "./components/input";
import { LocalTime } from "./components/localTime";
import { Textarea } from "./components/textarea";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-section-name="contact"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <h2 className="text-xl font-medium leading-6">Vamos conversar</h2>

      <div className="flex gap-8">
        <div className="flex flex-col gap-8 pl-4 border-l border-foreground">
          <h3 className="text-secondary font-medium">
            Horário para mim: <LocalTime />
          </h3>

          <div className="flex flex-col gap-4">
            <h3>Email:</h3>

            <div className="min-w-[241.4px]">
              <CopyEmailButton />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Telefone:</h3>

            <a
              href="tel:+5511942998620"
              className="flex gap-1 items-center text-secondary group"
            >
              <Phone className="group-hover:text-primary" size={14} />

              <span className="group-hover:text-primary">
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
              <Instagram className="size-4 fill-secondary group-hover:fill-primary" />

              <span className="text-secondary group-hover:text-primary">
                Instagram
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/h-braga/"
              className="flex gap-1 items-center group"
            >
              <Linkedin className="size-[20px] fill-secondary group-hover:fill-primary" />

              <span className="text-secondary group-hover:text-primary">
                Linkedin
              </span>
            </a>

            <a
              href="https://github.com/HenriqueBragaMoreira"
              className="flex gap-1 items-center text-secondary hover:text-primary ml-0.5"
            >
              <Github className="size-4" />

              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-medium leading-6">Entre em contato</h3>

          <div className="flex flex-col gap-5 h-full">
            <Input type="text" placeholder="Your name" />

            <Input type="email" placeholder="Your Email address" />

            <Textarea
              className="flex-1 resize-none min-h-[180px]"
              placeholder="Mensagem"
            />

            <button
              className="py-2 px-4 rounded-md bg-primary text-background cursor-pointer hover:bg-primary/60 transition-colors duration-300"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
