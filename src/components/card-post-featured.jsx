import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardPostFeatured({
  title,
  expcerpt,
  createdAt,
  categories,
  slug,
  featuredImaged,
}) {
  return (
    <Link
      href={`post/${slug}`}
      className="flex gap-x-9 max-lg:gap-y-4 max-lg:flex-wrap"
    >
      <Image
        src={featuredImaged.url}
        alt={title}
        className="rounded-xl w-8/12 max-lg:w-full"
        width={500}
        height={300}
      />
      <div className="w-4/12 max-lg:w-full text-white space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4 opacity-60">
            <span className="text-md max-sm:text-xs">
              {categories.map((category) => (
                <span key={category.slug}>{category.name}</span>
              ))}
            </span>
            <div className="text-4xl flex justify-center items-center h-1 rounded-full w-1 bg-white"></div>
            <span className="text-md max-sm:text-xs">
              {moment(createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
          <h1 className="text-3xl max-sm:text-xl font-medium">{title}</h1>
        </div>
        <p className="text-white/60 text-md max-sm:text-sm leading-relaxed">
          {expcerpt}
        </p>
      </div>
    </Link>
  );
}
