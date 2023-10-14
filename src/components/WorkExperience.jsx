import useSectionView from "@/lib/hook";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MyContext } from "@/lib/context/AppContext";
import strip from "../../public/icon/strip.svg";
import { WorkExperienceResult } from "@/lib/data";
import CardWork from "./card-work";

function WorkExperience() {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#work", 0.1);
  return (
    <div className="bg-[url('../../public/bg-work.svg')] relative">
      <div
        id="work"
        className="max-w-[1120px] mx-auto pt-[11rem] md:px-6 pb-[100px] space-y-[5rem] scroll-mt-[1rem]"
      >
        <div className="text-center space-y-8 ">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="md:text-[3.5rem] max-md:text-[2.5rem] text-text max-sm:text-[1.8rem]"
          >
            💪Work{" "}
            <span className="relative">
              <span className="z-50 relative">Experiences</span>
              <Image
                src={strip}
                alt="strip"
                className="absolute inset-x-0 bottom-0"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-text max-w-[42rem] mx-auto max-md:px-6 text-[1.2rem] md:text-[1.7rem]"
          >
            Although I work not as a front-end developer, I possess additional
            skills in editing and graphic design that complement my abilities.
          </motion.p>
        </div>
        <div className="sm:space-y-6" ref={ref}>
          {WorkExperienceResult.map((item, index) => (
            <CardWork key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 -mb-2">
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
            strokeWidth="15"
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
              <stop offset="1" stop-color="white" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default WorkExperience;
