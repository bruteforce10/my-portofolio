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

      if (obj.code) {
        modifiedText = (
          <code
            className="bg-[#366da0] text-white py-[.5px] px-[5px] rounded-md"
            key={index}
          >
            {text}
          </code>
        );
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3
            key={index}
            className="text-2xl text-white font-medium mt-12 mb-4"
          >
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
          <h4 key={index} className="text-xl text-white font-medium mb-4">
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
      case "code-block":
        return (
          <div className="mockup-code text-white mb-6">
            {modifiedText.map((item, i) => {
              const language = item.split("&");
              return (
                <React.Fragment key={i}>
                  {language.map((item, i) => {
                    return (
                      <pre key={i}>
                        <code>{item}</code>
                      </pre>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <Layout>
      <div className="text-white max-w-[800px] mx-auto text-center  space-y-8">
        <div className="space-y-4">
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
          <h1 className="text-3xl font-medium pb-4 ">{title}</h1>
        </div>
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
      </div>
      <div className="mt-14 max-w-[800px] mx-auto  space-y-12">
        <CommentForm slug={posts.slug} />
        <Comments slug={posts.slug} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { posts: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
