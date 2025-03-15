import { AboutSection } from "./sections/about";
import { IntroSection } from "./sections/intro";
import { WorkSection } from "./sections/work";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px] items-center">
      <div className="flex flex-col gap-20">
        <IntroSection />

        <AboutSection />
      </div>

      <WorkSection />

      <section
        id="experience"
        data-section-name="experience"
        className="h-[50vh]"
      />
      <section
        id="education"
        data-section-name="education"
        className="h-[50vh]"
      />
      <section data-section-name="my certifications" className="h-[50vh]" />
      <section data-section-name="stack" className="h-[50vh]" />
      <section id="blog" data-section-name="blog" className="h-[50vh]" />
      <section id="contact" data-section-name="contact" className="h-[50vh]" />
    </main>
  );
}
