import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login/ui/Login';
import logo from '../logo.svg';
import { AppBody, AppHeader, AppLink, AppLogo } from './styles';
import Mods from '../components/Mods/ui/Mods';
import PrivateRoute from '../components/_shared/Router/PrivateRoute';

const About = () => {
  return (
    <div className={AppBody}>
      <header className={AppHeader}>
        <img src={logo} className={AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
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
        <PrivateRoute path="/mods" component={Mods} />
      </div>
    </Router>
  );
};

export default App;
