import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './styles.scss';
import { forecast, user } from '../../services';

class FavoriteItem extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      city: null,
      forecast: null
    };
  }

  async componentDidMount() {
    const { _key, getCityByKey, getForecastNow } = this.props;
    const city = await getCityByKey(_key, true);
    this.setState({ city });
    const forecast = await getForecastNow(_key);
    this.setState({ forecast: forecast.payload });
  }

  getWeatherIcon(iconCode) {
    return `${('0' + iconCode).slice(-2)}-s.png`;
  }

  selectItem() {
    const { history, _key } = this.props;
    history.push(`/home/${_key}`);
  }

  render() {
    const { city, forecast } = this.state;
    const { theme } = this.props;
    return (city && forecast) ? (
      <li onClick={this.selectItem} className={styles[theme]} >
        <h2 >{city}</h2 >
        <div className={styles.temp} >
          <span className={styles.number} >{forecast.Temperature.Value}&deg;</span >
          <span className={styles.unit} >{forecast.Temperature.Unit}</span >
        </div >
        <img src={`./images/weather-icons/${this.getWeatherIcon(forecast.WeatherIcon)}`} />
        <div >{forecast.IconPhrase}</div >
      </li >
    ) : null;
  }
}

FavoriteItem.propTypes = {
  _key: PropTypes.string.isRequired,
  getCityByKey: PropTypes.func.isRequired,
  getForecastNow: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  theme: user.selectors.theme(state)
});

const mapDispatchToProps = dispatch => ({
  getCityByKey: (locationKey, returnValue) => dispatch(forecast.actions.getCityByKey(locationKey, returnValue)),
  getForecastNow: (locationKey, returnValue) => dispatch(forecast.actions.getNow(locationKey, returnValue))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(FavoriteItem);
