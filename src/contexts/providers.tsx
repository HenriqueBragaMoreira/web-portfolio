import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "./globalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </GlobalProvider>
  );
}
