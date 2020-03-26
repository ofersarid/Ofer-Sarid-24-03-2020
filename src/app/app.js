import React, { PureComponent } from 'react';
import { compose } from 'redux';
import cx from 'classnames';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import PropTypes from 'prop-types';
import { Home, Favorites } from '../pages';
import { router, user } from '../services';
import NavBar from './nav-bar';
import styles from './styles.scss';

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
    const { pathname, history, theme } = this.props;
    return (
      <ConnectedRouter history={history} >
        <div className={cx(styles.app, styles[theme])}>
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
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  locationKey: router.selectors.locationKey(state),
  pathname: router.selectors.pathname(state),
  theme: user.selectors.theme(state),
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);
