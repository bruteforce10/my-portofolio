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
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Head from "next/head";

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
      <Head>
        <title>Firdi Audi - Frontend Developer</title>
        <meta
          name="description"
          content="Saya adalah seorang Front-End Developer bernama Firdi, dengan fokus pada menciptakan antarmuka pengguna yang menarik dan responsif. Temukan bagaimana saya dapat membantu mewujudkan visi Anda dalam pengembangan front-end yang menarik dan fungsional. Hubungi saya sekarang!"
        />
        <meta property="og:url" content="https://firdiaudi.site" />
        <meta
          property="og:title"
          content="Firdi Audi Putra: Inspiring with Intuitive Front-End Dev Designs"
        />
        <meta property="og:image" content="/header-ogp.png" />
        <meta
          property="og:description"
          content=" I am a freelance frontend developer based in Jakarta, Indonesia..."
        />
      </Head>
      <section
        className={`  bg-[url('../../public/background.webp')] relative z-10 bg-cover -mt-4 bg-no-repeat bg-top `}
      >
        <Navbar />
        <Header />
        <About />
      </section>
      <section>
        <NavbarProject />
        <Projects />
        <WorkExperience />
        <MySertificate />
        <Blog />
        <Contact />
      </section>
    </main>
  );
}
