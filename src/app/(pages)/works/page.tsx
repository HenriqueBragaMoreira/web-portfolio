import { HoverCardProject } from "@/components/hoverCardProject";

export default function WorksPage() {
  const projects = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col gap-8 justify-center max-w-[700px] w-full">
      <h1 className="text-2xl font-medium">Projetos</h1>

      <div className="grid grid-cols-1 gap-3">
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
    </div>
  );
}
