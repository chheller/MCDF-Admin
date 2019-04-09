import { ILoginState } from '.';
import { Action } from 'redux';
import { SET_TOKEN, SET_AUTHENTICATED } from './actions';
import { IActionWithPayload, IAction } from '../../../redux/actions';

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
