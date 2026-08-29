import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("Header");

  return (
    <Reveal
      trigger="mount"
      variant="fade"
      className="w-full max-w-[700px] pt-24"
    >
      <Link
        className="group flex max-w-fit items-center gap-0.5 text-secondary transition-colors hover:text-primary"
        draggable={false}
        href="/"
      >
        <ArrowLeft
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
        />
        {t("back")}
      </Link>
    </Reveal>
  );
}
