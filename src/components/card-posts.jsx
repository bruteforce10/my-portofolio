import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPosts } from "../../services";

export default function CardPosts({
  title,
  expcerpt,
  createdAt,
  categories,
  slug,
  featuredImaged,
}) {
  return (
    <Link href={`post/${slug}`} className="text-white space-y-3">
      <Image
        src={featuredImaged.url}
        alt={title}
        className="rounded-xl h-48 object-center w-full object-cover"
        width={500}
        height={300}
      />
      <div className="space-y-2">
        <div className="flex items-center gap-4 opacity-60">
          <span className="text-xs">
            {categories.map((category) => (
              <span key={category.slug}>{category.name}</span>
            ))}
          </span>
          <div className="text-4xl flex justify-center items-center h-1 rounded-full w-1 bg-white"></div>
          <span className="text-xs">
            {moment(createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{expcerpt}</p>
    </Link>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
