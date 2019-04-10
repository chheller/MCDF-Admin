import login, { ILoginState } from "../components/Login/redux/reducer";

export interface IRootState {
  login: ILoginState;
}

export default { login };
