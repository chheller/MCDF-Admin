import React from "react";
import logo from "../logo.svg";
import { AppHeader, AppBody, AppLogo, AppLink } from "./styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../components/Login/Login";

const About = () => {
  return (
    <div className={AppBody}>
      <header className={AppHeader}>
        <img src={logo} className={AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default App;
