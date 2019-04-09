import { ENDPOINT_API } from '../../../config/environment';
import { ThunkResult } from '../../../redux';

const setTokenAction = (token: string) => <const>{ type: 'SET_TOKEN', token };
const setAuthenticatedAction = (isAuthenticated: boolean) =>
  <const>{ type: 'SET_AUTHENTICATED', isAuthenticated };

export type ILoginActions = ReturnType<typeof setTokenAction | typeof setAuthenticatedAction>;

export const fetchToken = (username: string, password: string): ThunkResult<Promise<void>> => {
  return async dispatch => {
    const config = {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    try {
      const response = await fetch(`${ENDPOINT_API}/authn/login`, config);
      if (!response.ok) throw response;
      const data = await response.json();
      const { token } = data;
      dispatch(setTokenAction(token));
      dispatch(setAuthenticatedAction(true));
    } catch (err) {
      dispatch(setTokenAction(''));
      dispatch(setAuthenticatedAction(false));
      console.error('Invalid authentication');
      return;
    }
  };
};
