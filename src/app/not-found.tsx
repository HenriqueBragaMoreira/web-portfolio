import { CopyEmailButton } from "@/components/copyEmailButton";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-[700px] h-screen flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl sm:text-[26px] font-bold">
            404 - Página não encontrada
          </h1>
          <p className="text-xs sm:text-sm text-secondary">
            A página que procura não existe ou foi movida.
          </p>
        </div>

        <Link
          href="/"
          className="group flex flex-col gap-0.5 pb-0.5 relative max-w-fit"
        >
          <div className="flex items-center gap-1">
            <House size={16} />
            <p className="text-sm md:text-base">Voltar para a página inicial</p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
          <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between border-t border-foreground pt-2 w-full">
        <CopyEmailButton />

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/HenriqueBragaMoreira"
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-4 items-center fill-secondary text-secondary hover:fill-primary hover:text-primary font-medium"
          >
            <div className="flex items-center gap-1">
              <Github className="size-4" />

              <span className="text-sm md:text-base">Github</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/h-braga/"
            target="_blank"
            rel="noreferrer noopener"
            className="flex gap-4 items-center fill-secondary text-secondary hover:fill-primary hover:text-primary font-medium"
          >
            <div className="flex items-center gap-0.5 ">
              <Linkedin className="size-[18px]" />

              <span className="text-sm md:text-base">LinkedIn</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
