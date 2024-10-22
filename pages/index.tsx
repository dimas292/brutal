
import Cards from "@/components/Cards";
import Carousels from "@/components/Carousels";
import localFont from "next/font/local";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Carousels />
      <h2 className="p-4 text-md">POPULAR</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cards/>
        <Cards/>
        <Cards/>

      </div>

    </div>
  )
}
