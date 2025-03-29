import { FadeIn } from "@/components/motion/fadeIn";
import { AboutSection } from "./sections/about";
import { BlogSection } from "./sections/blog";
import { ContactSection } from "./sections/contact";
import { EducationSection } from "./sections/education";
import { ExperiencieSection } from "./sections/experiencie";
import { IntroSection } from "./sections/intro";
import { StackSection } from "./sections/stack";
import { WorkSection } from "./sections/work";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20">
        <FadeIn>
          <IntroSection />
        </FadeIn>

        <FadeIn>
          <AboutSection />
        </FadeIn>
      </div>

      <FadeIn className="flex items-center justify-center w-full">
        <WorkSection />
      </FadeIn>

      <FadeIn>
        <ExperiencieSection />
      </FadeIn>

      <FadeIn>
        <EducationSection />
      </FadeIn>

      {/* <section data-section-name="my certifications" /> */}

      <FadeIn className="w-full max-w-[700px]">
        <StackSection />
      </FadeIn>

      <FadeIn>
        <BlogSection />
      </FadeIn>

      <FadeIn className="max-w-[700px] w-full">
        <ContactSection />
      </FadeIn>
    </>
  );
}
