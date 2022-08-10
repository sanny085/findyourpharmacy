import { combineReducers } from 'redux';

import { storeReducer } from './storeReducer';
import { createStore } from 'redux';

const store = createStore(storeReducer);
export default store;
