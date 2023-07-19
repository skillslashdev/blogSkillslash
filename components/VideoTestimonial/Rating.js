import React from "react";
import styles from "./VideoTestimonial.module.css";
import Image from "next/image";
const Rating = ({ ratingData }) => {
  return (
    <div className={styles.siteReview}>
      <div className={styles.imgWrap}>
        <Image
          src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/review-line-back.webp"
          fill={true}
          style={{ objectFit: "contain" }}
          alt="rating background"
        />
      </div>
      <div className={styles.ratingText}>
        <h5>Top Sites That Ranked Us</h5>
      </div>
      <div className={styles.rightImg}>
        {ratingData.map((imgData) => {
          return (
            <Image
              key={imgData.src}
              src={imgData.src}
              width={imgData.width}
              height={imgData.height}
              alt="rating background"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
