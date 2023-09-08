import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const defaultFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`h-[2000px] ${defaultFont.className} bg-[url('../../public/background.png')] relative z-10 bg-cover -mt-4 bg-no-repeat bg-center`}
    >
      <Navbar />
      <Header />
    </main>
  );
}
