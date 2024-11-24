import { DictionaryType } from "@/models/translate";
import Link from "next/link";
import { ToggleLanguage } from "../toggleLanguage";
import { ToggleTheme } from "../toggleTheme";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { CurriculumDialog } from "./curriculumDialog";

type DesktopNavbarProps = {
  dictionary: DictionaryType;
};

export function DesktopNavbar({ dictionary }: DesktopNavbarProps) {
  return (
    <>
      <NavigationMenu className="lg:flex hidden">
        <NavigationMenuList className="gap-14">
          <NavigationMenuItem>
            <Link href="#second-content" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.navbar.skills}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.navbar.projects}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.navbar.contact}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {dictionary.navbar.more}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="lg:flex hidden items-center gap-8">
        <div className="flex gap-2">
          <ToggleLanguage dictionary={dictionary} />
          <ToggleTheme dictionary={dictionary} />
        </div>
        <CurriculumDialog dictionary={dictionary} />
      </div>
    </>
  );
}
