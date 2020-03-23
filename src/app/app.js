import React, { PureComponent } from 'react';
// import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages';
import NavBar from './nav-bar';
// import PropTypes from 'prop-types';
// import styles from './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <Router >
        <Redirect to="/home" />
        <div >
          <NavBar />
          <Route exact path="/home" >
            <Home />
          </Route >
        </div >
      </Router >
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);
