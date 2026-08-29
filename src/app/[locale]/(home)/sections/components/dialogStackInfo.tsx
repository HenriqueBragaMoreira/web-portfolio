import { useTranslations } from "next-intl";
import { Reveal, RevealItem } from "@/components/motion/reveal";
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
        <Reveal
          trigger="mount"
          stagger={0.05}
          delay={0.05}
          className="grid gap-4"
        >
          <DialogHeader className="mb-4 flex flex-row items-center justify-center">
            <RevealItem
              variant="pop"
              className="flex size-32 items-center justify-center rounded-full bg-white sm:size-36"
            >
              <StackIcon className="size-28 sm:size-32" aria-hidden="true" />
            </RevealItem>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center gap-2">
            <RevealItem>
              <DialogTitle className="text-2xl sm:text-3xl">
                {stack.title}
              </DialogTitle>
            </RevealItem>

            <RevealItem>
              <DialogDescription className="max-w-xl text-center text-secondary text-sm sm:text-base">
                {t(`items.${stack.id}.description`)}
              </DialogDescription>
            </RevealItem>

            <RevealItem className="mt-6">
              <a
                className="block rounded-md bg-foreground px-4 py-2 font-medium text-sm transition-colors hover:bg-foreground/70"
                href={stack.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("visit", { name: stack.title })}
              </a>
            </RevealItem>

            <RevealItem variant="fade" className="mt-4">
              <span className="select-none text-secondary text-xs">
                {t("closeHint")}
              </span>
            </RevealItem>
          </div>
        </Reveal>
      </DialogContent>
    </Dialog>
  );
}
