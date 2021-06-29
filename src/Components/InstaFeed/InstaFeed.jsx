import React from "react";

import "./InstaFeed.css";

import { content } from "../../content/languages";

const InstaFeed = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div id="insta" className="insta">
      <h2>{language.instaFeed}</h2>
      {/* <div className="elfsight-app-6170eb17-0cb7-4059-8fbe-24a99c7b7692"></div> */}

      <div data-mc-src="09ca44f8-ca9d-46f8-b4c5-a05206f21743#instagram"></div>
    </div>
  );
};

export default InstaFeed;
