import React from "react";

import { content } from "../../content/languages";

const InstaFeed = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="insta">
      <h2>{language.instaFeed}</h2>
      {/* <div className="elfsight-app-6170eb17-0cb7-4059-8fbe-24a99c7b7692"></div> */}
    </div>
  );
};

export default InstaFeed;
