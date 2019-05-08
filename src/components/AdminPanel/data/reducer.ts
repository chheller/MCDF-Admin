import { IModsActions } from './actions';
import { ModData } from '../types';

export const initialState = {
  mods: <ModData[]>[],
  stagedMods: <ModData[]>[]
};

export type AdminState = typeof initialState;

export default (state = initialState, action: IModsActions) => {
  switch (action.type) {
    case 'SET_MODS':
      const { mods } = action;
      return { ...state, mods };
    case 'STAGE_MOD': {
      const stagedMods = [...state.stagedMods, action.mod];
      return { ...state, stagedMods };
    }
    case 'UNSTAGE_MOD': {
      const stagedMods = [...state.stagedMods].filter(stagedMod => stagedMod !== action.mod);
      return { ...state, stagedMods };
    }
    default:
      return state;
  }
};
