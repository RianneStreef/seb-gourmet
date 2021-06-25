import React from "react";
import Phone from "./Phone/Phone";
import Address from "./Address/Address";
import Mail from "./Mail/Mail";

import "./Footer.css";

import { content } from "../../content/languages";

const Footer = (props) => {
  console.log(props);
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);

  console.log(language.language);

  return (
    <div className="footer">
      <Phone language={language} />
      <Address language={language} />
      <Mail language={language} />
    </div>
  );
};

export default Footer;
