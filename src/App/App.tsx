import React, { FC } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import LoginPage from '../components/Login/ui/Login';

import PrivateRoute from '../components/_shared/Router/PrivateRoute';
import { AdministrationPage } from '../components/AdminPanel/ui/AdminPage';

const IndexPage: FC<{}> = () => {
  return <div>Index</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={IndexPage} />
        <PrivateRoute path="/admin" component={AdministrationPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
};

export default App;
