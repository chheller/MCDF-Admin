export { default as LoginReducer } from './reducer';
import * as LoginActions from './actions';

export { LoginActions };
export interface ILoginState {
  token: string;
  isAuthenticated: boolean;
}
