import React from "react";
import { getPosts } from "../../../services";
import Layout from "./layout";
import CardPosts from "@/components/card-posts";
import CardPostFeatured from "@/components/card-post-featured";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="max-lg:space-y-8 space-y-16">
        {posts.map((item, index) => {
          if (item.node.featuredPost) {
            return <CardPostFeatured key={index} {...item.node} />;
          }
        })}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((item, index) => {
            if (!item.node.featuredPost) {
              return <CardPosts key={index} {...item.node} />;
            }
          })}
        </div>
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
