import { ThunkResult, ThunkArguments } from '../../../redux';
import { Dispatch } from 'redux';
import { ModData, ServerStatus } from '../types';

const setMods = (mods: ModData[]) => <const>{ type: 'SET_MODS', mods };
export const stageMod = (mod: ModData) => <const>{ type: 'STAGE_MOD', mod };
export const unstageMod = (mod: ModData) => <const>{ type: 'UNSTAGE_MOD', mod };
export const disableModAction = (mod: ModData) => <const>{ type: 'DISABLE_MOD', mod };
export const enableModAction = (mod: ModData) => <const>{ type: 'ENABLE_MOD', mod };
export const setServerStatus = (serverStatus: ServerStatus) =>
  <const>{ type: 'SET_SERVER_STATUS', serverStatus };
export type IModsActions = ReturnType<
  | typeof setMods
  | typeof stageMod
  | typeof unstageMod
  | typeof enableModAction
  | typeof disableModAction
  | typeof setServerStatus
>;

export const fetchServerStatus = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const response = await services.admin.getServerStatus();
    dispatch(setServerStatus(response));
  };
};
export const fetchMods = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const mods = await services.admin.fetchMods();
    dispatch(setMods(mods));
  };
};

export const disableMod = (mod: ModData): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const success = await services.admin.disableMod(mod);
    if (success) {
      dispatch(disableModAction(mod));
    } else {
      // IDK some error handling
    }
  };
};

export const enableMod = (mod: ModData): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const success = await services.admin.disableMod(mod);
    if (success) {
      dispatch(enableModAction(mod));
    } else {
      // IDK some error handling
    }
  };
};
