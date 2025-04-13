import { Header } from "./_components/header";

export default function PagesLayout({ children }: _WithChildren) {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <Header />
      {children}
    </div>
  );
}
