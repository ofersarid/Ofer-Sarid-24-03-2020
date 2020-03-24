import { combineReducers } from 'redux-immutable';
import { weather, search, forecast, favorites } from './services';

const combineReducer = combineReducers({
  weather: weather.reducer,
  search: search.reducer,
  forecast: forecast.reducer,
  favorites: favorites.reducer,
});

export default combineReducer;
