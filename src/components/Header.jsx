import React, { useContext } from "react";
import Image from "next/image";
import rocket from "../../public/icon/rocket.svg";
import strip from "../../public/icon/strip.svg";
import light from "../../public/icon/light.svg";
import { MyContext } from "@/lib/context/AppContext";

export default function Header() {
  const { fontPrimary } = MyContext();
  return (
    <div className="max-w-[1120px] mx-auto pt-[100px]">
      <h1 style={fontPrimary.style} className="text-h1  text-primary">
        <span className="relative">
          <Image
            src={strip}
            alt="strip"
            className="absolute z-[-1] mt-2 -ml-4"
          />
          Passionate{" "}
        </span>
        Front-End{" "}
        <span className="relative">
          <Image
            src={light}
            alt="light"
            className="absolute right-0 top-[60px] -z-10 "
          />
          Developer
        </span>{" "}
        Empowering Growth in Web Development
        <span>
          <Image src={rocket} alt="rocket" className="inline-block ml-4" />
        </span>
      </h1>
      <div className="text-lead max-w-[738px] mt-[64px] relative ">
        <span className="font-semibold">3 years of experience</span> as a
        front-end developer with a primary focus on React.
        <div className="absolute right-[-20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="22"
            viewBox="0 0 33 22"
            fill="none"
          >
            <path
              d="M4.78735 0.0421737C4.25836 -0.116524 3.70087 0.183659 3.54217 0.712652L0.956043 9.33309C0.797345 9.86208 1.09753 10.4196 1.62652 10.5783C2.15551 10.737 2.713 10.4368 2.8717 9.90778L5.17048 2.24517L12.8331 4.54396C13.3621 4.70266 13.9196 4.40247 14.0783 3.87348C14.237 3.34449 13.9368 2.787 13.4078 2.6283L4.78735 0.0421737ZM3.61953 1.4741C7.16567 8.05978 11.0054 12.8214 15.6041 16.1247C20.2101 19.4332 25.5065 21.228 31.8809 21.9929L32.1191 20.0071C25.9935 19.272 21.0399 17.5668 16.7709 14.5003C12.4946 11.4286 8.83433 6.94022 5.38047 0.5259L3.61953 1.4741Z"
              fill="#2C77BD"
            />
          </svg>
          <p className="text-[17px] rotate-[-4.626deg] -mt-4 font-medium">
            Learning a bit of Vue.js as I go along 😉
          </p>
        </div>
      </div>
    </div>
  );
}
