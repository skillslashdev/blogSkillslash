import React, { useState, useEffect } from "react";
import styles from "./InternalLinking.module.css";
import Link from "next/link";
import {
  DsData,
  FsData,
  FsDataOther,
  WdData,
  WdDataOther,
  BaData,
  BaDataOther,
  DsDataOther,
} from "./CitiesData";
import { useRouter } from "next/router";

const InternalLinking = ({
  redirectFs,
  redirectDs,
  redirectBa,
  redirectWeb,
  redirectDSA,
}) => {
  const [other, setOther] = useState(false);
  const { asPath } = useRouter();
  // console.log(asPath);

  const [otherCity, setOtherCity] = useState(DsDataOther);
  const [cityData, setCityData] = useState(DsData);
  useEffect(() => {
    redirectDs ? setCityData(DsData) : "";
    redirectFs || redirectDSA ? setCityData(FsData) : "";
    redirectWeb ? setCityData(WdData) : "";
    redirectBa ? setCityData(BaData) : "";
  }, []);
  useEffect(() => {
    redirectDs ? setOtherCity(DsDataOther) : "";
    redirectFs || redirectDSA ? setOtherCity(FsDataOther) : "";
    redirectWeb ? setOtherCity(WdDataOther) : "";
    redirectBa ? setOtherCity(BaDataOther) : "";
  }, [redirectBa, redirectFs, redirectWeb, redirectDs, redirectDSA]);

  return (
    <div className={styles.wrapper}>
      <h4>Our program in other cities</h4>
      <div className={styles.wrapContent}>
        <div
          className={other ? styles.header : styles.headerActive}
          onClick={() => setOther(!other)}
        >
          Cities
        </div>
        <div
          className={other ? styles.headerActive : styles.header}
          onClick={() => setOther(!other)}
        >
          Other
        </div>
      </div>
      <div className={styles.content}>
        {other
          ? otherCity.map((data) => {
              const { id, city, link, title } = data;
              return (
                <p key={id}>
                  <Link href={link}>{title}</Link>
                </p>
              );
            })
          : cityData.map((data) => {
              const { id, city, link } = data;

              return asPath === link ? (
                ""
              ) : (
                <Link href={link} key={id}>
                  {city}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default InternalLinking;
