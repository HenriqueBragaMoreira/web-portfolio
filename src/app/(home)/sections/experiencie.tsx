import { MapPin } from "lucide-react";

export function ExperiencieSection() {
  const experiences = [
    {
      company: "Grupo Permaneo",
      position: "Desenvolvedor Front-End Pleno",
      location: "São Paulo, SP",
      period: "Jun 2025 - Presente",
      description: [
        "Atuei como desenvolvedor full stack no principal produto da empresa chamado Subido PRO, trazendo o projeto de uma empresa terceirizada para o time interno, aumentando o controle técnico, acelerando a evolução do produto e melhorando significativamente a experiência dos alunos",
        "Atuei também em uma plataforma SaaS com múltiplos agentes de IA especializados chamada FuncionarIA, desenvolvendo interfaces focadas em produtividade, clareza de fluxos e usabilidade para gestores de tráfego",
        "Idealizei e desenvolvi do zero uma CLI interna para geração de projetos baseada em respostas do usuário, padronizando arquiteturas iniciais, reduzindo erros e acelerando a criação de novos projetos, com documentação completa em Fumadocs.",
      ],
    },
    {
      company: "blue",
      position: "Desenvolvedor Front-End Pleno",
      location: "São Paulo, SP",
      period: "Jul 2024 - Jun 2025",
      description: [
        "Desenvolvi o Design System da empresa, criando pacotes independentes para UI e estilos, reduzindo o tempo de desenvolvimento em novos projetos em 35%.",
        "Publiquei pacotes independentes de UI e estilos no npm, garantindo uma consistência visual entre as aplicações e reduzindo o tempo de integração em novos projetos.",
      ],
    },
    {
      company: "Anjun Express",
      position: "Desenvolvedor de Software",
      location: "São Paulo, SP",
      period: "Out 2023 - Jul 2024",
      description: [
        "Liderei o time de front-end no desenvolvimento de um WMS escalável, com interfaces limpas, aumentando a eficiência na gestão de estoques em 40%.",
        "Implementei a integração com APIs RESTful, consumindo dados fornecidos pelos times de back-end, reduzindo o tempo de processamento de requisições em 30%.",
        "Desenvolvi soluções para gerenciar o fluxo de entrada e saída de produtos em grandes galpões, melhorando a precisão do rastreamento de itens em 25%.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      data-section-name="experience"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <h2 className="md:text-xl font-medium leading-6">Experiência</h2>

      <div className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="pl-4 border-l border-foreground flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-0.5">
                <MapPin size={14} />
                <span className="text-[13px] md:text-sm text-secondary">
                  {experience.location}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-base font-medium leading-[19.4px]">
                  {experience.company}
                </h3>

                <span className="text-[13px] md:text-sm text-secondary">
                  {experience.period}
                </span>
              </div>

              <span className="text-[13px] md:text-sm text-secondary">
                {experience.position}
              </span>
            </div>

            <ul className="pl-4 space-y-2 list-disc text-secondary">
              {experience.description.map((description) => (
                <li className="text-sm md:text-base" key={description}>
                  {description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
