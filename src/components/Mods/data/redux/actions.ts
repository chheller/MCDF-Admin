import { ThunkResult, ThunkArguments } from '../../../../redux';
import { Dispatch } from 'redux';
import { ModData } from '../../types';

const setMods = (mods: ModData[]) => <const>{ type: 'SET_MODS', mods };
export type IModsActions = ReturnType<typeof setMods>;

export const fetchMods = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch, _, { services }: ThunkArguments) => {
    const mods = await services.mods.fetchMods();
    console.log({ mods });
    dispatch(setMods(mods));
  };
};
