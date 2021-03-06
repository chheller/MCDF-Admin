import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { NODE_ENV } from '../config/environment';
import RootState, { RootReduxState, initialState } from './reducers';
import { IRootActions } from './actions';
import { Services } from '../registerServices';
export type ThunkResult<R> = ThunkAction<R, RootReduxState, ThunkArguments, IRootActions>;

const rootReducer = combineReducers(RootState);

export type ThunkArguments = {
  services: Services;
};

const configureStore = (
  extraArguments: ThunkArguments,
  rootState: RootReduxState = initialState
) => {
  const middlewares = [thunkMiddleware.withExtraArgument({ ...extraArguments })];
  const middlewareEnhancers = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, rootState, composedEnhancers);
  const hot = (module as any)['hot'];
  if (NODE_ENV !== 'production' && hot) {
    hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }
  return store;
};

export default configureStore;
