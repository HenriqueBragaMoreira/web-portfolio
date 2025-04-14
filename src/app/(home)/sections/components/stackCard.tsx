import type { Stack } from "@/data/stacks";
import { ArrowUpRight } from "lucide-react";

type StackCardProps = Stack;

export function StackCard({
  title: name,
  icon: StackIcon,
  subtitle: description,
}: StackCardProps) {
  return (
    <div key={name} className="flex items-center gap-3 group cursor-pointer">
      <div className="p-2 rounded-lg border border-foreground group-hover:border-primary/30">
        <div className="flex items-center justify-center bg-white rounded-full size-7">
          <StackIcon className="size-5" />
        </div>
      </div>

      <div className="flex flex-col items-start md:gap-1">
        <div className="flex items-center gap-1">
          <h3 className="text-sm md:text-base font-medium">{name}</h3>

          <ArrowUpRight
            className="text-secondary group-hover:text-primary/80"
            size={16}
          />
        </div>

        <span className="text-[13px] md:text-sm text-secondary">
          {description}
        </span>
      </div>
    </div>
  );
}
