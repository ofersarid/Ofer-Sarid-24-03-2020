import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import autoBind from 'auto-bind';
import styles from './styles.scss';
import { Switch } from '../shared';
import { user } from '../services';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  onSearchChange(route) {
    const { history, push } = this.props;
    push(`/${route}/${history.location.pathname.split('/')[2]}`);
  };

  onThemeChange(theme) {
    const { selectTheme } = this.props;
    selectTheme(theme);
  };

  render() {
    const { location, theme } = this.props;
    return (
      <div className={cx(styles.navBar, styles[theme])} >
        <section className={styles.left} >
          <img src={'./images/herolo-logo.jpg'} />
          <h1>Herolo Weather App</h1>
        </section>
        <section className={styles.right} >
          <Switch
            className={styles.switch}
            options={['home', 'favorites']}
            onChange={this.onSearchChange}
            selected={location.pathname.split('/')[1]}
          />
          <Switch
            className={styles.switch}
            options={['light', 'dark']}
            onChange={this.onThemeChange}
            selected={theme}
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
  theme: PropTypes.string.isRequired,
  selectTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  theme: user.selectors.theme(state),
});

const mapDispatchToProps = dispatch => ({
  push: (...props) => dispatch(push(...props)),
  selectTheme: theme => dispatch(user.actions.selectTheme(theme)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar);
