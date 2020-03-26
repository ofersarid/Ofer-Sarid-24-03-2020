import { fromJS } from 'immutable';
import axios from 'axios';
import toasts from './toasts';

const STORE_DAILY_RESULTS = 'FORECAST/STORE_DAILY_RESULTS';
const STORE_NOW_RESULT = 'FORECAST/STORE_NOW_RESULT';
const STORE_CITY = 'FORECAST/STORE_CITY';
const API_KEY = 'AEihxQE2Ak5AlcuU8ZyKfPDhwBgAlAG8';

const reducer = (state = fromJS({
  daily: null,
  now: null,
  city: null,
}), action) => {
  switch (action.type) {
    case STORE_DAILY_RESULTS:
      return state.set('daily', fromJS(action.payload));
    case STORE_NOW_RESULT:
      return state.set('now', fromJS(action.payload));
    case STORE_CITY:
      return state.set('city', fromJS(action.city));
    default:
      return state;
  }
};

const actions = {
  getDaily: (locationKey) => async dispatch => {
    try {
      const resp = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
      dispatch({
        type: STORE_DAILY_RESULTS,
        payload: resp.data,
      });
      return resp.data;
    } catch (e) {
      toasts.apiMaxedOut();
    }
  },
  getNow: (locationKey, returnValue) => async dispatch => {
    try {
      const resp = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${API_KEY}`);
      return returnValue ? resp.data[0] : dispatch({
        type: STORE_NOW_RESULT,
        payload: resp.data[0],
      });
    } catch (e) {
      toasts.apiMaxedOut();
    }
  },
  getCityByKey: (locationKey, returnValue) => async dispatch => {
    try {
      const resp = await axios.get(`http://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${API_KEY}`);
      return returnValue ? resp.data.EnglishName : dispatch({
        type: STORE_CITY,
        city: resp.data.EnglishName,
      });
    } catch (e) {
      toasts.apiMaxedOut();
    }
  }
};

const selectors = {
  daily: state => state.getIn(['forecast', 'daily', 'DailyForecasts']),
  now: state => state.getIn(['forecast', 'now']),
  city: state => state.getIn(['forecast', 'city']),
};

export default {
  reducer,
  selectors,
  actions
};
