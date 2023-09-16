import React, { useEffect } from "react";
import hi from "../../public/icon/hi.svg";
import Image from "next/image";
import strip from "../../public/icon/strip.svg";
import { MyContext } from "@/lib/context/AppContext";
import CardSkill from "./card-skills";
import { mySkills } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import AboutArticle from "./about-article";
import useSectionView from "@/lib/hook";

const About = () => {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#why");
  const variantUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="max-w-[1120px] mx-auto mt-[150px] md:mt-[172px] px-6 pb-[100px] max-sm:pb-[80px] scroll-mt-28"
      id="why"
    >
      <div className="text-center">
        <motion.h4
          initial="hidden"
          variants={variantUp}
          whileInView="visible"
          className="md:text-[2.5rem] text-[1.5rem]  font-semibold text-text mx-auto "
        >
          <Image
            src={hi}
            alt="hi"
            className="inline-block scale-75 md:scale-100 mr-1 md:mr-4"
          />
          <span className="relative ">
            <Image
              src={strip}
              alt="strip"
              className="absolute z-[-1] -mt-[30px] left-[50%] translate-x-[-50%] w-[150px]"
            />
            Why Me
          </span>
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          style={fontPrimary.style}
          className="md:text-[3.5rem] text-text text-[2rem]"
        >
          Growth Produces Results
        </motion.h2>
        <AboutArticle />
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={variantUp}
          className="mt-[2rem] md:mt-[3.8rem] md:text-[1.7rem] text-[1.2rem] text-text font-medium"
        >
          Here are some of the tools and technologies I use on a daily basis
        </motion.p>
        <div className="mt-[3rem] md:mt-[5rem] space-y-6 max-sm:space-y-0">
          <Marquee pauseOnHover={true}>
            {mySkills.slice(0, 10).map((skill, index) => {
              return (
                <CardSkill key={index} name={skill.name} icon={skill.icon} />
              );
            })}
          </Marquee>
          <Marquee pauseOnHover={true} direction="right">
            {mySkills.slice(-10).map((skill, index) => {
              return (
                <CardSkill key={index} name={skill.name} icon={skill.icon} />
              );
            })}
          </Marquee>
        </div>
      </div>
      <div className="absolute bottom-0 -mb-2 right-0 z-50">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="2516"
          height="16"
          viewBox="0 0 2516 16"
          fill="none"
        >
          <path
            d="M0 8C1474.7 8 2291.79 8 2516 8"
            stroke="url(#paint0_linear_268_122)"
            stroke-width="15"
          />
          <defs>
            <linearGradient
              id="paint0_linear_268_122"
              x1="2375.54"
              y1="8.94218"
              x2="-356.811"
              y2="8.94218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#88EBFB" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default About;
