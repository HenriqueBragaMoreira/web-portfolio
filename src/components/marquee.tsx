import { cn } from "@/utils/cn";

export interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  children: React.JSX.Element[];
}

export function Marquee({
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  className,
  children,
  ...props
}: MarqueeProps) {
  if (!children) return null;

  return (
    <div
      role="marquee"
      className={cn(
        "group flex gap-[--gap] motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-scroll",
        "[--duration:20s] [--gap:1rem]",
        "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
        vertical ? "flex-col overflow-hidden" : "overflow-x-hidden ",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-[--gap] motion-reduce:animate-none motion-reduce:[&>*]:snap-start",
          vertical ? "flex-col animate-marquee-vertical" : "animate-marquee-horizontal",
          pauseOnHover && "group-hover:animate-pause",
          reverse && "animate-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex items-center gap-[--gap] motion-reduce:hidden motion-reduce:animate-none",
          vertical ? "flex-col animate-marquee-vertical" : "animate-marquee-horizontal",
          pauseOnHover && "group-hover:animate-pause",
          reverse && "animate-reverse"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
