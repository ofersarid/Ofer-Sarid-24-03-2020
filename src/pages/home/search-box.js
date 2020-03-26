import React from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { forecast, user } from '../../services';

const SearchBox = ({ onChange, city, theme }) => {
  const _city = city ? `(${city})` : '';
  return (
    <div className={cx(styles.searchBox, styles[theme])} >
      <input type="text" onChange={e => onChange(e.target.value)} placeholder={`Search for city ${_city}`} />
      <SearchAlt />
    </div >
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  city: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  city: forecast.selectors.city(state),
  theme: user.selectors.theme(state),
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBox);
