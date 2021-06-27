import React from "react";
import "./Header.css";
import { content } from "../../../content/languages";

import flagEn from "../../../images/icon-en.png";
import flagFr from "../../../images/icon-fr.png";

import { Link } from "react-scroll";

function Header(props) {
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : // eslint-disable-next-line
      (languageToUse = content.french);

  function handleSetLanguage(language) {
    setLanguage(language);
    storeLanguageInLocalStorage(language);
  }

  function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
  }
  function openNav() {
    document.getElementById("nav").classList.remove("hidden-mobile");
    document.getElementById("openNav").style.display = "none";
  }

  function closeNav() {
    document.getElementById("nav").classList.add("hidden-mobile");
    document.getElementById("openNav").style.display = "flex";
  }

  return (
    <header className="header">
      <div>
        <h1 className="name">Seb Gourmet</h1>
        <h1 className="title">Traiteur</h1>
      </div>
      <div className="menu-button-container">
        <button className="hidden-desktop top header-button" id="openNav">
          <i className="fas fa-bars" onClick={openNav}></i>
        </button>
      </div>
      <div className="header-menu">
        <div id="nav" className="nav main-menu hidden-mobile top-header">
          <button
            className="nav__link hidden-desktop header-button"
            onClick={closeNav}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="menu-list">
            <li className="menu-item">
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                <p className="nav-link">{language.menuHome}</p>
              </Link>
            </li>
            <span className="dot">&#8226;</span>

            <li className="menu-item">
              <Link to="welcome" spy={true} smooth={true}>
                <p className="nav-link">{language.menuWelcome}</p>
              </Link>
            </li>
            <span className="dot">&#8226;</span>

            <li className="menu-item">
              <Link to="suggestions" spy={true} smooth={true}>
                <p className="nav-link">{language.menuSuggestions}</p>
              </Link>
            </li>
            <span className="dot">&#8226;</span>

            <li className="menu-item">
              <Link to="insta" spy={true} smooth={true}>
                <p className="nav-link">{language.menuInsta}</p>
              </Link>
            </li>
            <span className="dot">&#8226;</span>
            <li className="menu-item">
              <Link to="contact" spy={true} smooth={true}>
                <p className="nav-link">{language.menuContact}</p>
              </Link>
            </li>
            <li>
              {language.language === "english" ? (
                <img
                  className="language-icon"
                  src={flagFr}
                  onClick={() => handleSetLanguage("french")}
                  alt="Set language to French"
                />
              ) : (
                <img
                  className="language-icon"
                  src={flagEn}
                  onClick={() => handleSetLanguage("english")}
                  alt="Set language to English"
                />
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
