import React from "react";
import style from "./SubscribeNewsletter.module.css";
import { MdMail } from "react-icons/md";
const SubscribeNewsletter = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.icon}>
          <MdMail />
        </div>
        <h5>Get the latest Newsletter and article</h5>
        <form className={style.form}>
          <input
            type="email"
            required
            name="email"
            // value={query.name}
            className={style.Inputs}
            // onChange={handleParam()}
            placeholder="xyz@gmail.com"
          />
          <button type="submit" className={style.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
