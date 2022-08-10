import axios from 'axios';
import {
    getLocationsRequest,
    getLocationsSuccess,
    getLocationsFailure
} from '../redux/GetLocations/GetLocationsActions';

import store from '../redux/store';
export const key = 'AIzaSyDwbtXBGp1G_yxyp03nuKR7yzOa_cKhXhk';

export const fetchLocations = async (location) => {
    const { dispatch } = store;
    try {
        dispatch(getLocationsRequest());
        await axios
            .get(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&key=${key}&country=aus`
            )
            .then((response) => {
                console.log('Api', response);
                dispatch(getLocationsSuccess(response.data.predictions));

                return response.data;
            });
    } catch (error) {
        console.log(error);
        dispatch(getLocationsFailure(error.message));
    }
};
