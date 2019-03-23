/* eslint-disable import/prefer-default-export */

import makeRequest from '../helpers/http-request';
import { HANDLE_LOGIN, HANDLE_REGISTER } from '../constants';

export const handleLogin = (username, password) => dispatch => {
    const url = `${process.env.API_URL}/user/authenticate`;
    const body = {
        username,
        password,
    };
    makeRequest(url, body, dispatch, HANDLE_LOGIN);
};

export const handleRegister = (email, username, password) => dispatch => {
    const url = `${process.env.API_URL}/user/create`;
    const body = {
        email,
        username,
        password,
    };
    makeRequest(url, body, dispatch, HANDLE_REGISTER);
};
