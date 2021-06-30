import React from "react";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";

import { content } from "../../content/languages";

import "./Contact.css";

const Contact = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  return (
    <>
      <h2 className="contact-id" id="contact">
        Contact
      </h2>

      <div className="contact">
        <div className="contact-options">
          <Location language={language} />
          <ContactForm language={language} />
        </div>
      </div>
    </>
  );
};

export default Contact;
