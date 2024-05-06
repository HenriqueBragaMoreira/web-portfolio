import { DictionaryType } from "@/models/translate";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { MainContainerAnimation, ImageContainerAnimation } from "./animation";

export function FirstContent({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 flex-1 w-full items-center lg:justify-between justify-around lg:px-48 px-10">
      <MainContainerAnimation>
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-4 border border-[#D9D9D9]" />
          <h1 className="text-xs font-medium text-[#656D72] tracking-[0.469rem]">
            {dictionary["first-content"]["presentation-message"]}
          </h1>
        </div>

        <div>
          <h2 className="font-bold text-5xl">
            <span>Henrique </span>
            <span className="text-[#7E74F1]">Braga.</span>
          </h2>
        </div>
        <div className="flex flex-col mt-4 gap-10">
          <span>{dictionary["first-content"]["introduction-text"]}</span>
          <div className="flex gap-8">
            <a
              className="transition duration-300 ease-in-out hover:scale-[1.2]"
              href="https://github.com/HenriqueBragaMoreira"
              title={dictionary["first-content"]["link-names"].github}
              target="_blank"
            >
              <Github />
            </a>
            <a
              className="transition duration-300 ease-in-out hover:scale-[1.2]"
              href="https://www.linkedin.com/in/h-braga/"
              title={dictionary["first-content"]["link-names"].linkedin}
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="transition duration-300 ease-in-out hover:scale-[1.2] "
              href="https://www.instagram.com/hen1_braga/"
              title={dictionary["first-content"]["link-names"].instagram}
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="transition duration-300 ease-in-out hover:scale-[1.2]"
              href="https://twitter.com/braginha_hen1"
              title={dictionary["first-content"]["link-names"].twitter}
              target="_blank"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </MainContainerAnimation>
      <ImageContainerAnimation>
        <div className="bg-[#EAE6FE] lg:h-96 lg:w-[340px] h-72 w-[244px] absolute rounded-2xl z-50" />
        <div className="bg-[#7E74F1] lg:h-96 lg:w-[340px] h-72 w-[244px] rounded-2xl transform -rotate-[19.1deg]" />
      </ImageContainerAnimation>
    </div>
  );
}
