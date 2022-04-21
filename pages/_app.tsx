import type { AppProps } from "next/app";
import KProvider from "@/components/KProvider";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KProvider>
      <Component {...pageProps} />
    </KProvider>
  );
}
