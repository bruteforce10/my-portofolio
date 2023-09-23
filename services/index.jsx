import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              profile {
                url
              }
            }
            createdAt
            slug
            title
            expcerpt
            featuredImaged {
              url
            }
            categories {
              name
              slug
            }
            featuredPost
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.postsConnection.edges;
};

export const getPostSearch = async (slug) => {
  const query = gql`
    query GetSearch($slug: String!) {
      postsConnection(
        where: { expcerpt_contains: $slug, NOT: { title_contains: $slug } }
      ) {
        edges {
          node {
            slug
            title
            createdAt
            expcerpt
            categories {
              name
            }
            featuredImaged {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 4
      ) {
        title
        categories {
          name
        }
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          profile {
            url
          }
        }
        createdAt
        slug
        title
        expcerpt
        content {
          raw
        }
        featuredImaged {
          url
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getCategoriesPosts = async (slug) => {
  const query = gql`
    query GetCategoriesPost($slug: String!) {
      categories(where: { slug: $slug }) {
        name
        posts {
          slug
          title
          createdAt
          expcerpt
          categories {
            name
          }
          featuredImaged {
            url
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.categories;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        name
        slug
      }
    }
  `;

  const results = await request(graphqlAPI, query);
  return results.categories;
};

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });
  return results.comments;
};
