import React from "react";
import { content } from "../../content/languages";

import "./Copyright.css";

const Copyright = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright <i className="far fa-copyright" /> {language.copyright}
        <a href="http://www.vts-webdesign.com" target="blank">
          VTS Web Design
        </a>
      </p>
    </div>
  );
};

export default Copyright;
