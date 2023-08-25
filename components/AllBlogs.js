import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { FaBookReader, FaCalendarDay } from "react-icons/fa";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "../src/styles/blogM.module.css";

const AllBlogs = ({ allPostsData, length, categoryPostTag }) => {
  const [categoryName, setCategoryName] = useState("Data Science");
  const [categoryUrl, setCategoryUrl] = useState("/blog/category/data-science");
  const [blogData, setBlogData] = useState(allPostsData);
  const [list, setList] = useState(false);
  const imgArray = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/ds-blog-cion.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/AI-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/fs-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/Ba-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/Other-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/career-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/interview-blog-cion.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/IoT-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/cyber-blog-icon.png",
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/blog/block-blog-icon.png",
  ];
  useEffect(() => {
    categoryName === "Data Science"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Data Science";
          })
        )
      : "";
    categoryName === "AI and Machine Learning"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "AI and Machine Learning";
          })
        )
      : "";
    categoryName === "Full Stack"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Full Stack";
          })
        )
      : "";
    categoryName === "Business Analytics"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Business Analytics";
          })
        )
      : "";
    categoryName === "Other"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Other";
          })
        )
      : "";
    categoryName === "Career"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Career";
          })
        )
      : "";
    categoryName === "Interview Question"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Interview Question";
          })
        )
      : "";
    categoryName === "IoT"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "IoT";
          })
        )
      : "";
    categoryName === "Business Analyst"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Business Analyst";
          })
        )
      : "";
    categoryName === "Cyber security"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Cyber security";
          })
        )
      : "";
    categoryName === "Block Chain"
      ? setBlogData(
          allPostsData.filter((allPostsData) => {
            return allPostsData.tag === "Block Chain";
          })
        )
      : "";
  }, [allPostsData, categoryName]);

  return (
    <section className={styles.allBlog}>
      <div className={styles.fixWrap}>
        <div className={styles.categoryListBox}>
          <h4 className={styles.browse}>Browse Categories</h4>
          {categoryPostTag.map((category, i) => {
            const makeUrl = category.toLowerCase().replaceAll(" ", "-");
            const url = `/blog/category/${makeUrl}`;
            return (
              <span
                key={i}
                onClick={() => {
                  setCategoryName(category);
                  setCategoryUrl(url);
                }}
              >
                <Image
                  src={imgArray[i]}
                  width={20}
                  height={20}
                  alt={category}
                />
                {category}
              </span>
            );
          })}

          <div className={styles.dropdown}>
            <div
              className={styles.select}
              onClick={() => {
                setList(!list);
              }}
            >
              <p>{categoryName}</p> <MdArrowDropDown />
            </div>
            {list ? (
              <div className={styles.listWrap}>
                {categoryPostTag.map((category, i) => {
                  const makeUrl = category.toLowerCase().replaceAll(" ", "-");
                  const url = `/blog/category/${makeUrl}`;
                  return (
                    <p
                      key={i}
                      onClick={() => {
                        setCategoryName(category);
                        setCategoryUrl(url);
                        setList(false);
                      }}
                    >
                      {category}
                    </p>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className={styles.categoryView}>
        <div className={styles.headerWrap}>
          <h4>{categoryName}</h4>
          <Link href={categoryUrl}>
            View All <BsArrowRightShort />
          </Link>
        </div>
        <div className={styles.gridWrap}>
          {blogData
            .slice(0, 6)
            .map(({ id, date, title, readTime, tag, headerImg }) => {
              let url = `/blog/${id}`;

              return (
                <div className={styles.blogBox} key={id}>
                  <div className={styles.blogImg}>
                    <div className={styles.bgWrap}>
                      <Image src={headerImg} alt={id} fill={true} />
                    </div>
                  </div>
                  <div className={styles.rBlogBox}>
                    <p className={styles.iBox}>
                      <FaCalendarDay className={styles.time} />
                      {date}
                      <BsDot className={styles.dot} />
                      <FaBookReader className={styles.time} />
                      {readTime}
                    </p>
                    <Link href={url}>
                      <h4>{title}</h4>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
