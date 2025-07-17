import { Action, combineReducers } from 'redux';
import { carSliceReducer } from './CarSlice';

const appReducer = combineReducers({
  carsList: carSliceReducer,
});

const rootReducer = (state: any, action: Action) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
