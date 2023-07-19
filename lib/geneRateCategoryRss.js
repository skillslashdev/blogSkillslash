import fs from "fs";
import { Feed } from "feed";
import { getBlogPostsData, getCategoryBlogPostsData } from "./posts";
import { sortByDate } from "../utils";

const generateCategoryRssFeed = async () => {
  const posts = await getBlogPostsData();
  const postSort = posts.sort(sortByDate);
  const category = await getCategoryBlogPostsData();
  const removeDuplicateCategory = Array.from(new Set(category));

  [...removeDuplicateCategory].sort(sortByDate).map((post, i) => {
    let tag = post;
    const categoryPosts = postSort.filter((post) => post.tag === tag);

    const siteURL = process.env.VERCEL_URL;
    const date = new Date();
    const author = {
      name: "Skillslash",
      email: "info@skillslash.com",
      link: "https://twitter.com/skillslash",
    };
    const feed = new Feed({
      title: "skillslash blog",
      description: "",
      id: siteURL,
      link: siteURL,
      image: `${siteURL}/logo.svg`,
      favicon: `${siteURL}/favicon.png`,
      copyright: `All rights reserved ${date.getFullYear()}, Skillslash`,
      updated: date,
      generator: "Feed for Node.js",
      feedLinks: {
        rss2: `${siteURL}/rss/category/feed.xml`,
        json: `${siteURL}/rss/category/feed.json`,
        atom: `${siteURL}/rss/category/atom.xml`,
      },
      author,
    });
    categoryPosts.map((post) => {
      let tag = post.tag.toLowerCase().replace(/\s+/g, "-");
      const url = `${siteURL}/category/${tag}`;
      feed.addItem({
        title: post.title,
        id: url,
        link: url,
        description: post.desc,
        content: post.body,
        author: post.author,
        contributor: post.author,
        date: new Date(post.date),
      });
      fs.mkdirSync(`./public/rss/category/${tag}`, { recursive: true });
      fs.writeFileSync(`./public/rss/category/${tag}/feed.xml`, feed.rss2());
      fs.writeFileSync(`./public/rss/category/${tag}/atom.xml`, feed.atom1());
      fs.writeFileSync(`./public/rss/category/${tag}/feed.json`, feed.json1());
    });
  });
};

export default generateCategoryRssFeed;
