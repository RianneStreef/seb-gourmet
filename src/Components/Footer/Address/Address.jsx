import React from "react";

import { content } from "../../../content/languages";

const Address = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="footer-item">
      <div className="footer-icon">
        <i className="fas fa-map-pin"></i>
      </div>
      <h4>{language.address}</h4>
      <p>{language.ourAddress}</p>
    </div>
  );
};

export default Address;
