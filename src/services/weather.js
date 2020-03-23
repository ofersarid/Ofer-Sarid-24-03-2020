import { fromJS } from 'immutable';

const reducer = (state = fromJS({}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const actions = {};

const selectors = {
  // isOpen: state => state.getIn(['reader', 'isOpen']),
  // content: state => state.getIn(['reader', 'content']),
};

export default {
  reducer,
  selectors,
  actions,
};
