import { Dispatch } from 'redux';
import { ThunkArguments, ThunkResult } from '../../../../redux';

export type ILoginActions = ReturnType<
  typeof setTokenAction | typeof setAuthenticatedAction | typeof logoutAction
>;

const setTokenAction = (token: string) => <const>{ type: 'SET_TOKEN', token };
const logoutAction = () => <const>{ type: 'LOGOUT' };
const setAuthenticatedAction = (isAuthenticated: boolean) =>
  <const>{ type: 'SET_AUTHENTICATED', isAuthenticated };

export const refreshAuthentication = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    try {
      const claim = await services.login.refresh();
      dispatch(setTokenAction(claim));
      dispatch(setAuthenticatedAction(true));
    } catch (err) {
      logout();
    }
  };
};

export const login = (username: string, password: string): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const claim = await services.login.authenticate(username, password);
    dispatch(setTokenAction(claim));
    dispatch(setAuthenticatedAction(true));
  };
};

export const logout = (): ((dispatch: Dispatch) => void) => {
  return (dispatch: Dispatch) => {
    dispatch(logoutAction());
  };
};
