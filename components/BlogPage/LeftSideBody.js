import React, { useState } from "react";
import { useRouter } from "next/router";
import { MdArrowDropDown } from "react-icons/md";

import styles from "../../src/styles/blog.module.css";
const LeftSideBody = ({ categoryPostTag }) => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("Data Science");
  const [categoryUrl, setCategoryUrl] = useState();
  const [list, setList] = useState(false);
  const changePage = (url) => {
    router.push(url);
  };

  return (
    <div className={styles.rightInfo}>
      <div className={styles.table}>
        <div>
          <div className={styles.dropdown}>
            <h6 className={styles.heading}>View Other Category</h6>
            <div
              className={styles.select}
              onClick={() => {
                setList(!list);
              }}
            >
              <p className={styles.dropDownCatName}>{categoryName}</p>{" "}
              <MdArrowDropDown />
            </div>
            {list ? (
              <div className={styles.listWrap}>
                {categoryPostTag.map((category, i) => {
                  const makeUrl = category.toLowerCase().replaceAll(" ", "-");
                  const url = `/category/${makeUrl}`;
                  return (
                    <p
                      key={i}
                      onClick={() => {
                        setCategoryName(category);
                        setList(false);
                        changePage(url);
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
    </div>
  );
};

export default LeftSideBody;
