import type { AppProps } from "next/app";
import KProvider from "@/components/Common/KProvider";
import "../styles/globals.css";
import Header from "@/components/Common/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <KProvider>
      <Header />
      <div className="max-w-3xl mx-auto px-8">
        <div className="fixed top-0 left-0 right-0">
          <div className="fixed overflow-visible opacity-20 left-8 md:left-32 lg:left-48 top-16 -z-10">
            <div className="mix-blend-multiply h-[400px] w-[700px] bg-red-700 rounded-full blur-[128px] circle-1 -z-10" />
          </div>
          <div className="fixed overflow-visible opacity-20 left-10 md:left-48 lg:left-72 top-32 -z-10">
            <div className="mix-blend-multiply h-[400px] w-[700px] bg-green-700 rounded-full blur-[128px] circle-2 -z-10" />
          </div>
          <div className="fixed overflow-visible opacity-20 left-12 md:left-72 lg:left-96 top-64 -z-10">
            <div className="mix-blend-multiply h-[600px] w-[500px] bg-blue-700 rounded-full blur-[128px] circle-3 -z-10" />
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    </KProvider>
  );
}
