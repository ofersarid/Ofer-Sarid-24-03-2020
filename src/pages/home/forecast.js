import React, { PureComponent } from 'react';
import cx from 'classnames';
import { compose } from 'redux';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { HeartOutlined } from '@styled-icons/entypo/HeartOutlined';
import { Heart } from '@styled-icons/entypo/Heart';
import { reactLocalStorage } from 'reactjs-localstorage';
import styles from './styles.scss';
import { forecast, favorites } from '../../services';

class Forecast extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  getWeatherIcon(iconCode) {
    return `${('0' + iconCode).slice(-2)}-s.png`;
  }

  toggleFavorite() {
    const { match, toggleFavorite } = this.props;
    const locationKey = match.params.locationKey;
    toggleFavorite(locationKey);
  }

  isFavorite() {
    const { match } = this.props;
    const favorites = reactLocalStorage.getObject('favorites', [], true);
    const locationKey = match.params.locationKey;
    const index = favorites.findIndex(itm => itm === locationKey);
    return index >= 0;
  }

  render() {
    const { dailyForecasts, city, nowForecasts, isFavorite } = this.props;
    return (
      <div className={cx(styles.forecast)} >
        <section className={styles.header} >
          <div className={styles.left} >
            <img src={`/images/weather-icons/${this.getWeatherIcon(dailyForecasts.getIn([0, 'Day', 'Icon']))}`} />
            <h1 >{city}</h1 >
            <span className={styles.temperature} >{nowForecasts.getIn(['Temperature', 'Value'])}&deg;</span >
            <span className={styles.unit} >{nowForecasts.getIn(['Temperature', 'Unit'])}</span >
          </div >
          {isFavorite
            ? <Heart onClick={this.toggleFavorite} />
            : <HeartOutlined onClick={this.toggleFavorite} />
          }
        </section >
        <ul className={styles.cards} >
          {dailyForecasts.map(itm => (
            <li key={itm.get('EpochDate')} >
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
                  <img src={`/images/weather-icons/${this.getWeatherIcon(itm.getIn(['Day', 'Icon']))}`} />
                  <div >{itm.getIn(['Day', 'IconPhrase'])}</div >
                </li >
                <li className={styles.divider} />
                <li >
                  <img src={`/images/weather-icons/${this.getWeatherIcon(itm.getIn(['Night', 'Icon']))}`} />
                  <div >{itm.getIn(['Night', 'IconPhrase'])}</div >
                </li >
              </ul >
            </li >
          ))}
        </ul >
      </div >
    );
  }
}

Forecast.propTypes = {
  dailyForecasts: ImmutablePropTypes.list.isRequired,
  nowForecasts: ImmutablePropTypes.map.isRequired,
  city: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  dailyForecasts: forecast.selectors.daily(state),
  nowForecasts: forecast.selectors.now(state),
  isFavorite: favorites.selectors.isFavorite(state, ownProps.match.params.locationKey),
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: locationKey => dispatch(favorites.actions.toggle(locationKey)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Forecast);
