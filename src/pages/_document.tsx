import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "react-hot-toast";

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head />
      <body>
        <Toaster position="top-center" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
