import Image from "next/image";
import React from "react";

function CardWork({ logo, job, date, jobList }) {
  return (
    <div className="bg-gradient-dark sm:rounded-3xl sm:px-[3rem] space-y-8 py-[2.5rem] relative">
      <div className="flex flex-wrap justify-center gap-y-6 md:justify-between">
        <Image src={logo} alt="logo" className="w-[18rem]" />
        <p className="text-text text-[1.2rem] font-[600] h-fit px-[1.3rem] py-[.8rem] inner-bg rounded-full">
          {job}
        </p>
      </div>
      <h3 className="text-[1.2rem] text-[#204C74]  font-[600]  max-sm:px-4 ">
        {date}
      </h3>
      <div className="space-y-4  max-sm:px-4 ">
        <h3 className="text-[1.3rem] text-[#204C74] font-[600]">
          <span className="inline-block scale-90 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
            >
              <path
                d="M2.38771 10.6606C4.22061 11.6064 7.88077 13.7305 9.74523 15.5681C10.0576 15.876 10.6577 15.7378 10.7664 15.3128C12.3886 8.97063 15.9681 4.47765 21.0769 2.19805"
                stroke="#004E9B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Responsibilities and things I did
        </h3>
        <ul className="text-[1.1rem] ml-6 text-[#204C74] list-disc space-y-3">
          {jobList && jobList.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardWork;
