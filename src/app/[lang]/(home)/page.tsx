import { Navbar } from "@/components/navbar";
import { FirstContent } from "./components/firstContent";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <FirstContent />
    </div>
  );
}
