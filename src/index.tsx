import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import 'typeface-roboto';
import App from './App/App';
import './index.css';
import configureStore from './redux';
import { configureServices } from './registerServices';
import * as serviceWorker from './serviceWorker';
import { configureAxiosInstance, createAxiosInstance } from './util/axios';

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
  const store = configureStore({ services });
  configureAxiosInstance(axios, store);
  render(store);
  serviceWorker.unregister();
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
