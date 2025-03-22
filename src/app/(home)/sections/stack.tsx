import { NestIcon } from "@/components/icons/stacks/nest";
import { NextjsIcon } from "@/components/icons/stacks/nextjs";
import { NodeIcon } from "@/components/icons/stacks/node";
import { ReactIcon } from "@/components/icons/stacks/react";
import { TailwindIcon } from "@/components/icons/stacks/tailwindcss";
import { VitestIcon } from "@/components/icons/stacks/vitest";
import { cn } from "@/lib/cva";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Stack {
  name: string;
  icon: React.ElementType;
  description: string;
  className?: string;
}

export function StackSection() {
  const stacks: Stack[] = [
    {
      name: "Next.js",
      icon: NextjsIcon,
      description: "Framework full-stack para web.",
    },
    {
      name: "React",
      icon: ReactIcon,
      description: "Biblioteca para construção de interfaces.",
    },
    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      description: "Framework CSS repleto de recursos.",
    },
    {
      name: "Vitest",
      icon: VitestIcon,
      description: "Framework de testes.",
    },
    {
      name: "NodeJS",
      icon: NodeIcon,
      description: "Ambiente de execução JavaScript.",
    },
    {
      name: "NestJS",
      icon: NestIcon,
      description: "Framework progressivo para Node.js.",
    },
  ];

  return (
    <section
      id="stack"
      data-section-name="stack"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium leading-6">Stack</h2>

        <Link
          href="/stack"
          className="flex gap-0.5 items-center text-secondary hover:text-primary"
        >
          <span>Ver todas</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {stacks.slice(0, 6).map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-2 rounded-lg border border-foreground group-hover:border-primary/30">
              <div
                className={cn(
                  "flex items-center justify-center bg-white rounded-full size-7",
                  item.className
                )}
              >
                <item.icon className="size-5" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-medium">{item.name}</h3>

                <ArrowUpRight
                  className="text-secondary group-hover:text-primary/80"
                  size={16}
                />
              </div>

              <span className="text-sm text-secondary">{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
