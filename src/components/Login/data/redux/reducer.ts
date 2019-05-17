import { ILoginActions } from './actions';

export const initialState = {
  token: '',
  isAuthenticated: false
};

export type LoginState = typeof initialState;

export default (state: LoginState = initialState, action: ILoginActions): LoginState => {
  switch (action.type) {
    case 'SET_TOKEN':
      const { token } = action;
      return { ...state, token };
    case 'SET_AUTHENTICATED':
      const { isAuthenticated } = action;
      return { ...state, isAuthenticated };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};
