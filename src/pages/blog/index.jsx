import React from "react";
import { getPosts } from "../../../services";
import Layout from "./layout";
import CardPosts from "@/components/card-posts";

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
        {posts.map((item, index) => {
          return <CardPosts key={index} {...item.node} />;
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
