import { ILoginState } from ".";
import { Action } from "redux";

const initialState: ILoginState = {};
export default (
  state: ILoginState = initialState,
  action: Action
): ILoginState => {
  switch (action.type) {
    default:
      return state;
  }
};
