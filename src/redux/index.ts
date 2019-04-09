import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { NODE_ENV } from '../config/environment';
import * as reducers from './reducers';
import { IRootActions } from './actions';

export type ThunkResult<R> = ThunkAction<R, reducers.IRootState, undefined, IRootActions>;

const rootReducer = combineReducers(reducers);

const configureStore = (initialState: any = {}) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancers = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);
  const hot = (module as any)['hot'];
  if (NODE_ENV !== 'production' && hot) {
    hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }
  return store;
};

export default configureStore;
