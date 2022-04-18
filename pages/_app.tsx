import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fontsource/syncopate";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
