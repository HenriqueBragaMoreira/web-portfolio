import { TypewriterEffectSmooth } from "@/components/aceternity-ui/typewriter-effect";
import { stackIcons } from "@/components/icon/stacks";
import { Marquee } from "@/components/marquee";
import { DictionaryType } from "@/models/translate";

export function SecondContent({ dictionary }: { dictionary: DictionaryType }) {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-foreground/15 py-11 gap-10"
      id="second-content"
    >
      <div className="flex flex-col justify-center items-center">
        <TypewriterEffectSmooth
          className="my-0 space-x-0"
          words={dictionary["second-content"]["title-type-writer"]}
        />
        <TypewriterEffectSmooth
          className="my-0"
          words={dictionary["second-content"]["subtitle-type-writer"]}
          cursorClassName="hidden"
        />
      </div>
      <div className="flex justify-around w-full">
        <div className="grid grid-cols-2 w-[500px] p-4 border-2 rounded-md border-gray-400">
          <Marquee className="max-h-[70vh] my-auto py-4 [--gap:1.5rem]" pauseOnHover>
            {stackIcons.map((item) => (
              <a
                href={item.stack_link}
                key={item.stack_name}
                target="_blank"
                className="bg-card dark:bg-foreground rounded-full p-3 transition duration-300 ease-in-out hover:scale-[1.2]"
              >
                <item.stack_icon className="size-9" />
              </a>
            ))}
          </Marquee>
          <Marquee className="max-h-[70vh] my-auto py-4 [--gap:1.5rem]" pauseOnHover>
            {stackIcons.map((item) => (
              <a
                href={item.stack_link}
                key={item.stack_name}
                target="_blank"
                className="bg-card dark:bg-foreground rounded-full p-3 transition duration-300 ease-in-out hover:scale-[1.2]"
              >
                <item.stack_icon className="size-9" />
              </a>
            ))}
          </Marquee>
        </div>
        <div>
          <div className="bg-[#7E74F1] h-[450px] w-[540px] rounded-2xl transform" />
        </div>
      </div>
    </div>
  );
}
