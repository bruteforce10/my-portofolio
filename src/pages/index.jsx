import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import NavbarProject from "@/components/navbar-projects";
import MySertificate from "@/components/License";

const defaultFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={`${defaultFont.className}`}>
      <section
        className={`  bg-[url('../../public/background.svg')] relative z-10 bg-cover -mt-4 bg-no-repeat bg-center`}
      >
        <Navbar />
        <Header />
        <About />
      </section>
      <section className="!scroll-smooth">
        <NavbarProject />
        <Projects />
        <WorkExperience />
        <MySertificate />
      </section>
    </main>
  );
}
