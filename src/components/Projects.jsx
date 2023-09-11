import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";
import useSectionView from "@/lib/hook";
import WorkExperience from "./WorkExperience";

const Projects = () => {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#projects");
  const variantUp = {
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
    <div id="projects" ref={ref} className="bg-[#071F2C] -mt-[120px]">
      <div className="max-w-[1120px]  mx-auto pt-[16rem] space-y-[6rem]  px-6 pb-[100px] scroll-mt-28">
        <div className="text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="md:text-[3.5rem] text-white text-[2rem]"
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
          <p className="text-white max-w-[42rem] mx-auto font-light text-[1.7rem]">
            I&apos;ve worked on various projects, from small MVPs to full-scale
            applications, creating a wide range of features and functionalities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
