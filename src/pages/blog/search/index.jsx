import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardPosts from "@/components/card-posts";
import Layout from "../layout";
import { getPostSearch } from "../../../../services";

export default function Search() {
  const [posts, setPosts] = useState([]);
  const {
    query: { q },
  } = useRouter();
  console.log(q);

  useEffect(() => {
    getPostSearch(q).then((res) => {
      console.log(res);
      setPosts(res);
    });
  }, [q]);

  return (
    <Layout>
      <div className="text-white space-y-16">
        <h1 className="text-4xl font-bold text-center">Search: {q}</h1>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((item, index) => {
            return <CardPosts key={index} {...item.node} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
