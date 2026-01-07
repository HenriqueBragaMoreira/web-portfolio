import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Stack } from "@/data/stacks";

type StackCardProps = {
  stack: Stack;
};

export function StackCard({ stack }: StackCardProps) {
  const t = useTranslations("Stacks.items");
  const StackIcon = stack.icon;

  return (
    <span className="group flex cursor-pointer items-center gap-3 text-left">
      <span className="rounded-lg border border-foreground p-2 group-hover:border-primary/30">
        <span className="flex size-7 items-center justify-center rounded-full bg-white">
          <StackIcon className="size-5" aria-hidden="true" />
        </span>
      </span>

      <span className="flex flex-col items-start md:gap-1">
        <span className="flex items-center gap-1">
          <span className="font-medium text-sm md:text-base">
            {stack.title}
          </span>

          <ArrowUpRight
            aria-hidden="true"
            className="text-secondary group-hover:text-primary/80"
            size={16}
          />
        </span>

        <span className="text-[13px] text-secondary md:text-sm">
          {t(`${stack.id}.subtitle`)}
        </span>
      </span>
    </span>
  );
}
