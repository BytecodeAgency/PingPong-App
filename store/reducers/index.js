import { combineReducers } from 'redux';
import nav from './navigator';
import auth from './auth';
import errors from './errors';

export default combineReducers({
    nav,
    auth,
    errors,
});
