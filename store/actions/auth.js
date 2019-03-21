/* eslint-disable import/prefer-default-export */

import makeRequest from '../helpers/http-request';
import { MAKE_AUTH_REQUEST } from '../constants';

export const makeAuthRequest = (username, password) => dispatch => {
    const authUrl = `${process.env.API_URL}/auth`;
    const body = {
        username,
        password,
    };
    makeRequest(authUrl, body, dispatch, MAKE_AUTH_REQUEST);
};
