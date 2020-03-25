import { fromJS } from 'immutable';
import axios from 'axios';

const STORE_RESULTS = 'SEARCH/STORE_RESULTS';
const CLEAR_RESULTS = 'SEARCH/CLEAR_RESULTS';
const API_KEY = 'AEihxQE2Ak5AlcuU8ZyKfPDhwBgAlAG8';

const reducer = (state = fromJS({
  results: [
    {
      Version: 1,
      Key: '215854',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215855',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215856',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215857',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215858',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215859',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215860',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }, {
      Version: 1,
      Key: '215861',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv',
        EnglishName: 'Tel Aviv',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Asia/Jerusalem',
        GmtOffset: 2,
        IsDaylightSaving: false,
        NextOffsetChange: '2020-03-27T00:00:00Z'
      },
      GeoPosition: {
        Latitude: 32.045,
        Longitude: 34.77,
        Elevation: {
          Metric: {
            Value: 34,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 111,
            Unit: 'ft',
            UnitType: 0
          }
        }
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts'
      ]
    }
  ],
}), action) => {
  switch (action.type) {
    case STORE_RESULTS:
      return state.set('results', fromJS(action.payload));
    case CLEAR_RESULTS:
      return state.set('results', fromJS([]));
    default:
      return state;
  }
};

const actions = {
  getResults: query => async dispatch => {
    // const payload = await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve([
    //       {
    //         Version: 1,
    //         Key: '215854',
    //         Type: 'City',
    //         Rank: 31,
    //         LocalizedName: 'Tel Aviv',
    //         EnglishName: 'Tel Aviv',
    //         PrimaryPostalCode: '',
    //         Region: {
    //           ID: 'MEA',
    //           LocalizedName: 'Middle East',
    //           EnglishName: 'Middle East'
    //         },
    //         Country: {
    //           ID: 'IL',
    //           LocalizedName: 'Israel',
    //           EnglishName: 'Israel'
    //         },
    //         AdministrativeArea: {
    //           ID: 'TA',
    //           LocalizedName: 'Tel Aviv',
    //           EnglishName: 'Tel Aviv',
    //           Level: 1,
    //           LocalizedType: 'District',
    //           EnglishType: 'District',
    //           CountryID: 'IL'
    //         },
    //         TimeZone: {
    //           Code: 'IST',
    //           Name: 'Asia/Jerusalem',
    //           GmtOffset: 2,
    //           IsDaylightSaving: false,
    //           NextOffsetChange: '2020-03-27T00:00:00Z'
    //         },
    //         GeoPosition: {
    //           Latitude: 32.045,
    //           Longitude: 34.77,
    //           Elevation: {
    //             Metric: {
    //               Value: 34,
    //               Unit: 'm',
    //               UnitType: 5
    //             },
    //             Imperial: {
    //               Value: 111,
    //               Unit: 'ft',
    //               UnitType: 0
    //             }
    //           }
    //         },
    //         IsAlias: false,
    //         SupplementalAdminAreas: [],
    //         DataSets: [
    //           'AirQualityCurrentConditions',
    //           'AirQualityForecasts',
    //           'Alerts'
    //         ]
    //       }
    //     ]);
    //   }, 1000);
    // });
    const resp = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURI(query)}`);
    dispatch({
      type: STORE_RESULTS,
      payload: resp.data,
    });
    return resp.data;
  },
  clearResults: () => dispatch => {
    dispatch({
      type: CLEAR_RESULTS,
    });
  }
};

const selectors = {
  results: state => state.getIn(['search', 'results']),
  // content: state => state.getIn(['reader', 'content']),
};

export default {
  reducer,
  selectors,
  actions
};
