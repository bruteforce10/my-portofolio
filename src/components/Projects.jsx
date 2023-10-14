import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";
import CardProjects from "./card-projects";
import useSectionView from "@/lib/hook";
import { projectsResult } from "@/lib/data";
import { useRouter } from "next/router";

const Projects = () => {
  const { ref } = useSectionView("#projects", 0.1);
  const router = useRouter();

  const { fontPrimary } = MyContext();

  return (
    <div id="projects" className="bg-[#071F2C] relative -mt-[120px] ">
      <div className="max-w-[1120px]  mx-auto sm:pt-[16rem] pt-[12rem] space-y-[6rem]  md:px-6 pb-[80px] scroll-mt-28">
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
          <div className="md:space-y-[3rem]">
            {projectsResult.map((item, index) => (
              <div key={index}>
                <CardProjects {...item} />
              </div>
            ))}
          </div>
          <div
            onClick={() => router.push("/other-projects")}
            className="group text-center px-6 py-3 text-white cursor-pointer text-xl font-semibold w-fit mx-auto bg-card"
          >
            <span className="inline-block mr-2 group-hover:translate-x-1 transition-all">
              👉
            </span>{" "}
            {""}
            Other Projects
          </div>
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
};

export default Projects;
