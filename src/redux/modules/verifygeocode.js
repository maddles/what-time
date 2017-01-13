import config from '../../config';

const googleGeocodePath = config.googleGeocodePath;
const googleAPIKey = config.googleApiKey;

const LOAD = 'locationtime/LOAD';
const LOAD_SUCCESS = 'locationtime/LOAD_SUCCESS';
const LOAD_FAIL = 'locationtime/LOAD_FAIL';

const initialState = {
  loaded: false,
  loading: false,
  data: null,
  error: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        receivedAt: Date.now(),
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        receivedAt: Date.now(),
        error: action.error
      };
    default:
      return state;
  }
}

export function fetch(location) {
  const reqPath = googleGeocodePath + 'address=' + location + '&key=' + googleAPIKey;

  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(reqPath)
  };
}
