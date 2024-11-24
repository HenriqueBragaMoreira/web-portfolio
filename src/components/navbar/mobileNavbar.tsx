import { DictionaryType } from "@/models/translate";
import { handleDownloadCurriculum } from "@/utils/downloadCurriculum";
import { Award, CirclePlus, Download, FolderGit2, Menu, Phone } from "lucide-react";
import { ToggleLanguage } from "../toggleLanguage";
import { ToggleTheme } from "../toggleTheme";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

type MobileNavbarProps = {
  dictionary: DictionaryType;
};

export function MobileNavbar({ dictionary }: MobileNavbarProps) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72">
        <SheetHeader className="flex-row justify-between my-5 gap-2 space-y-0 items-center border-b border-[#656D72]/20">
          <span className="text-xl font-bold">H</span>
          <div>
            <ToggleLanguage dictionary={dictionary} />
            <ToggleTheme dictionary={dictionary} />
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-8">
          <Button className="flex justify-start gap-4 h-12" variant="outline">
            <Award />
            {dictionary.navbar.skills}
          </Button>
          <Button className="flex justify-start gap-4 h-12" variant="outline">
            <FolderGit2 />
            {dictionary.navbar.projects}
          </Button>
          <Button className="flex justify-start gap-4 h-12" variant="outline">
            <Phone />
            {dictionary.navbar.contact}
          </Button>
          <Button className="flex justify-start gap-4 h-12" variant="outline">
            <CirclePlus />
            {dictionary.navbar.more}
          </Button>
        </div>
        <div className="border-t border-[#656D72]/20 my-5" />
        <Button
          onClick={() => handleDownloadCurriculum()}
          className="flex items-center gap-2 w-full h-12"
        >
          <Download size={20} />
          {dictionary.navbar["resume-download-button"]}
        </Button>
      </SheetContent>
    </Sheet>
  );
}
