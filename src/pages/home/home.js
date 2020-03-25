import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './styles.scss';
import SearchBox from './search-box';
import SearchResults from './search-results';
import Forecast from './forecast';
import { router, search, forecast } from '../../services';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      working: false
    };
    this.onChDB = debounce(this.onSearchChange, 300);
  }

  componentDidMount() {
    const { getNowForecast, getDailyForecast, locationKey } = this.props;
    getDailyForecast(locationKey);
    getNowForecast(locationKey);
  }

  async onSearchChange(val) {
    const { searchCity } = this.props;
    this.setState({ working: true });
    await searchCity(val);
    this.setState({ working: false });
  }

  render() {
    const { working } = this.state;
    const { searchResults } = this.props;
    return (
      <div className={cx(styles.home)} >
        <SearchBox onChange={this.onChDB} />
        {searchResults.size > 0 ? <SearchResults /> : <Forecast />}
        {working ? 'Working' : null}
      </div >
    );
  }
}

Home.propTypes = {
  searchCity: PropTypes.func.isRequired,
  getDailyForecast: PropTypes.func.isRequired,
  getNowForecast: PropTypes.func.isRequired,
  locationKey: PropTypes.string.isRequired,
  searchResults: ImmutablePropTypes.list,
};

const mapStateToProps = state => ({
  searchResults: search.selectors.results(state),
  locationKey: router.selectors.locationKey(state),
});

const mapDispatchToProps = dispatch => ({
  searchCity: query => dispatch(search.actions.getResults(query)),
  getDailyForecast: locationKey => dispatch(forecast.actions.getDaily(locationKey)),
  getNowForecast: locationKey => dispatch(forecast.actions.getNow(locationKey)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
