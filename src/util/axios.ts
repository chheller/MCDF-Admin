import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ENDPOINT_API } from "../config/environment";
import { Store } from "redux";
import { store } from "../redux";

import { IRootState } from "../redux/reducers";
import { logout } from "../components/Login/redux/actions";

const axiosConfig: AxiosRequestConfig = {
  baseURL: ENDPOINT_API,
  timeout: 5000
};

const createAxiosInstance = (store: Store) => {
  const axiosInstance = axios.create(axiosConfig);
  const { dispatch, subscribe, getState } = store;
  axios.defaults.withCredentials = true;
  subscribe(() => {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = (getState() as IRootState).login.token;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    error => {
      const { status } = <AxiosResponse>error.response;
      if (status === 401) {
        logout()(dispatch);
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance(store);
