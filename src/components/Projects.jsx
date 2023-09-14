import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";
import CardProjects from "./card-projects";
import useSectionView from "@/lib/hook";
import { projectsResult } from "@/lib/data";

const Projects = () => {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#projects", 0.6);

  return (
    <div id="projects" className="bg-[#071F2C] -mt-[120px]">
      <div className="max-w-[1120px]  mx-auto sm:pt-[16rem] pt-[12rem] space-y-[6rem]  md:px-6 pb-[100px] scroll-mt-28">
        <div className="text-center space-y-8 ">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="md:text-[3.5rem] max-md:text-[2.5rem] text-white max-sm:text-[1.8rem]"
          >
            ⚡Highlighted{" "}
            <span className="relative">
              <span className="z-50 relative">Projects</span>
              <Image
                src={light}
                alt="light"
                className="absolute inset-x-0 bottom-0"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white max-w-[42rem] mx-auto max-md:px-6 font-light text-[1.2rem] md:text-[1.7rem]"
          >
            I&apos;ve worked on various projects, from small MVPs to full-scale
            applications, creating a wide range of features and functionalities.
          </motion.p>
          <div className="space-y-[3rem]">
            {projectsResult.map((item, index) => (
              <CardProjects key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
