import { cn } from "@/lib/cva";
import { fieldStyles } from "./fieldStyles";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input className={cn(fieldStyles, "py-[8.75px]", className)} {...props} />
  );
}
