import useSectionView from "@/lib/hook";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MyContext } from "@/lib/context/AppContext";

function Contact() {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#contact", 0.2);
  return (
    <div className="bg-[url('../../public/bg-work.svg')] relative">
      <div
        id="contact"
        className="max-w-[1120px] mx-auto pt-[11rem] px-8 md:px-6 pb-[100px] space-y-[5rem] scroll-mt-[1rem]"
      >
        <div className="text-start max-sm:space-y-4" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="xl:text-h1 md:text-h2 text-[2.7rem] leading-[3.4rem] xl:w-full   text-primary "
          >
            Into coffee?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="xl:text-h1 md:text-h2 text-[2.7rem] leading-[3.4rem] xl:w-full   text-primary "
          >
            Wanna grab a cup together?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="xl:text-h1 md:text-h2 text-[2.7rem] leading-[3.4rem] xl:w-full   text-primary "
          >
            Have any project ideas?
          </motion.h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
