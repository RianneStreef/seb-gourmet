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
      <h2>{language.welcomeHeader}</h2>
      <p>{language.welcomeText}</p>
    </div>
  );
};

export default Welcome;
