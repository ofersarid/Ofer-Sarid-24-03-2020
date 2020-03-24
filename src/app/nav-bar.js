import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { Switch } from '../shared';
import autoBind from 'auto-bind';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onChange(route) {
    const { history } = this.props;
    history.push(`/${route}/${history.location.pathname.split('/')[2]}`);
  };

  render() {
    const { location } = this.props;
    return (
      <div className={cx(styles.navBar)} >
        <section className={styles.left} ></section>
        <section className={styles.right} >
          <Switch
            className={styles.switch}
            options={['home', 'favorites']}
            onChange={this.onChange}
            selected={location.pathname.split('/')[1]}
          />
        </section >
      </div >
    );
  }
}

NavBar.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
