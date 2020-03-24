import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import styles from './styles.scss';
import SearchBox from './search-box';
// import SearchResults from './search-results';
import Forecast from './forecast';
import { search } from '../../services';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      working: false,
      city: 'Tel Aviv'
    };
    this.onChDB = debounce(this.onSearchChange, 300);
  }

  async onSearchChange(val) {
    // const { searchCity } = this.props;
    // this.setState({ working: true });
    // await searchCity(val);
    // this.setState({ working: false });
  }

  render() {
    const { working } = this.state;
    return (
      <div className={cx(styles.home)} >
        <SearchBox onChange={this.onChDB} />
        {/*<SearchResults />*/}
        {working ? 'Working' : null}
        <Forecast />
      </div >
    );
  }
}

Home.propTypes = {
  searchCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispatchToProps = dispatch => ({
  searchCity: query => dispatch(search.actions.getResults(query))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
