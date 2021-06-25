import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import header1 from "../../images/header1.jpeg";
import header2 from "../../images/header2.jpeg";
import header3 from "../../images/header3.jpeg";

import { content } from "../../content/languages";

function Hero(props) {
  let { language, setLanguage } = props;

  language === "english"
    ? (language = content.english)
    : (language = content.french);
  return (
    <div className="hero" id="home">
      <Header language={language} setLanguage={setLanguage} />
      <AwesomeSlider animation="cubeAnimation" className="slider">
        <div data-src={header1} />
        <div data-src={header2} />
        <div data-src={header3} />
      </AwesomeSlider>

      <h1>Seb Gourmet Traiteur</h1>
    </div>
  );
}

export default Hero;
