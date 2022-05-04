import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import KProvider from "@/components/Common/KProvider";
import "../styles/globals.css";
import Header from "@/components/Common/Header";
import useCircles from "store/circles";
import CustomToaster from "@/components/Common/CustomToaster";
import CommandBarInvoker from "@/components/Common/CommandBarInvoker";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isEnabled } = useCircles();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <KProvider>
        <NextNProgress
          color="#A0A0A0"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ showSpinner: false }}
        />
        <main id="main" className="relative mx-auto max-w-3xl px-8">
          <Component {...pageProps} />
          <CustomToaster />
          {isEnabled && (
            <div className="absolute top-0 left-0 right-0">
              <div className="left-8top-16 absolute -z-10 overflow-visible opacity-20">
                <div className="circle-1 -z-10 h-[400px] w-[700px] rounded-full bg-red-700 mix-blend-multiply blur-[128px]" />
              </div>
              <div className="absolute left-10 top-32 -z-10 overflow-visible opacity-20">
                <div className="circle-2 -z-10 h-[400px] w-[700px] rounded-full bg-green-700 mix-blend-multiply blur-[128px]" />
              </div>
              <div className="absolute left-12 top-48 -z-10 overflow-visible opacity-20">
                <div className="circle-3 -z-10 h-[600px] w-[500px] rounded-full bg-blue-700 mix-blend-multiply blur-[128px]" />
              </div>
            </div>
          )}
        </main>

        <CommandBarInvoker />
      </KProvider>
    </div>
  );
}
