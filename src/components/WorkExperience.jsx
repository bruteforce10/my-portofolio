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
  const { ref } = useSectionView("#work", 0.2);
  return (
    <div className="bg-[url('../../public/bg-work.svg')]">
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
        <div className="sm:space-y-4" ref={ref}>
          {WorkExperienceResult.map((item, index) => (
            <CardWork key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
