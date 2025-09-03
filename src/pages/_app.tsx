import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Toaster
    position="top-center"
  />
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
  );
}
