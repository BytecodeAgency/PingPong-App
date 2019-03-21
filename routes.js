import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import ErrorScreen from './screens/Error';
import Test from './screens/Test';

const options = {
    headerMode: 'none',
};

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Error: { screen: ErrorScreen },
        Test: { screen: Test },
    },
    options,
);

export default AppNavigator;
