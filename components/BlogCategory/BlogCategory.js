import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FaBookReader, FaCalendarDay } from "react-icons/fa";
import styles from "../../src/styles/blogM.module.css";
const BlogCategory = ({ categoryPosts }) => {
  return (
    <>
      <section className={styles.categoryTagHead}>
        {categoryPosts.slice(0, 1).map((category, id) => {
          return (
            <div key={id}>
              <h1 key={category.tag} style={{ textAlign: "center" }}>
                {category.tag}
              </h1>
              <p>
                This blog category is based on {category.tag}. Find best blogs
                written by industry experts. Read and Learn Interesting facts
                about {category.tag}. Find more info on our
                <a href="http://skillslash.com/">Home Page</a>
              </p>
            </div>
          );
        })}
      </section>
      <section className={styles.categoryBlogWrap}>
        {categoryPosts.map(({ id, date, title, readTime, headerImg }) => {
          const url = `/blog/${id}`;
          return (
            <div className={styles.blog} key={id}>
              <div className={styles.imgWraps}>
                <div className={styles.bgWrap}>
                  <Image
                    alt={id}
                    src={headerImg}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                </div>
              </div>
              <div className={styles.categoryContentWrap}>
                <h4>
                  <Link href={url}>{title}</Link>
                </h4>
                <p className={styles.iBox}>
                  <FaCalendarDay className={styles.time} />
                  {date}
                  <BsDot className={styles.dot} />
                  <FaBookReader className={styles.time} />
                  {readTime}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BlogCategory;
