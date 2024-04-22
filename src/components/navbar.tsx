"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "./icon/logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

export function Navbar() {
  const { setTheme } = useTheme();

  return (
    <div className="py-10 flex items-center h-12 gap-4 justify-around">
      <div className="flex text-foreground items-center">
        <Logo />
        <span className="font-bold text-xl">Henrique.</span>
      </div>
      <div className="flex gap-14">
        <a className="hover:font-semibold hover:underline">Habilidades</a>
        <a className="hover:font-semibold hover:underline">Projetos</a>
        <a className="hover:font-semibold hover:underline">Contatos</a>
        <a className="hover:font-semibold hover:underline">Mais +</a>
      </div>
      <div className="flex items-center gap-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost">Resume</Button>
      </div>
    </div>
  );
}
