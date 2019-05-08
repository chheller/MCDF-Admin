import { ThunkResult, ThunkArguments } from '../../../redux';
import { Dispatch } from 'redux';
import { ModData } from '../types';

const setMods = (mods: ModData[]) => <const>{ type: 'SET_MODS', mods };
export const stageMod = (mod: ModData) => <const>{ type: 'STAGE_MOD', mod };
export const unstageMod = (mod: ModData) => <const>{ type: 'UNSTAGE_MOD', mod };
export type IModsActions = ReturnType<typeof setMods | typeof stageMod | typeof unstageMod>;

export const fetchMods = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const mods = await services.mods.fetchMods();
    dispatch(setMods(mods));
  };
};
