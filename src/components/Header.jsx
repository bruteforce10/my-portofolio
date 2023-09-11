import { motion } from "framer-motion";
import React, { useContext } from "react";
import Image from "next/image";
import rocket from "../../public/icon/rocket.svg";
import strip from "../../public/icon/strip.svg";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";
import SubHeader from "./sub-header";
import useSectionView from "@/lib/hook";

export default function Header() {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#home");

  const variantHeader = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
        delay: 0.5,
        when: "beforeChildren",
      },
    },
  };
  const upVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div
      ref={ref}
      className="max-w-[1120px] max-md:px-6 md:pl-6 mx-auto md:pt-[90px] pt-[50px]"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variantHeader}
        style={fontPrimary.style}
        className="xl:text-h1 text-h2 xl:w-full w-[800px]  text-primary hidden md:block"
      >
        <span className="relative">
          <Image
            src={strip}
            alt="strip"
            className="absolute z-[-1] mt-2 -ml-2"
          />
          Passionate{" "}
        </span>
        Front-End{" "}
        <span className="relative">
          <Image
            src={light}
            alt="light"
            className="absolute right-0 top-[60px] -z-10 "
          />
          Developer
        </span>{" "}
        Empowering Growth <span className="xl:inline hidden">in</span>{" "}
        <span className="xl:hidden relative">
          <Image
            src={light}
            alt="light"
            className="absolute right-0 top-[60px] -z-10 "
          />
          Through
        </span>{" "}
        <br />
        Web Development
        <motion.span variants={upVariant} className="inline-block ml-4">
          <Image src={rocket} alt="rocket" />
        </motion.span>
      </motion.h1>
      {/*  */}
      {/*  */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variantHeader}
        className=" block md:hidden space-y-6"
      >
        <h4 className="text-3xl text-primary max-sm:block sm:hidden font-bold">
          Firdi Audi Putra.
        </h4>
        <h2
          style={fontPrimary.style}
          className=" text-[50px] w-full leading-[60px]   text-primary"
        >
          Enthusiastic <br />{" "}
          <span className="relative">
            <Image
              src={light}
              alt="light"
              className="absolute right-0 top-[50px] -z-10 "
            />
            Front-End
          </span>{" "}
          <br /> Developer{" "}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Image
              src={rocket}
              alt="rocket"
              className="inline-block scale-75 -ml-4"
            />
          </motion.span>
        </h2>
        <p className="text-text font-[600] text-2xl leading-thigt max-w-[400px]">
          Dedicated to nurturing others&apos; progress in web development
        </p>
      </motion.div>
      <SubHeader />
    </div>
  );
}
