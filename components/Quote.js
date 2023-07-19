import React from "react";
import styles from "../src/styles/blogM.module.css";
const Quote = () => {
  return (
    <section className={styles.quote}>
      <h3>
        <span>Get Inspired to Achieve </span>Enhanced Outcomes.
      </h3>
      <p>
        <span className={styles.quoteHead}>Get Free Career Counselling</span>
        <span className={styles.aName}>For queries, feedback & assistance</span>
        <a href="tel:+91-8391-911-911">
          <button>+91-8391-911-911</button>
        </a>
      </p>
    </section>
  );
};

export default Quote;
