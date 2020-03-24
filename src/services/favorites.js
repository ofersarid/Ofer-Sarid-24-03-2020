import { fromJS } from 'immutable';
import { reactLocalStorage } from 'reactjs-localstorage';

const ADD = 'FAVORITES/ADD';
const REMOVE = 'FORECAST/REMOVE';

const reducer = (state = fromJS(reactLocalStorage.getObject('favorites', [], true)), action) => {
  let newState;
  switch (action.type) {
    case ADD:
      newState = state.push(action.locationKey);
      reactLocalStorage.setObject('favorites', newState.toJS());
      return newState;
    case REMOVE:
      newState = state.filter(itm => itm !== action.locationKey);
      reactLocalStorage.setObject('favorites', newState.toJS());
      return newState;
    default:
      return state;
  }
};

const actions = {
  toggle: locationKey => (dispatch, getState) => {
    const isFavorite = Boolean(getState().get('favorites').find(itm => itm === locationKey));
    return isFavorite
      ? dispatch({
        type: REMOVE,
        locationKey
      })
      : dispatch({
        type: ADD,
        locationKey
      });
  }
};

const selectors = {
  favorites: state => state.get('favorites'),
  isFavorite: (state, locationKey) => Boolean(state.get('favorites').find(itm => itm === locationKey)),
};

export default {
  reducer,
  selectors,
  actions
};
