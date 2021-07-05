import React from "react";
import { content } from "../../content/languages";
import "./Welcome.css";
import imgWelcome from "../../images/rond-bienvenue.png";

const Welcome = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="welcome" id="welcome">
      <div className="welcome-left">
        <h2 className="welcome-title">{language.welcomeHeader}</h2>
        <p className="line-height">{language.welcomeText}</p>
        <p className="line-height">{language.welcomeText2}</p>
      </div>
      <div className="welcome-right">
        <img src={imgWelcome} alt="Pain" className="welcome-img" />
      </div>
    </div>
  );
};

export default Welcome;