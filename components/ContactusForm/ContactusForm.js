import React, { useState, useEffect } from "react";
// import moment from "moment";
import styles from "./ContactUsForm.module.css";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";

const ContactForm = ({ popup, setTrigger, syllabus }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //offset to maintain time zone difference
  const [startDate, setStartDate] = useState();

  // const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    workExperience: "",
    selectCourse: "",
    dateTime: "",
    url: router.asPath,
  });

  useEffect(() => {
    setQuery({ ...query, dateTime: startDate });
  }, []);

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let endPoint = "https://getform.io/f/24a1a4e6-8116-4614-818d-0bff28469fd0";

  // Form Submit function

  const formSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch(`${endPoint}`, {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({
        name: "",
        email: "",
        phone: "",
        workExperience: "",
        selectCourse: "",
        dateTime: "",
        url: "",
      })
    );
    if (popup) {
      const off = () => {
        setTrigger(false);
      };
      off();
    }
    setLoading(false);
    if (query.selectCourse === "Adv Data Science and AI (Basic/Pro/ProMax)")
      router.push("/Thankyou/data-science");
    if (query.selectCourse === "Full Stack Developer course with certification")
      router.push("/Thankyou/full-stack");
    if (
      query.selectCourse === "Data Engineering Course with Industry Experience"
    )
      router.push("/Thankyou/data-engineering");
    if (query.selectCourse === "Blockchain program and certification")
      router.push("/Thankyou/blockchain");
    if (query.selectCourse === "Business Analytics Program For Professionals")
      router.push("/Thankyou/business-analytics");
  };
  if (query.selectCourse === "DSA + System Design") {
    router.push("/Thankyou/dsa");
  }
  if (query.selectCourse === "Web Development Course") {
    router.push("/Thankyou/web-development");
  }

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0;
  };
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  let btnText = "Submit";

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Full Name*</legend>
            <input
              type="text"
              name="name"
              className={styles.NameInput}
              required
              value={query.name}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Email*</legend>
            <input
              type="email"
              name="email"
              required
              className={styles.EmailInput}
              value={query.email}
              onChange={handleParam()}
            />
          </fieldset>
        </div>
        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Phone Number*</legend>
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              required
              className={popup ? styles.EmailInputs : styles.EmailInput}
              maxLength="10"
              minLength="10"
              value={query.phone}
              onChange={handleParam()}
            />
            {/* <PhoneInput
              style={
                popup
                  ? {
                      height: "35px",
                      borderRadius: "8px",
                      color: "#646464",
                      padding: "10px",
                    }
                  : {
                      border: "0",
                      height: "35px",

                      borderRadius: "3px",
                    }
              }
              name="phone"
              rules={{ required: true }}
              defaultCountry="IN"
              className={
                popup
                  ? styles.Phones
                  : syllabus
                  ? styles.syllabusPhone
                  : styles.Phone
              }
              value={value}
              required
              onChange={setValue}
            /> */}
          </fieldset>
        </div>
        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Select course</legend>
            <select
              name="selectCourse"
              required
              value={query.selectCourse}
              onChange={handleParam()}
            >
              <option className={styles.option} value="">
                Select a course*
              </option>

              <option value="Adv Data Science and AI (Basic/Pro/ProMax)">
                Adv Data Science and AI (Basic/Pro/ProMax)
              </option>
              <option value="Full Stack Developer course with certification">
                Full Stack Developer course with certification
              </option>
              <option value="DSA + System Design">DSA + System Design</option>
              <option value="Blockchain program and certification">
                Blockchain program and certification
              </option>
              <option value="Business Analytics Program For Professionals">
                Business Analytics Program For Professionals
              </option>
            </select>
          </fieldset>
        </div>

        <div className={styles.formWrapper}>
          <fieldset style={syllabus ? { color: "white" } : { color: "black" }}>
            <legend>Work Experience*</legend>
            <select
              name="workExperience"
              required
              value={query.workExperience}
              onChange={handleParam()}
            >
              <option className={styles.option} value="">
                Select Your Work Experience*
              </option>

              <option value="College Students">College Students</option>

              <option value="Fresher ( less than 1 year)">
                Fresher ( less than 1 year)
              </option>
              <option value="1 to 3 year">1 to 3 year</option>
              <option value="3 to 7 year">3 to 7 year</option>
              <option value="7 to 12 year">7 to 12 year</option>
              <option value="12+ year">12+ year</option>
            </select>
          </fieldset>
        </div>
        <input type="hidden" id="url" name="url" value={router.asPath}></input>
        <div className={popup ? styles.formWrappers : styles.formWrapper}>
          <div className={styles.inner}>
            <fieldset
              style={syllabus ? { color: "white" } : { color: "black" }}
            >
              <legend>Schedule Date & Time*</legend>
              <DatePicker
                selected={startDate}
                name="dateTime"
                id="dateTime"
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeIntervals={15}
                includeDateIntervals={[
                  {
                    start: subDays(new Date(), 1),
                    end: addDays(new Date(), 5),
                  },
                ]}
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                wrapperClassName={syllabus ? styles.dateS : styles.date}
                className={styles.datePicker}
                dateFormat="MMMM d, yyyy h:mm aa"
                required
                popperPlacement="top"
                popperModifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [5, 10],
                    },
                  },
                  {
                    name: "preventOverflow",
                    options: {
                      rootBoundary: "viewport",
                      tether: false,
                      altAxis: true,
                    },
                  },
                ]}
                minTime={setHours(setMinutes(new Date(), 0), 10)}
                maxTime={setHours(setMinutes(new Date(), 0), 20)}
              />
            </fieldset>
          </div>
        </div>
        <p className={styles.FormText} style={{ fontSize: "10px" }}>
          By submitting the form, you agree to our Terms and Conditions and our
          Privacy Policy.
        </p>

        {loading ? (
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        ) : (
          <button type="submit" className={styles.button}>
            {btnText}
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
