import React from "react";
import styles from "./RelatedBlog.module.css";
import { BsDot } from "react-icons/bs";
import { FaBookReader, FaCalendarDay } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const RelatedBlog = ({ posts }) => {
  return (
    <div className={styles.relatedPost}>
      <h5 className={styles.heading}>Related Blogs</h5>
      <div className={styles.relatedBlogPost}>
        {posts.slice(0, 5).map((post, i) => {
          let url = `/blog/${post.id}`;
          return (
            <div className={styles.blogBox} key={i}>
              <div className={styles.blogImg}>
                <div className={styles.bgWrap}>
                  <Image src={post.headerImg} alt={post.id} fill={true} />
                </div>
              </div>
              <div className={styles.rBlogBox}>
                <p className={styles.iBox}>
                  <FaCalendarDay className={styles.time} />
                  {post.date}
                  <BsDot className={styles.dot} />
                  <FaBookReader className={styles.time} />
                  {post.readTime}
                </p>
                <Link href={url}>
                  <h4>{post.title}</h4>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedBlog;
