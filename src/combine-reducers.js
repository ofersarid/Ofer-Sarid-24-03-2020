import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { weather, search, forecast, favorites } from './services';

const combineReducer = history => combineReducers({
  weather: weather.reducer,
  search: search.reducer,
  forecast: forecast.reducer,
  favorites: favorites.reducer,
  router: connectRouter(history),
});

export default combineReducer;
