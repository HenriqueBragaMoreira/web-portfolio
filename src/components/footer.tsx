import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-between items-center max-w-[700px] w-full pt-2 pb-4 border-t border-foreground text-sm text-secondary">
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

      <span>© Copyright 2025</span>
    </footer>
  );
}
