import { TypewriterEffectSmooth } from "@/components/aceternity-ui/typewriter-effect";
import { DictionaryType } from "@/models/translate";

export function SecondContent({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div className="h-screen bg-foreground/15 py-11" id="second-content">
      <TypewriterEffectSmooth
        className="flex justify-center my-0 space-x-0"
        words={dictionary["second-content"]["title-type-writer"]}
      />
      <TypewriterEffectSmooth
        className="flex justify-center my-0"
        words={dictionary["second-content"]["subtitle-type-writer"]}
        cursorClassName="hidden"
      />
    </div>
  );
}
