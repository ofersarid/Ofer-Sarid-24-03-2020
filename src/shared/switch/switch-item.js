import React from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SwitchItem = ({ children, onClick }) => (
  <div className={cx(styles.switchItem)} onClick={onClick}><div>{children}</div></div >
);

SwitchItem.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SwitchItem);
