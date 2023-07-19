import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "../../Popup/Popup";
import ContactForm from "../../ContactusForm/ContactusForm";

const OfferPopup = ({ popupData }) => {
  const [open, setOpen] = useState(false);
  const [popups, setPopups] = useState(false);
  const [onetime, setOnetime] = useState(true);

  const handelOpen = () => {
    setOpen(false);
    setOnetime(false);
  };

  useEffect(() => {
    if (onetime)
      setTimeout(() => {
        setOpen(true);
      }, 5000);
    return;
  }, []);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={open ? styles.OfferPopup : styles.hide}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <ContactForm setTrigger={setPopups} popup={true} />
        </div>
      </Popup>
      <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
      <div className={styles.Offer}>
        <h6>{popupData.heading}</h6>
        <p>{popupData.para1}</p>
        {popupData.para2 === "" ? "" : <p>{popupData.para2}</p>}

        <p className={styles.faded}>** Terms & Conditions applied.</p>
        <button onClick={popupShow}>Apply For Scholarship Now!</button>
      </div>
    </div>
  );
};

export default OfferPopup;
