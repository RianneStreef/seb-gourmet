import React from "react";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";

import { content } from "../../content/languages";

import "./Contact.css";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <>
      <div className="contact">
        <div className="contact-options">
          <Location language={language} />
          <ContactForm language={language} languageToUse={languageToUse} />
        </div>
      </div>
    </>
  );
};

export default Contact;
