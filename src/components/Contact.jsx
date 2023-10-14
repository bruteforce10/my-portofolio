import useSectionView from "@/lib/hook";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../../public/profile.webp";
import { MyContext } from "@/lib/context/AppContext";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Contact() {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#contact", 1);
  return (
    <div className="bg-[url('../../public/bg-work.svg')] overflow-hidden">
      <div
        id="contact"
        className="max-w-[1120px] mx-auto pt-[11rem] px-8 md:px-6 pb-[100px] space-y-[4rem] scroll-mt-[1rem]"
      >
        <div className="space-y-4">
          <motion.h4
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 3,
              type: "spring",
            }}
            className="text-3xl font-bold "
          >
            🤝{" "}
            <span className="bg-gradient-to-b from-[#478DAC] to-[#80BACE] text-transparent bg-clip-text">
              Let’s get in touch
            </span>
          </motion.h4>
          <div className="text-start max-sm:space-y-4 -space-y-5" ref={ref}>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              style={fontPrimary.style}
              className="xl:text-h1 md:text-h2 text-[2.7rem] max-md:leading-[3.4rem] xl:w-full   text-primary "
            >
              Into coffee?
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.1 }}
              style={fontPrimary.style}
              className="xl:text-h1 md:text-h2 text-[2.7rem] max-md:leading-[3.4rem] xl:w-full   text-primary "
            >
              Wanna grab a cup together?
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.2 }}
              style={fontPrimary.style}
              className="xl:text-h1 md:text-h2 text-[2.7rem] max-md:leading-[3.4rem] xl:w-full   text-primary "
            >
              Have any project ideas?
            </motion.h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="relative w-fit "
          >
            <div className="rounded-full md:h-[12rem] w-[10rem] h-[10rem] md:w-[12rem]  overflow-hidden">
              <Image src={profile} alt="profile" />
            </div>
            <p className="text-5xl bottom-4 right-0 absolute">👨‍💻</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
            className="flex flex-col justify-between"
          >
            <h4 className="text-2xl text-light text-[#2E6F84] max-sm:mb-6">
              Contact me via
            </h4>
            <div className="space-y-2">
              <p className="text-2xl text-text font-medium flex items-center gap-x-3">
                <BsGithub className="inline" /> bruteforce10
              </p>
              <p className="text-2xl text-text font-medium flex items-center gap-x-3">
                <BsLinkedin className="inline" /> Firdi Audi Putra
              </p>
              <p className="text-2xl text-text font-medium flex items-center gap-x-3">
                <MdOutlineAlternateEmail className="inline" />{" "}
                audifirdi@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
