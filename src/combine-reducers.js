import { combineReducers } from 'redux-immutable';
import { weather, search } from './services';

const combineReducer = combineReducers({
  weather: weather.reducer,
  search: search.reducer,
});

export default combineReducer;
