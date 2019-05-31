import { combineReducers } from 'redux';
import nav from './navigation-reducer';
import errors from './error-reducer';

export default combineReducers({
    nav,
    errors,
});
