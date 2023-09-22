import React from "react";
import Layout from "./layout";
import { CommentForm, Comments } from "@/components";
import { getPostDetails, getPosts } from "../../../services";
import Image from "next/image";
import moment from "moment";

export default function PostDetails({ posts }) {
  const { title, featuredImaged, categories, createdAt, content } = posts;

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Layout>
      <div className="text-white max-w-[800px] mx-auto text-center  space-y-6">
        <div className="flex items-center justify-center gap-4 opacity-60">
          <span className="text-sm">
            {categories.map((category) => (
              <span key={category.slug}>{category.name}</span>
            ))}
          </span>
          <div className="text-4xl flex justify-center items-center h-1 rounded-full w-1 bg-white"></div>
          <span className="text-sm">
            {moment(createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <h1 className="text-3xl font-medium ">{title}</h1>
        <Image
          src={featuredImaged.url}
          alt={title}
          className="rounded-xl w-full"
          width={500}
          height={300}
        />
        <article className="text-white/60 text-md text-start">
          {content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </article>
        <CommentForm slug={posts.slug} />
        <Comments slug={posts.slug} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  console.log(data);

  return {
    props: { posts: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  console.log(posts);

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
