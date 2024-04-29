import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-start items-center px-48">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-4 border border-[#D9D9D9]" />
              <h1 className="font-medium text-[#656D72] tracking-[0.469rem]">PRAZER MEU NOME É</h1>
            </div>
          </div>
          <h1>Image</h1>
        </div>
      </div>
    </div>
  );
}
