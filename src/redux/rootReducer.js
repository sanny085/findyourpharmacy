import { combineReducers } from 'redux';

import { getLocationReducer } from './GetLocations/GetLocationReducer';

export const rootReducer = combineReducers({
    getLocation: getLocationReducer
});

export default rootReducer;
