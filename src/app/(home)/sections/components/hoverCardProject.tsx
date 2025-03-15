import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface HoverCardProjectProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

export function HoverCardProject({
  title,
  subtitle,
  imageUrl,
  href,
}: HoverCardProjectProps) {
  return (
    <a
      href={href}
      className="group flex flex-col border border-foreground rounded-lg cursor-pointer"
    >
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-start border-t border-foreground p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">{title}</h3>

          <span className="text-sm text-secondary">{subtitle}</span>
        </div>

        <ArrowRight
          className="text-secondary transition-all duration-300 group-hover:text-primary group-hover:-rotate-45"
          size={18}
          strokeWidth={1.5}
        />
      </div>
    </a>
  );
}
