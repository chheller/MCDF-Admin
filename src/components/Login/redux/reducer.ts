import { ILoginActions } from './actions';

const initialState = {
  token: '',
  isAuthenticated: false
};

export type ILoginState = typeof initialState;

export default (state: ILoginState = initialState, action: ILoginActions): ILoginState => {
  switch (action.type) {
    case 'SET_TOKEN':
      const { token } = action;
      return { ...state, token };
    case 'SET_AUTHENTICATED':
      const { isAuthenticated } = action;
      return { ...state, isAuthenticated };
    default:
      return state;
  }
};
