import { ErrorActions } from '../constants';

const initialState: ErrorState = {
    errors: [],
};

export default (state = initialState, action: ErrorAction) => {
    switch (action.type) {
    case ErrorActions.ADD_ERROR:
        return {
            ...state,
            errors: [...state.errors, action.payload],
        };
    case ErrorActions.CLEAR_ERRORS:
        return {
            ...state,
            errors: [],
        };
    default:
        return state;
    }
};

interface ErrorState {
    errors: (string | undefined)[];
}

interface ErrorAction {
    type: ErrorActions;
    payload?: string;
}
