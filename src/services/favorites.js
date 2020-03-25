import { fromJS } from 'immutable';
import { reactLocalStorage } from 'reactjs-localstorage';
// import axios from 'axios';

const ADD = 'FAVORITES/ADD';
const REMOVE = 'FORECAST/REMOVE';
const STORE_FORECASTS = 'FORECAST/STORE_FORECASTS';
// const API_KEY = 'AEihxQE2Ak5AlcuU8ZyKfPDhwBgAlAG8';

const reducer = (state = fromJS({
  locationKeys: reactLocalStorage.getObject('favorites', [], true) || [],
  forecasts: [],
}), action) => {
  let newState;
  switch (action.type) {
    case ADD:
      newState = state.get('locationKeys').push(action.locationKey);
      reactLocalStorage.setObject('favorites', newState.toJS());
      return state.set('locationKeys', newState);
    case REMOVE:
      newState = state.get('locationKeys').filter(itm => itm !== action.locationKey);
      reactLocalStorage.setObject('favorites', newState.toJS());
      return state.set('locationKeys', newState);
    case STORE_FORECASTS:
      return state.set('forecasts', action.payload);
    default:
      return state;
  }
};

const actions = {
  toggle: locationKey => (dispatch, getState) => {
    const isFavorite = Boolean(getState().getIn(['favorites', 'locationKeys']).find(itm => itm === locationKey));
    return isFavorite
      ? dispatch({
        type: REMOVE,
        locationKey
      })
      : dispatch({
        type: ADD,
        locationKey
      });
  },
  getForecast: () => async (dispatch, getState) => {
    // const favorites = getState().getIn(['favorites', 'locationKeys']);
    // const requests = favorites.toJS().map(key => {
    //   return () => axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${key}?apikey=${API_KEY}`);
    // });
    // const resp = await axios.all(requests);
    // todo - remove this before pull request
    debugger; // eslint-disable-line
    return dispatch({
      type: STORE_FORECASTS,
      payload: [],
    });
  }
};

const selectors = {
  favorites: state => state.getIn(['favorites', 'locationKeys']),
  isFavorite: (state, locationKey) => {
    return Boolean(state.getIn(['favorites', 'locationKeys']).find(itm => itm === locationKey));
  }
};

export default {
  reducer,
  selectors,
  actions
};
