import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { connect, Provider } from 'react-redux';
import AppNavigator from './routes';
import ReduxStore from './store/store.types';
import store from './store/store';
// import { createReduxContainer } from 'react-navigation-redux-helpers';

// const App = createReduxContainer(AppNavigator, 'root');
const mapStateToProps = (state: ReduxStore) => ({ state: state.nav });
const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);

const Root = () => (
    <Provider store={store}>
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                <AppWithNavigationState />
            </View>
    </Provider>
);

export default Root;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
