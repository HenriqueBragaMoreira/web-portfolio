import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-start items-center px-48">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-4 border border-[#D9D9D9]" />
              <h1 className="text-xs font-medium text-[#656D72] tracking-[0.469rem]">
                PRAZER MEU NOME É
              </h1>
            </div>
            <div>
              <h2 className="font-bold text-5xl">
                <span>Henrique </span>
                <span className="text-[#7E74F1]">Braga.</span>
              </h2>
            </div>
            <div className="flex flex-col mt-4 gap-10">
              <span>
                Desenvolvedor front-end criativo com mais de 3 anos de experiência. Proficiente em
                JavaScript, Typescript e React. Apaixonado por UI/UX.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
