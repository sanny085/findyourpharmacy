import { combineReducers } from 'redux';

import { getLocationReducer } from './GetLocations/GetLocationReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(getLocationReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
