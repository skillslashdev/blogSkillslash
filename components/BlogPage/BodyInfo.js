import React, { useState } from "react";
import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import Image from "next/image";
import styles from "../../src/styles/blog.module.css";
import LeftSideBody from "./LeftSideBody";
import RelatedBlog from "./RelatedBlog/RelatedBlog";

const BodyInfo = ({ postData, posts, categoryPostTag, permalink }) => {
  const [list, setList] = useState(false);
  return (
    <div className={styles.bodyInfo}>
      <LeftSideBody categoryPostTag={categoryPostTag} posts={posts} />
      {/* <div className={styles.blogNav}></div> */}
      <div className={styles.leftInfo}>
        <div className={styles.headerInfo}>
          <h1>{postData.mainH1}</h1>
          <div className={styles.infoDiv}>
            <span>
              By
              <strong>
                <a href="https://skillslash.com/blog">Skillslash Team</a>
              </strong>
              | Published on <strong>{postData.date}</strong>|
              <strong className={styles.time}>{postData.time}</strong>
            </span>
            <p className={styles.shareTab}>
              <FacebookShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <FacebookIcon size={32} round="true" />
              </FacebookShareButton>
              <LinkedinShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <LinkedinIcon size={32} round="true" />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <WhatsappIcon size={32} round="true" />
              </WhatsappShareButton>
              <RedditShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <RedditIcon size={32} round="true" />
              </RedditShareButton>
            </p>
          </div>
        </div>
        <div className={styles.tableOfContent}>
          <div
            className={styles.select}
            onClick={() => {
              setList(!list);
            }}
          >
            <p className={styles.dropDownCatName}>
              Table Of Content <MdArrowDropDown />
            </p>
          </div>
          {list ? (
            <div className={styles.listWrap}>
              {" "}
              {postData.table.map((table, i) => {
                const removeSpecial = table.replace(
                  /[&\/\\#,+()$~%.'":*?<>{}]/g,
                  ""
                );

                const uMake = removeSpecial.toLowerCase().replace(/\s+/g, "-");

                const url = `#${uMake}`;
                return (
                  <Link
                    href={url}
                    key={i}
                    onClick={() => {
                      setList(false);
                    }}
                  >
                    <p className={styles.dropDownCatName}>{table}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.imgWrap}>
          <Image
            src={postData.img}
            width={740}
            height={490}
            priority={true}
            alt={postData.id}
            className={styles.HeadImg}
          />
        </div>
        <article dangerouslySetInnerHTML={{ __html: postData.body }} />
        <hr />
        <div className={styles.tag}>
          <div className={styles.lSide}>
            <p>Tags</p> <span>#{postData.tag} </span>
          </div>
          <div className={styles.rSide}>
            <p>
              share{" "}
              <FacebookShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <FacebookIcon size={32} round="true" />
              </FacebookShareButton>
              <LinkedinShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <LinkedinIcon size={32} round="true" />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <WhatsappIcon size={32} round="true" />
              </WhatsappShareButton>
              <RedditShareButton
                url={permalink}
                quote={postData.title}
                hashtag={postData.tag}
              >
                <RedditIcon size={32} round="true" />
              </RedditShareButton>
            </p>
          </div>
          <div></div>
        </div>

        <RelatedBlog posts={posts} />
        <hr />
      </div>
      <div className={styles.rightInfoS}>
        <div className={styles.table}>
          <div className={styles.contentT}>
            <h5 className={styles.THeader}>Table of content</h5>
            {postData.table.map((table, i) => {
              const removeSpecial = table.replace(
                /[&\/\\#,+()$~%.'":*?<>{}]/g,
                ""
              );

              const uMake = removeSpecial.toLowerCase().replace(/\s+/g, "-");

              const url = `#${uMake}`;
              return (
                <div key={i}>
                  <span>
                    <p>
                      <Link href={url}>{table}</Link>
                    </p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyInfo;
