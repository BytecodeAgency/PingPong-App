import axios from 'axios';
import { NavigationActions } from 'react-navigation';

import { ADD_ERROR } from '../constants';

const makeRequest = (url, body, dispatch, dispatchType) => {
    axios
        .post(url, body)
        .then(response => response.data)
        .then(data => {
            if (!data.success) {
                throw new Error('API success is false');
            } else {
                return data;
            }
        })
        .then(data => {
            dispatch({
                type: dispatchType,
                payload: data,
            });
        })
        .catch(() => {
            const errorMessage = 'Something went wrong making the API call';
            addError(dispatch, errorMessage);
        });
};

const addError = (dispatch, message) => {
    dispatch({
        type: ADD_ERROR,
        payload: message,
    });
    dispatch(NavigationActions.navigate({ routeName: 'Error' }));
};

export default makeRequest;
