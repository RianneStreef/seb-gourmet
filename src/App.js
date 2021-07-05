import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Legal from "./Components/Legal/Legal";

import "./App.css";

function App() {
  return (
    <Router basename="/seb-gourmet">
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/legal">
        <Legal />
      </Route>
    </Router>
  );
}

export default App;
