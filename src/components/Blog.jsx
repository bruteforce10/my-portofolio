import useSectionView from "@/lib/hook";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MyContext } from "@/lib/context/AppContext";
import LinkBlog from "./link-blog";
import pattern from "../../public/image-work.webp";
import { getRecentPosts } from "../../services";

function Blog() {
  const { fontPrimary } = MyContext();
  const { ref } = useSectionView("#blog", 0.2);
  const refCard = useRef(null);
  const isInView = useInView(refCard, { once: true });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((res) => {
      setPosts(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="bg-[#071F2C] relative">
      <div
        id="blog"
        className="max-w-[1120px] relative mx-auto pt-[11rem] md:px-6 pb-[100px] space-y-[5rem] scroll-mt-[1rem]"
      >
        <Image
          src={pattern}
          alt="pattern"
          className="absolute bottom-0 opacity-60  right-0 w-[90%] "
        />
        <div className="text-center space-y-8 " ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            style={fontPrimary.style}
            className="md:text-[3.5rem] max-md:text-[2.5rem] max-md:px-8 text-white max-sm:text-[1.8rem]"
          >
            ✍️
            <span className="relative">
              <span className="z-50 relative">My Latest Writings</span>
              <svg
                className="absolute inset-x-0 bottom-0 max-sm:-bottom-1 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="505"
                height="24"
                viewBox="0 0 505 24"
                fill="none"
              >
                <path
                  d="M0.0955811 23.0352L504.101 17.4844L504.066 -0.000460018L0.060726 5.55032L0.0955811 23.0352Z"
                  fill="url(#paint0_linear_238_117)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_238_117"
                    x1="0.073272"
                    y1="11.8449"
                    x2="504.088"
                    y2="10.8402"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#68D8E4" />
                    <stop offset="1" stop-color="#BFE8FB" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[#B9E5FC] max-w-[42rem] leading-relaxed mx-auto max-md:px-8 text-[1.2rem] md:text-[1.7rem]"
          >
            I share my process, experiences, tips, and resources related to web
            and mobile development, such as React and Javascript, in my blog to
            help others on their web development journey.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2  gap-8 px-8" ref={refCard}>
          {posts.map((item, index) => (
            <motion.div
              onClick={() => {
                window.open(`post/${item.slug}`, "_blank");
              }}
              key={index}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(100px)",
                transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                transitionDelay: `${index}s`,
              }}
              className="bg-card px-8 z-[2]  cursor-pointer text-white py-12 space-y-4"
            >
              <p className="text-base text-[#0987A7]">
                {item.categories.map((category) => category.name)}
              </p>
              <h3 className="text-2xl font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        <LinkBlog />
      </div>
      <div className="absolute bottom-0 -mb-2">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="2516"
          height="16"
          viewBox="0 0 2516 16"
          fill="none"
        >
          <path
            d="M0 8C1474.7 8 2291.79 8 2516 8"
            stroke="url(#paint0_linear_268_122)"
            stroke-width="15"
          />
          <defs>
            <linearGradient
              id="paint0_linear_268_122"
              x1="2375.54"
              y1="8.94218"
              x2="-356.811"
              y2="8.94218"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#88EBFB" />
              <stop offset="1" stop-color="white" stop-opacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Blog;
