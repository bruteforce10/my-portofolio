import light from "../../../public/icon/light.svg";
import imagePhoto from "../../../public/contoh.png";
import NavbarDark from "@/components/NavbarDark";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MyContext } from "@/lib/context/AppContext";
import useSectionView from "@/lib/hook";
import { mySkills, otherProjects } from "@/lib/data";
import CardOtherProjects from "@/components/card-other-projects";
import FooterSecond from "@/components/footer-second";

export default function OtherProjects() {
  const { ref } = useSectionView("#projects");
  const { fontPrimary } = MyContext();
  return (
    <div ref={ref} className="bg-[#071F2C] min-h-screen pb-[50px]">
      <NavbarDark />
      <div className="text-center space-y-8 mt-[5rem] px-8 ">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          style={fontPrimary.style}
          className="md:text-[3.5rem] max-md:text-[2.5rem] text-[#BAE1F7] max-sm:text-[1.8rem]"
        >
          👨‍💻 Others{" "}
          <span className="relative">
            <span className="z-50 relative">Projects</span>
            <Image
              src={light}
              alt="strip"
              className="absolute inset-x-0 bottom-0"
            />
          </span>
        </motion.h2>
        <div className="grid xl:grid-cols-3 md:grid-cols-2  gap-8 max-w-[1120px] mx-auto">
          {otherProjects.map((item, index) => {
            return <CardOtherProjects key={index} {...item} />;
          })}
        </div>
      </div>
      <FooterSecond />
    </div>
  );
}
