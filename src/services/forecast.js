import { fromJS } from 'immutable';
import axios from 'axios';

const STORE_DAILY_RESULTS = 'FORECAST/STORE_DAILY_RESULTS';
const STORE_NOW_RESULT = 'FORECAST/STORE_NOW_RESULT';
const STORE_CITY = 'FORECAST/STORE_CITY';
const API_KEY = 'AEihxQE2Ak5AlcuU8ZyKfPDhwBgAlAG8';

const reducer = (state = fromJS({
  daily: {
    Headline: {
      EffectiveDate: '2020-03-28T19:00:00+02:00',
      EffectiveEpochDate: 1585414800,
      Severity: 5,
      Text: 'Air quality will be unhealthy for sensitive groups Tuesday morning through Tuesday evening',
      Category: 'rain',
      EndDate: '2020-03-29T01:00:00+02:00',
      EndEpochDate: 1585436400,
      MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
    },
    DailyForecasts: [
      {
        Date: '2020-03-24T07:00:00+02:00',
        EpochDate: 1585026000,
        Temperature: {
          Minimum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 71,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
      },
      {
        Date: '2020-03-25T07:00:00+02:00',
        EpochDate: 1585112400,
        Temperature: {
          Minimum: {
            Value: 53,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 2,
          IconPhrase: 'Mostly sunny',
          HasPrecipitation: false
        },
        Night: {
          Icon: 38,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
      },
      {
        Date: '2020-03-26T07:00:00+02:00',
        EpochDate: 1585198800,
        Temperature: {
          Minimum: {
            Value: 62,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 74,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 6,
          IconPhrase: 'Mostly cloudy',
          HasPrecipitation: false
        },
        Night: {
          Icon: 36,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
      },
      {
        Date: '2020-03-27T07:00:00+02:00',
        EpochDate: 1585285200,
        Temperature: {
          Minimum: {
            Value: 59,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 75,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false
        },
        Night: {
          Icon: 37,
          IconPhrase: 'Hazy moonlight',
          HasPrecipitation: false
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
      },
      {
        Date: '2020-03-28T07:00:00+02:00',
        EpochDate: 1585371600,
        Temperature: {
          Minimum: {
            Value: 54,
            Unit: 'F',
            UnitType: 18
          },
          Maximum: {
            Value: 66,
            Unit: 'F',
            UnitType: 18
          }
        },
        Day: {
          Icon: 5,
          IconPhrase: 'Hazy sunshine',
          HasPrecipitation: false
        },
        Night: {
          Icon: 37,
          IconPhrase: 'Hazy moonlight',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light'
        },
        Sources: [
          'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us'
      }
    ]
  },
  now: {
    DateTime: '2020-03-24T16:00:00+02:00',
    EpochDateTime: 1585058400,
    WeatherIcon: 2,
    IconPhrase: 'Mostly sunny',
    HasPrecipitation: false,
    IsDaylight: true,
    Temperature: {
      Value: 67,
      Unit: 'F',
      UnitType: 18
    },
    PrecipitationProbability: 0,
    MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=16&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/hourly-weather-forecast/215854?day=1&hbhhour=16&lang=en-us'
  },
  city: 'Tel Aviv',
}), action) => {
  switch (action.type) {
    case STORE_DAILY_RESULTS:
      return state.set('daily', fromJS(action.payload));
    case STORE_NOW_RESULT:
      return state.set('now', fromJS(action.payload));
    case STORE_CITY:
      return state.set('city', fromJS(action.city));
    default:
      return state;
  }
};

const actions = {
  getDaily: (locationKey) => async dispatch => {
    const resp = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);
    return dispatch({
      type: STORE_DAILY_RESULTS,
      payload: resp.data,
    });
  },
  getNow: (locationKey, returnValue) => async dispatch => {
    const resp = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/${locationKey}?apikey=${API_KEY}`);
    return returnValue ? resp.data[0] : dispatch({
      type: STORE_NOW_RESULT,
      payload: resp.data[0],
    });
  },
  getCityByKey: (locationKey, returnValue) => async dispatch => {
    const resp = await axios.get(`http://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${API_KEY}`);
    return returnValue ? resp.data.EnglishName : dispatch({
      type: STORE_CITY,
      city: resp.data.EnglishName,
    });
  }
};

const selectors = {
  daily: state => state.getIn(['forecast', 'daily', 'DailyForecasts']),
  now: state => state.getIn(['forecast', 'now']),
  city: state => state.getIn(['forecast', 'city']),
  // content: state => state.getIn(['reader', 'content']),
};

export default {
  reducer,
  selectors,
  actions
};
