import { FIND_LOCATIONS_REQUEST, FIND_LOCATIONS_SUCCESS, FIND_LOCATIONS_FAILURE } from './GetLocationsTypes';

const initialState = {
    loading: false,
    predictions: [],
    error: '',

    pharmacyLists: [],
    store: [],
    storeDetails: []
};

export const getLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_LOCATIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FIND_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                predictions: action.getLocations,
                error: ''
            };
        case FIND_LOCATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                predictions: []
            };
        default:
            return state;
    }
};
