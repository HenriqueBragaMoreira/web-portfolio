import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { Stack } from "@/data/stacks";
import Link from "next/link";
import { StackCard } from "./stackCard";

type DialogStackInfoProps = {
  stack: Stack;
};

export function DialogStackInfo({ stack }: DialogStackInfoProps) {
  const StackIcon = stack.icon;

  return (
    <Dialog>
      <DialogTrigger>
        <StackCard {...stack} />
      </DialogTrigger>
      <DialogContent className="md:max-w-[700px]">
        <DialogHeader className="flex flex-row items-center justify-center mb-4">
          <div className="flex items-center justify-center bg-white rounded-full sm:size-36 size-32">
            <StackIcon className="sm:size-32 size-28" />
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-2">
          <DialogTitle className="sm:text-3xl text-2xl">
            {stack.title}
          </DialogTitle>
          <DialogDescription className="max-w-xl text-secondary text-center sm:text-base text-sm">
            {stack.description}
          </DialogDescription>

          <Link
            className="mt-6 text-sm font-medium bg-foreground px-4 py-2 rounded-md"
            href={stack.stackLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar {stack.title}
          </Link>

          <span className="text-xs text-secondary mt-4 select-none">
            Clique fora para fechar
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
