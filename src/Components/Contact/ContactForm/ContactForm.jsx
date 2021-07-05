import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { content } from "../../../content/languages";

import "./ContactForm.css";

const ContactForm = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(language);
  console.log(languageToUse.language);

  const [state, handleSubmit] = useForm("mqkwlajv");
  if (state.succeeded) {
    return <p>{languageToUse.thankYouMsg}</p>;
  }

  return (
    <div className="contact-form contact-item">
      <h3 className="contact-title">{languageToUse.contactMainTitle}</h3>

      <div id="contact">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">{languageToUse.contactEmail}</label>
          <input id="email" type="email" name="email" className="input" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="name">{languageToUse.contactName}</label>
          <input id="name" type="text" name="name" className="input" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <label htmlFor="email">{languageToUse.contactMessage}</label>
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
              className="button border"
            >
              {languageToUse.contactSend}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
