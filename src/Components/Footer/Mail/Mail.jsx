import React from "react";

import { content } from "../../../content/languages";

const Mail = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="footer-item">
      <div className="footer-icon">
        <i className="far fa-envelope" />
      </div>
      <h4>{language.mailUs}</h4>
      <a href="mailto:sebgourmettraiteur@orange.fr">
        <p>
          <i>sebgourmettraiteur@orange.fr</i>
        </p>
      </a>
    </div>
  );
};

export default Mail;
