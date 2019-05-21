import login, { initialState as loginState } from '../components/Login/data/redux/reducer';

import admin, { initialState as modState } from '../components/AdminPanel/data/reducer';

export const initialState = {
  login: loginState,
  admin: modState
};

export type RootReduxState = typeof initialState;

export default { login, admin };
