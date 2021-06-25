import React from "react";

import { content } from "../../../content/languages";

const Phone = (props) => {
  console.log(props);

  let { language } = props;
  console.log(language);

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  return (
    <div className="footer-item">
      <div className="footer-icon">
        <i className="far fa-comments" />
      </div>
      <h4>{language.callUs}</h4>
      <a href="tel:0033679783308">
        <p>+33 (0)6 79 78 33 08</p>
      </a>
    </div>
  );
};

export default Phone;
