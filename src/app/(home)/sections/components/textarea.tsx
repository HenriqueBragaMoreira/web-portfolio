import { cn } from "@/lib/cva";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "bg-input-background text-sm py-[6.75px] px-3 border border-foreground rounded-lg placeholder:text-sm placeholder:text-secondary placeholder:font-normal",
        className
      )}
      {...props}
    />
  );
}
