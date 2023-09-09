import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const defaultFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <section
        className={` ${defaultFont.className} bg-[url('../../public/background.png')] relative z-10 bg-cover -mt-4 bg-no-repeat bg-center`}
      >
        <Navbar />
        <Header />
        <About />
      </section>
    </main>
  );
}
