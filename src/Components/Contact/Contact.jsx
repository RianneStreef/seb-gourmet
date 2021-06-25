import React from "react";
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";

import "./Contact.css";

const Contact = (props) => {
  let { language } = props;

  return (
    <div className="contact" id="contact">
      <Location language={language} />
      <ContactForm language={language} />
    </div>
  );
};

export default Contact;
