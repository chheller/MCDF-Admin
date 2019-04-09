import { Action } from 'redux';

export type IAction = Action;

export interface IActionWithPayload<T = any> extends IAction {
  readonly payload: T;
}
interface IActionCreator<T> {
  readonly type: string;
  (payload: T): IActionWithPayload<T>;
}

interface IActionCreatorVoid {
  readonly type: string;
}

export const actionCreator = <T>(type: string): IActionCreator<T> =>
  Object.assign((payload: T): any => ({ type, payload }), {
    type
  });

export const actionCreatorVoid = (type: string): IActionCreatorVoid =>
  Object.assign((): any => ({ type }), {
    type,
    test(action: IAction): action is IAction {
      return action.type === type;
    }
  });
