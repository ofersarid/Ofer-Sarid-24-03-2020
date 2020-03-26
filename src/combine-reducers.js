import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import { search, forecast, favorites, user } from './services';

const combineReducer = history => combineReducers({
  search: search.reducer,
  forecast: forecast.reducer,
  favorites: favorites.reducer,
  user: user.reducer,
  router: connectRouter(history),
});

export default combineReducer;
