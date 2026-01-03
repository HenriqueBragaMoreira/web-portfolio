import { AboutSection } from "./sections/about";
import { ContactSection } from "./sections/contact";
import { EducationSection } from "./sections/education";
import { ExperienceSection } from "./sections/experience";
import { IntroSection } from "./sections/intro";
import { StacksSection } from "./sections/stacks";
import { WorkSection } from "./sections/work";

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-20">
        <IntroSection />
        <AboutSection />
      </div>

      <div className="reveal flex w-full justify-center">
        <WorkSection />
      </div>

      <div className="reveal flex w-full justify-center">
        <ExperienceSection />
      </div>

      <div className="reveal flex w-full justify-center">
        <EducationSection />
      </div>

      <div className="reveal flex w-full justify-center">
        <StacksSection />
      </div>

      <div className="reveal flex w-full justify-center">
        <ContactSection />
      </div>
    </>
  );
}
