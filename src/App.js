import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Legal from "./Components/Legal/Legal";

import { content } from "./content/languages";

import "./App.css";

function App() {
  let [language, setLanguage] = useState("french");
  let languageToUse = content.french;

  return (
    <Router basename="/seb-gourmet">
      <Route exact path="/">
        <Home
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </Route>

      <Route path="/legal">
        <Legal
          language={language}
          setLanguage={setLanguage}
          languageToUse={languageToUse}
        />
      </Route>
    </Router>
  );
}

export default App;
