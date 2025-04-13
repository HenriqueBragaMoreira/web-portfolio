import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="w-full max-w-[700px] pt-24">
      <Link
        className="flex gap-0.5 items-center text-secondary hover:text-primary max-w-fit"
        draggable={false}
        title="Voltar para a pagina inicial"
        href="/"
      >
        <ArrowLeft size={16} />
        Pagina Inicial
      </Link>
    </div>
  );
}
