/* eslint-disable arrow-body-style, prettier/prettier, max-len */

import { MAKE_AUTH_REQUEST } from '../constants';

const initialState = {
    token: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MAKE_AUTH_REQUEST:
            return {
                ...state,
                token: action.payload.token,
            };
        default:
            return state;
    }
};
