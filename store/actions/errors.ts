// import { NavigationActions } from 'react-navigation';
import { ErrorActions } from '../constants';

export const addError = (message: string) => (dispatch: AddError) => {
    dispatch({
        type: ErrorActions.ADD_ERROR,
        payload: message,
    });
    // dispatch(NavigationActions.navigate({ routeName: 'Error' })); // TODO: Add route
};

export const clearErrors = () => (dispatch: ClearErrors) => {
    dispatch({
        type: ErrorActions.CLEAR_ERRORS,
    });
};

type AddError = (dispatchData: { type: ErrorActions; payload: string; }) => void;
type ClearErrors = (dispatchData: { type: ErrorActions; }) => void;
