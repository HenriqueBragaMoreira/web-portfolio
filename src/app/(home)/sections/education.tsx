import { MapPin } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      location: "São Paulo, SP",
      period: "2023 – 2026",
      course: "Bacharelado em Ciência da Computação",
      institution: "Universidade Cidade de São Paulo",
      description:
        "Atualmente cursando Ciência da Computação, onde desenvolvo conhecimentos avançados em estrutura de dados, algoritmos, lógica de programação e pensamento computacional.",
    },
    {
      location: "São Paulo, SP",
      period: "2020 – 2022",
      course: "Ensino Médio com Habilitação em Desenvolvimento de Sistemas",
      institution: "ETEC Parque Belém",
      description:
        "Durante minha formação, desenvolvi habilidades em programação e banco de dados, utilizando tecnologias como HTML, CSS, JavaScript, PHP, Java e MySQL. Construindo projetos práticos voltados para o desenvolvimento web e de software.",
    },
  ];

  return (
    <section
      id="education"
      data-section-name="education"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <h2 className="text-xl font-medium leading-6">Educação</h2>

      <div className="flex flex-col gap-12">
        {education.map((item) => (
          <div
            key={item.institution}
            className="flex flex-col gap-8 pl-4 border-l border-foreground"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-secondary text-sm">
                <div className="flex items-center gap-0.5">
                  <MapPin size={14} />

                  <span>{item.location}</span>
                </div>

                <span>{item.period}</span>
              </div>

              <h3 className="text-primary font-medium leading-[19.2px]">
                {item.course}
              </h3>

              <span className="text-sm text-secondary">{item.institution}</span>
            </div>

            <span className="text-sm text-secondary">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
