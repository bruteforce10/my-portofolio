import Image from "next/image";
import React from "react";
import logoSipilku from "../../public/projects/sipilku/logo.png";
import show1 from "../../public/projects/sipilku/1.png";
import show2 from "../../public/projects/sipilku/2.png";
import show3 from "../../public/projects/sipilku/3.png";
import show4 from "../../public/projects/sipilku/4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const CardProjects = () => {
  return (
    <div className="w-full bg-gradient-box px-[3.6rem] py-[4.3rem]">
      <div className="space-y-[3rem]">
        <Image src={logoSipilku} alt="sipilku" />
        <div className="text-start text-white text-[1.6rem]  font-light">
          <p>
            Sipilku Estimate is your go-to online calculator for construction
            pros! Plan your <b>projects easily and quickly ✨</b>
          </p>
          <br />
          <p>
            This calculator helps you determine{" "}
            <b>building material requirements and volumes </b> based on user
            input.
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="px-[.9rem] py-[.9rem] bg-gradient">
              <Image src={show1} alt="sipilku" />
            </SwiperSlide>
            <SwiperSlide className="px-[.9rem] py-[.9rem] bg-gradient">
              <Image src={show2} alt="sipilku" />
            </SwiperSlide>
            <SwiperSlide className="px-[.9rem] py-[.9rem] bg-gradient">
              <Image src={show3} alt="sipilku" />
            </SwiperSlide>
            <SwiperSlide className="px-[.9rem] py-[.9rem] bg-gradient">
              <Image src={show4} alt="sipilku" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-start text-white text-[1.6rem]  font-light">
          <p>
            It includes 17 construction calculations aligned with Indonesian
            National Standards (SNI), ensuring precise results.
          </p>
          <br />
          <p>
            Plus, you can export data to Excel. Sipilku Estimate makes project
            planning a breeze! 💪
          </p>
        </div>
        <div id="bgCard" className="bg-card  max-w-[30rem]  space-y-[0.2rem]">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center ">
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
            <div className="py-[0.4rem] px-[0.5rem] rounded-md shadow-md bg-[#0D2633] ">
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

          <h4 className="text-[3rem] font-semibold text-white leading-none">
            sipilkuestimate.dev
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
      </div>
    </div>
  );
};

export default CardProjects;
