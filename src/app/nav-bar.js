import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
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
    const { history, push } = this.props;
    push(`/${route}/${history.location.pathname.split('/')[2]}`);
  };

  render() {
    const { location } = this.props;
    return (
      <div className={cx(styles.navBar)} >
        <section className={styles.left} >
          <img src={'/images/herolo-logo.jpg'} />
          <h1>Herolo Weather App</h1>
        </section>
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
  history: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({
  push: (...props) => dispatch(push(...props)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
