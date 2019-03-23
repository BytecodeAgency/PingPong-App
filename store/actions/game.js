/* eslint-disable import/prefer-default-export */

import makeRequest from '../helpers/http-request';
import { ADD_GAME } from '../constants';

export const addGame = (player1, player2, score1, score2) => dispatch => {
    const url = `${process.env.API_URL}/game/create`;
    const body = {
        player1,
        player2,
        score1,
        score2,
    };
    makeRequest(url, body, dispatch, ADD_GAME);
};
