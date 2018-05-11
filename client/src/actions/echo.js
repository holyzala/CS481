import {RSAA} from 'redux-api-middleware';
import {withAuth} from '../reducers'

export const ECHO_REQUEST = '@@echo/ECHO_REQUEST';
export const ECHO_SUCCESS = '@@echo/ECHO_SUCCESS';
export const ECHO_FAILURE = '@@echo/ECHO_FAILURE';
export const ADD_MOVIE_REQUEST = '@@echo/ADD_MOVIE_REQUEST';
export const ADD_MOVIE_SUCCESS = '@@echo/ADD_MOVIE_SUCCESS';
export const ADD_MOVIE_FAILURE = '@@echo/ADD_MOVIE_FAILURE';

export const echo = (message) => ({
    [RSAA]: {
        endpoint: '/api/movies/',
        method: 'GET',
        headers: withAuth({'Content-Type': 'application/json'}),
        types: [
            ECHO_REQUEST, ECHO_SUCCESS, ECHO_FAILURE
        ]
    }
});

export const addMovie = (myMovie) => ({
    [RSAA]: {
        endpoint: '/api/movies/',
        method: 'POST',
        body: JSON.stringify(myMovie),
        headers: withAuth({'Content-Type': 'application/json'}),
        types: [
            ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE
        ]
    }
});
