import { cn } from "@/lib/utils";

export type LoaderProps = React.ComponentPropsWithoutRef<"div">;

export function Loader({ className, ...props }: LoaderProps) {
  return <div className={cn("loader", className)} {...props} />;
}
