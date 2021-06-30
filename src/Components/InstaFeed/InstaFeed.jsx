import React from "react";

import "./InstaFeed.css";

import { content } from "../../content/languages";

const InstaFeed = (props) => {
  let { language } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <>
      <div id="insta" className="insta">
        <h2>{language.instaFeed}</h2>
        <div data-mc-src="f10e8e66-aada-4742-9b38-f3d4068eec81#instagram"></div>
      </div>
    </>
  );
};

export default InstaFeed;
