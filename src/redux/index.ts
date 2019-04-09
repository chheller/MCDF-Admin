import thunkMiddleware from "redux-thunk";
import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
  AnyAction,
  Reducer
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers";
import { NODE_ENV } from "../config/environment";

const rootReducer = combineReducers(reducers);

const configureStore = (initialState: reducers.IRootState = {}) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancers = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  const hot = (module as any)["hot"];
  if (NODE_ENV !== "production" && hot) {
    hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
};

export default configureStore;
