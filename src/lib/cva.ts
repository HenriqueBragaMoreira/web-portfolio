import { cx as baseCx } from "cva";
import { type ClassValue, defineConfig } from "cva/config";
import { twMerge } from "tailwind-merge";

export const { cva, cx: cn } = defineConfig({
  cx: (...inputs: ClassValue[]) => twMerge(baseCx(...inputs)),
});

export type { VariantProps } from "cva/config";
