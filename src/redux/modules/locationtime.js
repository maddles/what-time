import config from '../../config';

const googleTimezonePath = config.googleTimezonePath;
const googleAPIKey = config.googleApiKey;

const LOAD = googleTimezonePath + '/LOAD';
const LOAD_SUCCESS = googleTimezonePath + '/LOAD_SUCCESS';
const LOAD_FAIL = googleTimezonePath + '/LOAD_FAIL';


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

export function fetch(geocode, timestamp) {
  const reqPath = 'location=' + googleTimezonePath + '&timestamp=' + timestamp + '&key=' + googleAPIKey;

  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get(reqPath)
  };
}
