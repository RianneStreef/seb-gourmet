import { React } from "react";
import "../../App.css";
import Hero from "../Hero/Hero";
import Welcome from "../Welcome/Welcome";
import Suggestions from "../Suggestions/Suggestions";
import InstaFeed from "../InstaFeed/InstaFeed";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Copyright from "../Copyright/Copyright";

import banner from "../../images/banner.jpg";
import bannerEN from "../../images/bannerEN.jpg";
import banner2 from "../../images/banner2.jpg";

function App(props) {
  let { language, setLanguage, languageToUse } = props;

  // let languageStoredInLocalStorage = localStorage.getItem("language");

  // languageStoredInLocalStorage ? languageStoredInLocalStorage : "french"
  // );

  return (
    <div className="App">
      <Hero
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Welcome language={language} languageToUse={languageToUse} />

      {language === "french" ? (
        <img
          src={banner}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      ) : (
        <img
          src={bannerEN}
          className="banner"
          alt="Le partenaire gourmet pour vos évenéments"
        />
      )}

      <Suggestions language={language} languageToUse={languageToUse} />
      <InstaFeed language={language} languageToUse={languageToUse} />

      <Contact language={language} languageToUse={languageToUse} />
      <img
        src={banner2}
        className="banner banner2"
        alt="Le partenaire gourmet pour vos évenéments"
      />
      <Footer language={language} languageToUse={languageToUse} />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
}

export default App;
