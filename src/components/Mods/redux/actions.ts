import { ThunkResult } from "../../../redux";
import { Dispatch } from "redux";

const setMods = (mods: string[]) => <const>{ type: "SET_MODS", mods };
export type IModsActions = ReturnType<typeof setMods>;

export const fetchMods = (): ThunkResult<Promise<void>> => {
  return async (dispatch: Dispatch) => {
    const fauxFetch = await Promise.resolve(["testmod-1.jar", "testmod-2.jar"]);
    dispatch(setMods(fauxFetch));
  };
};
