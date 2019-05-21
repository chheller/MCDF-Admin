import { AxiosInstance } from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import 'typeface-roboto';
import App from './App/App';
import {
  LiveAdministrationGateway,
  LocalAdministrationGateway
} from './components/AdminPanel/data/admin-gateway';
import {
  AdministrationApi,
  LiveAdministrationApi,
  LocalAdministrationApi
} from './components/AdminPanel/data/api';
import { LiveModsGateway, LocalModsGateway } from './components/AdminPanel/data/mods-gateway';
import { LiveLoginApi, LocalLoginApi, LoginApi } from './components/Login/data/api';
import {
  LiveAuthenticateGateway,
  LocalAuthenticateGateway
} from './components/Login/data/authenticate-gateway';
import { NODE_ENV } from './config/environment';
import './index.css';
import configureStore from './redux';
import * as serviceWorker from './serviceWorker';
import { configureAxiosInstance, createAxiosInstance } from './util/axios';

export interface Services {
  login: LoginApi;
  admin: AdministrationApi;
}
const configureServices = (axios: AxiosInstance): Services => {
  return NODE_ENV === 'production'
    ? {
        login: new LiveLoginApi(new LiveAuthenticateGateway(axios)),
        admin: new LiveAdministrationApi(
          new LiveModsGateway(axios),
          new LiveAdministrationGateway(axios)
        )
      }
    : {
        login: new LocalLoginApi(new LocalAuthenticateGateway(axios)),
        admin: new LocalAdministrationApi(
          new LocalModsGateway(axios),
          new LocalAdministrationGateway(axios)
        )
      };
};

const render = (store: Store) => {
  return ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

(async () => {
  const axios = createAxiosInstance();
  const services = configureServices(axios);
  console.log({ services });
  const store = configureStore({ services });
  configureAxiosInstance(axios, store);
  render(store);
  serviceWorker.unregister();
})();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
