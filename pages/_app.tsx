import NavigationMenuDemo from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <header className="max-w-[1200px] mx-auto flex items-center justify-center h-20">
     <NavigationMenuDemo/>
    </header>
    <main className="max-w-[400px] md:max-w-[800px] mx-auto p-4">
      <Component {...pageProps} />
    </main>
    </>
  )
}
