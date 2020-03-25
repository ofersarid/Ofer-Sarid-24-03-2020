const selectors = {
  locationKey: state => state.getIn(['router', 'location', 'pathname']).split('/')[2],
  pathname: state => state.getIn(['router', 'location', 'pathname']),
};

export default {
  selectors,
};
