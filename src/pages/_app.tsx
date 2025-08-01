import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Toaster
    position="top-center"
  />
  <ThemeProvider attribute="class" defaultTheme="light" >
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  );
}
