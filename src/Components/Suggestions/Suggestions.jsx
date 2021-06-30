import React from "react";
import "./Suggestions.css";

import { content } from "../../content/languages";

import tilde from "../../images/tilde.svg";

const Suggestions = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="suggestions" className="suggestions">
      <h2 className="suggestion-title">{language.suggestionsHeader}</h2>
      <div className="suggestion-cards-display">
        <div className="suggestion-card">
          <h3 className="menu-title">{language.suggestion1Title}</h3>
          <p className="line-height">{language.suggestion1p1}</p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p className="line-height">{language.suggestion1p2}</p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>{" "}
          <p className="line-height">{language.suggestion1p3}</p>
        </div>
        <div className="suggestion-card">
          <h3 className="menu-title">{language.suggestion2Title}</h3>
          <p className="line-height">{language.suggestion2p1}</p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p>{language.suggestion2p2}</p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p className="line-height">{language.suggestion2p3}</p>
        </div>
        <div className="suggestion-card">
          <h3 className="menu-title">{language.suggestion3Title}</h3>
          <p className="meal-title">{language.suggestion3t1}</p>
          <p className="meal-description line-height">
            {language.suggestion3p1}
          </p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p className="meal-title">{language.suggestion3t2}</p>
          <p className="meal-description line-height">
            {language.suggestion3p2}
          </p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p className="meal-title">{language.suggestion3t3}</p>
          <p p className="meal-description line-height">
            {language.suggestion3p3}
          </p>
          <div className="dots">
            <img className="tilde" src={tilde} alt="break" />
          </div>
          <p className="meal-title">{language.suggestion3t4}</p>
          <p p className="meal-description line-height">
            {language.suggestion3p4}
          </p>
        </div>
      </div>
      <i>
        <p className="more-info">{language.moreInfo}</p>
      </i>
    </div>
  );
};

export default Suggestions;
