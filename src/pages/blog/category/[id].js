import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getSortedPostsData } from "../../../../lib/posts";

import Head from "next/head";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import { sortByDate } from "../../../../utils";
import BlogCategory from "../../../../components/BlogCategory/BlogCategory";

export default function CategoryBlog({ categoryPosts }) {
  let canonical;
  let title;
  categoryPosts.slice(0, 1).map((category) => {
    canonical ==
      `https://skillslash.com/blog/${category.tag
        .toLowerCase()
        .replaceAll(" ", "-")}`;
    title = `Read Latest Blogs on ${category.tag}. Find the 2023 latest trends on the topics.`;
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="check out latest blogs. Learn more about the topics. Find Latest information."
        />
        <link rel="canonical" href={canonical} />
      </Head>
      <Navbar course={false} />
      <BlogCategory categoryPosts={categoryPosts} />
      <Footer blog={true} />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const categories = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    const categoryLower = frontMatter.tag.toLowerCase();
    let categoryUrl = categoryLower.replace(/\s+/g, "-");

    return categoryUrl;
  });

  const paths = categories.map((category) => ({
    params: { id: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const allPostsData = getSortedPostsData();

  //Filter post by categories
  const categoryPosts = allPostsData.filter(
    (post) => post.tag.toLowerCase().replace(/\s+/g, "-") === id
  );

  return {
    props: {
      categoryPosts: categoryPosts.sort(sortByDate),
    },
  };
}
