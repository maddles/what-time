import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import verifygeocode from './verifygeocode';
import locationtime from './locationtime';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  verifygeocode,
  locationtime
});
