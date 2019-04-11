import { ThunkResult } from "../../../redux";
import axios from "../../../util/axios";
import { Dispatch } from "redux";
import Login from "../Login";

const setTokenAction = (token: string) => <const>{ type: "SET_TOKEN", token };
const logoutAction = () => <const>{ type: "LOGOUT" };
const setAuthenticatedAction = (isAuthenticated: boolean) =>
  <const>{ type: "SET_AUTHENTICATED", isAuthenticated };

export type ILoginActions = ReturnType<
  typeof setTokenAction | typeof setAuthenticatedAction | typeof logoutAction
>;

export const login = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(setTokenAction(token));
    dispatch(setAuthenticatedAction(true));
  };
};

export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch(logoutAction());
  };
};

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
      dispatch(login(token));
    } catch (err) {
      dispatch(logoutAction());
      console.error("Invalid authentication");
      return;
    }
  };
};
