"use client";
import Link from "next/link";
import { Logo } from "./icon/logo";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import { ToggleTheme } from "./toggleTheme";

export function Navbar() {
  return (
    <div className="py-10 flex items-center h-12 gap-4 justify-around">
      <div className="flex text-foreground items-center">
        <Logo />
        <span className="font-bold text-xl">Henrique.</span>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="gap-14">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Habilidades
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projetos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contatos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Mais +
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-8">
        <ToggleTheme />
        <Button className="p-5 border-foreground" variant="outline">
          Resume
        </Button>
      </div>
    </div>
  );
}
