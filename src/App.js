import { React, useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Welcome from "./Components/Welcome/Welcome";
import Suggestions from "./Components/Suggestions/Suggestions";
import InstaFeed from "./Components/InstaFeed/InstaFeed";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";

import { content } from "./content/languages";

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");

  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "french"
  );

  let languageToUse = content.english;
  console.log(language);

  return (
    <div className="App">
      <Hero
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <Welcome language={language} languageToUse={languageToUse} />
      <Suggestions language={language} languageToUse={languageToUse} />
      <InstaFeed language={language} languageToUse={languageToUse} />
      <Contact language={language} languageToUse={languageToUse} />
      <Footer language={language} languageToUse={languageToUse} />
      <Copyright language={language} languageToUse={languageToUse} />
    </div>
  );
}

export default App;
