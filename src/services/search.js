import { fromJS } from 'immutable';
import axios from 'axios';
import toasts from './toasts';

const STORE_RESULTS = 'SEARCH/STORE_RESULTS';
const CLEAR_RESULTS = 'SEARCH/CLEAR_RESULTS';
const API_KEY = 'AEihxQE2Ak5AlcuU8ZyKfPDhwBgAlAG8';

const reducer = (state = fromJS({
  results: []
}), action) => {
  switch (action.type) {
    case STORE_RESULTS:
      return state.set('results', fromJS(action.payload));
    case CLEAR_RESULTS:
      return state.set('results', fromJS([]));
    default:
      return state;
  }
};

const actions = {
  getResults: query => async dispatch => {
    try {
      const resp = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURI(query)}`);
      dispatch({
        type: STORE_RESULTS,
        payload: resp.data
      });
      if (!resp.data.length) {
        toasts.cantFindCity();
      }
      return resp.data;
    } catch (e) {
      toasts.apiMaxedOut();
    }
  },
  clearResults: () => dispatch => {
    dispatch({
      type: CLEAR_RESULTS
    });
  }
};

const selectors = {
  results: state => state.getIn(['search', 'results'])
};

export default {
  reducer,
  selectors,
  actions
};
