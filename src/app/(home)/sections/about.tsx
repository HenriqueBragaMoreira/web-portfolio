export function AboutSection() {
  return (
    <section
      id="about"
      data-section-name="about"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <h2 className="text-xl font-medium leading-6">Sobre mim</h2>

      <div className="flex flex-col gap-5 text-secondary">
        <p className="leading-[22.4px]">
          Olá, sou Henrique Braga, um Desenvolvedor de Software com 5 anos de
          experiência na criação de soluções digitais eficientes e intuitivas.
        </p>

        <p className="leading-[22.4px]">
          Minha jornada na área de tecnologia começou com a curiosidade sobre o
          funcionamento dos sistemas e a vontade de construir algo impactante.
          Ao longo dos anos, aperfeiçoei minhas habilidades em desenvolvimento
          front-end, arquitetura de software e otimização da experiência do
          usuário, sempre focado em criar aplicações performáticas e acessíveis.
        </p>
      </div>
    </section>
  );
}
