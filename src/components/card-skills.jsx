import { mySkills } from "@/lib/data";
import Image from "next/image";
import React from "react";

const CardSkill = ({ name, icon }) => {
  return (
    <div className="flex  md:mx-[1rem] scale-[80%] md:scale-100 h-[10rem] box-border hover:border-4 cursor-pointer transition-all hover:border-white/70 flex-col justify-center items-center gap-[.5rem] px-[1.8rem] py-[1.2rem] bg-gradient">
      <Image src={icon} alt={name} />
      <p className="text-[1.5rem] text-text font-medium">{name}</p>
    </div>
  );
};

export default CardSkill;
