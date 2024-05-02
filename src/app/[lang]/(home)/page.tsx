import { NavbarContainer } from "@/components/navbar/navbarContainer";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/getDictionary";
import { NavbarAnimation } from "./components/animation";
import { FirstContent } from "./components/firstContent";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="h-screen flex flex-col">
      <NavbarAnimation>
        <NavbarContainer dictionary={dictionary} />
      </NavbarAnimation>
      <FirstContent dictionary={dictionary} />
    </div>
  );
}
