import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FaBookReader, FaCalendarDay } from "react-icons/fa";
import styles from "../src/styles/blogM.module.css";

const BlogHeadBox1 = ({ allPostsData }) => {
  return (
    <section className={styles.blogWrap}>
      <div className={styles.leftWrap}>
        {allPostsData
          .slice(0, 1)
          .map(({ id, title, headerImg, date, readTime }) => {
            const url = `/${id}`;
            return (
              <div className={styles.blog} key={id}>
                <div className={styles.headImgWrap}>
                  <div className={styles.bgWrap}>
                    <Image
                      alt={id}
                      src={headerImg}
                      fill={true}
                      priority={true}
                    />
                  </div>
                </div>
                <div className={styles.contentWrap}>
                  <p className={styles.shineEffect}>Trending</p>
                  <Link href={url}>
                    <h4>{title}</h4>
                  </Link>
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
      </div>
      <div className={styles.rightWrap}>
        {allPostsData
          .slice(1, 5)
          .map(({ id, title, headerImg, date, readTime }) => {
            const url = `/${id}`;
            return (
              <div className={styles.blogRight} key={id}>
                <div className={styles.imgWrap}>
                  <Image
                    alt={id}
                    src={headerImg}
                    width={693}
                    height={459}
                    priority={true}
                  />
                </div>
                <div className={styles.contentWrap}>
                  <Link href={url}>
                    <h4>{title}</h4>
                  </Link>
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
      </div>
    </section>
  );
};

export default BlogHeadBox1;
