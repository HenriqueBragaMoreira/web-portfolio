import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Stack } from "@/data/stacks";
import { StackCard } from "./stackCard";

type DialogStackInfoProps = {
  stack: Stack;
};

export function DialogStackInfo({ stack }: DialogStackInfoProps) {
  const t = useTranslations("Stacks");
  const StackIcon = stack.icon;

  return (
    <Dialog>
      <DialogTrigger className="rounded-lg">
        <StackCard stack={stack} />
      </DialogTrigger>

      <DialogContent className="md:max-w-[700px]">
        <DialogHeader className="mb-4 flex flex-row items-center justify-center">
          <div className="flex size-32 items-center justify-center rounded-full bg-white sm:size-36">
            <StackIcon className="size-28 sm:size-32" aria-hidden="true" />
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-2">
          <DialogTitle className="text-2xl sm:text-3xl">
            {stack.title}
          </DialogTitle>

          <DialogDescription className="max-w-xl text-center text-secondary text-sm sm:text-base">
            {t(`items.${stack.id}.description`)}
          </DialogDescription>

          <a
            className="mt-6 rounded-md bg-foreground px-4 py-2 font-medium text-sm transition-colors hover:bg-foreground/70"
            href={stack.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("visit", { name: stack.title })}
          </a>

          <span className="mt-4 select-none text-secondary text-xs">
            {t("closeHint")}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
