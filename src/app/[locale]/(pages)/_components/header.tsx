import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("Header");

  return (
    <div className="w-full max-w-[700px] pt-24">
      <Link
        className="flex max-w-fit items-center gap-0.5 text-secondary hover:text-primary"
        draggable={false}
        href="/"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        {t("back")}
      </Link>
    </div>
  );
}
