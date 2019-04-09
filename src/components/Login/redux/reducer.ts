import { ILoginState } from '.';
import { Action } from 'redux';
import { SET_TOKEN } from './actions';
import { IActionWithPayload, IAction } from '../../../redux/actions';

const initialState: ILoginState = {
  token: ''
};
export default (
  state: ILoginState = initialState,
  action: IAction & IActionWithPayload<any>
): ILoginState => {
  switch (action.type) {
    case SET_TOKEN:
      const token = (action as IActionWithPayload<string>).payload;
      return { ...state, token };
    default:
      return state;
  }
};
