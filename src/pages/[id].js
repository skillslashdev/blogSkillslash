import React from "react";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Head from "next/head";
import styles from "../styles/blog.module.css";
import dynamic from "next/dynamic";
// const HeaderInfo = dynamic(() =>
//   import("../../components/Blog/BlogPage/HeaderInfo")
// );
const BodyInfo = dynamic(() => import("../../components/BlogPage/BodyInfo"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"));

export default function Post({ postData, posts }) {
  let singleCategoryPost = posts.map((post) => {
    return post.tag;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));
  let permalink = `https://blog.skillslash.com/${postData.id}`;
  return (
    <>
      <Navbar course={false} />
      <div className={styles.Open}>
        <Head>
          <title>{postData.title}</title>
          <meta name="description" content={postData.desc} />
          <link rel="canonical" href={permalink} />
        </Head>
        <main>
          <BodyInfo
            postData={postData}
            posts={posts}
            categoryPostTag={categoryPostTag}
            permalink={permalink}
          />
        </main>
      </div>
      <Footer blog={true} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
      posts,
    },
  };
}
