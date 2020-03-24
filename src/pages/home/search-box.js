import React from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import debounce from 'lodash/debounce';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { forecast } from '../../services';

const SearchBox = ({ onChange, city }) => (
  <div className={cx(styles.searchBox)} >
    <input type="text" onChange={e => onChange(e.target.value)} placeHolder={`Search for city (${city})`} />
    <SearchAlt />
  </div >
);

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  city: forecast.selectors.city(state)
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBox);
