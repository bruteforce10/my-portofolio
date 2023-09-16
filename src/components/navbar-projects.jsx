import clsx from "clsx";
import Link from "next/link";
import { navListSecond } from "@/lib/data";
import { MyContext } from "@/lib/context/AppContext";
import { motion } from "framer-motion";

const NavbarProject = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = MyContext();
  return (
    <header className={"sticky top-0  inset-x-0  z-[99] flex justify-center  "}>
      <ul
        className={clsx(
          "flex items-center  justify-center max-lg:flex-wrap rounded-none md:rounded-full w-full md:w-fit md:px-[2rem] sm:mt-12 lg:gap-[2rem]  py-[.8rem] text-white    backdrop-blur-sm",
          activeSection === "#work"
            ? "bg-[#97F0FB]/[.2] text-[#2E6F84]"
            : "bg-[#0C2B3F]/40"
        )}
      >
        {navListSecond.map((item, index) => (
          <li key={index} className="relative z-[99] px-4 py-[.5rem] ">
            <Link
              className="text-[1.1rem]"
              onClick={() => {
                setActiveSection(item.href);
                setTimeOfLastClick(Date.now());
              }}
              href={item.href}
            >
              {item.name}
            </Link>
            {activeSection === item.href && (
              <motion.span
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                className={clsx(
                  "absolute inset-0 bg-[#304B5C]/40 -z-[1] rounded-full",
                  activeSection === "#work"
                    ? "bg-[#97F0FB]/60"
                    : " bg-[#304B5C]/40 "
                )}
              ></motion.span>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavbarProject;
