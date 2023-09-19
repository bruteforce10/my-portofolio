import React from "react";
import { motion } from "framer-motion";
import useSectionView from "@/lib/hook";

export default function LinkBlog() {
  const { ref } = useSectionView("#blog", 0.2);
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-center space-y-10 px-8"
      >
        <div className="text-[#B9E5FC] space-y-4">
          <h3 className="text-3xl">Check out my blog</h3>
          <p className="text-lg">
            Stay informed about my writing by subscribing to my blog.
          </p>
        </div>
        <h2 className="text-[#22D3EE] font-bold text-4xl">
          firdiaudi.xyz/blog
        </h2>
      </motion.div>
    </>
  );
}
