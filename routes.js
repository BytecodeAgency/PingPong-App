import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import ErrorScreen from './screens/Error';
import Login from './screens/Login';
import Register from './screens/Register';

const options = {
    headerMode: 'none',
};

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Error: { screen: ErrorScreen },
        Login: { screen: Login },
        Register: { screen: Register },
    },
    options,
);

export default AppNavigator;
