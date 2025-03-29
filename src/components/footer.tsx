import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row md:justify-between gap-4 md:gap-0 items-center max-w-[700px] w-full pt-2 pb-4 border-t border-foreground text-[13px] md:text-sm text-secondary">
      <p>
        Desenvolvido por{" "}
        <Link
          href="https://github.com/HenriqueBragaMoreira"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          Henrique Braga
        </Link>
      </p>

      <span className="">© Copyright 2025</span>
    </footer>
  );
}
