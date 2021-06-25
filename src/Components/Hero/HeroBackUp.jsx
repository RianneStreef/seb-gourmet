import React from "react";
import "./Hero.css";
import Header from "./Header/Header";

import { content } from "../../content/languages";

function Hero(props) {
  let { language, setLanguage } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="Hero">
      <Header language={language} setLanguage={setLanguage} />
      <h1>Seb Gourmet Traiteur</h1>
    </div>
  );
}

export default Hero;
