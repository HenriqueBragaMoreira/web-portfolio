import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";
import { DictionaryType } from "@/models/translate";
import { usePathname, useRouter } from "next/navigation";
import brazilFlag from "@/components/icon/brazilFlag.svg";
import spainFlag from "@/components/icon/spainFlag.svg";
import unitedStateFlag from "@/components/icon/unitedStateFlag.svg";
import { Locale } from "@/i18n-config";
import Image from "next/image";

export function ToggleLanguage({ dictionary }: { dictionary: DictionaryType }) {
  const router = useRouter();

  const changeLocale = (locale: Locale) => {
    router.replace(redirectedPathName(locale));
  };

  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="focus-visible:ring-0" variant="ghost" size="icon">
          <Languages className="size-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex gap-2" onClick={() => changeLocale("pt")}>
          <Image
            src={brazilFlag}
            alt={dictionary.navbar["dropdown-languages"]["alt-images"].brazil}
            width={35}
            height={35}
          />
          {dictionary.navbar["dropdown-languages"].languages.pt}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={() => changeLocale("en")}>
          <Image
            src={unitedStateFlag}
            alt={dictionary.navbar["dropdown-languages"]["alt-images"].eua}
            width={35}
            height={35}
          />
          {dictionary.navbar["dropdown-languages"].languages.en}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2" onClick={() => changeLocale("es")}>
          <Image
            src={spainFlag}
            alt={dictionary.navbar["dropdown-languages"]["alt-images"].spanish}
            width={35}
            height={35}
          />
          {dictionary.navbar["dropdown-languages"].languages.es}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
