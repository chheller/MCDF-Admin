import login, {
  initialState as loginState,
  LoginState
} from '../components/Login/data/redux/reducer';

import mods, { initialState as modState, ModsState } from '../components/Mods/data/redux/reducer';
export interface IRootState {
  login: LoginState;
  mods: ModsState;
}
export const initialState: IRootState = {
  login: loginState,
  mods: modState
};

export default { login, mods };
