import { TypewriterEffectSmooth } from "@/components/aceternity-ui/typewriter-effect";
import { stackIcons } from "@/components/icon/stacks";
import { DictionaryType } from "@/models/translate";

export function SecondContent({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div className="h-screen bg-foreground/15 py-11" id="second-content">
      <div>
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
      <div className="grid grid-cols-4 gap-12 mt-12">
        {stackIcons.map((item) => (
          <div className="flex flex-col justify-center items-center" key={item.stack_name}>
            <a
              href={item.stack_link}
              target="_blank"
              className="bg-card dark:bg-foreground rounded-full p-3 transition duration-300 ease-in-out hover:scale-[1.2]"
            >
              <item.stack_icon className="size-9" />
            </a>
            <p>{item.stack_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
