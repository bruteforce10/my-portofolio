import React from "react";
import hi from "../../public/icon/hi.svg";
import Image from "next/image";
import strip from "../../public/icon/strip.svg";
import { MyContext } from "@/lib/context/AppContext";
import CardSkill from "./card-skills";
import { mySkills } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const About = () => {
  const { fontPrimary } = MyContext();
  const variantFade = {
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
      },
    },
  };
  return (
    <div className="max-w-[1120px] mx-auto mt-[150px] md:mt-[172px] px-6 pb-[100px]">
      <div className="text-center">
        <motion.h4
          initial="hidden"
          variants={variantFade}
          whileInView="visible"
          className="text-[2.5rem] scale-75 md:scale-100 font-semibold text-text"
        >
          <Image src={hi} alt="hi" className="inline-block mr-4" />
          <span className="relative ">
            <Image
              src={strip}
              alt="strip"
              className="absolute z-[-1] -mt-[30px] left-[50%] translate-x-[-50%] w-[150px]"
            />
            Why Me
          </span>
        </motion.h4>
        <h2
          style={fontPrimary.style}
          className="md:text-[3.5rem] text-text text-[2rem]"
        >
          Growth Produces Results
        </h2>
        <article className="text-left max-w-[70rem] mt-[2rem] md:mt-[3rem]">
          <p className="md:text-[1.7rem] text-[1.2rem]  text-text leading-relaxed">
            I am a freelance frontend developer based in Tangerang Selatan,
            Indonesia. Despite not having an IT background, I have a strong
            passion and deep interest in web development, particularly in the
            frontend dev. My journey began when I created an Android application
            using React Native to calculate building materials for a house. It
            was during this project that I fell in love with the world of
            programming.
          </p>
          <br />
          <p className="md:text-[1.7rem] text-[1.2rem]  text-text leading-relaxed">
            I have gained knowledge through various courses and self-study,
            diving deeper into web development and exploring coding beyond the
            courses. I am constantly driven to learn and grow in this field, and
            I hope to make a positive impact in the industry.
          </p>
        </article>
        <p className="mt-[2rem] md:mt-[3.8rem] md:text-[1.7rem] text-[1.2rem] text-text font-medium">
          Here are some of the tools and technologies I use on a daily basis
        </p>
        <div className="mt-[3rem] md:mt-[5rem] space-y-6">
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
    </div>
  );
};

export default About;
