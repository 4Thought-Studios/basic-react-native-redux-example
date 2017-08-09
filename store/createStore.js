import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import moviesReducer from './modules/movies';

import movies from '../movies.json';

// Middleware that logs state changes

const configureStore = (initialState) => {
    const enhancer = compose(
        applyMiddleware(
            logger
        ),
    );
    const reducer = combineReducers({ movies: moviesReducer });
    return createStore(reducer, initialState, enhancer);
};

const store = configureStore({
    movies: movies
});

export default store;