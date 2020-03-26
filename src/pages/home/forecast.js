import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import moment from 'moment';
import { HeartOutlined } from '@styled-icons/entypo/HeartOutlined';
import { Heart } from '@styled-icons/entypo/Heart';
import styles from './styles.scss';
import { forecast, favorites, router, user } from '../../services';

class Forecast extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    const { getCityByKey, locationKey } = this.props;
    getCityByKey(locationKey);
  }

  getWeatherIcon(iconCode) {
    return `${('0' + iconCode).slice(-2)}-s.png`;
  }

  toggleFavorite() {
    const { locationKey, toggleFavorite } = this.props;
    toggleFavorite(locationKey);
  }

  render() {
    const { dailyForecasts, city, nowForecasts, isFavorite, theme } = this.props;
    return (dailyForecasts && nowForecasts) ? (
      <div className={cx(styles.forecast)} >
        <section className={styles.header} >
          <div >
            <img src={`./images/weather-icons/${this.getWeatherIcon(dailyForecasts.getIn([0, 'Day', 'Icon']))}`} />
            <h1 >{city}</h1 >
            <span className={styles.temperature} >{nowForecasts.getIn(['Temperature', 'Value'])}&deg;</span >
            <span className={styles.unit} >{nowForecasts.getIn(['Temperature', 'Unit'])}</span >
          </div >
          <div >
            {isFavorite
              ? <Heart onClick={this.toggleFavorite} />
              : <HeartOutlined onClick={this.toggleFavorite} />
            }
          </div >
        </section >
        <ul className={styles.cards} >
          {dailyForecasts.map(itm => (
            <li key={itm.get('EpochDate')} className={styles[theme]} >
              <h2 >{moment(itm.get('Date')).format('dddd')}</h2 >
              <div className={styles.date} >{moment(itm.get('Date')).format('MMMM Do')}</div >
              <section className={styles.temperature} >
                <span >{itm.getIn(['Temperature', 'Minimum', 'Value'])}&deg;</span >
                <span className={styles.unit} >{itm.getIn(['Temperature', 'Minimum', 'Unit'])}</span >
                <span className={styles.divider} />
                <span >{itm.getIn(['Temperature', 'Maximum', 'Value'])}&deg;</span >
                <span className={styles.unit} >{itm.getIn(['Temperature', 'Maximum', 'Unit'])}</span >
              </section >
              <ul className={styles.dayNight} >
                <li >
                  <img src={`./images/weather-icons/${this.getWeatherIcon(itm.getIn(['Day', 'Icon']))}`} />
                  <div >{itm.getIn(['Day', 'IconPhrase'])}</div >
                </li >
                <li className={styles.divider} />
                <li >
                  <img src={`./images/weather-icons/${this.getWeatherIcon(itm.getIn(['Night', 'Icon']))}`} />
                  <div >{itm.getIn(['Night', 'IconPhrase'])}</div >
                </li >
              </ul >
            </li >
          ))}
        </ul >
      </div >
    ) : null;
  }
}

Forecast.propTypes = {
  dailyForecasts: ImmutablePropTypes.list,
  nowForecasts: ImmutablePropTypes.map,
  city: PropTypes.string,
  locationKey: PropTypes.string,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  getCityByKey: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  dailyForecasts: forecast.selectors.daily(state),
  nowForecasts: forecast.selectors.now(state),
  city: forecast.selectors.city(state),
  isFavorite: favorites.selectors.isFavorite(state, router.selectors.locationKey(state)),
  locationKey: router.selectors.locationKey(state),
  theme: user.selectors.theme(state)
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: locationKey => dispatch(favorites.actions.toggle(locationKey)),
  getCityByKey: locationKey => dispatch(forecast.actions.getCityByKey(locationKey))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Forecast);
