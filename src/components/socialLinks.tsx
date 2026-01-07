import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { site } from "@/data/site";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href={site.socials.github}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-1 fill-secondary font-medium text-secondary hover:fill-primary hover:text-primary"
      >
        <Github className="size-4" />
        <span className="text-sm md:text-base">GitHub</span>
      </a>

      <a
        href={site.socials.linkedin}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-0.5 fill-secondary font-medium text-secondary hover:fill-primary hover:text-primary"
      >
        <Linkedin className="size-[18px]" />
        <span className="text-sm md:text-base">LinkedIn</span>
      </a>
    </div>
  );
}
