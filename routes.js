import { createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import ErrorScreen from './screens/Error';
import Login from './screens/Login';
import Register from './screens/Register';
import AddGame from './screens/AddGame';

const options = {
    headerMode: 'none',
};

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Error: { screen: ErrorScreen },
        Login: { screen: Login },
        Register: { screen: Register },
        AddGame: { screen: AddGame },
    },
    options,
);

export default AppNavigator;
