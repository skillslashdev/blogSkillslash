import React from "react";
import styles from "./BlogHeader.module.css";

const BlogFirstSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.blogH1}>Skillslash Blog</h1>
        <p className={styles.blogP}>
          Explore insights, tips, and read everything about Data Science and
          Full Stack Development.
        </p>
      </div>
    </section>
  );
};

export default BlogFirstSection;
