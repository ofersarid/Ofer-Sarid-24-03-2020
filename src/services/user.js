import { fromJS } from 'immutable';
import { reactLocalStorage } from 'reactjs-localstorage';

const SELECT_THEME = 'FAVORITES/SELECT_THEME';

const reducer = (state = fromJS({
  theme: reactLocalStorage.get('theme') || 'light',
}), action) => {
  switch (action.type) {
    case SELECT_THEME:
      reactLocalStorage.set('theme', action.theme);
      return state.set('theme', action.theme);
    default:
      return state;
  }
};

const actions = {
  selectTheme: theme => dispatch => {
    return dispatch({
      type: SELECT_THEME,
      theme,
    });
  },
};

const selectors = {
  theme: state => state.getIn(['user', 'theme']),
};

export default {
  reducer,
  selectors,
  actions
};
