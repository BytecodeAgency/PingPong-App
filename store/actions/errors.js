import { NavigationActions } from 'react-navigation';

import { ADD_ERROR, CLEAR_ERRORS } from '../constants';

export const addError = message => dispatch => {
    dispatch({
        type: ADD_ERROR,
        payload: message,
    });
    dispatch(NavigationActions.navigate({ routeName: 'Error' }));
};

export const clearErrors = () => dispatch => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
