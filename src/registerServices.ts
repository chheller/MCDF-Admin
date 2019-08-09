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
import { AxiosInstance } from 'axios';

export interface Services {
  login: LoginApi;
  admin: AdministrationApi;
}

export const configureServices = (axios: AxiosInstance): Services => {
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
