import type { AppProps } from "next/app";
import KProvider from "@/components/Common/KProvider";
import "../styles/globals.css";
import Header from "@/components/Common/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KProvider>
      <Header />
      <Component {...pageProps} />
    </KProvider>
  );
}
