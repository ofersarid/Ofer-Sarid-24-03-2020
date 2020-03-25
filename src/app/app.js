import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';
import { Home, Favorites } from '../pages';
import { router } from '../services';
import NavBar from './nav-bar';

class App extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { locationKey, clearSearchResults } = this.props;
  //   const prevLocationKey = prevProps.locationKey;
  //   if (locationKey !== prevLocationKey) {
  //     clearSearchResults();
  //   }
  // }

  render() {
    const { pathname, history } = this.props;
    return (
      <ConnectedRouter history={history} >
        <div >
          <NavBar />
          <Route exact path="/home/:locationKey" >
            <Home />
          </Route >
          <Route exact path="/favorites/:locationKey" >
            <Favorites />
          </Route >
        </div >
        {!pathname.match(/^^\/home\/[0-9]*$|^\/favorites\/[0-9]*$/) && <Redirect to="/home/215854" />}
      </ConnectedRouter >
    );
  }
}

App.propTypes = {
  pathname: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  // locationKey: PropTypes.string.isRequired,
  // clearSearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  locationKey: router.selectors.locationKey(state),
  pathname: router.selectors.pathname(state),
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);
