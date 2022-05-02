import type { AppProps } from "next/app";
import KProvider from "@/components/Common/KProvider";
import "../styles/globals.css";
import Header from "@/components/Common/Header";
import useCircles from "store/circles";
import CustomToaster from "@/components/Common/CustomToaster";
import CommandBarInvoker from "@/components/Common/CommandBarInvoker";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { isEnabled } = useCircles();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <KProvider>
        <Header />
        <main className="max-w-3xl mx-auto px-8 relative">
          <Component {...pageProps} />
          <CustomToaster />
          {isEnabled && (
            <div className="absolute top-0 left-0 right-0">
              <div className="absolute overflow-visible opacity-20 left-8top-16 -z-10">
                <div className="mix-blend-multiply h-[400px] w-[700px] bg-red-700 rounded-full blur-[128px] circle-1 -z-10" />
              </div>
              <div className="absolute overflow-visible opacity-20 left-10 top-32 -z-10">
                <div className="mix-blend-multiply h-[400px] w-[700px] bg-green-700 rounded-full blur-[128px] circle-2 -z-10" />
              </div>
              <div className="absolute overflow-visible opacity-20 left-12 top-48 -z-10">
                <div className="mix-blend-multiply h-[600px] w-[500px] bg-blue-700 rounded-full blur-[128px] circle-3 -z-10" />
              </div>
            </div>
          )}
        </main>

        <CommandBarInvoker />
      </KProvider>
    </div>
  );
}
