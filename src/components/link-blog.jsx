import React from "react";
import { motion } from "framer-motion";
import useSectionView from "@/lib/hook";
import Link from "next/link";

export default function LinkBlog() {
  const { ref } = useSectionView("#blog", 0.1);
  return (
    <div className="relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-center space-y-10 px-8 "
      >
        <div className="text-[#B9E5FC] space-y-4">
          <h3 className="text-3xl">Check out my blog</h3>
          <p className="text-lg">
            Stay informed about my writing by subscribing to my blog.
          </p>
        </div>
        <Link
          href={"/blog"}
          target="_blank"
          className="text-[#22D3EE] font-bold text-4xl relative z-[99] inline-block "
        >
          firdiaudi.site/blog
        </Link>
      </motion.div>
    </div>
  );
}
