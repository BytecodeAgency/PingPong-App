import { ADD_ERROR, CLEAR_ERRORS } from '../constants';

const initialState = {
    errors: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                errors: [...state.errors, action.payload],
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: [],
            };
        default:
            return state;
    }
};
