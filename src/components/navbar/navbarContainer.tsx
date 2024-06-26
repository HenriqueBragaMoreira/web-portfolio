"use client";
import { Logo } from "../icon/logo";

import { DictionaryType } from "@/models/translate";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";

type NavbarContainerProps = {
  dictionary: DictionaryType;
};

export function NavbarContainer({ dictionary }: NavbarContainerProps) {
  return (
    <div className="bg-background border-b border-[#656D72]/20 flex items-center h-[70px] gap-4 justify-around">
      <div className="flex items-center">
        <Logo />
        <span className="font-bold text-xl">Henrique.</span>
      </div>
      <DesktopNavbar dictionary={dictionary} />
      <MobileNavbar dictionary={dictionary} />
    </div>
  );
}
