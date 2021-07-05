import React from "react";

import { Link } from "react-router-dom";

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
        Copyright
        <sup>
          {" "}
          <i class="far fa-copyright" />{" "}
        </sup>{" "}
        {language.copyright}
      </p>
      <p className="vts">
        {language.copyright2}
        <a href="http://www.vts-webdesign.com" target="blank">
          <b>VTS-WebDesign</b>
        </a>
        <Link to="/legal"> - Mentions Légales</Link>
      </p>
    </div>
  );
};

export default Copyright;
