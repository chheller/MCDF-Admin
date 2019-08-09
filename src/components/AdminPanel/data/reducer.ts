import { IModsActions } from './actions';
import { ModData, ServerStatus } from '../types';

export const initialState = {
  mods: <ModData[]>[],
  stagedMods: <ModData[]>[],
  serverStatus: ServerStatus.unknown
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
    case 'SET_SERVER_STATUS': {
      const { serverStatus } = action;
      return { ...state, serverStatus };
    }
    default:
      return state;
  }
};
