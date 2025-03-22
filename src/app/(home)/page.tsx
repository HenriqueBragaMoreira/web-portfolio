import { AboutSection } from "./sections/about";
import { EducationSection } from "./sections/education";
import { ExperiencieSection } from "./sections/experiencie";
import { IntroSection } from "./sections/intro";
import { StackSection } from "./sections/stack";
import { WorkSection } from "./sections/work";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px] items-center">
      <div className="flex flex-col gap-20">
        <IntroSection />

        <AboutSection />
      </div>

      <WorkSection />

      <ExperiencieSection />

      <EducationSection />

      {/* <section data-section-name="my certifications" /> */}

      <StackSection />

      <section id="blog" data-section-name="blog" className="h-[50vh]" />
      <section id="contact" data-section-name="contact" className="h-[50vh]" />
    </main>
  );
}
