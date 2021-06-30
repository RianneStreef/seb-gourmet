import React from "react";
import { content } from "../../content/languages";
import "./Welcome.css";

const Welcome = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="welcome" id="welcome">
      <h2 className="welcome-title">{language.welcomeHeader}</h2>
      <p className="line-height">{language.welcomeText}</p>
      <p className="line-height">{language.welcomeText2}</p>
    </div>
  );
};

export default Welcome;
