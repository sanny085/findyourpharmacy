import { FIND_LOCATIONS_REQUEST, FIND_LOCATIONS_SUCCESS, FIND_LOCATIONS_FAILURE } from './GetLocationsTypes';

export const getLocationsRequest = () => {
    return {
        type: FIND_LOCATIONS_REQUEST
    };
};
export const getLocationsSuccess = (getLocations) => {
    return {
        type: FIND_LOCATIONS_SUCCESS,
        getLocations
    };
};
export const getLocationsFailure = (error) => {
    return {
        type: FIND_LOCATIONS_FAILURE,
        error
    };
};
