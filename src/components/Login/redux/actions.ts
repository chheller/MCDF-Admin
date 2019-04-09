import { ThunkResult } from '../../../redux';
import { actionCreator } from '../../../redux/actions';
import { ENDPOINT_API } from '../../../config/environment';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';

export const setTokenAction = actionCreator<string>(SET_TOKEN);
export const setAuthenticated = actionCreator<boolean>(SET_AUTHENTICATED);

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
      dispatch(setAuthenticated(true));
    } catch (err) {
      dispatch(setTokenAction(''));
      dispatch(setAuthenticated(false));
      console.error('Invalid authentication');
      return;
    }
  };
};
