import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "./globalContext";

export function Providers({ children }: WithChildren) {
  return (
    <GlobalProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </GlobalProvider>
  );
}
