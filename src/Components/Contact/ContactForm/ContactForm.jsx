import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { content } from "../../../content/languages";

import "./ContactForm.css";

const ContactForm = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  const [state, handleSubmit] = useForm("mqkwlajv");
  if (state.succeeded) {
    return <p>{language.thankYouMsg}</p>;
  }

  return (
    <div className="contact-form contact-item">
      <h3 className="contact-title">{language.contactTitle}</h3>

      <div id="contact">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">{language.contactEmail}</label>
          <input id="email" type="email" name="email" className="input" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="name">{language.contactName}</label>
          <input id="name" type="text" name="name" className="input" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">{language.contactMessage}</label>
          <textarea id="message" name="message" className="input" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="buttonContainer">
            <button
              type="submit"
              disabled={state.submitting}
              className="button"
            >
              {language.contactSend}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
