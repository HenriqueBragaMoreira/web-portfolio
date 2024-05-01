import { Navbar } from "@/components/navbar";
import { FirstContent } from "./components/firstContent";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/getDictionary";
import { NavbarAnimation } from "./components/animation";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary: any = await getDictionary(lang);

  return (
    <div className="h-screen flex flex-col">
      <NavbarAnimation>
        <Navbar dictionary={dictionary} />
      </NavbarAnimation>
      <FirstContent dictionary={dictionary} />
    </div>
  );
}
