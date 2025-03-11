import { IntroSection } from "./sections/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <IntroSection />

      <section id="about" data-section-name="about" className="h-[50vh]" />
      <section id="work" data-section-name="work" className="h-[50vh]" />
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
