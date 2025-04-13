import { DialogStackInfo } from "@/app/(home)/sections/components/dialogStackInfo";
import { stacks } from "@/data/stacks";

export default function StacksPage() {
  return (
    <div className="flex flex-col gap-8 justify-center max-w-[700px] w-full">
      <h1 className="text-2xl font-medium">Stacks</h1>

      {stacks.map((item) => (
        <div key={item.title} className="flex flex-col gap-6">
          <div>
            <h2 className="text-lg">{item.title}</h2>
            <div className="bg-foreground h-px" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {item.stacks.map((stack) => (
              <DialogStackInfo key={stack.title} stack={stack} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
