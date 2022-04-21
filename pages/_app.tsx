import type { AppProps } from "next/app";
import KProvider from "@/components/KProvider";
import "../styles/globals.css";
import Header from "@/components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KProvider>
      <Header />
      <Component {...pageProps} />
    </KProvider>
  );
}
