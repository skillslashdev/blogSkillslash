import React, { useState, useEffect } from "react";
import styles from "./OfferPopup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";

const CustomPopup = ({
  dataScience,
  redirectDs,
  redirectFs,
  redirectDe,
  redirectBa,
  redirectBl,
  redirectDSA,
  redirectWeb,
}) => {
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
    <div className={open ? styles.OfferPopupCus : styles.hide}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScience={dataScience}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectBa={redirectBa}
            redirectBl={redirectBl}
            redirectDe={redirectDe}
            redirectWeb={redirectWeb}
            redirectDSA={redirectDSA}
          />
        </div>
      </Popup>
      <AiFillCloseCircle className={styles.Icon} onClick={handelOpen} />
      <div className={styles.Offer}>
        <h6>New Batch Starts From 7th June</h6>
        <p>
          <strong>Available Batch Details</strong> :<br />
        </p>

        <li>
          <strong>Morning Batch:</strong> 31st May, 8 AM to 10 AM
        </li>
        <li>
          <strong>Evening Batch:</strong> 7th June, 8 PM to 10 PM
        </li>

        <p className={styles.faded}>** Terms & Conditions applied</p>
        <button onClick={popupShow}>Apply For Scholarship Now!</button>
      </div>
    </div>
  );
};

export default CustomPopup;
