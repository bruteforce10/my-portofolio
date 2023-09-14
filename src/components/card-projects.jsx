import Image from "next/image";
import React from "react";
import border from "../../public/icon/border.png";
import pattern from "../../public/icon/pattern.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { mySkills } from "@/lib/data";
import SlideProjects from "./slide-projects";
import useSectionView from "@/lib/hook";

const CardProjects = ({
  image,
  logo,
  descOne,
  descSecond,
  link,
  github,
  skills,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="w-full bg-gradient-box md:rounded-[24px] px-[1.1rem] md:px-[3.6rem] py-[4.3rem] relative"
    >
      <div className="absolute md:hidden top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="907"
          height="4"
          viewBox="0 0 907 4"
          fill="none"
        >
          <path
            d="M0 2C531.62 2 826.175 2 907 2"
            stroke="url(#paint0_linear_234_107)"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_234_107"
              x1="577.5"
              y1="2.96491"
              x2="-128.628"
              y2="2.96491"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#071F2C" />
              <stop offset="1" stop-color="#88EBFB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="transform  rotate-180 absolute top-0 left-0 opacity-75 max-md:hidden ">
        <Image src={border} alt="border-top" />
      </div>
      <div className="absolute bottom-0 opacity-75 max-md:hidden ">
        <Image src={border} alt="border-bottom" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-75 ">
        <Image src={pattern} alt="pattern-bottom" />
      </div>
      <div className="md:space-y-[3rem] space-y-[1.2rem]">
        <Image src={logo} alt="sipilku" />
        <div className="text-start text-white text-[1.2rem] md:text-[1.6rem]   font-light">
          <p dangerouslySetInnerHTML={{ __html: descOne }}></p>
        </div>
        <SlideProjects image={image} />
        <div className="text-start text-white text-[1.1rem] md:text-[1.6rem]  font-light">
          <p dangerouslySetInnerHTML={{ __html: descSecond }}></p>
        </div>

        <div className="bg-card group cursor-pointer relative z-[2] max-w-[30rem]  space-y-[0.2rem]">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center  ">
              <div className="relative w-4 h-4 z-[1]">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1, 1.2, 1],
                    opacity: [1, 0.8, 1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    ease: [0, 0, 0.2, 1],
                    repeat: Infinity,
                  }}
                  className="bg-[#40F4B2]/30 w-4 h-4 rounded-full "
                >
                  {" "}
                </motion.div>
                <div className="bg-[#40F4B2] w-[.55rem] h-[.55rem]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </div>

              <p className="text-[1rem] text-[#3EEBAE]  font-medium leading-none">
                Live in production
              </p>
            </div>
            <div className="py-[0.4rem] px-[0.5rem] group-hover:translate-x-[.4rem] group-hover:-translate-y-[.4rem] transition-all  rounded-md shadow-md bg-[#0D2633] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="15"
                viewBox="0 0 13 15"
                fill="none"
              >
                <path
                  d="M5.5991 0.599853C5.30003 0.599853 5.05757 0.860882 5.05757 1.18303C5.05757 1.5051 5.30003 1.7662 5.5991 1.7662H11.1365L0.161646 13.585C-0.0538826 13.8172 -0.0538826 14.1936 0.161646 14.4257C0.377247 14.6579 0.726787 14.6579 0.942387 14.4257L11.9169 2.60714V8.56991C11.9169 8.89197 12.1594 9.15308 12.4585 9.15308C12.7575 9.15308 13 8.89197 13 8.56991V1.18303C13 0.860882 12.7575 0.599853 12.4585 0.599853H5.5991Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <h4 className="md:text-[3rem]  text-start max-sm:text-[2rem] text-[2.5rem] font-semibold text-white leading-none">
            {link}
            <span className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="152"
                height="11"
                viewBox="0 0 152 11"
                fill="none"
              >
                <path
                  d="M2 6.04837L57.2659 3.9884C60.1258 3.8818 60.6229 8.02752 57.819 8.6001V8.6001L150 2.6001"
                  stroke="url(#paint0_linear_88_46)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_88_46"
                    x1="76"
                    y1="-16.5"
                    x2="76"
                    y2="20.6001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#40F4B2" stopOpacity="0" />
                    <stop
                      offset="0.961458"
                      stopColor="#40F4B2"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h4>
        </div>

        <div className="space-y-[.5rem] text-white text-start cursor-pointer relative z-[2]">
          <h4 className="text-4xl max-sm:text-2xl font-semibold">{github} </h4>
          <p className="text-white/60 text-[1.2rem] max-sm:text-[.9rem] ">
            on
            <span className="inline-block mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.99985 0.400146C4.91954 0.400146 0.799927 4.51884 0.799927 9.60007C0.799927 13.665 3.43599 17.1134 7.0914 18.33C7.55103 18.4153 7.71983 18.1304 7.71983 17.8874C7.71983 17.6681 7.7113 16.9433 7.70733 16.1746C5.14791 16.7311 4.60784 15.0891 4.60784 15.0891C4.18934 14.0257 3.58635 13.743 3.58635 13.743C2.75149 13.172 3.64927 13.1839 3.64927 13.1839C4.57295 13.2486 5.05955 14.1319 5.05955 14.1319C5.88009 15.5381 7.21175 15.1316 7.73674 14.8967C7.81931 14.3021 8.05773 13.8961 8.32084 13.6664C6.27741 13.434 4.12916 12.645 4.12916 9.11987C4.12916 8.11545 4.4887 7.29476 5.07722 6.65033C4.98154 6.41876 4.66664 5.48305 5.16619 4.21583C5.16619 4.21583 5.93859 3.96857 7.69667 5.15885C8.43068 4.95486 9.21785 4.85233 9.99985 4.84883C10.7814 4.85233 11.569 4.95456 12.3044 5.15855C14.0604 3.96826 14.8318 4.21552 14.8318 4.21552C15.3326 5.48259 15.0177 6.41846 14.9222 6.65003C15.5121 7.29445 15.869 8.11515 15.869 9.11957C15.869 12.6531 13.7168 13.431 11.6682 13.6589C11.9983 13.9444 12.2924 14.5044 12.2924 15.3626C12.2924 16.5936 12.2817 17.5843 12.2817 17.8873C12.2817 18.1321 12.4475 18.419 12.9136 18.3286C16.5669 17.1108 19.1999 13.6635 19.1999 9.60007C19.1998 4.51915 15.0806 0.400299 9.99985 0.400299V0.400146Z"
                  fill="white"
                  fill-opacity="0.9"
                />
                <path
                  d="M4.28439 13.6089C4.26413 13.6546 4.19222 13.6683 4.12671 13.637C4.05968 13.6072 4.02236 13.5449 4.04399 13.499C4.06379 13.4518 4.13585 13.4388 4.20243 13.4704C4.26946 13.5004 4.30755 13.5633 4.28424 13.609L4.28439 13.6089ZM4.65703 14.0246C4.61331 14.0653 4.52754 14.0464 4.46934 13.982C4.40901 13.918 4.39774 13.8322 4.44238 13.7909C4.48778 13.7504 4.57096 13.7696 4.63129 13.8336C4.69131 13.8985 4.70319 13.9835 4.65719 14.0248L4.65703 14.0246ZM5.01992 14.5543C4.96356 14.5936 4.87123 14.5569 4.81426 14.4751C4.75789 14.3931 4.75789 14.2949 4.81578 14.2557C4.8726 14.2164 4.96356 14.2519 5.02145 14.333C5.07751 14.416 5.07751 14.5143 5.01992 14.5542V14.5543ZM5.51673 15.0664C5.46645 15.122 5.3589 15.107 5.28028 15.0313C5.2 14.9571 5.1776 14.8516 5.22803 14.7961C5.27922 14.7403 5.38723 14.7559 5.4663 14.8311C5.54659 14.9052 5.57081 15.0109 5.51703 15.0662L5.51673 15.0664ZM6.20229 15.3636C6.17989 15.4357 6.0766 15.4684 5.97224 15.4376C5.86819 15.4061 5.80009 15.3218 5.82142 15.249C5.84275 15.1764 5.9468 15.1424 6.05177 15.1751C6.15582 15.2065 6.22392 15.2903 6.20229 15.3636ZM6.95534 15.4186C6.95793 15.4945 6.86957 15.5572 6.76033 15.5587C6.65019 15.5613 6.56106 15.4998 6.56 15.4251C6.56 15.3485 6.64653 15.2865 6.75653 15.2844C6.86576 15.2824 6.95549 15.3433 6.95549 15.4184L6.95534 15.4186ZM7.65583 15.2995C7.66893 15.3733 7.59291 15.4494 7.48429 15.4696C7.37764 15.4894 7.27862 15.4434 7.26491 15.3701C7.25181 15.2943 7.3292 15.2183 7.43584 15.1986C7.54462 15.1799 7.64212 15.2245 7.65583 15.2996V15.2995Z"
                  fill="white"
                  fill-opacity="0.9"
                />
              </svg>
            </span>
            github.com
          </p>
        </div>

        <div>
          <h3 className="text-white text-4xl max-sm:text-2xl font-medium text-start">
            Featured technologies used
          </h3>
          <div className="flex gap-x-[2rem] max-sm:gap-x-[1rem] justify-start  mt-[2rem]">
            {mySkills.map((skill, index) => {
              if (skills.includes(skill.name)) {
                return (
                  <Image
                    key={index}
                    src={skill.icon}
                    alt={skill.name}
                    className="max-sm:w-[3rem]"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProjects;
