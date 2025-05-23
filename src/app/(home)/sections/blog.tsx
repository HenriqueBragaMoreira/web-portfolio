import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogSection() {
  const articles = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <section
      id="blog"
      data-section-name="blog"
      className="flex flex-col gap-8 justify-center max-w-[700px] w-full"
    >
      <div className="flex items-center justify-between">
        <h2 className="md:text-xl font-medium leading-6">
          Artigos e publicações
        </h2>

        <Link
          href="/blog"
          className="flex gap-0.5 items-center text-secondary hover:text-primary"
        >
          <span className="text-sm md:text-base">Ver todos os postagens</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {articles.map((article) => (
          <a
            href="/blog"
            key={article}
            className="flex flex-col md:flex-row min-h-[453px] sm:min-h-[626px] md:min-h-[228px] gap-4 group"
          >
            <div className="relative flex-1">
              <Image
                src="https://framerusercontent.com/images/Z6A1UUL2IYYsOynJLfYEMuXTk.png?scale-down-to=1024"
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                alt="Blog 1"
                fill
              />
            </div>

            <div className="flex flex-col gap-5 md:flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-sm md:text-base font-medium leading-5">
                  The Future of Web Design: Trends to Watch in 2024
                </h3>

                <span className="text-[13px] md:text-sm text-secondary">
                  Web Design Journal, May 15, 2024
                </span>
              </div>

              <span className="text-sm md:text-base text-secondary leading-5 md:leading-[22px]">
                An in-depth analysis of upcoming trends in web design, focusing
                on emerging technologies and design philosophies that are set to
                shape the future of the industry.
              </span>

              <div className="flex justify-end items-end">
                <div className="group flex flex-col gap-0.5 pb-0.5 relative">
                  <div className="flex items-center gap-1">
                    <p className="text-sm md:text-base">Read article</p>
                    <ArrowUpRight size={16} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-px bg-foreground" />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 ease-in-out group-hover:w-full" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
