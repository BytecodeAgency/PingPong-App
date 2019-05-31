import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import rootReducer from './reducers';
import ReduxStore from './store.types';

const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    (state: ReduxStore) => state.nav,
);

const middleware = [thunk, reactNavigationReduxMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
);

export default store;
