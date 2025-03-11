import { CopyEmailButton } from "@/components/copyEmailButton";
import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { Download, MapPin } from "lucide-react";

export function IntroSection() {
  return (
    <section
      id="intro"
      data-section-name="intro"
      className="flex flex-col gap-8 pt-24 justify-center max-w-[700px] w-full"
    >
      <div className="flex justify-center w-full">
        <div className="flex gap-4 items-end w-full">
          <div className="flex flex-1 gap-4">
            <img
              src="https://i.postimg.cc/1tkrtByt/Henrique-Braga1.jpg"
              alt=""
              className="rounded-lg size-[122px] object-cover"
            />

            <div className="flex flex-col flex-1 gap-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-[26px] font-medium leading-[31.2px]">
                  Henrique Braga
                </h1>

                <h2 className="text-secondary text-xl leading-6 font-medium">
                  Software Engineer
                </h2>

                <div className="flex items-center gap-0.5 text-secondary">
                  <MapPin size={14} />

                  <p className="text-sm">São Paulo, BR</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="bg-green-500 size-1.5 rounded-full" />

                <p className="text-secondary text-sm">Available for work</p>
              </div>
            </div>
          </div>

          <a
            href="https://drive.google.com/uc?export=download&id=1b4q2_kELe_5pIgDLew7xpCeisYY8C0LE"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-0.5 pb-0.5 relative"
          >
            <div className="flex items-center gap-1">
              <Download size={16} />
              <p>Download CV</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-foreground pt-2">
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

              <span>Github</span>
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

              <span>LinkedIn</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
