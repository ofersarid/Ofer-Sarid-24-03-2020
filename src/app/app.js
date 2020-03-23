import React, { PureComponent } from 'react';
// import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom';
import { Home } from '../pages';
import NavBar from './nav-bar';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styles from './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const { location } = this.props;
    return (
      <Router >
        <div >
          <NavBar />
          <Route exact path="/home/:locationKey?" >
            <Home />
          </Route >
        </div >
        {!location.pathname.match(/^\/home$|^\/home\/[0-9]*$|^\/favorites$/) && <Redirect to="/home" />}
      </Router >
    );
  }
}

App.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
