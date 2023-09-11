import clsx from "clsx";
import Link from "next/link";
import { navListSecond } from "@/lib/data";
import { MyContext } from "@/lib/context/AppContext";
import { motion } from "framer-motion";

const NavbarProject = () => {
  const { activeSection } = MyContext();
  return (
    <header className={"sticky top-0  inset-x-0  z-[99] flex justify-center  "}>
      <ul className="flex items-center justify-center mt-12 gap-[2rem] py-[.8rem] text-white  w-fit px-[2rem] bg-[#0C2B3F]/30 backdrop-blur-sm rounded-full">
        {navListSecond.map((item, index) => (
          <li key={index} className="relative z-[99] px-4 py-[.5rem] ">
            <Link className="text-[1.2rem]" href={item.href}>
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
                className="absolute inset-0 bg-[#304B5C]/40 -z-[1] rounded-full"
              ></motion.span>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavbarProject;
