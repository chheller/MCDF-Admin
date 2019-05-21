import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { ENDPOINT_API } from '../config/environment';
import { Store } from 'redux';
import { RootReduxState } from '../redux/reducers';
import { logout } from '../components/Login/data/redux/actions';

const axiosConfig: AxiosRequestConfig = {
  baseURL: ENDPOINT_API,
  timeout: 5000
};

export const createAxiosInstance = () => {
  const axiosInstance = axios.create(axiosConfig);

  return axiosInstance;
};

export const configureAxiosInstance = (instance: AxiosInstance, store: Store) => {
  const { dispatch, subscribe, getState } = store;
  axios.defaults.withCredentials = true;
  subscribe(() => {
    instance.defaults.headers.common['Authorization'] = (getState() as RootReduxState).login.token;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    error => {
      const { status } = <AxiosResponse>error.response;
      if (status === 401) {
        logout()(dispatch);
      }
      return Promise.reject(error);
    }
  );
};
