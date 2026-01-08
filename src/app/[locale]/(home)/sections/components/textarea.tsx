import { cn } from "@/lib/cva";
import { fieldStyles } from "./fieldStyles";

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldStyles, "py-[6.75px]", className)}
      {...props}
    />
  );
}
