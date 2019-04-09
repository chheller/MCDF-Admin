import { ILoginState } from '.';
import { IActionWithPayload } from '../../../redux/actions';
import { SET_AUTHENTICATED, SET_TOKEN } from './actions';

const initialState: ILoginState = {
  token: '',
  isAuthenticated: false
};
export default (state: ILoginState = initialState, action: IActionWithPayload): ILoginState => {
  switch (action.type) {
    case SET_TOKEN:
      const token = (action as IActionWithPayload<string>).payload;
      return { ...state, token };
    case SET_AUTHENTICATED:
      const isAuthenticated = (action as IActionWithPayload<boolean>).payload;
      return { ...state, isAuthenticated };
    default:
      return state;
  }
};
