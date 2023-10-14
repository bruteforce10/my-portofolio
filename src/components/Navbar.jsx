import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MyContext } from "@/lib/context/AppContext";
import Image from "next/image";
import profile from "../../public/profile.webp";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import ListNav from "./list-nav";

function Navbar() {
  const { fontPrimary } = MyContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "pb-4 sticky w-full pt-[2rem]  top-[-100px] z-[100] transition-all duration-300",
        isScrolled && "fixed bg-gradient-dark z-[100]  top-[-20px] delay-500"
      )}
    >
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2,
          type: "spring",
          delay: 0.5,
        }}
        className="max-w-[1120px] px-6 mx-auto  flex justify-between items-center"
      >
        {/* nav mobile */}
        <motion.div
          initial={{ opacity: 0, y: isOpen ? 0 : -20 }} // Animasi awal saat komponen pertama kali muncul atau saat isOpen aktif
          animate={{ opacity: isOpen ? 100 : 0, y: isOpen ? 0 : -20 }} // Animasi selama perubahan isOpen
          transition={{ duration: 0.3 }} // Durasi animasi
          className={clsx(
            "bg-white  p-4 m-4 top-2 rounded-xl z-[100] left-0 right-0 transition-all",
            isOpen ? "fixed" : "hidden"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex justify-between z-50 items-center">
            <div className="h-[4rem] w-[4rem] rounded-full overflow-hidden">
              <Image src={profile} alt="firdi-audi" className="w-[4rem] " />
            </div>
            <div className="border-text/60 border-[1.7px] rounded-md p-2">
              <AiOutlineClose
                size={20}
                className="cursor-pointer text-primary"
              />
            </div>
          </div>
          <ul className="space-y-6 mt-6">
            <ListNav />
          </ul>
        </motion.div>
        {/* end nav mobile */}
        <div className="lg:w-4/12 flex items-center justify-start md:gap-4 gap-2 max-lg:w-full max-sm:hidden ">
          <div className="h-[4rem] w-[4rem] rounded-full overflow-hidden">
            <Image src={profile} alt="firdi-audi" className="w-[4rem]" />
          </div>
          <div>
            <div className=" md:text-[1.4rem] text-[1.2rem] ">
              <span
                style={fontPrimary.style}
                className="bg-gradient-to-b from-[#478DAC] to-[#80BACE] text-transparent bg-clip-text"
              >
                Firdi Audi Putra
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative w-4 h-4 z-[-1]">
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
                  className="bg-[#58DD29]/30 w-4 h-4 rounded-full "
                >
                  {" "}
                </motion.div>
                <div className="bg-[#58DD29] w-[.55rem] h-[.55rem]  rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
              </div>

              <p className="text-[1rem] text-text  leading-none">
                available for hire
              </p>
            </div>
          </div>
        </div>
        <div className="w-8/12 max-sm:w-full">
          <ul className="lg:flex hidden gap-10 justify-end items-center">
            <ListNav />
          </ul>
          {/* toggle navbar */}
          <div
            className={
              "p-2 rounded-xl  flex justify-end  lg:hidden cursor-pointer"
            }
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <BiMenu
              size={40}
              className="text-[#20bad4] bg-primary rounded-md px-2"
            />
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;
