import { ArrowUpRight } from "lucide-react";
import { HoverCardProject } from "./components/hoverCardProject";

export function WorkSection() {
  const projects = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <section
      id="work"
      data-section-name="work"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <div className="flex justify-between items-center">
        <h2 className="md:text-xl font-medium leading-6">
          Alguns dos meus projetos
        </h2>

        <a
          href="/work"
          className="flex gap-0.5 items-center text-secondary hover:text-primary"
        >
          <span className="text-sm md:text-base">Ver todos</span>
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3">
        {projects.map((item) => (
          <HoverCardProject
            key={item}
            title="Brandify"
            subtitle="Agency Website"
            imageUrl="https://framerusercontent.com/images/IrXZd6cF2VvDiix0jfGazJSD9ug.jpg"
            href={`/work/${item}`}
          />
        ))}
      </div>
    </section>
  );
}
