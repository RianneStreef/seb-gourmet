import React from "react";
import "./Location.css";

import { content } from "../../../content/languages";

const Location = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="location contact-item">
      <iframe
        title="location"
        src="https://maps.google.com/maps?q=Villartier%2073440%20Les%20Belleville%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Location;
