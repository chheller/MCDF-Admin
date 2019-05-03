import { IModsActions } from './actions';
import { ModData } from '../../types';

export const initialState = {
  mods: <ModData[]>[]
};

export type ModsState = typeof initialState;

export default (state = initialState, action: IModsActions) => {
  switch (action.type) {
    case 'SET_MODS':
      const { mods } = action;
      return { ...state, mods };
    default:
      return state;
  }
};
