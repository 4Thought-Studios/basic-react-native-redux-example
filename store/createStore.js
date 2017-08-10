import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import moviesReducer from './modules/movies';

const combinedReducers = combineReducers({ movies: moviesReducer });

const middleware = [logger];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function (onComplete) {
    // Set up autoRehydrate (responsible for keeping the persisted copy fresh)
    const store = autoRehydrate()(createStoreWithMiddleware)(combinedReducers);
    // Persist to the user device
    persistStore(store, { storage: AsyncStorage }, onComplete);
    // Return the ready-made store.
    return store;
}
