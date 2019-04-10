import { IModsActions } from "./actions";

const initialState = {
  mods: [""]
};

export type IModsState = typeof initialState;

export default (state = initialState, action: IModsActions) => {
  switch (action.type) {
    case "SET_MODS":
      const { mods } = action;
      return { ...state, mods };
  }
};
