import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "../styles/blogM.module.css";
import { ratingData } from "../../components/VideoTestimonial/ratingData";
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const Navbar = dynamic(() => import("../../components/Navbar/Navbar"));
import { sortByDate } from "../../utils";
import generateRssFeed from "../../lib/generateRss";
import generateCategoryRssFeed from "../../lib/geneRateCategoryRss";
const Tabs = dynamic(() => import("../../components/Tabs/Tabs"));
const BlogFirstSection = dynamic(() =>
  import("../../components/BlogHeader/BlogFirstSection")
);
const BlogHeadBox1 = dynamic(() => import("../../components/BlogHeadBox1"));
const AllBlogs = dynamic(() => import("../../components/AllBlogs"));
// const CategoryPost = dynamic(() =>
//   import("../../components/Blog/CategoryPost")
// );

// const VisualStories = dynamic(() =>
//   import("../../components/Blog/VistualStories/VisualStories")
// );
const Rating = dynamic(() =>
  import("../../components/VideoTestimonial/Rating")
);
// const CTA = dynamic(() => import("../../components/CTA/CTA"));
const Quote = dynamic(() => import("../../components/Quote"));
export default function blog({ allPostsData }) {
  const length = parseInt(allPostsData.length);
  let singleCategoryPost = allPostsData.map((post) => {
    return post.tag;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));

  return (
    <>
      <Head>
        <title>
          Blogs on Data science, Artificial Intelligence, Machine Learning -
          Skillslash
        </title>
        <meta
          name="description"
          content="Learn latest blogs about Artificial Intelligence (AI), Python, Machine Learning, Cloud Computing, Cyber Security, NLP, Business Analysis, Data Science"
        />
        <link rel="canonical" href="https://blog.skillslash.com/" />
      </Head>
      <Navbar course={false} />
      <BlogFirstSection
        backgroundImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/blog-header-image.webp"
        mainHeaderImg="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/blog-girl-image.webp"
        width="390"
        height="391"
      />
      <BlogHeadBox1 allPostsData={allPostsData} />
      <Rating ratingData={ratingData} />
      <AllBlogs
        allPostsData={allPostsData}
        length={length}
        categoryPostTag={categoryPostTag}
      />
      <Quote />
      <div className={styles.explore}>
        <h4>Explore Courses</h4>
        <Tabs />
      </div>
      {/* <VisualStories /> */}
      <Footer blog={true} />
    </>
  );
}

export async function getStaticProps(_context) {
  await generateRssFeed();
  await generateCategoryRssFeed();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: allPostsData.sort(sortByDate),
    },
  };
}
