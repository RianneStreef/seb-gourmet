import React from "react";
import emailjs from "emailjs-com";

import { content } from "../../../content/languages";

import "./ContactForm.css";

const ContactForm = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", e.target, "!!!user id!!!")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact-form contact-item">
      <h3>{language.contactTitle}</h3>

      <div id="contact">
        <form onSubmit={sendEmail} className="contact-form" name="contact">
          <div className="form-input">
            <label>
              <div className="form-label">{language.contactName}</div>{" "}
              <input className="input" type="text" name="name" />
            </label>
          </div>
          <div className="form-input">
            <label>
              <div className="form-label">{language.contactEmail} </div>{" "}
              <input className="input" type="email" name="email" />
            </label>
          </div>
          <div className="form-input">
            <label>
              <div className="form-label"> {language.contactMessage}</div>{" "}
              <textarea className="input" name="message" rows={5}></textarea>
            </label>
          </div>
          <div className="button-container">
            <button className="button">{language.contactSend}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
