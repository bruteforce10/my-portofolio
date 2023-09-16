import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";
import { LisenceResult } from "@/lib/data";
import useSectionView from "@/lib/hook";
import pattern from "../../public/image-work.webp";
import Link from "next/link";

function MySertificate() {
  const { fontPrimary } = MyContext();
  const [isShow, setShow] = useState(false);
  const [lisenceName, setLisenceName] = useState("");
  const { ref } = useSectionView("#lisence", 0.2);
  return (
    <>
      {isShow &&
        LisenceResult.map((item, index) => {
          if (item.name === lisenceName) {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="fixed inset-0 flex justify-center z-[99] bg-primary/80"
                onClick={(e) => {
                  e.stopPropagation();
                  if (!e.target.classList.contains("image")) {
                    setShow(false);
                  }
                }}
              >
                <div className="flex relative flex-col items-center justify-center gap-4">
                  <Link
                    href={item.link}
                    target="_blank"
                    className="px-4 py-2 bg-gradient-box border-[1px] border-cyan-400/50 rounded-xl text-white text-lg font-medium"
                  >
                    👉 View Credential
                  </Link>
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="lg:w-[60%] md:w-[80%] w-[90%] rounded-xl image"
                  />
                </div>
              </motion.div>
            );
          }
        })}

      <div className=" bg-gradient-to-r relative  from-[#07151C] to-[#040D11]">
        <Image
          src={pattern}
          alt="pattern"
          className="absolute bottom-0 opacity-60 right-0 w-[90%] "
        />
        <div
          id="lisence"
          className=" relative max-w-[1120px] mx-auto pt-[11rem] md:px-6 pb-[100px] space-y-[5rem] scroll-mt-[.3rem]"
        >
          <div className="text-center space-y-8 ">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              style={fontPrimary.style}
              className="md:text-[3.5rem] max-md:text-[2.5rem] text-[#BAE1F7] max-sm:text-[1.8rem]"
            >
              📃 My{" "}
              <span className="relative">
                <span className="z-50 relative">Certification</span>
                <Image
                  src={light}
                  alt="strip"
                  className="absolute inset-x-0 bottom-0"
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white max-w-[42rem] mx-auto max-md:px-6 text-[1.2rem] md:text-[1.7rem]"
            >
              Here are some of the front-end skills and expertise I have
              acquired
            </motion.p>
            <div ref={ref} className="flex justify-center flex-wrap gap-7 ">
              {LisenceResult.map((item, index) => {
                if (index < 3) {
                  return (
                    <div className="group relative  cursor-pointer" key={index}>
                      <div className="w-[310px] inset-0 scale-y-75 left-1/2 -translate-x-1/2 absolute top-0 rotate-[-3deg]  rounded-xl bg-gradient-lisence "></div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-hover group-hover:z-50 transition-all  z-[-1] absolute  pl-6 w-full h-full rounded-xl"
                      >
                        <div className="w-full h-full flex-col justify-end pb-6 flex gap-y-4  px-4">
                          <div>
                            <p className="text-start font-medium text-[#4B95D9]">
                              {item.date}
                            </p>
                            <h3 className="text-start leading-[28px] font-bold text-lg text-text">
                              {item.name}
                            </h3>
                          </div>

                          <motion.div
                            whileHover={{
                              scale: 1.1,
                            }}
                            className="hover:opacity-70   cursor-pointer"
                            onClick={() => {
                              setShow(!isShow);
                              setLisenceName(item.name);
                            }}
                          >
                            <span className="flex items-center gap-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="12"
                                viewBox="0 0 20 12"
                                fill="none"
                              >
                                <path
                                  opacity="0.7"
                                  d="M9.72499 3.75267C11.9341 3.75267 13.725 5.54355 13.725 7.75265C13.725 9.96185 11.9341 11.7526 9.72499 11.7526C7.51582 11.7526 5.72496 9.96185 5.72496 7.75265C5.72496 5.54355 7.51582 3.75267 9.72499 3.75267ZM9.72499 0.248047C14.3385 0.248047 18.3211 3.39806 19.4261 7.81245C19.5267 8.21425 19.2825 8.62155 18.8807 8.72215C18.4788 8.82265 18.0716 8.57855 17.971 8.17665C17.0321 4.42601 13.6463 1.74805 9.72499 1.74805C5.8019 1.74805 2.41506 4.42831 1.47782 8.18125C1.37746 8.58305 0.970325 8.82745 0.568455 8.72715C0.166585 8.62675 -0.0778353 8.21965 0.0225247 7.81775C1.12561 3.40077 5.10945 0.248047 9.72499 0.248047Z"
                                  fill="#204C74"
                                />
                              </svg>
                              <p className="text-start text-[#204C74CC]/60">
                                View Full
                              </p>
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                      <Image
                        src={item.img}
                        alt={item.name}
                        className=" max-w-[300px] relative rounded-xl "
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySertificate;
