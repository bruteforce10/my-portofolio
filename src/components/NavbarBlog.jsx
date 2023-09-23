import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MyContext } from "@/lib/context/AppContext";
import Image from "next/image";
import profile from "../../public/profile.png";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";
import strip from "../../public/icon/strip.svg";
import { getCategories } from "../../services";
import { useRouter } from "next/router";
import Router from "next/router";

function NavbarBlog() {
  const { activeSection } = MyContext();
  const { query, pathname } = useRouter();
  const { fontPrimary } = MyContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    Router.replace({
      pathname: "/blog/search",
      query: {
        q: search,
      },
    });
  };

  const handlePath = (slug) => {
    Router.replace(`/blog/${slug}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    getCategories().then((res) => {
      setCategories(res);
    });

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
        >
          <div className="flex justify-between z-50 items-center">
            <div className="h-[4rem] w-[4rem] rounded-full overflow-hidden">
              <Image src={profile} alt="firdi-audi" className="w-[4rem] " />
            </div>
            <div
              className="border-text/60 border-[1.7px] rounded-md p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AiOutlineClose size={20} className="cursor-pointer " />
            </div>
          </div>
          <ul className="space-y-6 mt-6">
            <li>
              <Link
                href="/blog"
                className={clsx(
                  "relative",
                  pathname === "/blog" &&
                    "font-medium border-b-2 border-[#4892A1]"
                )}
              >
                Home
              </Link>
            </li>
            {categories.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handlePath(item.slug)}
                  className={clsx(
                    "relative cursor-pointer",
                    query.slug === item.slug &&
                      "font-medium border-b-2 border-[#4892A1]"
                  )}
                >
                  {item.name}
                </div>
              </li>
            ))}
            <li>
              <Link href="/">Work with me</Link>
            </li>
            <li className="relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  className="bg-[#1F2937] text-white/60 pl-12 py-3 rounded-full"
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={onChange}
                />
              </form>
              <svg
                className="absolute left-4 top-4"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <g opacity="0.1">
                  <path
                    d="M6.41667 11.6829C8.994 11.6829 11.0833 9.59361 11.0833 7.01628C11.0833 4.43895 8.994 2.34961 6.41667 2.34961C3.83934 2.34961 1.75 4.43895 1.75 7.01628C1.75 9.59361 3.83934 11.6829 6.41667 11.6829Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2499 12.85L9.7124 10.3125"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
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
          <ul className="xl:flex hidden gap-10 text-white justify-end items-center">
            <li>
              <Link
                href="/blog"
                className={clsx(
                  "relative",
                  pathname === "/blog" &&
                    "font-medium border-b-2 border-[#4892A1]"
                )}
              >
                Home
              </Link>
            </li>
            {categories.map((item, index) => (
              <li key={index}>
                <div
                  onClick={() => handlePath(item.slug)}
                  className={clsx(
                    "relative cursor-pointer",
                    query.slug === item.slug &&
                      "font-medium border-b-2 border-[#4892A1]"
                  )}
                >
                  {item.name}
                </div>
              </li>
            ))}
            <li>
              <Link href="/">Work with me</Link>
            </li>
            <li className="relative">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  className="bg-[#1F2937] text-white/60 pl-12 py-3 rounded-full"
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={onChange}
                />
              </form>
              <svg
                className="absolute left-4 top-4"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <g opacity="0.1">
                  <path
                    d="M6.41667 11.6829C8.994 11.6829 11.0833 9.59361 11.0833 7.01628C11.0833 4.43895 8.994 2.34961 6.41667 2.34961C3.83934 2.34961 1.75 4.43895 1.75 7.01628C1.75 9.59361 3.83934 11.6829 6.41667 11.6829Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2499 12.85L9.7124 10.3125"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </li>
          </ul>

          {/* toggle navbar */}
          <div
            className={
              "p-2 rounded-xl  flex justify-end  xl:hidden cursor-pointer"
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

export default NavbarBlog;
