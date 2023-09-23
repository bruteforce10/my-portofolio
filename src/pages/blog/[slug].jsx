import React from "react";
import Layout from "./layout";
import { getCategories, getCategoriesPosts, getPosts } from "../../../services";
import CardPosts from "@/components/card-posts";

export default function CategoryPost({ category }) {
  const { name, posts } = category[0];
  return (
    <Layout>
      <div className="text-white space-y-16 ">
        <h1 className="text-4xl font-bold text-center">{name}</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((item, index) => {
            return <CardPosts key={index} {...item} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  console.log(params);
  const category = (await getCategoriesPosts(params.slug)) || [];
  console.log(category);

  return {
    props: { category },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const posts = await getCategories();

  return {
    paths: posts.map((item) => {
      const slug = item.slug;
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: false,
  };
}
