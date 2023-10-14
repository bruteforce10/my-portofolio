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
import { navList } from "@/lib/data";
import strip from "../../public/icon/strip.svg";

function NavbarDark() {
  const { activeSection } = MyContext();
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
        isScrolled && "fixed bg-[#071F2C] z-[100]  top-[-20px] delay-500"
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
              <AiOutlineClose size={20} className="cursor-pointer text-text" />
            </div>
          </div>
          <ul className="space-y-6 mt-6">
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  className={clsx(
                    "relative",
                    activeSection === item.href && "font-medium"
                  )}
                  href={`http://localhost:3000/${item.href}`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute z-[-1] inset-0 mt-2 w-[70px]">
                      <Image src={strip} alt="strip" width="auto" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li className=" group cursor-pointer">
              <Link href={"/"} className="flex gap-2 items-center ">
                <span className="text-[1.1rem] font-semibold text-text">
                  Work with me
                </span>
                <svg
                  className="group-hover:ml-2 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M17.775 12.275H4.27495C4.09593 12.275 3.92424 12.2039 3.79765 12.0773C3.67107 11.9507 3.59995 11.779 3.59995 11.6C3.59995 11.421 3.67107 11.2493 3.79765 11.1227C3.92424 10.9961 4.09593 10.925 4.27495 10.925H17.775C17.954 10.925 18.1257 10.9961 18.2522 11.1227C18.3788 11.2493 18.45 11.421 18.45 11.6C18.45 11.779 18.3788 11.9507 18.2522 12.0773C18.1257 12.2039 17.954 12.275 17.775 12.275Z"
                    fill="#1A64A9"
                  />
                  <path
                    d="M17.4956 11.6L11.8971 6.0029C11.7704 5.87615 11.6992 5.70425 11.6992 5.525C11.6992 5.34575 11.7704 5.17385 11.8971 5.0471C12.0239 4.92035 12.1958 4.84915 12.375 4.84915C12.5543 4.84915 12.7262 4.92035 12.8529 5.0471L18.9279 11.1221C18.9908 11.1848 19.0406 11.2593 19.0747 11.3413C19.1087 11.4233 19.1262 11.5112 19.1262 11.6C19.1262 11.6888 19.1087 11.7767 19.0747 11.8587C19.0406 11.9407 18.9908 12.0152 18.9279 12.0779L12.8529 18.1529C12.7262 18.2796 12.5543 18.3509 12.375 18.3509C12.1958 18.3509 12.0239 18.2796 11.8971 18.1529C11.7704 18.0262 11.6992 17.8542 11.6992 17.675C11.6992 17.4958 11.7704 17.3238 11.8971 17.1971L17.4956 11.6Z"
                    fill="#1A64A9"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>
        {/* end nav mobile */}
        <div className="lg:w-4/12 flex items-center justify-start md:gap-4 gap-2 max-lg:w-full max-sm:hidden ">
          <div className="h-[4rem] w-[4rem] rounded-full overflow-hidden">
            <Image src={profile} alt="firdi-audi" className="w-[4rem]" />
          </div>
          <div>
            <div className=" md:text-[1.4rem] text-[1.2rem] ">
              <span style={fontPrimary.style} className="text-white">
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

              <p className="text-[1rem] text-white  leading-none">
                available for hire
              </p>
            </div>
          </div>
        </div>
        <div className="w-8/12 max-sm:w-full">
          <ul className="lg:flex hidden gap-10 text-white justify-end items-center">
            {navList.map((item, index) => (
              <li key={index}>
                <Link
                  className={clsx(
                    "relative",
                    activeSection === item.href && "font-medium"
                  )}
                  href={`http://localhost:3000/${item.href}`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute z-[-1] inset-0 mt-2 w-[70px]">
                      <Image src={strip} alt="strip" width="auto" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
            <li className=" group cursor-pointer">
              <Link href={"/"} className="flex gap-2 items-center ">
                <span className="text-[1.1rem] font-semibold text-white">
                  Work with me
                </span>
                <svg
                  className="group-hover:ml-2 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <path
                    d="M17.775 12.275H4.27495C4.09593 12.275 3.92424 12.2039 3.79765 12.0773C3.67107 11.9507 3.59995 11.779 3.59995 11.6C3.59995 11.421 3.67107 11.2493 3.79765 11.1227C3.92424 10.9961 4.09593 10.925 4.27495 10.925H17.775C17.954 10.925 18.1257 10.9961 18.2522 11.1227C18.3788 11.2493 18.45 11.421 18.45 11.6C18.45 11.779 18.3788 11.9507 18.2522 12.0773C18.1257 12.2039 17.954 12.275 17.775 12.275Z"
                    fill="#ffff"
                  />
                  <path
                    d="M17.4956 11.6L11.8971 6.0029C11.7704 5.87615 11.6992 5.70425 11.6992 5.525C11.6992 5.34575 11.7704 5.17385 11.8971 5.0471C12.0239 4.92035 12.1958 4.84915 12.375 4.84915C12.5543 4.84915 12.7262 4.92035 12.8529 5.0471L18.9279 11.1221C18.9908 11.1848 19.0406 11.2593 19.0747 11.3413C19.1087 11.4233 19.1262 11.5112 19.1262 11.6C19.1262 11.6888 19.1087 11.7767 19.0747 11.8587C19.0406 11.9407 18.9908 12.0152 18.9279 12.0779L12.8529 18.1529C12.7262 18.2796 12.5543 18.3509 12.375 18.3509C12.1958 18.3509 12.0239 18.2796 11.8971 18.1529C11.7704 18.0262 11.6992 17.8542 11.6992 17.675C11.6992 17.4958 11.7704 17.3238 11.8971 17.1971L17.4956 11.6Z"
                    fill="#ffff"
                  />
                </svg>
              </Link>
            </li>
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

export default NavbarDark;
