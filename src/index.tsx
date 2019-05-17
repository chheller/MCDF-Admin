import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';
import App from './App/App';
import './index.css';
import configureStore from './redux';
import * as serviceWorker from './serviceWorker';
import { LoginApi, LiveLoginApi, LocalLoginApi } from './components/Login/data/api';
import { NODE_ENV } from './config/environment';
import { LiveLoginGateway, LocalLoginGateway } from './components/Login/data/login-gateway';
import { createAxiosInstance, configureAxiosInstance } from './util/axios';
import { AxiosInstance } from 'axios';
import { Store } from 'redux';
import {
  LiveAuthenticateGateway,
  LocalAuthenticateGateway
} from './components/Login/data/authenticate-gateway';
import { ModsApi, LiveModsApi, LocalModsApi } from './components/Mods/data/api';
import { LiveModsGateway, LocalModsGateway } from './components/Mods/data/mods-gateway';

export interface Services {
  login: LoginApi;
  mods: ModsApi;
}
const configureServices = (axios: AxiosInstance): Services => {
  return NODE_ENV === 'production'
    ? {
        login: new LiveLoginApi(new LiveLoginGateway(axios), new LiveAuthenticateGateway(axios)),
        mods: new LiveModsApi(new LiveModsGateway(axios))
      }
    : {
        login: new LocalLoginApi(new LocalLoginGateway(axios), new LocalAuthenticateGateway(axios)),
        mods: new LocalModsApi(new LocalModsGateway(axios))
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
