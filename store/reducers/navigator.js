import { createNavigationReducer } from 'react-navigation-redux-helpers';

import AppNavigator from '../../routes';

const navReducer = createNavigationReducer(AppNavigator);

export default navReducer;
