import { combineReducers } from 'redux-immutable';
import { weather } from './services';

const combineReducer = combineReducers({
  weather: weather.reducer,
});

export default combineReducer;
