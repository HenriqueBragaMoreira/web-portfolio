export function Input(props: React.ComponentProps<"input">) {
  return (
    <input
      className="bg-input-background text-sm py-[8.75px] px-3 border border-foreground rounded-lg placeholder:text-sm placeholder:text-secondary placeholder:font-normal"
      {...props}
    />
  );
}
