/* eslint-disable arrow-body-style, prettier/prettier, max-len */

import { HANDLE_LOGIN, HANDLE_REGISTER } from '../constants';

const initialState = {
    token: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_LOGIN:
            return {
                ...state,
                jwt: action.payload.jwt,
            };
        case HANDLE_REGISTER:
            return {
                ...state,
                jwt: action.payload.jwt,
            };
        default:
            return state;
    }
};
