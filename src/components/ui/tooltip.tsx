"use client";

// biome-ignore lint/performance/noNamespaceImport: Radix primitives are consumed as a namespace
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/cva";

function Tooltip({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root> & {
  delayDuration?: number;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipPrimitive.Provider>
  );
}

function TooltipTrigger(
  props: React.ComponentProps<typeof TooltipPrimitive.Trigger>
) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 8,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-w-[260px] text-pretty rounded-md border border-foreground bg-input-background px-3 py-2 text-secondary text-xs leading-relaxed shadow-[0_6px_16px_-4px_rgb(0_0_0/0.5)]",
          "origin-(--radix-tooltip-content-transform-origin) animate-in fade-in-0 zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-input-background stroke-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipContent, TooltipTrigger };
