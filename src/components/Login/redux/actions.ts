import { ThunkResult } from "../../../redux";
import axios from "../../../util/axios";
import { Dispatch } from "redux";
const setTokenAction = (token: string) => <const>{ type: "SET_TOKEN", token };
const setAuthenticatedAction = (isAuthenticated: boolean) =>
  <const>{ type: "SET_AUTHENTICATED", isAuthenticated };
const logoutAction = () => <const>{ type: "LOGOUT" };

export type ILoginActions = ReturnType<
  typeof setTokenAction | typeof setAuthenticatedAction | typeof logoutAction
>;

export const fetchToken = (
  username: string,
  password: string
): ThunkResult<Promise<void>> => {
  return async dispatch => {
    try {
      const response = await axios.post<{ token: string }>("/authn/login", {
        username,
        password
      });
      const { token } = response.data;
      dispatch(setTokenAction(token));
      dispatch(setAuthenticatedAction(true));
    } catch (err) {
      dispatch(logoutAction());
      console.error("Invalid authentication");
      return;
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch(logoutAction());
  };
};
