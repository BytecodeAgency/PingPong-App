/* eslint-disable max-len */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);

const middleware = [thunk, reactNavigationReduxMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
