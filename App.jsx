import React from 'react';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import store from './store';
import AppNavigator from './routes';

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({ state: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(App);

const Root = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);

export default Root;
