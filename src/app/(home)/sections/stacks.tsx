import { simpleViewStacks } from "@/data/stacks";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DialogStackInfo } from "./components/dialogStackInfo";

export function StacksSection() {
  return (
    <section
      id="stacks"
      data-section-name="stacks"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <div className="flex items-center justify-between">
        <h2 className="md:text-xl font-medium leading-6">Stacks</h2>

        <Link
          href="/stacks"
          className="flex gap-0.5 items-center text-sm md:text-base text-secondary hover:text-primary"
        >
          <span>Ver todas</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-8">
        {simpleViewStacks.map((stack) => (
          <DialogStackInfo key={stack.title} stack={stack} />
        ))}
      </div>
    </section>
  );
}
