import React from "react";
import Phone from "./Phone/Phone";
import Address from "./Address/Address";
import Mail from "./Mail/Mail";

import "./Footer.css";

import { content } from "../../content/languages";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : // eslint-disable-next-line
      (languageToUse = content.french);

  return (
    <div className="footer">
      <Phone language={language} />
      <Address language={language} />
      <Mail language={language} />
    </div>
  );
};

export default Footer;
