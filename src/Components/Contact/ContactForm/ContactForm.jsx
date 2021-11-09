import React from "react";

import { content } from "../../../content/languages";

import "./ContactForm.css";

const ContactForm = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  return (
    <div className="contact-form contact-item">
      <h3 className="contact-title">{languageToUse.contactMainTitle}</h3>

      <div id="contact">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          netlify-honeypot="bot-field"
          success="/success"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact-form"
            value="contact-form"
          />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <p className="form-items">
            <label htmlFor="name">{languageToUse.contactName}</label> <br />
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">{languageToUse.contactEmail} </label>
            <br />
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">{languageToUse.contactMessage}</label>{" "}
            <br />
            <textarea
              className="contact-input"
              id="message"
              name="message"
              required
              rows="3"
            ></textarea>
          </p>
          <div className="button-container">
            <button className="button" type="submit" value="Submit message">
              {languageToUse.contactSend}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
