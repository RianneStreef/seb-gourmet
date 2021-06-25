import React from "react";
import "./Suggestions.css";

import { content } from "../../content/languages";

const Suggestions = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="suggestions" className="suggestions">
      <h2>{language.suggestionsHeader}</h2>
      <div className="suggestion-cards-display">
        <div className="suggestion-card">
          <h3>{language.suggestion1Title}</h3>
          <p>{language.suggestion1p1}</p>
          <p>{language.suggestion1p2}</p>
          <p>{language.suggestion1p3}</p>
          <p className="more-info">{language.moreInfo1}</p>
        </div>
        <div className="suggestion-card">
          <h3>{language.suggestion2Title}</h3>
          <p>{language.suggestion2p1}</p>
          <p>{language.suggestion2p2}</p>
          <p>{language.suggestion2p3}</p>
          <p className="more-info">{language.moreInfo2}</p>
        </div>
        <div className="suggestion-card">
          <h3>{language.suggestion3Title}</h3>
          <p>{language.suggestion3p1}</p>
          <p>{language.suggestion3p2}</p>
          <p>{language.suggestion3p3}</p>
          <p className="more-info">{language.moreInfo2}</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
