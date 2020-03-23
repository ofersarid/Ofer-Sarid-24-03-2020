import React from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import debounce from 'lodash/debounce';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const SearchBox = ({ onChange }) => (
  <div className={cx(styles.searchBox)} >
    <input type="text" onChange={e => onChange(e.target.value)} />
    <SearchAlt />
  </div >
);

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SearchBox);
