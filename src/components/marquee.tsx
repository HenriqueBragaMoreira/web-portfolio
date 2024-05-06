import { cn } from "@/utils/cn";

export interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  children: React.JSX.Element[];
}

export function Marquee({
  pauseOnHover = false,
  reverse = false,
  className,
  children,
  ...props
}: MarqueeProps) {
  if (!children) return null;

  return (
    <div
      role="marquee"
      className={cn(
        "group flex flex-col gap-[--gap] overflow-hidden motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-scroll",
        "[--duration:20s] [--gap:1rem]",
        "[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col animate-marquee items-center gap-[--gap] motion-reduce:animate-none motion-reduce:[&>*]:snap-start",
          pauseOnHover && "group-hover:[animation-play-state:_paused]",
          reverse && "animate-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex flex-col animate-marquee items-center gap-[--gap] motion-reduce:hidden motion-reduce:animate-none",
          pauseOnHover && "group-hover:[animation-play-state:_paused]",
          reverse && "animate-reverse"
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
